/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */
import { cn } from "@/lib/utils";

type BadgeProps = {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg";
    color?: "blue" | "green" | "red" | "yellow";
};

const Badge = ({
    children,
    className,
    size = "md",
    color = "blue",
}: BadgeProps) => {
    const sizeClasses = {
        sm: "px-1.5 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3.5 py-1 text-base",
    };

    const colorClasses = {
        blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    };

    return (
        <span
            className={cn(
                `me-2 rounded-sm font-medium ${
                    sizeClasses[size]
                } ${colorClasses[color]}`,
                className,
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
