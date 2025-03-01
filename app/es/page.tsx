import { Link } from "@/navigation";
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
import { dayjs } from "@lib/dayjs";
import { UpdateServerCounter, getPageViewCount } from "@lib/views";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import {
    ArrowUpRight,
    Asterisk,
    Braces,
    Check,
    Clipboard,
    Eye,
    Github,
    Globe,
    Mail,
    Watch,
} from "lucide-react";
import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
    title: "Gilberto",
};

async function PageViews() {
    const pageViewCount = await getPageViewCount();
    return (
        <span className="inline-flex items-center whitespace-nowrap font-serif text-muted-foreground/80 text-xs">
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
            <Header />
            <section className="container relative mt-16 flex w-full items-end justify-between">
                <Line variant="vertical" className="-top-20 left-5" />
                <Line variant="vertical" className="-top-20 right-6" />
                <Line variant="vertical" className="-top-20 right-14" />
                <Line className="-top-16" />
                <Line className="-top-8" />
                <Line className="-top-1.5" />
                <Line className="top-8 w-11/12" />
                <div className="relative flex flex-col gap-y-3">
                    <h1 className="whitespace-nowrap font-medium font-serif text-foreground text-sm">
                        Gilberto
                    </h1>
                    <span className="whitespace-pre-wrap font-serif text-muted-foreground text-xs">
                        <span className="mr-0.5 opacity-60">IPA</span>&nbsp;
                        <i className="mr-0.5">/ˈɡɪlbət/</i>{" "}
                        —&nbsp;desarrollador,{" "}
                        <span className="opacity-60">creador.</span>
                    </span>
                    <Line variant="vertical" className="-right-4 -top-20" />
                </div>
                <div className="relative flex items-end justify-end gap-3 md:gap-4">
                    <Line variant="vertical" className="-left-2 -top-20" />
                    <React.Suspense>
                        <PageViews />
                    </React.Suspense>
                    <LiveCount />
                </div>
                <Line className="-bottom-1.5" />
            </section>
            <section className="container mt-12 flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="w-full flex-1 truncate font-semibold text-foreground text-sm">
                        Hoy
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
                    Desarrollador de corazón, apasionado por construir una mejor
                    web, crear grandes experiencias para los usuarios finales y
                    tratar de resolver problemas{" "}
                    <Globe
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />{" "}
                    reales con un ojo para el diseño. Soy fan del software de
                    código abierto y los relojes{" "}
                    <Watch
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />
                    .
                    <br />
                    <br />
                    Introducido a la tecnología desde una edad temprana, llevo
                    más de 3 años construyendo software. Juego con prototipos y
                    hago de todo, desde scrapers de datos{" "}
                    <Braces
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />
                    , sitios web dinámicos y APIs, encantadoras aplicaciones
                    nativas, simulaciones fractales, visualizaciones de datos y
                    más.
                    <br />
                    <br />
                    Fuera de la programación, disfruto de la fotografía y los
                    viajes. Actualmente estudio ciencias de la computación y
                    siempre busco nuevas formas en que la tecnología pueda tener
                    un impacto positivo en las personas y mejorar constantemente
                    a través del aprendizaje.
                </p>
                <p className="text-foreground text-sm">
                    Encuéntrame en los enlaces a continuación
                </p>
                <div className="group flex flex-col items-center gap-3 md:flex-row">
                    <div className="relative flex h-fit w-full items-center md:w-fit">
                        <Link
                            href="mailto:gsmt.dev@gmail.com"
                            title="Email"
                            className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent pr-11 pl-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit"
                        >
                            <AccessibleIcon.Root label="Email">
                                <Mail className="mr-3 size-4" />
                            </AccessibleIcon.Root>
                            gsmt.dev@gmail.com
                        </Link>
                        <Copy text="gsmt.dev@gmail.com">
                            <button
                                type="button"
                                title="Copiar"
                                aria-label="Copiar correo electrónico"
                                className="group/btn absolute right-2 z-10 inline-flex size-5 items-center justify-center rounded-[40%] bg-card p-3 hover:opacity-100 active:opacity-50 group-hover:opacity-75"
                            >
                                <Clipboard className="size-4 transition-all group-data-[copied=true]/btn:opacity-0" />
                                <Check className="absolute size-4 transition-all group-data-[copied=false]/btn:opacity-0" />
                                <span className="sr-only">
                                    Copiar correo electrónico
                                </span>
                            </button>
                        </Copy>
                    </div>
                    <Link
                        href="https://github.com/rortan134"
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit"
                    >
                        <AccessibleIcon.Root label="GitHub">
                            <Github className="mr-3 size-4" />
                        </AccessibleIcon.Root>
                        GitHub
                        <ArrowUpRight className="ml-1.5 size-3" />
                    </Link>
                    <Link
                        href="https://read.cv/gsmt"
                        title="read.cv"
                        target="_blank"
                        className="flex h-9 w-full items-center justify-center rounded-3xl border bg-transparent px-4 text-sm hover:opacity-100 active:opacity-50 group-hover:opacity-75 md:w-fit"
                    >
                        <AccessibleIcon.Root label="CV">
                            <Asterisk className="mr-1.5 size-4" />
                        </AccessibleIcon.Root>
                        CV
                        <ArrowUpRight className="ml-1.5 size-3" />
                    </Link>
                </div>
            </section>
            <section className="container mt-24">
                <Projects />
                <p className="mt-4 text-muted-foreground text-sm">
                    En la actualidad me centro principalmente en el ecosistema
                    web, pero ya trabajé con muchos lenguajes y plataformas.
                </p>
            </section>
            <Timezone />
            <footer className="container mt-16 flex flex-row items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-muted-foreground/60">
                        Tenga un buen día.
                    </span>
                    <span className="text-[10px] text-muted-foreground/60">
                        <AccessibleIcon.Root label="Basado en España">
                            <Globe className="mr-1 inline-block size-3" />
                        </AccessibleIcon.Root>
                        Desde España
                    </span>
                    <span className="text-[10px] text-muted-foreground/60">
                        @ {new Date().getUTCFullYear()} GSMT. Todos los derechos
                        reservados.
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
                            className="truncate text-[10px] text-muted-foreground/60 underline underline-offset-4"
                        >
                            ver código fuente
                        </Link>
                    </div>
                    <Signature />
                </div>
            </footer>
            <React.Suspense>
                <UpdateServerCounter />
            </React.Suspense>
            <Navigation />
        </PageShell>
    );
}
