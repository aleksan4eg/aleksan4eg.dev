/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { Link } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React, { CSSProperties } from "react";

import Badge from "@/components/atoms/badge";
import Icon from "@/components/atoms/icon";
import skillsData from "@/components/pages/about/skills/skills.json";
import Stars from "@/components/pages/about/skills/SkillStars";
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
    knowledge: number;
    categories: string[];
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
                                    <div className="flex justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <Icon
                                                path={skill.icon}
                                                className="size-5"
                                            />
                                            <h3 className="text-md truncate font-semibold">
                                                {skill.name}
                                            </h3>
                                            <a
                                                href={skill.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/70 hover:text-foreground/100"
                                            >
                                                <Link className="size-3.5" />
                                            </a>
                                        </div>
                                        <Stars knowledge={skill.knowledge} />
                                    </div>
                                    <Separator className="my-2" />
                                    <p className="text-foreground mb-3 text-sm">
                                        {skill.description}
                                    </p>
                                    {skill.categories && (
                                        <div className="flex items-center">
                                            {skill.categories.map((cat) => (
                                                <Badge
                                                    key={cat}
                                                    color="blue"
                                                    size="sm"
                                                    className="text-[0.68rem]"
                                                >
                                                    {t(`Categories.${cat}`)}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </PopoverContent>
                            </Popover>
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default Skills;
