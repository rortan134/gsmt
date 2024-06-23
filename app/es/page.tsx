import { Link } from "@/navigation";
import prisma from "@/prisma";
import { LanguageSelector } from "@components/language-selector";
import { PageShell } from "@components/page-shell";
import { dayjs } from "@lib/dayjs";
import { Braces, BrainCircuit, Eye, Github, Globe, Mail, Twitter, Watch } from "lucide-react";
import * as React from "react";

export const dynamic = "force-static";
export const revalidate = 1;

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
                <h1 className="text-sm font-medium text-foreground md:text-base">
                    <Link
                        href="/"
                        className="flex items-center underline-offset-1 hover:underline hover:opacity-80">
                        @gsmt
                    </Link>
                </h1>
                <LanguageSelector />
            </header>
            <section className="container mt-9 flex flex-col space-y-6">
                <div className="flex w-full flex-col space-y-4">
                    <div className="flex w-full justify-between">
                        <span className="text-xs text-muted-foreground/90">
                            <span className="text-muted-foreground/60">IPA</span>&nbsp;
                            <i>/ˈɡɪlbət/</i> —&nbsp;software developer
                        </span>
                        <React.Suspense>
                            <PageViews />
                        </React.Suspense>
                    </div>
                    <p className="text-sm text-foreground">
                        Developer at heart, passionate about building a better web, creating great
                        experiences for end users, and trying to solve real-world{" "}
                        <Globe
                            className="inline-block h-4 w-4 opacity-50"
                            aria-hidden
                            focusable="false"
                        />{" "}
                        problems with an eye for design. I&apos;m also a fan of open-source
                        software, and cool looking watches{" "}
                        <Watch
                            className="inline-block h-4 w-4 opacity-50"
                            aria-hidden
                            focusable="false"
                        />
                        .
                        <br />
                        <br />
                        Introduced to technology at a young age, I have been building software for
                        over 3 years now. Doing everything from data scrapers{" "}
                        <Braces
                            className="inline-block h-4 w-4 opacity-50"
                            aria-hidden
                            focusable="false"
                        />
                        , dynamic websites and APIs, native applications, fractal simulations, data
                        visualizations and much more.
                        <br />
                        <br />
                        Outside of programming, I enjoy doing photography and traveling. I&apos;m
                        always looking for new ways to use technology to make a positive impact on
                        people and consistently improve. I have been particularly interested in
                        using ML{" "}
                        <BrainCircuit
                            className="inline-block h-4 w-4 opacity-50"
                            aria-hidden
                            focusable="false"
                        />{" "}
                        to create more personalized and engaging in-app experiences.
                    </p>
                </div>
            </section>
            <section className="container mt-12 flex w-full flex-col space-y-4">
                <h4 className="text-sm text-foreground">Find me on the links below</h4>
                <div className="flex items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0">
                    <Link
                        href="https://twitter.com/meetgilberto"
                        title="Twitter"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm md:w-fit">
                        <Twitter className="mr-2 h-4 w-4" aria-hidden focusable="false" />
                        Twitter
                    </Link>
                    <Link
                        href="https://github.com/rortan134"
                        title="GitHub"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm md:w-fit">
                        <Github className="mr-2 h-4 w-4" aria-hidden focusable="false" />
                        Github
                    </Link>
                    <Link
                        href="mailto:gsmt.dev@gmail.com"
                        title="Email"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm md:w-fit">
                        <Mail className="mr-2 h-4 w-4" aria-hidden focusable="false" />
                        gsmt.dev@gmail.com
                    </Link>
                </div>
            </section>
            <section className="container mt-12 grid w-full gap-6 md:grid-cols-2">
                <div className="flex w-full flex-col space-y-2">
                    <h4 className="text-sm text-foreground">Your timezone</h4>
                    <div className="flex items-center justify-between rounded-xl border p-3">
                        <div className="flex flex-col space-y-1">
                            <span className="text-xs font-medium text-muted-foreground/90">
                                {dayjs.tz.guess()}
                            </span>
                            <span className="text-xs text-muted-foreground/60">
                                (GMT {dayjs().tz(dayjs.tz.guess()).format("Z")})
                            </span>
                        </div>
                        <div className="flex flex-col space-y-0.5">
                            <span className="text-xs font-medium text-muted-foreground/90">
                                {dayjs().tz(dayjs.tz.guess()).format("h:mm A")}
                            </span>
                            <span className="text-xs text-muted-foreground/60">
                                {dayjs().tz(dayjs.tz.guess()).format("ddd, MMM DD, YYYY")}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col space-y-2">
                    <h4 className="text-sm text-foreground">My timezone</h4>
                    <div className="flex items-center justify-between rounded-xl border p-3">
                        <div className="flex flex-col space-y-1">
                            <span className="text-xs font-medium text-muted-foreground/90">
                                Europe/Madrid
                            </span>
                            <span className="text-xs text-muted-foreground/60">
                                (GMT {dayjs().tz("Europe/Madrid").format("Z")})
                            </span>
                        </div>
                        <div className="flex flex-col space-y-0.5">
                            <span className="text-xs font-medium text-muted-foreground/90">
                                {dayjs().tz("Europe/Madrid").format("h:mm A")}
                            </span>
                            <span className="text-xs text-muted-foreground/60">
                                {dayjs().tz("Europe/Madrid").format("ddd, MMM DD, YYYY")}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-12">
                <span className="text-xs text-muted-foreground/50">
                    @ {new Date().getUTCFullYear()} GSMT. All rights reserved.
                </span>
            </div>
            <React.Suspense>
                <UpdateServerCounter />
            </React.Suspense>
        </PageShell>
    );
}
