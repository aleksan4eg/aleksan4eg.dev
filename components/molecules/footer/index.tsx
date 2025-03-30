import Image from "next/image";
import Link from "next/link";
import { ChevronsUp, Star } from "lucide-react";
import { useTranslations } from "next-intl";

import SocialLinks from "@/components/molecules/social-links";

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="border-t-divider mobile-lg:pt-7 tablet-sm:pt-8 tablet-sm:pb-12 tablet-sm:grid-rows-[1fr_auto] tablet-sm:gap-y-4 tablet-md:px-0 mx-auto grid w-full max-w-[800px] grid-cols-2 gap-6 border-t px-3 pt-6 pb-6 sm:grid-cols-4">
            <div className="col-span-2 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Image
                        src="/ag-logo.svg"
                        alt={t("altLogo")}
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
            <div className="flex flex-col gap-3 sm:row-span-2">
                <h3 className="font-bold uppercase">{t("navigation.title")}</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <Link href="/">{t("navigation.home")}</Link>
                    </li>
                    <li>
                        <span className="cursor-not-allowed opacity-50">
                            {t("navigation.about")}
                        </span>
                    </li>
                    <li>
                        <span className="cursor-not-allowed opacity-50">
                            {t("navigation.blog")}
                        </span>
                    </li>
                    <li>
                        <span className="cursor-not-allowed opacity-50">
                            {t("navigation.projects")}
                        </span>
                    </li>
                    <li>
                        <span className="cursor-not-allowed opacity-50">
                            {t("navigation.uses")}
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-3 sm:row-span-2">
                <h3 className="font-bold uppercase">{t("other.title")}</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/aleksan4eg/aleksan4eg.dev"
                            className="flex items-center gap-1"
                        >
                            {t("other.github")}
                            <Star className="inline" size={14} />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:a.gumroian@gmail.com">
                            {t("other.contact")}
                        </a>
                    </li>
                    <li>
                        <span className="cursor-not-allowed opacity-50">
                            {t("other.rss")}
                        </span>
                    </li>
                    <li>
                        <span className="cursor-not-allowed opacity-50">
                            {t("other.sitemap")}
                        </span>
                    </li>
                    <li>
                        <span className="flex cursor-not-allowed items-center gap-1 opacity-50">
                            {t("other.scrollToTop")}
                            <ChevronsUp className="inline" size={18} />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="col-span-2 flex min-h-6 flex-row items-center justify-start self-start text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()} {t("name")}. {t("rights")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
