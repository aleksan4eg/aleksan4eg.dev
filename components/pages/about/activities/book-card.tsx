/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Badge from "@/components/atoms/badge";
import { Progress } from "@/components/ui/progress";
import { getBookWithProgress } from "@/lib/literal";

const formatAuthors = (
    authors: { name: string }[],
    t: (key: string) => string,
): string => {
    if (!authors.length) return t("unknown");
    return authors.length > 1
        ? `${authors[0].name}, ${t("others")}`
        : authors[0].name;
};

const calculateProgress = (
    progress: number = 0,
    capacity: number = 1,
): number => {
    return (progress * 100) / capacity;
};

const determineState = (
    isFinished: boolean,
    progress?: number,
    t?: (key: string) => string,
): string => {
    if (Boolean(isFinished)) return t?.("finished") || "Finished";
    return progress
        ? t?.("reading") || "Reading"
        : t?.("notStarted") || "Not Started";
};

const BookCard = async () => {
    const t = await getTranslations("AboutPage.Activities.Book");

    const book = await getBookWithProgress();
    if (!book) return null;

    const formattedAuthors = formatAuthors(book.authors, t);
    const currentReadProgress = calculateProgress(book.progress, book.capacity);
    const state = determineState(!!book.isFinished, book.progress, t);

    return (
        <div className="group border-input relative flex flex-col gap-2.5 rounded-lg border p-3 shadow-xs hover:bg-gray-200/40 dark:hover:bg-gray-800/40">
            <div className="flex gap-3">
                <Image
                    src={book.cover}
                    alt={`"${book.title}" book cover`}
                    className="aspect-2/3 w-14 rounded bg-gray-200 object-cover transition-transform duration-200 group-hover:scale-103 hover:shadow"
                    width={150}
                    height={150}
                />
                <div className="flex grow flex-col justify-between gap-1 overflow-hidden">
                    <div>
                        <p className="text-md w-full truncate font-semibold">
                            <a
                                title={`"${book.title}" ${t("by")} ${formattedAuthors}`}
                                href={`https://literal.club/aleksan4eg/book/${book.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="after:absolute after:inset-0"
                            >
                                {book.title}
                            </a>
                        </p>
                        <p className="truncate text-sm">{formattedAuthors}</p>
                    </div>
                    <div>
                        {book.progress && book.progress > 0 ? (
                            <p className="text-xs text-gray-500 dark:text-gray-300/60">
                                {t("pagesLeft", {
                                    pagesLeft: book.capacity
                                        ? book.capacity - (book.progress || 0)
                                        : 0,
                                })}
                            </p>
                        ) : (
                            <Badge size="small">{state}</Badge>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <Progress
                            value={currentReadProgress}
                            className="cursor-pointer"
                        />
                        {`${currentReadProgress.toFixed(2)}%`}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookCard;
