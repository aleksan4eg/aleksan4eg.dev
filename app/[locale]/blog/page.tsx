/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useTranslations } from "next-intl";

const BlogPage = () => {
    const t = useTranslations("BlogPage");

    return <h2>{t("title")}</h2>;
};

export default BlogPage;
