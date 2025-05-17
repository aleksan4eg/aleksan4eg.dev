/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import Activities from "@/components/pages/about/activities";
import Experience from "@/components/pages/about/experience";
import Intro from "@/components/pages/about/intro";
import Skills from "@/components/pages/about/skills/Skills";
import { generatePageMetadata, MetadataProps } from "@/lib/metadata";

export async function generateMetadata({ params }: MetadataProps) {
    const { locale } = await params;
    return generatePageMetadata(locale, "AboutPage");
}

const AboutPage = () => {
    return (
        <>
            <Intro />
            <Skills />
            <Experience />
            <Activities />
        </>
    );
};

export default AboutPage;
