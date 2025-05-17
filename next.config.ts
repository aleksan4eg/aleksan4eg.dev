/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import createBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "**",
            },
        ],
    },
};

const withBundleAnalyzer = createBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin({
    experimental: {
        createMessagesDeclaration: [
            "./i18n/messages/en.json",
            "./i18n/messages/ru.json",
            "./i18n/messages/cs.json",
        ],
    },
});

export default withBundleAnalyzer(withNextIntl(nextConfig));
