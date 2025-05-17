/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import SocialLinks from "@/components/molecules/social-links";
import VerifiedCheckmark from "@/components/pages/home/verified";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";

import { DynamicGreeting } from "./hello-world";

const Intro = () => {
    const t = useTranslations("HomePage.Intro");
    const tCommon = useTranslations("common");

    return (
        <section className="mb-12">
            <div className="mb-5 flex flex-col items-center gap-5 md:flex-row-reverse">
                <Image
                    src="/me.png"
                    alt={t("altImage")}
                    width={180}
                    height={180}
                    className="w-40 self-center rounded-full inset-shadow-[0_0_50px_rgba(0,0,0,0.9)] md:w-45 md:self-start dark:inset-shadow-[0_0_50px_rgba(0,0,0,0.9)] dark:brightness-90"
                    priority
                />
                <div className="text-center sm:text-left">
                    <div className="mb-5 text-xl font-bold sm:text-2xl">
                        <span className="mb-2 block">
                            <span className="text-primary-txt animate-waving motion-safe:animate-wave motion-safe:origin-waving me-3 inline-flex items-center drop-shadow-xs">
                                {t("greeting")}
                            </span>
                            <DynamicGreeting />
                        </span>
                        <h1 className="inline-flex items-center gap-2">
                            {t("me")}
                            <span className="text-primary drop-shadow-xs dark:shadow-transparent">
                                {tCommon("name")}
                            </span>
                            <VerifiedCheckmark />
                        </h1>
                    </div>
                    <div>
                        <p className="mb-2">{tCommon("about")}</p>
                        <p className="mb-2">{t("description")}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <Button asChild className="w-full shadow-sm sm:w-auto">
                    <Link href="/about">
                        {t("cta")}
                        <ChevronsLeftRight />
                    </Link>
                </Button>
                <Separator
                    orientation="vertical"
                    className="hidden sm:block"
                    style={{ height: "30px" }}
                />
                <SocialLinks className="gap-none justify-around sm:gap-3" />
            </div>
        </section>
    );
};

export default Intro;
