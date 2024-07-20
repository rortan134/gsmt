import { Link } from "@/navigation";
import { Copy } from "@components/copy";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@components/drawer";
import { Header } from "@components/header";
import { LanguageSelector } from "@components/language-selector";
import { MessageInput } from "@components/message-input";
import { PageShell } from "@components/page-shell";
import { Signature } from "@components/signature";
import { Timezone } from "@components/timezone";
import { slugify } from "@lib/slugify";
import { getPageViewCount, UpdateServerCounter } from "@lib/views";
import {
    ArrowUpRight,
    Asterisk,
    Braces,
    BrainCircuit,
    Check,
    Clipboard,
    Eye,
    Github,
    Globe,
    Home,
    Mail,
    MessageCircle,
    Twitter,
    Watch,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import * as React from "react";

export const metadata: Metadata = {
    title: "Gilbert",
};

const projects = [
    {
        name: "Project",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum veniam at nostrum.",
        tech: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
        image: "/",
    },
];

async function PageViews() {
    const pageViewCount = await getPageViewCount();
    return (
        <span className="inline-flex items-center font-serif text-xs text-muted-foreground/80">
            <Eye className="mr-1 h-4 w-4" aria-hidden focusable="false" />
            {pageViewCount} page views
        </span>
    );
}

export default function HomePage() {
    return (
        <>
            <PageShell>
                <Header />
                <section className="container mt-12 flex w-full items-center justify-between">
                    <div className="flex flex-col space-y-2">
                        <h1 className="font-serif text-sm font-medium text-foreground">Gilbert</h1>
                        <span className="font-serif text-xs text-muted-foreground">
                            <span className="mr-0.5 opacity-60">IPA</span>&nbsp;
                            <i className="mr-1">/ˈɡɪlbət/</i> —&nbsp;software developer,{" "}
                            <span className="opacity-60">maker.</span>
                        </span>
                    </div>
                    <React.Suspense>
                        <PageViews />
                    </React.Suspense>
                </section>
                <section className="container mt-8 flex flex-col space-y-4">
                    <h1 className="text-sm font-semibold text-foreground">Today</h1>
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
                        over 3 years now. Playing with prototypes and doing everything from data
                        scrapers{" "}
                        <Braces
                            className="inline-block h-4 w-4 opacity-50"
                            aria-hidden
                            focusable="false"
                        />
                        , dynamic websites and APIs, charmful native applications, fractal
                        simulations, data visualizations and more.
                        <br />
                        <br />
                        Outside of programming, I enjoy doing photography and traveling. Currently
                        studying computer science and always looking for new ways tech can make a
                        positive impact on people and consistently improve through learning. I have
                        been particularly interested in using ML{" "}
                        <BrainCircuit
                            className="inline-block h-4 w-4 opacity-50"
                            aria-hidden
                            focusable="false"
                        />{" "}
                        to create more personalized and engaging in-app experiences.
                    </p>
                    <p className="text-sm text-foreground">Find me on the links below</p>
                    <div className="flex flex-col items-center gap-2.5 md:flex-row">
                        <div className="relative flex h-fit w-fit items-center">
                            <Link
                                href="mailto:gsmt.dev@gmail.com"
                                title="Email"
                                className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent pl-4 pr-11 text-sm md:w-fit">
                                <Mail className="mr-3 size-4" aria-hidden focusable="false" />
                                gsmt.dev@gmail.com
                            </Link>
                            <Copy text="gsmt.dev@gmail.com">
                                <button
                                    title="Copy"
                                    aria-label="Copy email"
                                    className="group absolute right-2 z-10 inline-flex size-5 items-center justify-center rounded-[40%] bg-card p-3 hover:opacity-60 active:opacity-50">
                                    <Clipboard className="size-4 transition-all group-data-[copied=true]:opacity-0" />
                                    <Check className="absolute size-4 transition-all group-data-[copied=false]:opacity-0" />
                                    <span className="sr-only">Copy email</span>
                                </button>
                            </Copy>
                        </div>
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
                            GitHub
                            <ArrowUpRight className="ml-1 size-3 text-muted-foreground/80" />
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
            <FloatingNavigation />
        </>
    );
}

const FloatingNavigation = () => (
    <nav className="fixed inset-x-0 bottom-0 z-20 pb-12">
        <div className="absolute bottom-3 left-1/2 flex w-fit -translate-x-1/2 items-center justify-between overflow-hidden rounded-3xl border bg-neutral-200/80 px-1 py-0.5 shadow backdrop-blur-xl">
            <Link
                href="/"
                title="Home"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-300/80 px-4 py-1.5">
                <Home className="h-4 w-4" />
                <span className="sr-only">Go to home page</span>
            </Link>
            <Drawer>
                <DrawerTrigger
                    title="Featured projects"
                    className="hidden w-full items-center justify-center rounded-2xl px-5 py-1.5 text-sm font-medium">
                    Work
                    <span className="sr-only">Expand work drawer</span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerTitle>
                        Work <span className="opacity-60">—&nbsp;I like building things</span>
                    </DrawerTitle>
                    <DrawerDescription className="max-w-lg px-4">
                        My focus these days is mainly on the web ecosystem, but I have worked with
                        many languages and platforms.{" "}
                        <span className="opacity-50">—&nbsp;Click on a project to expand</span>
                    </DrawerDescription>
                    {projects.map(({ name, description, tech, image }, i) => (
                        <Link
                            key={i}
                            href={`/projects/${slugify(name)}`}
                            className="mt-6 flex w-full flex-col space-y-0.5 pr-4 md:pl-4">
                            <h3 className="text-sm font-medium text-foreground">{name}</h3>
                            <p className="text-xs text-muted-foreground">{description}</p>
                            <span className="truncate text-xs text-muted-foreground">
                                {tech.join(" • ")}
                            </span>
                            <Image src={image} alt="" />
                        </Link>
                    ))}
                </DrawerContent>
            </Drawer>
            <Link
                href="/reads"
                title="Recommended reads"
                className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-1.5 text-sm font-medium">
                Reads
            </Link>
            <Drawer>
                <DrawerTrigger
                    title="Send a Message"
                    className="inline-flex w-full items-center justify-center rounded-2xl px-4 py-1.5">
                    <MessageCircle className="h-4 w-4" />
                    <span className="absolute right-3.5 top-1.5 size-2 rounded-full bg-green-500" />
                    <span className="sr-only">Send a Message</span>
                </DrawerTrigger>
                <DrawerContent>
                    <MessageInput />
                </DrawerContent>
            </Drawer>
        </div>
    </nav>
);
