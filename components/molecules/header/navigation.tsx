"use client";

import { Fragment } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const MainNavigation = () => {
    const t = useTranslations("common");

    const NAVLINKS = [
        { href: "/about", label: t("navigation.about"), active: false },
        { href: "/blog", label: t("navigation.blog"), active: false },
        { href: "/projects", label: t("navigation.projects"), active: false },
        { href: "/uses", label: t("navigation.uses"), active: false },
        { href: "/contact", label: t("navigation.contact"), active: false },
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
