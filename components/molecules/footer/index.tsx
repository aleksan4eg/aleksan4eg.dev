import Image from "next/image";
import Link from "next/link";
import { ChevronsUp, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import SocialLinks from "@/components/molecules/social-links";

const NAVIGATION_LINKS = [
    { key: "home", href: "/", disabled: false },
    { key: "about", href: "#", disabled: true },
    { key: "blog", href: "#", disabled: true },
    { key: "projects", href: "#", disabled: true },
    { key: "uses", href: "#", disabled: true },
];

const OTHER_LINKS = [
    {
        key: "github",
        href: "https://github.com/aleksan4eg/aleksan4eg.dev",
        external: true,
        icon: <Star className="inline" size={14} />,
    },
    { key: "contact", external: true, href: "mailto:a.gumroian@gmail.com" },
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
            className="flex items-center gap-1"
        >
            {children} {icon}
        </Link>
    );
};

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="border-t-divider mobile-lg:pt-7 tablet-sm:pt-8 tablet-sm:pb-12 tablet-sm:grid-rows-[1fr_auto] tablet-sm:gap-y-4 tablet-md:px-0 mx-auto grid w-full max-w-[800px] grid-cols-2 gap-6 border-t px-3 pt-6 pb-6 sm:grid-cols-4">
            {/* Logo and About Section */}
            <div className="col-span-2 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Image
                        src="/ag-logo.svg"
                        alt={t("altLogo")}
                        className="h-6 w-6"
                        width={95}
                        height={53}
                        priority
                    />
                    <p className="font-bold">{t("name")}</p>
                </div>
                <p className="mb-2 text-sm">{t("about")}</p>
                <SocialLinks />
            </div>

            {/* Navigation Section */}
            <div className="flex flex-col gap-3 sm:row-span-2">
                <h3 className="font-bold uppercase">{t("navigation.title")}</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    {NAVIGATION_LINKS.map(({ key, href, disabled }) => (
                        <li key={key}>
                            <FooterLink href={href} disabled={disabled}>
                                {t(`navigation.${key}`)}
                            </FooterLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Other Links Section */}
            <div className="flex flex-col gap-3 sm:row-span-2">
                <h3 className="font-bold uppercase">{t("other.title")}</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    {OTHER_LINKS.map(
                        ({ key, href, external, disabled, icon }) => (
                            <li key={key}>
                                <FooterLink
                                    href={href}
                                    external={external}
                                    disabled={disabled}
                                    icon={icon}
                                >
                                    {t(`other.${key}`)}
                                </FooterLink>
                            </li>
                        ),
                    )}
                </ul>
            </div>

            {/* Copyright Section */}
            <div className="col-span-2 flex min-h-6 flex-row items-center justify-start self-start text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()} {t("name")}. {t("rights")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
