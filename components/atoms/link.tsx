/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React, { ComponentProps } from "react";

import { Link as LocalizedLink } from "@/i18n/navigation";

const linkStyles =
    "text-primary decoration-primary/50 hover:text-primary hover:decoration-primary focus:decoration-primary/80 focus:text-primary underline decoration-2 underline-offset-3 transition-colors duration-200 focus:outline-offset-3";

interface LinkProps extends ComponentProps<typeof LocalizedLink> {
    href: ComponentProps<typeof LocalizedLink>["href"];
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <LocalizedLink href={href} className={linkStyles}>
            {children}
        </LocalizedLink>
    );
};

export default Link;
