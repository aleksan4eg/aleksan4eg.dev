/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

"use client";

import { useEffect, useState } from "react";

import Badge from "@/components/atoms/badge";
import { MULTILINGUAL_GREETINGS } from "@/components/pages/home/greetings";

export const DynamicGreeting = () => {
    const [greetingCounter, setGreetingCount] = useState(0);

    useEffect(() => {
        const greetingInterval = setInterval(() => {
            setGreetingCount((currentGreeting) =>
                currentGreeting >= MULTILINGUAL_GREETINGS.length - 1
                    ? 0
                    : currentGreeting + 1,
            );
        }, 3000);

        return () => clearInterval(greetingInterval);
    }, []);

    const currentGreeting = MULTILINGUAL_GREETINGS[greetingCounter];

    return (
        <span className="inline-flex items-center gap-2">
            <span>{currentGreeting.greeting}</span>
            <Badge size="small">{currentGreeting.language}</Badge>
        </span>
    );
};
