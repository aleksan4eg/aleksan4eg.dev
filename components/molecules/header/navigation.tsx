"use client";

import { Fragment } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const MainNavigation = () => {
    const t = useTranslations("Header.navigation");

    const NAVLINKS = [
        { href: "/about", label: t("about"), active: false },
        { href: "/blog", label: t("blog"), active: false },
        { href: "/projects", label: t("projects"), active: false },
        { href: "/uses", label: t("uses"), active: false },
        { href: "/contact", label: t("contact"), active: false },
    ];

    return NAVLINKS.map((url) => (
        <Fragment key={url.href}>
            {url.active ? (
                <Link
                    href={url.href}
                    className={buttonVariants({ variant: "ghost" })}
                >
                    {url.label}
                </Link>
            ) : (
                <span
                    className={`${buttonVariants({
                        variant: "ghost",
                    })} cursor-not-allowed opacity-50`}
                >
                    {url.label}
                </span>
            )}
        </Fragment>
    ));
};

export default MainNavigation;
