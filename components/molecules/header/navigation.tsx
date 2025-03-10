"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

const NAVLINKS = [
    { href: "/about", label: "About", active: false },
    { href: "/blog", label: "Blog", active: false },
    { href: "/projects", label: "Projects", active: false },
    { href: "/uses", label: "Uses", active: false },
    { href: "/contact", label: "Contact", active: false },
];

const MainNavigation = () =>
    NAVLINKS.map((url) => (
        <Tooltip key={url.href}>
            <TooltipTrigger asChild>
                {url.active ? (
                    <Link
                        href={url.href}
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        {url.label}
                    </Link>
                ) : (
                    <span
                        className={`${buttonVariants({
                            variant: "ghost",
                        })} cursor-not-allowed opacity-50`}
                    >
                        {url.label}
                    </span>
                )}
            </TooltipTrigger>
            <TooltipContent>
                <p>Coming soon</p>
            </TooltipContent>
        </Tooltip>
    ));

export default MainNavigation;
