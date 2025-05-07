/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

export interface ApiResponse<T> {
    data?: T | null;
    errors?: Array<{ message: string }>;
}

export interface BookDetails {
    id: string;
    slug: string;
    title: string;
    cover: string;
    authors: Array<{
        id: string;
        name: string;
    }>;
    isFinished?: boolean;
}

export interface ProgressDetails {
    bookId: string;
    progress: number;
    capacity: number;
    completed: boolean;
}

export type BooksApiResponse = ApiResponse<{
    booksByReadingStateAndProfile: Array<BookDetails>;
}>;

export type ProgressApiResponse = ApiResponse<{
    readingProgresses: Array<ProgressDetails>;
}>;

export type BookWithProgressDetails = BookDetails & Partial<ProgressDetails>;
