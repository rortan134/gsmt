import { Link } from "@/navigation";
import { Carousel } from "@components/carousel";
import { Copy } from "@components/copy";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@components/drawer";
import { Header } from "@components/header";
import { Line } from "@components/line";
import { LiveCount } from "@components/live-count";
import { MessageInput } from "@components/message-input";
import { PageShell } from "@components/page-shell";
import { Signature } from "@components/signature";
import { Timezone } from "@components/timezone";
import { slugify } from "@lib/slugify";
import { getPageViewCount, UpdateServerCounter } from "@lib/views";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
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
    Watch,
} from "lucide-react";
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

async function PageViews() {
    const pageViewCount = await getPageViewCount();
    return (
        <span className="inline-flex select-none items-center whitespace-nowrap font-serif text-xs text-muted-foreground/80">
            <AccessibleIcon.Root label="Visitas">
                <Eye className="mr-1 size-4" />
            </AccessibleIcon.Root>
            {pageViewCount} visitas
        </span>
    );
}

export default function HomePage() {
    return (
        <PageShell>
            <Line />
            <Header />
            <Line />
            <section className="container relative mt-9 flex w-full items-end justify-between">
                <Line variant="vertical" className="left-2" />
                <Line variant="vertical" className="right-2" />
                <Line variant="vertical" className="right-8" />
                <Line variant="vertical" className="right-32" />
                <div className="flex flex-col gap-y-3">
                    <Line className="-top-0.5" />
                    <h1 className="whitespace-nowrap font-serif text-sm font-medium text-foreground">
                        Gilberto
                    </h1>
                    <Line className="top-6" />
                    <span className="whitespace-pre-wrap font-serif text-xs text-muted-foreground">
                        <span className="mr-0.5 opacity-60">IPA</span>&nbsp;
                        <i className="mr-0.5">/ˈɡɪlbət/</i> —&nbsp;desarrollador,{" "}
                        <span className="opacity-60">creador.</span>
                    </span>
                </div>
                <div className="flex items-end justify-end gap-2 md:gap-4">
                    <React.Suspense>
                        <PageViews />
                    </React.Suspense>
                    <LiveCount />
                </div>
            </section>
            <div className="container relative mt-2">
                <Line />
            </div>
            <section className="container mt-10 flex flex-col space-y-4">
                <h1 className="text-sm font-semibold text-foreground">Hoy</h1>
                <p className="text-sm text-foreground">
                    Developer at heart, passionate about building a better web, creating great
                    experiences for end users, and trying to solve real-world{" "}
                    <Globe
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />{" "}
                    problems with an eye for design. I&apos;m also a fan of open-source software,
                    and cool looking watches{" "}
                    <Watch
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />
                    .
                    <br />
                    <br />
                    Introduced to technology at a young age, I have been building software for over
                    3 years now. Playing with prototypes and doing everything from data scrapers{" "}
                    <Braces
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
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
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />{" "}
                    to create more personalized and engaging in-app experiences.
                </p>
                <p className="text-sm text-foreground">
                    Encuéntrame también en los enlaces a continuación
                </p>
                <div className="group flex flex-col items-center gap-3 md:flex-row">
                    <div className="relative flex h-fit w-full items-center md:w-fit">
                        <Link
                            href="mailto:gsmt.dev@gmail.com"
                            title="Email"
                            className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent pl-4 pr-11 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit">
                            <AccessibleIcon.Root label="Email">
                                <Mail className="mr-3 size-4" />
                            </AccessibleIcon.Root>
                            gsmt.dev@gmail.com
                        </Link>
                        <Copy text="gsmt.dev@gmail.com">
                            <button
                                title="Copiar"
                                aria-label="Copiar correo electrónico"
                                className="group/btn absolute right-2 z-10 inline-flex size-5 items-center justify-center rounded-[40%] bg-card p-3 hover:opacity-100 active:opacity-50 group-hover:opacity-75">
                                <Clipboard className="size-4 transition-all group-data-[copied=true]/btn:opacity-0" />
                                <Check className="absolute size-4 transition-all group-data-[copied=false]/btn:opacity-0" />
                                <span className="sr-only">Copiar correo electrónico</span>
                            </button>
                        </Copy>
                    </div>
                    <Link
                        href="https://github.com/rortan134"
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit">
                        <AccessibleIcon.Root label="GitHub">
                            <Github className="mr-2 size-4" />
                        </AccessibleIcon.Root>
                        GitHub
                        <ArrowUpRight className="ml-1.5 size-3" />
                    </Link>
                    <Link
                        href="https://read.cv/gsmt"
                        title="read.cv"
                        target="_blank"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit">
                        <AccessibleIcon.Root label="CV">
                            <Asterisk className="mr-1.5 size-4" />
                        </AccessibleIcon.Root>
                        CV
                        <ArrowUpRight className="ml-1.5 size-3" />
                    </Link>
                </div>
            </section>
            <section className="container mt-24">
                <Carousel>
                    <div className="relative flex aspect-square h-full">
                        <div className="h-full w-auto object-cover" />
                    </div>
                    <div className="relative flex h-full">
                        <div className="h-full w-auto object-cover" />
                    </div>
                    <div className="relative flex aspect-square h-full">
                        <div className="h-full w-auto object-cover" />
                    </div>
                    <div className="relative flex h-full">
                        <div className="h-full w-auto object-cover" />
                    </div>
                    <div className="relative flex aspect-square h-full">
                        <div className="h-full w-auto object-cover" />
                    </div>
                </Carousel>
            </section>
            <Timezone />
            <footer className="container mt-16 flex flex-row items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-muted-foreground/60">
                        <AccessibleIcon.Root label="Basado en España">
                            <Globe className="mr-1 inline-block size-3" />
                        </AccessibleIcon.Root>
                        España
                    </span>
                    <span className="text-[10px] text-muted-foreground/60">
                        @ {new Date().getUTCFullYear()} GSMT. Todos los derechos reservados.
                    </span>
                </div>
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
            <FloatingNavigation />
        </PageShell>
    );
}

const FloatingNavigation = () => (
    <nav className="fixed inset-x-0 bottom-0 z-20 pb-12">
        <div className="absolute bottom-3 left-1/2 flex w-fit -translate-x-1/2 items-center justify-between overflow-hidden rounded-3xl border bg-neutral-200/80 px-1 py-0.5 shadow backdrop-blur-xl">
            <Link
                href="/"
                title="Inicio"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-300/80 px-4 py-1.5">
                <AccessibleIcon.Root label="Ir a inicio">
                    <Home className="size-4" />
                </AccessibleIcon.Root>
            </Link>
            <Drawer>
                <DrawerTrigger
                    title="Featured projects"
                    className="hidden w-full items-center justify-center rounded-2xl px-5 py-1.5 text-sm font-medium">
                    Proyectos
                    <span className="sr-only">Expandir panel de proyectos</span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerTitle>Proyectos</DrawerTitle>
                    <DrawerDescription className="max-w-lg px-4">
                        En la actualidad me centro principalmente en el ecosistema web, pero ya
                        trabajé con muchos lenguajes y plataformas.{" "}
                        <span className="opacity-50">
                            —&nbsp;Haga clic en un proyecto para ampliarlo
                        </span>
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
            <Drawer>
                <DrawerTrigger
                    title="Enviar un mensaje"
                    className="inline-flex w-full items-center justify-center rounded-2xl px-4 py-1.5">
                    <AccessibleIcon.Root label="Enviar un mensaje">
                        <MessageCircle className="size-4" />
                    </AccessibleIcon.Root>
                    <span className="absolute right-3.5 top-1.5 size-2 rounded-full bg-green-500" />
                </DrawerTrigger>
                <DrawerContent>
                    <MessageInput />
                </DrawerContent>
            </Drawer>
        </div>
    </nav>
);
