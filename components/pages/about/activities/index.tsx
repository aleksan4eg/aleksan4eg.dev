/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useTranslations } from "next-intl";

import { Book } from "@/components/pages/about/activities/book";

const Activities = () => {
    const t = useTranslations("AboutPage.Activities");

    return (
        <section id="activities" className="mb-10">
            <h2 className="mb-5 text-xl font-bold">{t("title")}</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <Book />
            </div>
        </section>
    );
};

export default Activities;
