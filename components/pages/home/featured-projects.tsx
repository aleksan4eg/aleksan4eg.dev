import { ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const FeaturedProjects = () => {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="flex items-center justify-between text-xl font-bold">
                Featured Projects
                <Button
                    variant="outline"
                    className="inline-flex items-center gap-1"
                    size="sm"
                >
                    View all
                    <ChevronsRight />
                </Button>
            </h2>
            <div className="grid grid-cols-1 gap-6">
                <p className="text-center text-sm text-gray-600">
                    No projects found.
                </p>
            </div>
        </section>
    );
};

export default FeaturedProjects;
