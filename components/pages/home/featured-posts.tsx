import { ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const FeaturedPosts = () => {
    const t = useTranslations("HomePage.FeaturedPosts");
    return (
        <section className="flex flex-col gap-6">
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
                <p className="text-center text-sm text-gray-600">
                    {t("noPosts")}
                </p>
            </div>
        </section>
    );
};

export default FeaturedPosts;
