/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useTranslations } from "next-intl";
import { ComponentProps } from "react";

import LanguageSwitcher from "@/components/language-switcher";
import Logo from "@/components/molecules/header/logo";
import MobileNavigation from "@/components/molecules/header/mobile-navigation";
import MainNavigation from "@/components/molecules/header/navigation";
import { ThemeSelector } from "@/components/ui/theme-selector";
import { Link } from "@/i18n/navigation";

export type NavLink = {
    href: ComponentProps<typeof Link>["href"];
    label: string;
    disabled: boolean;
};

const Header = () => {
    const t = useTranslations("common");

    const NAVLINKS: NavLink[] = [
        {
            href: "/",
            label: t("navigation.home"),
            disabled: false,
        },
        {
            href: "/about",
            label: t("navigation.about"),
            disabled: false,
        },
        {
            href: "/blog",
            label: t("navigation.blog"),
            disabled: true,
        },
        {
            href: "/projects",
            label: t("navigation.projects"),
            disabled: true,
        },
        {
            href: "/uses",
            label: t("navigation.uses"),
            disabled: true,
        },
        {
            href: "/contact",
            label: t("navigation.contact"),
            disabled: true,
        },
    ];

    return (
        <header
            className="dark:bg-background/60 bg-background/60 fixed top-0 z-50 w-full px-3 py-3 backdrop-blur-md"
            role="banner"
        >
            <div className="mx-auto flex max-w-[800px] items-center justify-between">
                <Logo />
                <div className="flex items-center justify-end gap-2">
                    <MainNavigation links={NAVLINKS} />
                    <LanguageSwitcher />
                    <ThemeSelector />
                    <MobileNavigation links={NAVLINKS} />
                </div>
            </div>
        </header>
    );
};

export default Header;
