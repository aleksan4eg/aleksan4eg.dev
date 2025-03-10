import React from "react";
import ButtonIcon from "@/components/atoms/button-icon";

const SocialLink = ({ iconPath, href }: { iconPath: string; href: string }) => {
    return <ButtonIcon iconPath={iconPath} href={href} />;
};

export default SocialLink;
