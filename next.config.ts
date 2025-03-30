import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
};

const withNextIntl = createNextIntlPlugin({
    experimental: {
        createMessagesDeclaration: [
            "./i18n/messages/en.json",
            "./i18n/messages/ru.json",
            "./i18n/messages/cs.json",
        ],
    },
});
export default withNextIntl(nextConfig);
