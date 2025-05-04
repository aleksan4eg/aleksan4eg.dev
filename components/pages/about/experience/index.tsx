/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */
import { useTranslations } from "next-intl";

import { ExpItem } from "./experience-item";

interface Experience {
    company: string;
    website: string;
    logo: string;
    position: string;
    date: string;
    description: string;
}

const Experience = () => {
    const t = useTranslations("AboutPage.Experience");

    const experience: Experience[] = [
        {
            company: "CZ.NIC z.s.p.o.",
            website: "https://www.nic.cz",
            logo: "/cz_nic-logo.png",
            position: t("position2"),
            date: t("date2"),
            description: t("description2"),
        },
        {
            company: "Wunderman Thompson",
            website: "https://www.wundermanthompson.com",
            logo: "/wunderman_thompson-logo.png",
            position: t("position1"),
            date: t("date1"),
            description: t("description1"),
        },
    ];

    return (
        <section id="experience">
            <h2 className="mb-5 text-xl font-bold">{t("title")}</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {experience.map((exp) => {
                    return (
                        <li className="ms-4 mb-10" key={exp.company}>
                            <ExpItem {...exp} />
                        </li>
                    );
                })}
            </ol>
        </section>
    );
};

export default Experience;
