import { Link } from "@/i18n/routing";
import { LanguageSelector } from "@components/language-selector";

export const Header = () => (
    <header className="container flex w-full items-center justify-between">
        <Link
            href="/"
            className="underline-offset-1 hover:underline hover:opacity-80"
        >
            <h1 className="font-medium text-foreground text-sm md:text-base">
                @gsmt
            </h1>
        </Link>
        <LanguageSelector />
    </header>
);
