/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import React from "react";

const linkStyles =
    "text-primary decoration-primary/50 hover:text-primary hover:decoration-primary focus:decoration-primary/80 focus:text-primary underline decoration-2 underline-offset-3 transition-colors duration-200 focus:outline-offset-3 inline-flex items-center gap-1";

interface ExternalLinkProps {
    href: string;
    children: React.ReactNode;
    icon?: boolean;
    title?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
    href,
    title,
    icon,
    children,
}) => {
    return (
        <a
            href={href}
            className={!icon ? linkStyles : ""}
            target="_blank"
            rel="noopener noreferrer"
            title={title || `Open ${children} in a new tab`}
        >
            {children}
            {!icon && <ExternalLinkIcon size={15} />}
        </a>
    );
};

export default ExternalLink;
