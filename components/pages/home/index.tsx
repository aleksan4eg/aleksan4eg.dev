import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VerifiedCheckmark from "@/components/pages/home/verified";
import SocialLinks from "@/components/molecules/social-links";
import { DynamicGreeting } from "./hello-world";
import { ChevronsLeftRight } from "lucide-react";

const Intro = () => {
    const t = useTranslations("HomePage.Intro");

    return (
        <section>
            <div className="mb-5 flex flex-col items-center gap-5 md:flex-row-reverse">
                <Image
                    src="/me.png"
                    alt={t("altImage")}
                    width={180}
                    height={180}
                    className="w-40 self-center rounded-full inset-shadow-[0_0_50px_rgba(0,0,0,0.9)] md:w-45 md:self-start dark:inset-shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                    priority
                />
                <div>
                    <h1 className="mb-5 text-xl font-bold sm:text-2xl">
                        <span className="mb-2 block">
                            <span className="text-primary-txt animate-waving motion-safe:animate-wave motion-safe:origin-waving me-3 inline-flex items-center drop-shadow-xs">
                                👋🏻
                            </span>
                            <DynamicGreeting />
                        </span>
                        <span className="flex items-center gap-2">
                            {t("me")}
                            <span className="text-blue-600 drop-shadow-xs dark:shadow-transparent">
                                {t("name")}
                            </span>
                            <VerifiedCheckmark />
                        </span>
                    </h1>
                    <div>
                        <p className="mb-2">{t("about")}</p>
                        <p className="mb-2">{t("description")}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
                <Link
                    href="/"
                    className={`${buttonVariants({ variant: "default" })} w-full sm:w-auto`}
                    aria-label={t("ctaAriaLabel")}
                >
                    {t("cta")}
                    <ChevronsLeftRight />
                </Link>
                <Separator
                    orientation="vertical"
                    className="hidden sm:block"
                    style={{ height: "30px" }}
                />
                <SocialLinks />
            </div>
        </section>
    );
};

export default Intro;
