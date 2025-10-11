import { LanguageSelector } from "@components/language-selector";
import { Link } from "@/i18n/routing";

export const Header = () => (
    <header className="container flex w-full items-center justify-between">
        <Link
            className="underline-offset-1 hover:underline hover:opacity-80"
            href="/"
        >
            <h1 className="font-medium text-foreground text-sm md:text-base">
                @gsmt
            </h1>
        </Link>
        <LanguageSelector />
    </header>
);
