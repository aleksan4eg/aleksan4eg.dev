/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import Image from "next/image";

export interface ExpItemProps {
    company: string;
    website: string;
    logo: string;
    position: string;
    date: string;
    description: string;
}

export const ExpItem = ({
    company,
    website,
    logo,
    position,
    date,
    description,
}: ExpItemProps) => {
    return (
        <>
            <div className="absolute -start-1.5 mt-3.5 h-3 w-3 rounded-full border border-gray-100 bg-gray-400 dark:border-gray-900 dark:bg-gray-700" />
            <div className="relative rounded-lg p-2 px-3 hover:cursor-pointer hover:bg-gray-200/40 dark:hover:bg-gray-800/40">
                <time className="mb-1 text-sm leading-none font-normal text-gray-500 dark:text-gray-400">
                    {date}
                </time>
                <div className="mt-2 mb-3 flex items-center gap-3">
                    <Image
                        src={logo}
                        alt={company}
                        width={150}
                        height={150}
                        className="h-9.5 w-9.5 rounded-full shadow-xs"
                    />

                    <div className="flex flex-col">
                        <p className="text-md font-semibold text-gray-900 dark:text-white">
                            <a
                                href={website}
                                className="after:absolute after:inset-0"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {company}
                            </a>
                        </p>
                        <p className="text-[15px] text-gray-500 dark:text-gray-400">
                            {position}
                        </p>
                    </div>
                </div>
                <p className="pb-1.5 text-sm font-normal">{description}</p>
            </div>
        </>
    );
};
