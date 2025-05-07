"use server";

import { connection } from "next/server";

import { fetchBooksQuery, fetchProgressQuery } from "@/lib/literal-queries";
import type {
    BookDetails,
    BooksApiResponse,
    ProgressApiResponse,
    ProgressDetails,
    BookWithProgressDetails,
} from "@/types/literal-types";

const {
    LITERAL_PROFILE_ID: userProfileId = "",
    LITERAL_ACCESS_TOKEN: apiAccessToken = "",
} = process.env;

/**
 * Fetch books from the Literal API.
 * @param isFinished - If true, fetch finished books; otherwise, fetch active books.
 * @returns A promise that resolves to the API response.
 */
const fetchBooks = async (
    isFinished: boolean = false,
): Promise<BooksApiResponse> => {
    return fetch("https://literal.club/graphql/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: fetchBooksQuery,
            variables: {
                userId: userProfileId,
                status: isFinished ? "FINISHED" : "IS_READING",
                limit: 1,
                offset: 0,
            },
        }),
        next: { revalidate: 21600 },
    }).then((response) => response.json());
};

/**
 * Fetch progress details for a specific book.
 * @param bookId - The ID of the book to fetch progress for.
 * @returns A promise that resolves to the API response.
 */
const fetchProgress = async (bookId: string): Promise<ProgressApiResponse> => {
    return fetch("https://literal.club/graphql/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiAccessToken}`,
        },
        body: JSON.stringify({
            query: fetchProgressQuery,
            variables: {
                bookIds: [bookId],
                isActive: true,
            },
        }),
        next: { revalidate: 3600 },
    }).then((response) => response.json());
};

/**
 * Fetch the first book with its progress details.
 * If no active books are found, it falls back to finished books.
 */
export const getBookWithProgress = async (): Promise<
    BookWithProgressDetails | undefined
> => {
    await connection();

    try {
        const { books, isFinished } = await fetchBooksWithFallback();
        if (!books.length) return undefined;

        const selectedBook = books[0];
        const progress = await fetchBookProgress(selectedBook.id);

        return { ...selectedBook, ...progress, isFinished };
    } catch (error) {
        console.error("Error fetching book with progress:", error);
        return undefined;
    }
};

/**
 * Fetch books, falling back to finished books if no active books are found.
 */
const fetchBooksWithFallback = async (): Promise<{
    books: BookDetails[];
    isFinished: boolean;
}> => {
    const { data: booksData, errors: booksErrors } = await fetchBooks();
    if (booksErrors) {
        throw new Error(formatErrors(booksErrors));
    }

    let books = booksData?.booksByReadingStateAndProfile || [];
    if (books.length) return { books, isFinished: false };

    const { data: finishedBooksData, errors: finishedBooksErrors } =
        await fetchBooks(true);
    if (finishedBooksErrors) {
        throw new Error(formatErrors(finishedBooksErrors));
    }

    books = finishedBooksData?.booksByReadingStateAndProfile || [];
    return { books, isFinished: true };
};

/**
 * Fetch progress for a specific book.
 */
const fetchBookProgress = async (
    bookId: string,
): Promise<Partial<ProgressDetails>> => {
    const { data: progressData, errors: progressErrors } =
        await fetchProgress(bookId);

    if (progressErrors) {
        console.error("Progress fetch errors:", formatErrors(progressErrors));
        return {};
    }

    return (
        progressData?.readingProgresses.find((p) => p?.bookId === bookId) || {}
    );
};

/**
 * Format GraphQL errors into a readable string.
 */
const formatErrors = (errors: Array<{ message: string }>): string => {
    return errors.map((e) => e.message).join(", ");
};
