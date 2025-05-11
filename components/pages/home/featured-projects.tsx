import { ChevronsRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const FeaturedProjects = () => {
    const t = useTranslations("HomePage.FeaturedProjects");
    return (
        <section className="mb-10 flex flex-col gap-6" id="featured-projects">
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
                    {t("noProjects")}
                </p>
            </div>
        </section>
    );
};

export default FeaturedProjects;
