import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import ThemeProvider from "@/components/providers/theme-provider";
import TooltipProvider from "@/components/providers/tooltip-provider";
import Wrapper from "@/components/molecules/wrapper";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Aleksandr Gumroian | Software Engineer",
    description:
        "A. Gumroian is a frontend software engineer with a focus on web development, user interfaces, and user experience design.",
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <meta name="apple-mobile-web-app-title" content="Aleksan4eg" />
                <meta name="darkreader-lock" />
            </head>
            <body
                className={`flex h-screen flex-col ${inter.variable} font-sans`}
            >
                <NextIntlClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        enableColorScheme
                    >
                        <TooltipProvider>
                            <Header />
                            <Wrapper>{children}</Wrapper>
                            <Footer />
                        </TooltipProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
