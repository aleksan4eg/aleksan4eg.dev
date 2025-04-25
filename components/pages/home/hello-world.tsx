/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

"use client";

import { useEffect, useState } from "react";

import Badge from "@/components/atoms/badge";

const MULTILINGUAL_GREETINGS = [
    // spell-checker: disable
    // First 25 greetings are the most spoken languages in the world
    { language: "English", msg: "Hello, world" },
    { language: "Русский", msg: "Привет, мир" },
    { language: "中文 (普通话)", msg: "你好，世界" },
    { language: "Español", msg: "Hola, mundo" },
    { language: "Français", msg: "Bonjour, le monde" },
    { language: "Deutsch", msg: "Hallo, Welt" },
    { language: "日本語", msg: "こんにちは、世界" },
    { language: "한국어", msg: "안녕하세요, 세계" },
    { language: "Italiano", msg: "Ciao, mondo" },
    { language: "Português", msg: "Olá, mundo" },
    { language: "हिन्दी", msg: "हैलो, वर्ल्ड" },
    { language: "العربية", msg: "مرحبا بالعالم" },
    { language: "עברית", msg: "שלום, עולם" },
    { language: "नेपाली", msg: "नमस्कार, संसार" },
    { language: "Svenska", msg: "Hej, världen" },
    { language: "Dansk", msg: "Hej, verden" },
    { language: "Afrikaans", msg: "Hallo, wêreld" },
    { language: "Hrvatski", msg: "Pozdrav svijete" },
    { language: "Latviešu", msg: "Sveika, pasaule" },
    // Additional greetings
    { language: "Čeština", msg: "Ahoj, světe" },
    { language: "Српски", msg: "Здраво, свету" },
    { language: "Slovenščina", msg: "Ahoj, svete" },
    { language: "Slovenčina", msg: "Ahoj, svet" },
    { language: "Nederlands", msg: "Hallo, wereld" },
    { language: "Tagalog", msg: "Kamusta, mundo" },
    { language: "Magyar", msg: "Szia, világ" },
    { language: "Беларуская", msg: "Прывітанне, свет" },
    { language: "Українська", msg: "Привіт, світ" },
    { language: "Bosanski", msg: "Ahoj, svijete" },
    { language: "Հայերեն", msg: "Բարև, աշխարհ" },
    { language: "ქართული", msg: "გამარჯობა, მსოფლიო" },
    { language: "Ελληνικά", msg: "Γειά σου, κόσμε" },
    { language: "Türkçe", msg: "Selam, dünya" },
    { language: "Suomi", msg: "Hei, maailma" },
    { language: "Esperanto", msg: "Saluton, mondo" },
];

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
            <span>{currentGreeting.msg}!</span>
            <Badge size="small">{currentGreeting.language}</Badge>
        </span>
    );
};
