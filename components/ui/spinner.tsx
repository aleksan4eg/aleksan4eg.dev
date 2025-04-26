/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { LoaderIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const spinnerVariants = "w-16 h-16 rounded-full animate-spin";

interface LoadingSpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
    className?: string;
}

const LoadingSpinner = React.forwardRef<SVGSVGElement, LoadingSpinnerProps>(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <LoaderIcon
                ref={ref}
                className={cn(spinnerVariants, className)}
                {...rest}
            />
        );
    },
);

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };
