import Intro from "@/components/pages/home/index";
import FeaturedPosts from "@/components/pages/home/featured-posts";
import FeaturedProjects from "@/components/pages/home/featured-projects";

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
