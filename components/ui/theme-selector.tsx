"use client";

import { useState, useEffect, JSX } from "react";
import { SunMoon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

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
                <DropdownMenuCheckboxItem
                    checked={theme === "light"}
                    onClick={() => setTheme("light")}
                >
                    {t("light")}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === "dark"}
                    onClick={() => setTheme("dark")}
                >
                    {t("dark")}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === "system"}
                    onClick={() => setTheme("system")}
                >
                    {t("system")}
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
