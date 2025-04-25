/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { Link } from "@/i18n/navigation";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
    disabled?: boolean;
    external?: boolean;
    icon?: React.ReactNode;
}

const FooterLink = ({
    href,
    children,
    disabled,
    external,
    icon,
}: FooterLinkProps) => {
    if (disabled) {
        return (
            <span className="flex cursor-not-allowed items-center gap-1 opacity-50">
                {children} {icon}
            </span>
        );
    }
    return (
        <Link
            href={href}
            target={external ? "_blank" : undefined}
            className="decoration-foreground/30 hover:text-primary hover:decoration-primary focus:decoration-primary focus:text-primary inline-flex items-center gap-1 underline decoration-2 underline-offset-3 transition-colors duration-200 focus:outline-offset-3"
        >
            {children} {icon}
        </Link>
    );
};

export default FooterLink;
