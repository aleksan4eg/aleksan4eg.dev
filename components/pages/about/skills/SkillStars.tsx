/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { Star, StarHalf } from "lucide-react";

type StarsProps = {
    knowledge: number;
};

const Stars = ({ knowledge }: StarsProps) => {
    return (
        <div className="flex items-center gap-1">
            <div className="relative">
                <div className="flex gap-1">
                    {Array.from({ length: 5 }, () => (
                        <Star
                            key={Math.random()}
                            strokeWidth={1.5}
                            className="size-4 text-yellow-500"
                        />
                    ))}
                </div>
                <div className="absolute top-0 flex gap-1">
                    {Array.from({ length: 5 }, (_, index) => {
                        if (knowledge >= index + 1) {
                            return (
                                <Star
                                    key={index}
                                    fill="currentColor"
                                    className="size-4 text-yellow-500"
                                    strokeWidth={0}
                                />
                            );
                        } else if (
                            knowledge % 1 !== 0 &&
                            index === Math.floor(knowledge)
                        ) {
                            console.log(knowledge);
                            return (
                                <StarHalf
                                    key={index}
                                    fill="currentColor"
                                    className="size-4 text-yellow-500"
                                    strokeWidth={0}
                                />
                            );
                        } else {
                            return (
                                <Star
                                    key={index}
                                    fill="none"
                                    strokeWidth={1.5}
                                    className="size-4 text-yellow-500"
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Stars;
