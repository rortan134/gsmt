import { Link } from "@/navigation";
import prisma from "@/prisma";
import { LanguageSelector } from "@components/language-selector";
import { PageShell } from "@components/page-shell";
import { Signature } from "@components/signature";
import { Timezone } from "@components/timezone";
import {
    ArrowUpRight,
    Asterisk,
    Braces,
    BrainCircuit,
    Eye,
    Github,
    Globe,
    Mail,
    Twitter,
    Watch,
} from "lucide-react";
import * as React from "react";

async function updateCount() {
    try {
        await prisma.counter.upsert({
            where: { id: 1 },
            update: { visitCount: { increment: 1 } },
            create: { id: 1, visitCount: 1 },
        });
    } catch (error) {
        console.error(error);
    }
}

async function UpdateServerCounter() {
    await updateCount();
    return null;
}

async function getPageViewCount() {
    const data = await prisma.counter.findUnique({ where: { id: 1 } });
    return data?.visitCount ?? "?";
}

async function PageViews() {
    const pageViewCount = await getPageViewCount();

    return (
        <span className="flex items-center text-xs text-muted-foreground/80">
            <Eye className="mr-1 h-4 w-4" aria-hidden focusable="false" />
            {pageViewCount} page views
        </span>
    );
}

export default function HomePage() {
    return (
        <PageShell>
            <header className="container flex w-full items-center justify-between">
                <Link href="/" className="underline-offset-1 hover:underline hover:opacity-80">
                    <h1 className="text-sm font-medium text-foreground md:text-base">@gsmt</h1>
                </Link>
                <LanguageSelector />
            </header>
            <section className="container mt-12 flex w-full items-center justify-between">
                <span className="text-xs text-muted-foreground/90">
                    <span className="pr-0.5 text-muted-foreground/60">IPA</span>&nbsp;
                    <i>/ˈɡɪlbət/</i> —&nbsp;software developer
                </span>
                <React.Suspense>
                    <PageViews />
                </React.Suspense>
            </section>
            <section className="container mt-6 flex flex-col space-y-4">
                <h1 className="text-sm font-semibold text-foreground">Today</h1>
                <p className="text-sm text-foreground">
                    Developer at heart, passionate about building a better web, creating great
                    experiences for end users, and trying to solve real-world{" "}
                    <Globe
                        className="inline-block h-4 w-4 opacity-50"
                        aria-hidden
                        focusable="false"
                    />{" "}
                    problems with an eye for design. I&apos;m also a fan of open-source software,
                    and cool looking watches{" "}
                    <Watch
                        className="inline-block h-4 w-4 opacity-50"
                        aria-hidden
                        focusable="false"
                    />
                    .
                    <br />
                    <br />
                    Introduced to technology at a young age, I have been building software for over
                    3 years now. Playing with prototypes and doing everything from data scrapers{" "}
                    <Braces
                        className="inline-block h-4 w-4 opacity-50"
                        aria-hidden
                        focusable="false"
                    />
                    , dynamic websites and APIs, charmful native applications, fractal simulations,
                    data visualizations and more.
                    <br />
                    <br />
                    Outside of programming, I enjoy doing photography and traveling. Currently
                    studying computer science and always looking for new ways tech can make a
                    positive impact on people and consistently improve through learning. I have been
                    particularly interested in using ML{" "}
                    <BrainCircuit
                        className="inline-block h-4 w-4 opacity-50"
                        aria-hidden
                        focusable="false"
                    />{" "}
                    to create more personalized and engaging in-app experiences.
                </p>
                <p className="text-sm text-foreground">
                    Check out my work in the navigation bar below.
                </p>
                <p className="text-sm text-foreground">Also find me on the links below</p>
                <div className="flex flex-col items-center gap-2.5 md:flex-row">
                    <Link
                        href="https://twitter.com/meetgilberto"
                        title="Twitter"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm md:w-fit">
                        <Twitter className="mr-2 h-4 w-4" aria-hidden focusable="false" />
                        Twitter
                        <ArrowUpRight className="ml-1 size-3 text-muted-foreground/80" />
                    </Link>
                    <Link
                        href="https://github.com/rortan134"
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm md:w-fit">
                        <Github className="mr-2 h-4 w-4" aria-hidden focusable="false" />
                        Github
                        <ArrowUpRight className="ml-1 size-3 text-muted-foreground/80" />
                    </Link>
                    <Link
                        href="mailto:gsmt.dev@gmail.com"
                        title="Email"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm md:w-fit">
                        <Mail className="mr-2 h-4 w-4" aria-hidden focusable="false" />
                        gsmt.dev@gmail.com
                    </Link>
                    <Link
                        href="https://read.cv/gsmt"
                        title="read.cv"
                        target="_blank"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm md:w-fit">
                        <Asterisk className="mr-1.5 h-4 w-4" aria-hidden focusable="false" />
                        CV
                        <ArrowUpRight className="ml-1 size-3 text-muted-foreground/80" />
                    </Link>
                </div>
            </section>
            <Timezone />
            <footer className="container mt-16 flex flex-row items-center justify-between">
                <span className="text-[10px] text-muted-foreground/60">
                    @ {new Date().getUTCFullYear()} GSMT. All rights reserved.
                </span>
                <div className="inline-flex shrink gap-1 md:gap-2">
                    <div className="inline-flex flex-col">
                        <span className="truncate text-[10px] text-muted-foreground/60">
                            gsmt.link
                        </span>
                        <Link
                            href="https://github.com/rortan134/gsmt"
                            target="_blank"
                            className="truncate text-[10px] text-muted-foreground/60 underline underline-offset-4">
                            view source
                        </Link>
                    </div>
                    <Signature />
                </div>
            </footer>
            <React.Suspense>
                <UpdateServerCounter />
            </React.Suspense>
        </PageShell>
    );
}
