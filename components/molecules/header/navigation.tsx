/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

"use client";

import { type NavLink as NavLinkType } from "@/components/molecules/header/index";
import NavLink from "@/components/molecules/header/nav-link";

const MainNavigation = ({ links }: { links: NavLinkType[] }) => {
    return (
        <nav role="navigation" className="hidden sm:flex">
            {links.slice(1).map((link) => (
                <NavLink key={String(link.href)} navLink={link} />
            ))}
        </nav>
    );
};

export default MainNavigation;
