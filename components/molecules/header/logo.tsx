import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const Logo = () => {
    return (
        <Link
            href="/"
            className={`transform transition-transform duration-200 hover:scale-110 ${buttonVariants({ variant: "ghost" })}`}
        >
            <Image
                className="h-10 w-10 cursor-pointer"
                src="/ag-logo.svg"
                alt="AG Logo"
                width={95}
                height={53}
                priority
            />
        </Link>
    );
};

export default Logo;
