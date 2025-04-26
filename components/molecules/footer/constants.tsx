/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { ChevronsUp, ExternalLink } from "lucide-react";

type AllowedRoute = "/" | "/about" | "/blog" | "/projects" | "/uses";

interface NavigationLink {
    key: string;
    href: AllowedRoute;
    disabled: boolean;
}

interface OtherLink {
    key: string;
    href: string;
    external: boolean;
    disabled?: boolean;
    icon: React.ReactNode | null;
}

const NAVIGATION_LINKS: NavigationLink[] = [
    { key: "home", href: "/", disabled: false },
    { key: "about", href: "/about", disabled: false },
    { key: "blog", href: "/blog", disabled: true },
    { key: "projects", href: "/projects", disabled: true },
    { key: "uses", href: "/uses", disabled: true },
];

const OTHER_LINKS: OtherLink[] = [
    {
        key: "github",
        href: "https://github.com/aleksan4eg/aleksan4eg.dev",
        external: true,
        icon: <ExternalLink size={13} />,
    },
    {
        key: "contact",
        external: false,
        href: `mailto:${"a.gumroian"}@${"gmail.com"}`,
        icon: null,
    },
    {
        key: "rss",
        href: "#",
        external: true,
        disabled: true,
        icon: <ExternalLink size={13} />,
    },
    {
        key: "sitemap",
        href: "#",
        external: false,
        disabled: true,
        icon: null,
    },
    {
        key: "scrollToTop",
        href: "#",
        external: false,
        disabled: true,
        icon: <ChevronsUp className="inline" size={18} />,
    },
];

export { NAVIGATION_LINKS, OTHER_LINKS };
