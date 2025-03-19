import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import ThemeProvider from "@/components/providers/theme-provider";
import TooltipProvider from "@/components/providers/tooltip-provider";
import Wrapper from "@/components/molecules/wrapper";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b",
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
} catch (_) {}
            `,
                    }}
                />
                <meta name="darkreader-lock" />
            </head>
            <body
                className={`flex h-screen flex-col ${inter.variable} font-sans`}
            >
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
            </body>
        </html>
    );
}
