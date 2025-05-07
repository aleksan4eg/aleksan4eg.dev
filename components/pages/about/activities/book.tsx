/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { Suspense } from "react";

import BookCard from "@/components/pages/about/activities/book-card";
import { Skeleton } from "@/components/ui/skeleton";

export const Book = () => (
    <Suspense
        fallback={
            <div className="group border-input relative flex flex-col gap-2.5 rounded-lg border p-3 shadow-xs">
                <div className="flex gap-3">
                    <Skeleton className="aspect-2/3 w-14 rounded bg-gray-200 object-cover" />
                    <div className="flex grow flex-col justify-between gap-1">
                        <div>
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-3 w-full rounded" />
                        </div>
                        <Skeleton className="h-3 w-1/2 rounded" />
                        <Skeleton className="h-3 w-full rounded" />
                    </div>
                </div>
            </div>
        }
    >
        <BookCard />
    </Suspense>
);

export default Book;
