/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { useTranslations } from "next-intl";
import React, { CSSProperties } from "react";

import Icon from "@/components/atoms/icon";

import { skills } from "./data";

const Skills = () => {
    const t = useTranslations("AboutPage");
    return (
        <div className="skills" id="skills">
            <h2 className="mb-4 text-xl font-bold">{t("Skills.title")}</h2>
            <ul className="flex flex-wrap items-center gap-2.5">
                {skills
                    .filter((skill) => !skill.hidden)
                    .map((skill) => (
                        <li className="block" key={skill.name}>
                            <span
                                className="flex h-9 cursor-default items-center gap-1.5 rounded-md border border-gray-300 px-2.5 py-2 text-sm transition-colors duration-300 ease-in-out hover:border-(--tint) hover:bg-(--tint)/40 dark:border-gray-700 dark:bg-gray-800/10 dark:text-gray-200 dark:hover:border-(--tint) dark:hover:bg-(--tint)/40"
                                style={
                                    {
                                        "--tint": skill.color + "80",
                                    } as CSSProperties
                                }
                            >
                                <Icon path={skill.icon} className="size-4" />
                                <span>{skill.name}</span>
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Skills;
