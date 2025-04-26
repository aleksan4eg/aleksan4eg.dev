/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import FeaturedPosts from "@/components/pages/home/featured-posts";
import FeaturedProjects from "@/components/pages/home/featured-projects";
import Intro from "@/components/pages/home/index";

const HomePage = () => {
    return (
        <>
            <Intro />
            <FeaturedPosts />
            <FeaturedProjects />
        </>
    );
};

export default HomePage;
