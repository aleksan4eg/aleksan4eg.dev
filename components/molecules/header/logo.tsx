/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import Image from "next/image";
import { useTranslations } from "next-intl";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const Logo = () => {
    const t = useTranslations("common");
    return (
        <Link
            href="/"
            className={`transform transition-transform duration-200 hover:scale-110 ${buttonVariants({ variant: "ghost" })}`}
        >
            <Image
                className="h-10 w-10 cursor-pointer"
                src="/ag-logo.svg"
                alt={t("altLogo")}
                width={95}
                height={53}
                priority
            />
        </Link>
    );
};

export default Logo;
