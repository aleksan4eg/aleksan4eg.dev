/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import {
    github,
    linkedin,
    mastodon,
    xTwitter,
    telegram,
    email,
} from "@/components/atoms/icons";
import SocialLink from "@/components/molecules/social-links/social-link";
import { cn } from "@/lib/utils";

export interface SocialLink {
    icon: string;
    href: string;
    ariaLabel: string;
}

const SOCIAL_LINKS = [
    {
        id: "github",
        href: "https://github.com/aleksan4eg",
        icon: github,
        ariaLabel: "Aleksandr Gumroian's GitHub",
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/agumroian",
        icon: linkedin,
        ariaLabel: "Aleksandr Gumroian's LinkedIn",
    },
    {
        id: "x-twitter",
        href: "https://x.com/@aleksan4eg",
        icon: xTwitter,
        ariaLabel: "Aleksandr Gumroian's X (Twitter)",
    },
    {
        id: "fosstodon",
        href: "https://fosstodon.org/@aleksan4eg",
        icon: mastodon,
        ariaLabel: "Aleksandr Gumroian's Mastodon",
    },
    {
        id: "email",
        href: "mailto:a.gumroian@gmail.com",
        icon: email,
        ariaLabel: "Aleksandr Gumroian's Email",
    },
    {
        id: "telegram",
        href: "https://t.me/aleksan4eg",
        icon: telegram,
        ariaLabel: "Aleksandr Gumroian's Telegram",
    },
];

const SocialLinks = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex gap-4", className)}>
            {SOCIAL_LINKS.map(({ id, icon, href, ariaLabel }) => (
                <SocialLink
                    key={id}
                    iconPath={icon}
                    href={href}
                    ariaLabel={ariaLabel}
                />
            ))}
        </div>
    );
};

export default SocialLinks;
