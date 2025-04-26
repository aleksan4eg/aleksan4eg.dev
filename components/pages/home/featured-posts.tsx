/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { ChevronsRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const FeaturedPosts = () => {
    const t = useTranslations("HomePage.FeaturedPosts");
    return (
        <section className="mb-12 flex flex-col gap-6">
            <h2 className="flex items-center justify-between text-xl font-bold">
                {t("title")}
                <Button
                    variant="outline"
                    className="inline-flex items-center gap-1"
                    size="sm"
                >
                    {t("all")}
                    <ChevronsRight />
                </Button>
            </h2>
            <div className="grid grid-cols-1 gap-6">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    {t("noPosts")}
                </p>
            </div>
        </section>
    );
};

export default FeaturedPosts;
