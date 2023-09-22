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
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Languages className="mr-2 h-4 w-4" />
                Language
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="/">English</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/">Spanish</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
