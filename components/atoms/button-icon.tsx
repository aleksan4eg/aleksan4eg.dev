import { Button } from "@/components/ui/button";

type ButtonIconProps = {
    iconPath: string;
    href: string;
    ariaLabel: string;
};

const ButtonIcon = ({
    iconPath,
    href,
    ariaLabel,
    ...props
}: ButtonIconProps) => {
    return (
        <Button variant="outline" size="icon" asChild>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
            >
                <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    aria-hidden
                    {...props}
                >
                    <path className={"fill-current"} d={iconPath} />
                </svg>
            </a>
        </Button>
    );
};

export default ButtonIcon;
