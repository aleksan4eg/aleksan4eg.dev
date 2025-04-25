/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { ChevronsUp, ExternalLink } from "lucide-react";

const NAVIGATION_LINKS = [
    { key: "home", href: "/", disabled: false },
    { key: "about", href: "/about", disabled: false },
    { key: "blog", href: "#", disabled: true },
    { key: "projects", href: "#", disabled: true },
    { key: "uses", href: "#", disabled: true },
];

const OTHER_LINKS = [
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
