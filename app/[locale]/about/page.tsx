/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import Image from "next/image";
import { useTranslations } from "next-intl";

import Link from "@/components/atoms/link";
import ExternalLink from "@/components/atoms/link-external";
import Skills from "@/components/pages/about/skills";

const AboutPage = () => {
    const t = useTranslations("AboutPage");
    return (
        <>
            <h1 className="mb-5 text-2xl font-bold">{t("title")}</h1>
            <p className="mb-4">{t("first")}</p>
            <p className="mb-6">
                {t("second")}
                <Link href="/blog">{t("secondLink")}</Link>
                {t("secondExtra")}
            </p>
            <figure className="mb-6">
                <Image
                    src="/me-prague.jpg"
                    alt={t("imageAlt")}
                    width={1000}
                    height={437}
                    className="w-full rounded-2xl shadow-lg dark:shadow-black/30"
                />
                <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
                    {t("imageCaption")}
                </figcaption>
            </figure>
            <p className="mb-4">{t("third")}</p>
            <p className="mb-4">
                {t("fourth")}
                <Link href="/contact">{t("fourthLink")}</Link>
                {t("fourthExtra")}
                <ExternalLink href="https://github.com/aleksan4eg">
                    {t("github")}
                </ExternalLink>
                {t("fourthExtra2")}
                <ExternalLink href="https://www.linkedin.com/in/agumroian/">
                    {t("linkedin")}
                </ExternalLink>
                {t("fourthExtra3")}
            </p>
            <p className="mb-10">
                {t("fifth")}
                <Link href="/uses">{t("fifthLink")}</Link>
                {t("fifthExtra")}
            </p>
            <Skills />
        </>
    );
};

export default AboutPage;
