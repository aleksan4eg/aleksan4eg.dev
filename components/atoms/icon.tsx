/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type IconProps = ComponentProps<"svg"> & { path: string };

const Icon = ({ path, className, ...props }: IconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            role="presentation"
            className={cn("size-6 fill-inherit", className)}
            aria-hidden="true"
            {...props}
        >
            <path className="fill-current" d={path} />
        </svg>
    );
};

export default Icon;
