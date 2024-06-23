import { Link } from "@/navigation";
import { LanguageSelector } from "@components/language-selector";
import { PageShell } from "@components/page-shell";
import { cn } from "@lib/cn";
import { ArrowUpRight } from "lucide-react";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import * as React from "react";

export default function ReadsPage() {
    return (
        <PageShell>
            <header className="container flex w-full items-center justify-between">
                <h1 className="flex items-center text-sm font-medium text-foreground underline-offset-1 hover:underline hover:opacity-80 md:text-base">
                    Recommended reads
                </h1>
                <LanguageSelector />
            </header>
            <section
                role="presentation"
                className="container mt-24 grid gap-5 md:grid-cols-12 md:gap-[26px_28px] lg:gap-[26px_32px]">
                <BookCard href="/" className="col-span-8"></BookCard>
                <BookCard href="/" className="col-span-4"></BookCard>
                <BookCard href="/" className="col-span-4"></BookCard>
                <BookCard href="/" className="col-span-8"></BookCard>
            </section>
        </PageShell>
    );
}

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
