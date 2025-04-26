import React from "react";

import ButtonIcon from "@/components/atoms/button-icon";

type SocialLinkProps = {
    iconPath: string;
    href: string;
    ariaLabel: string;
};

const SocialLink = ({ iconPath, href, ariaLabel }: SocialLinkProps) => {
    return <ButtonIcon iconPath={iconPath} href={href} ariaLabel={ariaLabel} />;
};

export default SocialLink;
