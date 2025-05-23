/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

"use client";

import { SunMoon, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState, useEffect, JSX } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LoadingSpinner } from "./spinner";

function ThemeIcon({ theme }: { theme: string }) {
    const icons: Record<string, JSX.Element> = {
        dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
        system: <SunMoon className="h-[1.2rem] w-[1.2rem]" />,
        light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
    };
    return icons[theme] || icons.light;
}

const themeOptions = [
    { value: "light", labelKey: "light" },
    { value: "dark", labelKey: "dark" },
    { value: "system", labelKey: "system" },
];

export function ThemeSelector() {
    const t = useTranslations("ThemeSelector");
    const [isClient, setIsClient] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t("ariaLabel")}>
                    {isClient ? (
                        <ThemeIcon theme={theme || "light"} />
                    ) : (
                        <LoadingSpinner />
                    )}
                    <span className="sr-only">{t("ariaLabel")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {themeOptions.map(({ value, labelKey }) => (
                    <DropdownMenuCheckboxItem
                        key={value}
                        checked={theme === value}
                        onClick={() => setTheme(value)}
                    >
                        {t(labelKey)}
                        <span className="ml-auto">
                            <ThemeIcon theme={value} />
                        </span>
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
