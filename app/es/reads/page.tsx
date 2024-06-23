import { BookCard } from "@components/book-card";
import { LanguageSelector } from "@components/language-selector";
import { PageShell } from "@components/page-shell";
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
