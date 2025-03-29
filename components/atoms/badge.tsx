import React from "react";

type BadgeProps = {
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    color?: "blue" | "green" | "red" | "yellow";
};

const Badge = ({ children, size = "medium", color = "blue" }: BadgeProps) => {
    const sizeClasses = {
        small: "px-1.5 py-0.5 text-xs",
        medium: "px-2.5 py-0.5 text-sm",
        large: "px-3.5 py-1 text-base",
    };

    const colorClasses = {
        blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    };

    return (
        <span
            className={`me-2 rounded-sm font-medium ${
                sizeClasses[size]
            } ${colorClasses[color]}`}
        >
            {children}
        </span>
    );
};

export default Badge;
