/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This function merges class names using clsx and tailwind-merge.
 * It allows you to conditionally apply classes and merge Tailwind CSS classes.
 * @param inputs - Class names to merge.
 * @returns A string of merged class names.
 * @example
 * cn("bg-red-500", { "text-white": true }, "p-4");
 * // Returns "bg-red-500 text-white p-4"
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
