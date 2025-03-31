import Link from "next/link";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
    disabled?: boolean;
    external?: boolean;
    icon?: React.ReactNode;
}

const FooterLink = ({
    href,
    children,
    disabled,
    external,
    icon,
}: FooterLinkProps) => {
    if (disabled) {
        return (
            <span className="flex cursor-not-allowed items-center gap-1 opacity-50">
                {children} {icon}
            </span>
        );
    }
    return (
        <Link
            href={href}
            target={external ? "_blank" : undefined}
            className="flex items-center gap-1"
        >
            {children} {icon}
        </Link>
    );
};

export default FooterLink;
