import { Link } from "@/navigation";
import prisma from "@/prisma";
import { Carousel } from "@components/carousel";
import { Copy } from "@components/copy";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@components/drawer";
import { LanguageSelector } from "@components/language-selector";
import { MessageInput } from "@components/message-input";
import { PageShell } from "@components/page-shell";
import { Signature } from "@components/signature";
import { Timezone } from "@components/timezone";
import { slugify } from "@lib/slugify";
import { ArrowUpRight, Asterisk, Braces, BrainCircuit, Clipboard, Eye, Github, Globe, Home, Mail, MessageCircle, Watch } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import * as React from "react";


export const metadata: Metadata = {
    title: "Gilberto",
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
        <>
            <PageShell>
                <header className="container flex w-full items-center justify-between">
                    <Link href="/" className="underline-offset-1 hover:underline hover:opacity-80">
                        <h1 className="text-sm font-medium text-foreground md:text-base">@gsmt</h1>
                    </Link>
                    <LanguageSelector />
                </header>
                <section className="container mt-12 flex w-full items-center justify-between">
                    <div className="flex flex-col space-y-0.5">
                        <span className="text-xs text-muted-foreground/90">
                            <span className="pr-0.5 text-muted-foreground/60">IPA</span>&nbsp;
                            <i>/ˈɡɪlbət/</i> —&nbsp;desarrollador,{" "}
                            <span className="opacity-60">creador</span>
                        </span>
                        <h1 className="text-sm font-medium text-foreground">Gilberto</h1>
                    </div>
                    <React.Suspense>
                        <PageViews />
                    </React.Suspense>
                </section>
                <section className="container mt-6 flex flex-col space-y-4">
                    <h1 className="text-sm font-semibold text-foreground">Hoy</h1>
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
                    <p className="text-sm text-foreground">Encuéntrame también en los enlaces a continuación</p>
                    <div className="flex flex-col items-center gap-2.5 md:flex-row">
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
                        <div className="flex h-fit w-fit items-center pr-6">
                            <Link
                                href="mailto:gsmt.dev@gmail.com"
                                title="Email"
                                className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-6 text-sm md:w-fit">
                                <Mail className="mr-2 h-4 w-4" aria-hidden focusable="false" />
                                gsmt.dev@gmail.com
                            </Link>
                            <Copy text="gsmt.dev@gmail.com">
                                <button className="absolute right-1 size-5">
                                    <Clipboard className="h-4 w-4" />
                                </button>
                            </Copy>
                        </div>
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
                <section className="container mt-24">
                    <Carousel>
                        <div className="flex h-full flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
                            <div className="h-full w-full bg-neutral-400" />
                        </div>
                        <div className="flex h-full flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
                            <div className="h-full w-full bg-neutral-400" />
                        </div>
                        <div className="flex h-full flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
                            <div className="h-full w-full bg-neutral-400" />
                        </div>
                        <div className="flex h-full flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
                            <div className="h-full w-full bg-neutral-400" />
                        </div>
                        <div className="flex h-full flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
                            <div className="h-full w-full bg-neutral-400" />
                        </div>
                    </Carousel>
                </section>
                <Timezone />
                <footer className="container mt-16 flex flex-row items-center justify-between">
                    <span className="text-[10px] text-muted-foreground/60">
                        @ {new Date().getUTCFullYear()} GSMT. Todos los derechos reservados.
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
                                ver código fuente
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
    <nav className="fixed inset-x-0 bottom-0 pb-12">
        <div className="absolute bottom-3 left-1/2 flex w-fit -translate-x-1/2 items-center justify-between overflow-hidden rounded-3xl border bg-neutral-200/80 px-1 py-0.5 shadow backdrop-blur-xl">
            <Link
                href="/"
                title="Home"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-300/80 px-4 py-1.5">
                <Home className="h-4 w-4" />
                <span className="sr-only">Ir a inicio</span>
            </Link>
            {/* <Drawer>
                <DrawerTrigger
                    title="Featured projects"
                    className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-1.5 text-sm font-medium">
                    Proyectos
                    <span className="sr-only">Expandir panel de proyectos</span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerTitle>Proyectos</DrawerTitle>
                    <DrawerDescription className="max-w-lg px-4">
                        En la actualidad me centro principalmente en el ecosistema web, pero ya trabajé con muchos lenguajes y plataformas.{" "}
                        <span className="opacity-50">—&nbsp;Haga clic en un proyecto para ampliarlo</span>
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
            </Drawer> */}
            <Drawer>
                <DrawerTrigger
                    title="Enviar un mensaje"
                    className="inline-flex w-full items-center justify-center rounded-2xl px-4 py-1.5">
                    <MessageCircle className="h-4 w-4" />
                    <span className="sr-only">Enviar un mensaje</span>
                </DrawerTrigger>
                <DrawerContent>
                    <MessageInput />
                </DrawerContent>
            </Drawer>
        </div>
    </nav>
);