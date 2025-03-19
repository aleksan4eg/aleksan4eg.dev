import { Button } from "@/components/ui/button";
import Link from "next/link";

const ButtonIcon = ({
    iconPath,
    href,
    ...props
}: {
    iconPath: string;
    href: string;
}) => {
    return (
        <Button variant="outline" size="icon" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    aria-hidden
                    {...props}
                >
                    <path className={"fill-current"} d={iconPath} />
                </svg>
            </Link>
        </Button>
    );
};

export default ButtonIcon;
