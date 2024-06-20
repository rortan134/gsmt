import { LanguageSelector } from "@components/language-selector";
import { PageShell } from "@components/page-shell";

export const dynamic = "force-static";

export default function ReadsPage() {
    return (
        <PageShell>
            <header className="container flex w-full items-center justify-between">
                <h1 className="flex items-center text-sm font-medium text-foreground underline-offset-1 hover:underline hover:opacity-80 md:text-base">
                    Recommended reads
                </h1>
                <LanguageSelector />
            </header>
            <section className="mt-24 grid gap-2 md:grid-cols-3"></section>
        </PageShell>
    );
}
