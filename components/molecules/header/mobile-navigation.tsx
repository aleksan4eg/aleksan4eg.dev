/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";

import { type NavLink as NavLinkType } from "@/components/molecules/header/index";
import NavLink from "@/components/molecules/header/nav-link";
import SocialLinks from "@/components/molecules/social-links/index";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerDescription,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

const MobileNavigation = ({ links }: { links: NavLinkType[] }) => {
    const t = useTranslations("common");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="flex items-center justify-center pt-4">
                            <Image
                                src="/ag-logo.svg"
                                alt={t("altLogo")}
                                className="h-auto w-10"
                                width={95}
                                height={53}
                                priority
                            />
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerDescription className="hidden">
                        {t("about")}
                    </DrawerDescription>
                    <nav
                        role="navigation"
                        className="flex flex-col space-y-2 p-4"
                    >
                        {links.map((link) => (
                            <NavLink
                                key={String(link.href)}
                                navLink={link}
                                onClick={() => setIsOpen(false)}
                            />
                        ))}
                    </nav>
                    <DrawerFooter>
                        <SocialLinks className="justify-around" />
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default MobileNavigation;
