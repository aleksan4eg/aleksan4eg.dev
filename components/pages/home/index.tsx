import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VerifiedCheckmark from "@/components/pages/home/verified";
import SocialLinks from "@/components/molecules/social-links";
import { DynamicGreeting } from "./hello-world";
import { ChevronsLeftRight } from "lucide-react";

const Intro = () => {
    return (
        <section>
            <div className="mb-5 flex flex-col gap-5 md:flex-row-reverse">
                <Image
                    src="/me.png"
                    alt="Aleksandr Gumroian"
                    width={180}
                    height={180}
                    className="w-40 self-center rounded-full md:w-45 md:self-start"
                />
                <div>
                    <h1 className="mb-5 text-xl font-bold sm:text-2xl">
                        <span className="mb-2 block">
                            <span className="text-primary-txt animate-waving motion-safe:animate-wave motion-safe:origin-waving me-3 inline-block drop-shadow-xs">
                                👋🏻
                            </span>
                            <DynamicGreeting />
                        </span>
                        <span className="flex items-center gap-2">
                            I am
                            <span className="text-blue-600 drop-shadow-xs dark:shadow-transparent">
                                Aleksandr Gumroian
                            </span>
                            <VerifiedCheckmark />
                        </span>
                    </h1>
                    <div>
                        <p className="mb-2">
                            Creative and enthusiastic Frontend Software Engineer
                            based in Czechia 🇨🇿
                        </p>
                        <p className="mb-2">
                            Driven by precision, I aim to build visually
                            appealing and user-friendly applications while
                            continuously improving my skills.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex h-9 flex-col items-center gap-5 sm:flex-row">
                <Link
                    href="/"
                    className={`${buttonVariants({ variant: "default" })} w-full sm:w-auto`}
                >
                    About me
                    <ChevronsLeftRight />
                </Link>
                <Separator orientation="vertical" className="hidden sm:block" />
                <SocialLinks />
            </div>
        </section>
    );
};

export default Intro;
