import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { Languages } from "lucide-react";
import Link from "next/link";

export function LanguageSwitch() {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="inline-flex size-5 items-center justify-center text-blue-600">
                <Languages className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="/">Español</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/">English</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
