/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export interface MetadataProps {
    params: Promise<{ locale: string }>;
}

export async function generatePageMetadata(
    locale: Locale,
    namespace: string,
): Promise<{
    title: string;
    description: string;
    keywords: string;
}> {
    const t = await getTranslations({ locale, namespace });

    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
        keywords: t("metaKeywords"),
    };
}
