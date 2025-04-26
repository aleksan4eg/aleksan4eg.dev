"use client";

import { useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { Fragment } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";

interface NavLink extends ComponentProps<typeof Link> {
    href: ComponentProps<typeof Link>["href"];
    id: string;
    label: string;
    active: boolean;
}

const MainNavigation = () => {
    const t = useTranslations("common");
    const pathname = usePathname();

    const NAVLINKS: Array<NavLink> = [
        { id: "1", href: "/about", label: t("navigation.about"), active: true },
        { id: "2", href: "/blog", label: t("navigation.blog"), active: false },
        {
            id: "3",
            href: "/projects",
            label: t("navigation.projects"),
            active: false,
        },
        { id: "4", href: "/uses", label: t("navigation.uses"), active: false },
        {
            id: "5",
            href: "/contact",
            label: t("navigation.contact"),
            active: false,
        },
    ];

    return NAVLINKS.map((navLink) => (
        <Fragment key={navLink.id}>
            {navLink.active ? (
                <Button
                    asChild
                    variant="ghost"
                    className={
                        pathname === navLink.href
                            ? "bg-secondary/60 dark:bg-secondary/60 dark:hover:bg-secondary hover:bg-secondary font-semibold"
                            : ""
                    }
                >
                    <Link href={navLink.href}>{navLink.label}</Link>
                </Button>
            ) : (
                <span
                    className={`${buttonVariants({
                        variant: "ghost",
                    })} cursor-not-allowed opacity-50`}
                >
                    {navLink.label}
                </span>
            )}
        </Fragment>
    ));
};

export default MainNavigation;
