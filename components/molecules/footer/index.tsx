/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import Image from "next/image";
import { useTranslations } from "next-intl";

import {
    NAVIGATION_LINKS,
    OTHER_LINKS,
} from "@/components/molecules/footer/constants";
import FooterLink from "@/components/molecules/footer/FooterLink";
import SocialLinks from "@/components/molecules/social-links";

const Footer = () => {
    const t = useTranslations("Footer");
    const tCommon = useTranslations("common");

    return (
        <footer
            className="border-t-divider mobile-lg:pt-7 tablet-sm:pt-8 tablet-sm:pb-12 tablet-sm:grid-rows-[1fr_auto] tablet-sm:gap-y-4 tablet-md:px-0 mx-auto grid w-full max-w-[800px] grid-cols-2 gap-6 border-t px-3 pt-6 pb-6 sm:grid-cols-4"
            role="contentinfo"
        >
            {/* Logo and About Section */}
            <div className="col-span-2 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Image
                        src="/ag-logo.svg"
                        alt={tCommon("altLogo")}
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
                <p className="font-bold uppercase">
                    {tCommon("navigation.title")}
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                    {NAVIGATION_LINKS.map(({ key, href, disabled }) => (
                        <li key={key}>
                            <FooterLink href={href} disabled={disabled}>
                                {tCommon(`navigation.${key}`)}
                            </FooterLink>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Other Links Section */}
            <div className="flex flex-col gap-3 sm:row-span-2">
                <p className="font-bold uppercase">{t("other.title")}</p>
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
            <div className="col-span-2 flex min-h-6 flex-row items-center justify-start self-start text-sm text-gray-500 dark:text-gray-400">
                <p>
                    {t("copy")}
                    {new Date().getFullYear()} {t("name")}
                    {t("rights")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
