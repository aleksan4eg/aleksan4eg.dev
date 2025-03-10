"use client";

import { useEffect, useState } from "react";

const MULTILINGUAL_GREETINGS = [
    // spell-checker: disable
    // First 25 greetings are the most spoken languages in the world
    "Hello, world", // English
    "Привет, мир", // Russian
    "你好，世界", // Chinese (Mandarin)
    "Hola, mundo", // Spanish
    "Bonjour, le monde", // French
    "Hallo, Welt", // German
    "こんにちは、世界", // Japanese
    "안녕하세요, 세계", // Korean
    "Ciao, mondo", // Italian
    "Olá, mundo", // Portuguese
    "हैलो, वर्ल्ड", // Hindi
    "مرحبا بالعالم", // Arabic
    "שלום, עולם", // Hebrew
    "नमस्कार, संसार", // Nepali
    "Hej, världen", // Swedish
    "Hej, verden", // Danish
    "Hallo, wêreld", // Afrikaans
    "Pozdrav svijete", // Croatian
    "Sveika, pasaule", // Latvian
    // Additional greetings
    "Ahoj, světe", // Czech
    "Здраво, свету", // Serbian
    "Ahoj, svete", // Slovenian
    "Ahoj, svet", // Slovak
    "Hallo, wereld", // Dutch
    "Kamusta, mundo", // Filipino (Tagalog)
    "Szia, világ", // Hungarian
    "Прывітанне, свет", // Belarusian
    "Привіт, світ", // Ukrainian
    "Ahoj, svijete", // Bosnian
    "Բարև, աշխարհ", // Armenian
    "გამარჯობა, მსოფლიო", // Georgian
    "Γειά σου, κόσμε", // Greek
    "Selam, dünya", // Turkish
    "Hei, maailma", // Finnish
    "Saluton, mondo", // Esperanto
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
        }, 2500);

        return () => clearInterval(greetingInterval);
    }, []);

    return <>{MULTILINGUAL_GREETINGS[greetingCounter]}!</>;
};
