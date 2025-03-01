"use client";

import { Link } from "@/i18n/routing";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/dropdown-menu";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { Languages } from "lucide-react";

const SpanishFlag = () => (
    <AccessibleIcon.Root label="ES">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15"
            width="21"
            viewBox="289 60 21 15"
            className="mr-2 inline-block"
        >
            <path fill="#fcd669" d="M289 63h21v9h-21v-9z" />
            <path
                fill="#e25950"
                d="M289 64v-2a2 2 0 012-2h17a2 2 0 012 2v2zm19 11h-17a2 2 0 01-2-2v-2h21v2a2 2 0 01-2 2z"
            />
            <path fill="#f6f9fc" d="M294 65h2v2.5h-2V65z" />
            <path
                fill="#e25950"
                opacity=".5"
                style={{ isolation: "isolate" }}
                d="M294 70a2 2 0 01-2-2v-.5h2z"
            />
            <path
                fill="#e25950"
                d="M294 70v-2.5h2v.5a2 2 0 01-2 2zm-2-5h2v2.5h-2z"
            />
        </svg>
    </AccessibleIcon.Root>
);

const EnglishFlag = () => (
    <AccessibleIcon.Root label="ES">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15"
            width="21"
            viewBox="41 235 21 15"
            className="mr-2 inline-block"
        >
            <path
                fill="#e25950"
                d="M60 250H43a2 2 0 01-2-2v-7h8v-6h11a2 2 0 012 2v11a2 2 0 01-2 2z"
            />
            <path
                fill="#f6f9fc"
                d="M41 246h21v1H41zm0-2h21v1H41zm0-2h21v1H41zm8-2h13v1H49zm0-2h13v1H49zm0-2h12.723a1.987 1.987 0 01.277 1H49zm12.723 13H41.277a1.986 1.986 0 01-.277-1h21a1.987 1.987 0 01-.277 1z"
            />
            <path
                fill="#e25950"
                opacity=".2"
                style={{ isolation: "isolate" }}
                d="M60 250H43a2 2 0 01-2-2v-7h1v7a1 1 0 001 1h17a1 1 0 001-1v-11a1 1 0 00-1-1H49v-1h11a2 2 0 012 2v11a2 2 0 01-2 2z"
            />
            <path fill="#43458b" d="M41 242v-5a2 2 0 012-2h7v7z" />
            <path
                fill="#fff"
                d="M48.73 237.408a.703.703 0 11.676-.703.703.703 0 01-.676.703zm-.297 1.297a.704.704 0 11-.704-.705.704.704 0 01.704.704zm-1.703-1.297a.704.704 0 11.677-.704.704.704 0 01-.677.704zm-.297 1.297a.704.704 0 11-.704-.705.704.704 0 01.704.704zm-1.703-1.297a.704.704 0 11.677-.704.704.704 0 01-.677.704zm-.297 1.297a.704.704 0 11-.704-.705.704.704 0 01.704.704zm-1.703-1.297a.703.703 0 11.676-.703.703.703 0 01-.676.703zm0 2.592a.704.704 0 11-.678.703.704.704 0 01.678-.703zm2 0a.704.704 0 11-.678.703.704.704 0 01.678-.703zm2 0a.704.704 0 11-.678.703.704.704 0 01.678-.703zm2 0a.704.704 0 11-.678.703.704.704 0 01.678-.703z"
            />
            <path
                fill="#fff"
                opacity=".5"
                style={{ isolation: "isolate" }}
                d="M50 239.21a.703.703 0 110-1.011zm-9-.975a.697.697 0 011.219.47.703.703 0 01-.703.703.694.694 0 01-.516-.234z"
            />
        </svg>
    </AccessibleIcon.Root>
);

const LanguageSelector = () => (
    <DropdownMenu modal={false}>
        <DropdownMenuTrigger
            title="Change language"
            className="inline-flex size-5 items-center justify-center text-blue-600"
        >
            <AccessibleIcon.Root label="Change language">
                <Languages className="h-4 w-4" />
            </AccessibleIcon.Root>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link locale="es" href="/">
                        <SpanishFlag />
                        Español
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link locale="en" href="/">
                        <EnglishFlag />
                        English
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
);

export { LanguageSelector };
