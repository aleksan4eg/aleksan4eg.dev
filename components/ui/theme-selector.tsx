"use client";

import { useState, useEffect } from "react";
import { SunMoon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadingSpinner } from "./spinner";

function ThemeIcon({ theme }: { theme: string }) {
    if (theme === "dark") {
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    } else if (theme === "system") {
        return <SunMoon className="h-[1.2rem] w-[1.2rem]" />;
    }
    return <Sun className="h-[1.2rem] w-[1.2rem]" />;
}

export function ThemeSelector() {
    const t = useTranslations("ThemeSelector");
    const [isClient, setIsClient] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <DropdownMenu>
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
                    {t("light")}
                    {t("dark")}
                    {t("system")}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
