import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "ru", "cs"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    pathnames: {
        "/": "/",
        "/about": {
            ru: "/obo-mne",
            cs: "/o-mne",
        },
        "/blog": {
            ru: "/blog",
            cs: "/blog",
        },
        "/contact": {
            ru: "/kontakty",
            cs: "/kontakty",
        },
        "/projects": {
            ru: "/proekty",
            cs: "/projekty",
        },
        "/uses": {
            ru: "/instrumenty",
            cs: "/nastroje",
        },
    },
});
