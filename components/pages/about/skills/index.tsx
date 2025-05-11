/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { getTranslations } from "next-intl/server";
import React, { CSSProperties } from "react";

import Icon from "@/components/atoms/icon";
import skillsData from "@/components/pages/about/skills/data.json";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface Skill {
    name: string;
    description: string;
    icon: string;
    color: string;
    website: string;
    hidden?: boolean;
}

const Skills = async () => {
    const t = await getTranslations("AboutPage.Skills");

    const skills: Skill[] = skillsData.map((skill) => ({
        ...skill,
        description: t(skill.description),
    }));

    return (
        <section className="mb-10" id="skills">
            <h2 className="mb-5 text-xl font-bold">{t("title")}</h2>
            <ul className="flex flex-wrap items-center gap-2.5">
                {skills
                    .filter((skill) => !skill.hidden)
                    .map((skill) => (
                        <li key={skill.name}>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        className="border-input text-foreground bg-background flex h-9 cursor-pointer items-center gap-1.5 rounded-md border px-2.5 py-2 text-sm shadow-2xs transition-colors duration-300 ease-out hover:border-(--tint) hover:bg-(--tint)/50 active:border-(--tint) active:bg-(--tint)/50 dark:bg-gray-800/10 dark:text-gray-200 dark:hover:border-(--tint) dark:hover:bg-(--tint)/60 dark:active:border-(--tint) dark:active:bg-(--tint)/60"
                                        style={
                                            {
                                                "--tint": skill.color + "80",
                                            } as CSSProperties
                                        }
                                    >
                                        <Icon
                                            path={skill.icon}
                                            className="size-4"
                                        />
                                        <span>{skill.name}</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent side="top">
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            path={skill.icon}
                                            className="size-5"
                                        />
                                        <h3 className="text-md font-semibold">
                                            {skill.name}
                                        </h3>
                                    </div>
                                    <Separator className="my-1.5" />
                                    <p className="text-foreground text-sm">
                                        {skill.description}
                                    </p>
                                </PopoverContent>
                            </Popover>
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default Skills;
