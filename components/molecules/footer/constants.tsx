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
    },
    { key: "rss", href: "#", external: true, disabled: true },
    { key: "sitemap", href: "#", external: false, disabled: true },
    {
        key: "scrollToTop",
        href: "#",
        external: false,
        disabled: true,
        icon: <ChevronsUp className="inline" size={18} />,
    },
];

export { NAVIGATION_LINKS, OTHER_LINKS };
