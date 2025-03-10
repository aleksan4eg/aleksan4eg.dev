"use client";

import { useState, useEffect } from "react";
import { Contrast, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadingSpinner } from "./spinner";

function ThemeIcon({ theme }: { theme: string }) {
    if (theme === "dark") {
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    } else if (theme === "system") {
        return <Contrast className="h-[1.2rem] w-[1.2rem]" />;
    }
    return <Sun className="h-[1.2rem] w-[1.2rem]" />;
}

export function ThemeSelector() {
    const [isClient, setIsClient] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle theme">
                    {isClient ? (
                        <ThemeIcon theme={theme || "light"} />
                    ) : (
                        <LoadingSpinner />
                    )}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
