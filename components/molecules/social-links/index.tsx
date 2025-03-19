import { github, linkedin, instagram } from "@/components/constants/icons";
import SocialLink from "@/components/molecules/social-links/social-link";

export interface SocialLink {
    icon: string;
    href: string;
}

const SOCIAL_LINKS = [
    {
        id: "github",
        href: "https://github.com/aleksan4eg",
        icon: github,
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/agumroian",
        icon: linkedin,
    },

    {
        id: "instagram",
        href: "https://www.instagram.com/aleksan4eg/",
        icon: instagram,
    },
];

const SocialLinks = () => {
    return (
        <div className="flex space-x-4">
            {SOCIAL_LINKS.map(({ id, icon, href }) => (
                <SocialLink key={id} iconPath={icon} href={href} />
            ))}
        </div>
    );
};

export default SocialLinks;
