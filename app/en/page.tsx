import { Link } from "@/i18n/routing";
import { Copy } from "@components/copy";
import { Header } from "@components/header";
import { S1, S2 } from "@components/icons";
import { Line } from "@components/line";
import { LiveCount } from "@components/live-count";
import { Navigation } from "@components/navigation";
import { PageShell } from "@components/page-shell";
import { Projects } from "@components/projects";
import { Signature } from "@components/signature";
import { Timezone } from "@components/timezone";
import { cn } from "@lib/cn";
import { dayjs } from "@lib/dayjs";
import { formatCompactNumber } from "@lib/format";
import { getPageViewCount, UpdateServerViewCounter } from "@lib/views";
import {
    ArrowUpRight,
    Braces,
    BrainCircuit,
    Check,
    Clipboard,
    Eye,
    Github,
    Globe,
    Mail,
    Twitter,
    Watch,
} from "lucide-react";
import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
    title: "Gilbert",
};

async function PageViews() {
    const pageViewCount = await getPageViewCount();

    return (
        <span
            className={cn(
                "inline-flex items-center whitespace-nowrap font-serif text-muted-foreground/80 text-xs"
            )}
        >
            <Eye aria-hidden className="mr-1 size-4" focusable="false" />
            <span className="sr-only">Views</span>
            {formatCompactNumber(pageViewCount)} page views
        </span>
    );
}

function PageViewsFallback() {
    return (
        <span
            className={cn(
                "inline-flex items-center whitespace-nowrap font-serif text-muted-foreground/80 text-xs"
            )}
        >
            <Eye aria-hidden className="mr-1 size-4" focusable="false" />
            <span className="sr-only">Views</span>
            Loading...
        </span>
    );
}

export default function HomePage() {
    return (
        <>
            <PageShell>
                <Header />
                <section className="container relative mt-16 flex w-full items-center justify-between">
                    <Line className="-top-20 left-5" variant="vertical" />
                    <Line className="-top-20 right-6" variant="vertical" />
                    <Line className="-top-20 right-14" variant="vertical" />
                    <Line className="-top-16" />
                    <Line className="-top-8" />
                    <Line className="-top-1.5" />
                    <Line className="top-8 w-11/12" />
                    <div className="flex flex-col gap-y-3">
                        <h1 className="whitespace-nowrap font-medium font-serif text-foreground text-sm">
                            Gilbert
                        </h1>
                        <span className="whitespace-pre-wrap font-serif text-muted-foreground text-xs">
                            <span className="mr-0.5 opacity-60">IPA</span>&nbsp;
                            <i className="mr-0.5">/ˈɡɪlbət/</i> —&nbsp;software
                            developer,{" "}
                            <span className="opacity-60">maker.</span>
                        </span>
                        <Line className="-right-4 -top-20" variant="vertical" />
                    </div>
                    <div className="relative flex items-end justify-end gap-3 md:gap-4">
                        <Line className="-left-2 -top-20" variant="vertical" />
                        <React.Suspense fallback={<PageViewsFallback />}>
                            <PageViews />
                        </React.Suspense>
                        <LiveCount />
                    </div>
                    <Line className="-bottom-1.5" />
                </section>
                <section className="container mt-12 flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="w-full flex-1 truncate font-semibold text-foreground text-sm">
                            Today
                            <span className="ml-3 inline-block font-serif opacity-50">
                                {dayjs().format("DD")}
                            </span>
                        </h1>
                        <div className="flex items-center justify-end space-x-3">
                            <S1 />
                            <S2 />
                        </div>
                    </div>
                    <p className="text-foreground text-sm">
                        Developer at heart, passionate about building a better
                        web, creating great experiences for end users, and
                        trying to solve real-world{" "}
                        <Globe
                            aria-hidden
                            className="inline-block size-4 opacity-50"
                            focusable="false"
                        />{" "}
                        problems with an eye for design. I&apos;m also a fan of
                        open-source software, and cool looking watches{" "}
                        <Watch
                            aria-hidden
                            className="inline-block size-4 opacity-50"
                            focusable="false"
                        />
                        .
                        <br />
                        <br />
                        Introduced to technology at a young age, I have been
                        building software for over 3 years now. Playing with
                        prototypes and doing everything from data scrapers{" "}
                        <Braces
                            aria-hidden
                            className="inline-block size-4 opacity-50"
                            focusable="false"
                        />
                        , dynamic websites and APIs, charmful native
                        applications, fractal simulations, data visualizations
                        and more.
                        <br />
                        <br />
                        Outside of programming, I enjoy doing photography and
                        traveling. Currently studying computer science and
                        always looking for new ways tech can make a positive
                        impact on people and consistently improve through
                        learning. I have been particularly interested in using
                        ML{" "}
                        <BrainCircuit
                            aria-hidden
                            className="inline-block size-4 opacity-50"
                            focusable="false"
                        />{" "}
                        to create more personalized and engaging in-app
                        experiences.
                    </p>
                    <p className="text-foreground text-sm">
                        Find me on the links below
                    </p>
                    <div className="group flex flex-col items-center gap-3 md:flex-row">
                        <div className="relative flex h-fit w-full items-center md:w-fit">
                            <Link
                                className="flex h-9 w-full items-center justify-center whitespace-nowrap rounded-3xl border bg-transparent pr-11 pl-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit"
                                href="mailto:gsmt.dev@gmail.com"
                                title="Email"
                            >
                                <Mail
                                    aria-hidden
                                    className="mr-3 size-4"
                                    focusable="false"
                                />
                                <span className="sr-only">Email</span>
                                gsmt.dev@gmail.com
                            </Link>
                            <Copy text="gsmt.dev@gmail.com">
                                <button
                                    aria-label="Copy email"
                                    className="group/btn absolute right-2 z-10 inline-flex size-5 items-center justify-center rounded-[40%] bg-card p-3 hover:opacity-100 active:opacity-50 group-hover:opacity-75"
                                    title="Copy"
                                    type="button"
                                >
                                    <Clipboard className="size-4 transition-all group-data-[copied=true]/btn:opacity-0" />
                                    <Check className="absolute size-4 transition-all group-data-[copied=false]/btn:opacity-0" />
                                    <span className="sr-only">Copy email</span>
                                </button>
                            </Copy>
                        </div>
                        <Link
                            className="flex h-9 w-full items-center justify-center whitespace-nowrap rounded-3xl border bg-transparent px-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit"
                            href="https://twitter.com/gsmmtt"
                            rel="noreferrer noopener"
                            target="_blank"
                            title="Twitter"
                        >
                            <Twitter
                                aria-hidden
                                className="mr-3 size-4"
                                focusable="false"
                            />
                            <span className="sr-only">
                                X (formerly Twitter)
                            </span>
                            Twitter
                            <ArrowUpRight className="ml-1.5 size-3" />
                        </Link>
                        <Link
                            className="flex h-9 w-full items-center justify-center whitespace-nowrap rounded-3xl border bg-transparent px-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit"
                            href="https://github.com/rortan134"
                            rel="noreferrer noopener"
                            target="_blank"
                            title="GitHub"
                        >
                            <Github
                                aria-hidden
                                className="mr-3 size-4"
                                focusable="false"
                            />
                            <span className="sr-only">GitHub</span>
                            GitHub
                            <ArrowUpRight className="ml-1.5 size-3" />
                        </Link>
                    </div>
                </section>
                <section className="container mt-24">
                    <Projects />
                    <p className="mt-4 text-muted-foreground text-sm">
                        My focus these days is mainly on the web ecosystem, but
                        I have worked with many languages and platforms.
                    </p>
                </section>
                <Timezone />
                <footer className="container mt-16 flex flex-row items-center justify-between">
                    <div className="flex flex-col space-y-1">
                        <span className="text-[10px] text-muted-foreground/60">
                            <Globe
                                aria-hidden
                                className="mr-1 inline-block size-3"
                                focusable="false"
                            />
                            <span className="sr-only">Based in Spain</span>
                            Spain
                        </span>
                        <span className="text-[10px] text-muted-foreground/60">
                            @ {new Date().getUTCFullYear()} GSMT. All rights
                            reserved.
                        </span>
                        <span className="text-[10px] text-muted-foreground/60">
                            Have a great day!
                        </span>
                    </div>
                    <div className="inline-flex shrink gap-1 md:gap-2">
                        <div className="inline-flex flex-col">
                            <span className="truncate text-[10px] text-muted-foreground/60">
                                gsmt.link
                            </span>
                            <Link
                                className="truncate text-[10px] text-muted-foreground/60 underline underline-offset-4"
                                href="https://github.com/rortan134/gsmt"
                                target="_blank"
                            >
                                view source
                            </Link>
                        </div>
                        <Signature />
                    </div>
                </footer>
                <React.Suspense fallback={null}>
                    <UpdateServerViewCounter />
                </React.Suspense>
            </PageShell>
            <Navigation />
        </>
    );
}
