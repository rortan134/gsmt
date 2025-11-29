"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/app/components/dropdown-menu";
import { Link } from "@/i18n/routing";
import { Languages } from "lucide-react";

const SpanishFlag = () => (
    <svg
        className="mr-2 inline-block"
        height="15"
        viewBox="289 60 21 15"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Spanish Flag</title>
        <path d="M289 63h21v9h-21v-9z" fill="#fcd669" />
        <path
            d="M289 64v-2a2 2 0 012-2h17a2 2 0 012 2v2zm19 11h-17a2 2 0 01-2-2v-2h21v2a2 2 0 01-2 2z"
            fill="#e25950"
        />
        <path d="M294 65h2v2.5h-2V65z" fill="#f6f9fc" />
        <path
            d="M294 70a2 2 0 01-2-2v-.5h2z"
            fill="#e25950"
            opacity=".5"
            style={{ isolation: "isolate" }}
        />
        <path
            d="M294 70v-2.5h2v.5a2 2 0 01-2 2zm-2-5h2v2.5h-2z"
            fill="#e25950"
        />
    </svg>
);

const EnglishFlag = () => (
    <svg
        className="mr-2 inline-block"
        height="15"
        viewBox="41 235 21 15"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>English Flag</title>
        <path
            d="M60 250H43a2 2 0 01-2-2v-7h8v-6h11a2 2 0 012 2v11a2 2 0 01-2 2z"
            fill="#e25950"
        />
        <path
            d="M41 246h21v1H41zm0-2h21v1H41zm0-2h21v1H41zm8-2h13v1H49zm0-2h13v1H49zm0-2h12.723a1.987 1.987 0 01.277 1H49zm12.723 13H41.277a1.986 1.986 0 01-.277-1h21a1.987 1.987 0 01-.277 1z"
            fill="#f6f9fc"
        />
        <path
            d="M60 250H43a2 2 0 01-2-2v-7h1v7a1 1 0 001 1h17a1 1 0 001-1v-11a1 1 0 00-1-1H49v-1h11a2 2 0 012 2v11a2 2 0 01-2 2z"
            fill="#e25950"
            opacity=".2"
            style={{ isolation: "isolate" }}
        />
        <path d="M41 242v-5a2 2 0 012-2h7v7z" fill="#43458b" />
        <path
            d="M48.73 237.408a.703.703 0 11.676-.703.703.703 0 01-.676.703zm-.297 1.297a.704.704 0 11-.704-.705.704.704 0 01.704.704zm-1.703-1.297a.704.704 0 11.677-.704.704.704 0 01-.677.704zm-.297 1.297a.704.704 0 11-.704-.705.704.704 0 01.704.704zm-1.703-1.297a.704.704 0 11.677-.704.704.704 0 01-.677.704zm-.297 1.297a.704.704 0 11-.704-.705.704.704 0 01.704.704zm-1.703-1.297a.703.703 0 11.676-.703.703.703 0 01-.676.703zm0 2.592a.704.704 0 11-.678.703.704.704 0 01.678-.703zm2 0a.704.704 0 11-.678.703.704.704 0 01.678-.703zm2 0a.704.704 0 11-.678.703.704.704 0 01.678-.703zm2 0a.704.704 0 11-.678.703.704.704 0 01.678-.703z"
            fill="#fff"
        />
        <path
            d="M50 239.21a.703.703 0 110-1.011zm-9-.975a.697.697 0 011.219.47.703.703 0 01-.703.703.694.694 0 01-.516-.234z"
            fill="#fff"
            opacity=".5"
            style={{ isolation: "isolate" }}
        />
    </svg>
);

const LanguageSelectMenu = () => (
    <DropdownMenu modal={false}>
        <DropdownMenuTrigger
            className="inline-flex size-5 items-center justify-center text-blue-600"
            title="Change language"
        >
            <Languages aria-hidden className="h-4 w-4" focusable="false" />
            <span className="sr-only">Change language</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
                <DropdownMenuItem
                    render={
                        <Link href="/" locale="es">
                            <SpanishFlag />
                            Español
                        </Link>
                    }
                />
                <DropdownMenuItem
                    render={
                        <Link href="/" locale="en">
                            <EnglishFlag />
                            English
                        </Link>
                    }
                />
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
);

export { LanguageSelectMenu };
