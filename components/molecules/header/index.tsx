import MainNavigation from "@/components/molecules/header/navigation";
import { ThemeSelector } from "@/components/ui/theme-selector";
import Logo from "@/components/molecules/header/logo";
import LanguageSwitcher from "@/components/language-switcher";

const Header = () => {
    return (
        <header
            className="bg-opacity-10 dark:bg-background/60 bg-background/50 fixed top-0 z-50 w-full px-3 py-3 backdrop-blur-md"
            role="banner"
        >
            <nav
                className="mx-auto flex max-w-[800px] items-center justify-between"
                role="navigation"
            >
                <Logo />
                <div className="hidden items-center justify-end space-x-2 sm:flex">
                    <MainNavigation />
                    <LanguageSwitcher />
                    <ThemeSelector />
                </div>
            </nav>
        </header>
    );
};

export default Header;
