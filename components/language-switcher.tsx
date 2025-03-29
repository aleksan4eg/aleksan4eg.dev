"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations, Locale } from "next-intl";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
    const t = useTranslations("LanguageSwitcher");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    function handleLocaleChange(nextLocale: Locale) {
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        router.replace({ pathname, params }, { locale: nextLocale });
    }

    function getCountryFlagEmoji(locale: Locale) {
        switch (locale) {
            case "en":
                return "🇺🇸";
            case "ru":
                return "🇷🇺";
            case "cs":
                return "🇨🇿";
            default:
                return "🏴‍☠️";
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t("ariaLabel")}>
                    <span>{getCountryFlagEmoji(locale)}</span>
                    <span className="sr-only">{t("label")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {routing.locales.map((currentLocale) => (
                    <DropdownMenuCheckboxItem
                        key={currentLocale}
                        checked={currentLocale === locale}
                        onClick={() => handleLocaleChange(currentLocale)}
                    >
                        {t("locale", { locale: currentLocale })}
                        <span className="ml-auto">
                            {getCountryFlagEmoji(currentLocale)}
                        </span>
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
