import { Link } from "@/navigation";
import { cn } from "@lib/cn";
import { ArrowUpRight } from "lucide-react";

const BookCard = ({
    className,
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Link>) => (
    <Link
        {...props}
        className={cn(
            "relative flex h-[600px] origin-center flex-col justify-end rounded-3xl border object-cover p-3 md:p-4",
            className,
        )}>
        {children}
        <span className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full border bg-black/60 text-white backdrop-blur-lg">
            <ArrowUpRight className="size-8" aria-hidden focusable="false" />
        </span>
    </Link>
);

export { BookCard };
