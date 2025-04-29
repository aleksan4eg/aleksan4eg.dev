/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React, { Fragment } from "react";

import { type NavLink as NavLinkType } from "@/components/molecules/header/index";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

interface NavLinkProps {
    navLink: NavLinkType;
    onClick?: () => void;
}

const NavLink = ({ navLink, onClick }: NavLinkProps) => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Fragment key={String(navLink?.href)}>
            {!navLink?.disabled ? (
                onClick ? (
                    <Button
                        variant="ghost"
                        className={
                            pathname === navLink.href
                                ? "bg-secondary/60 dark:bg-secondary/60 dark:hover:bg-secondary hover:bg-secondary font-semibold"
                                : ""
                        }
                        onClick={() => {
                            onClick?.();
                            router.push(
                                navLink?.href as Parameters<
                                    typeof router.push
                                >[0],
                            );
                        }}
                    >
                        {navLink?.label}
                    </Button>
                ) : (
                    <Button
                        asChild
                        variant="ghost"
                        className={
                            pathname === navLink.href
                                ? "bg-secondary/60 dark:bg-secondary/60 dark:hover:bg-secondary hover:bg-secondary font-semibold"
                                : ""
                        }
                    >
                        <Link href={navLink?.href}>{navLink?.label}</Link>
                    </Button>
                )
            ) : (
                <span
                    className={`${buttonVariants({
                        variant: "ghost",
                    })} cursor-not-allowed opacity-50`}
                >
                    {navLink?.label}
                </span>
            )}
        </Fragment>
    );
};

export default NavLink;
