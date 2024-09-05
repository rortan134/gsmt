import { Link } from "@/navigation";
import { Carousel } from "@components/carousel";
import { Copy } from "@components/copy";
import { Header } from "@components/header";
import { Line } from "@components/line";
import { LiveCount } from "@components/live-count";
import { Navigation } from "@components/navigation";
import { PageShell } from "@components/page-shell";
import { Signature } from "@components/signature";
import { Timezone } from "@components/timezone";
import { dayjs } from "@lib/dayjs";
import { getPageViewCount, UpdateServerCounter } from "@lib/views";
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
        <span className="inline-flex items-center whitespace-nowrap font-serif text-xs text-muted-foreground/80">
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
                    <h1 className="whitespace-nowrap font-serif text-sm font-medium text-foreground">
                        Gilberto
                    </h1>
                    <span className="whitespace-pre-wrap font-serif text-xs text-muted-foreground">
                        <span className="mr-0.5 opacity-60">IPA</span>&nbsp;
                        <i className="mr-0.5">/ˈɡɪlbət/</i> —&nbsp;desarrollador,{" "}
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
            <section className="container mt-10 flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="w-full flex-1 text-sm font-semibold text-foreground truncate">
                        Hoy
                        <span className="ml-3 inline-block font-serif opacity-50">
                            {dayjs().format("DD")}
                        </span>
                    </h1>
                    <div className="flex items-center justify-end space-x-2">
                        <S1 />
                        <S2 />
                    </div>
                </div>
                <p className="text-sm text-foreground">
                    Desarrollador de corazón, apasionado por construir una mejor web, crear grandes
                    experiencias para los usuarios finales y tratar de resolver problemas{" "}
                    <Globe
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />{" "}
                    del mundo real con un ojo para el diseño. También soy fan del software de código
                    abierto y de los relojes{" "}
                    <Watch
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />
                    .
                    <br />
                    <br />
                    Introducido a la tecnología desde una edad temprana, llevo más de 3 años
                    construyendo software. Juego con prototipos y hago de todo, desde scrapers de
                    datos{" "}
                    <Braces
                        className="inline-block size-4 opacity-50"
                        focusable="false"
                        aria-hidden
                    />
                    , sitios web dinámicos y APIs, encantadoras aplicaciones nativas, simulaciones
                    fractales, visualizaciones de datos y más.
                    <br />
                    <br />
                    Fuera de la programación, disfruto de la fotografía y los viajes. Actualmente
                    estudio ciencias de la computación y siempre busco nuevas formas en que la
                    tecnología pueda tener un impacto positivo en las personas y mejorar
                    constantemente a través del aprendizaje.
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
                <p className="mt-4 text-sm text-muted-foreground">
                    En la actualidad me centro principalmente en el ecosistema web, pero ya trabajé
                    con muchos lenguajes y plataformas.
                </p>
            </section>
            <Timezone />
            <footer className="container mt-16 flex flex-row items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-muted-foreground/60">Tenga un buen día.</span>
                    <span className="text-[10px] text-muted-foreground/60">
                        <AccessibleIcon.Root label="Basado en España">
                            <Globe className="mr-1 inline-block size-3" />
                        </AccessibleIcon.Root>
                        Desde España
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
            <Navigation />
        </PageShell>
    );
}

const S1 = () => (
    <svg
        width="36"
        height="20"
        viewBox="0 0 107 54"
        className="opacity-50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M36.9985 45.0002C36.7963 45.0002 36.594 44.9971 36.3918 44.9941H36.2499C27.2607 44.8655 18.9507 42.6116 12.8413 38.6459C7.13926 34.9374 4 30.0928 4 25.0033C4 19.9137 7.14228 15.0599 12.8503 11.3576C18.9447 7.38882 27.2547 5.13495 36.2469 5.01246H36.4008C36.7902 5.00327 37.2037 5.00327 37.6082 5.0094H37.7501C46.7483 5.13801 55.0553 7.39188 61.1527 11.3576C66.8577 15.0599 70.003 19.9076 70.003 25.0033C70.003 30.099 66.8638 34.9374 61.1587 38.6459C55.0493 42.6147 46.7393 44.8685 37.7561 44.991H37.6022C37.406 44.9971 37.2038 45.0002 37.0015 45.0002H36.9985ZM36.9985 5.93422C36.8023 5.93422 36.6031 5.93728 36.4069 5.94034H36.2499C27.4358 6.0659 19.2979 8.2677 13.3423 12.1415C7.91201 15.6693 4.91763 20.2352 4.91763 25.0033C4.91763 29.7713 7.90899 34.3311 13.3393 37.8619C19.3069 41.7358 27.4449 43.9376 36.259 44.0601H36.4008C36.8113 44.0693 37.1977 44.0693 37.5931 44.0631H37.7501C46.5582 43.9376 54.6961 41.7358 60.6637 37.8619C66.094 34.3311 69.0824 29.7652 69.0824 25.0063C69.0824 20.2475 66.091 15.6724 60.6577 12.1446C54.6991 8.2677 46.5642 6.0659 37.741 5.9434H37.5992C37.3939 5.93728 37.1977 5.93422 36.9985 5.93422Z"
            fill="#000"
        />
        <path
            d="M36.9971 18.4987C33.6103 18.4987 30.2748 18.1894 27.0752 17.583C24.0416 17.0043 21.174 16.1682 18.5569 15.0964C16.4892 14.2574 14.5664 13.2621 12.8459 12.1444L12.2422 11.7524L12.8459 11.3604C18.9433 7.38857 27.2533 5.13471 36.2455 5.01221H36.3994C36.7888 5.00303 37.2024 5.00303 37.6068 5.00915H37.7487C46.7469 5.13777 55.0539 7.39164 61.1513 11.3573L61.755 11.7493L61.1513 12.1413C59.4458 13.2529 57.5261 14.2451 55.4463 15.0903C52.8051 16.1682 49.9375 17.0073 46.922 17.58C43.7254 18.1863 40.3869 18.4956 37.0001 18.4956L36.9971 18.4987ZM13.9627 11.7493C15.472 12.6772 17.1292 13.5101 18.901 14.2298C21.4638 15.2802 24.274 16.0978 27.2473 16.6643C30.3895 17.2615 33.6707 17.5647 37.0001 17.5647C40.3295 17.5647 43.6107 17.2615 46.753 16.6643C49.7081 16.1039 52.5183 15.2832 55.1022 14.2267C56.8801 13.504 58.5373 12.6711 60.0345 11.7493C54.1393 8.1174 46.2609 6.06259 37.7397 5.94316H37.5978C37.1873 5.93397 36.8009 5.93397 36.4055 5.9401H36.2485C27.7363 6.06259 19.8549 8.1174 13.9597 11.7493H13.9627Z"
            fill="#000"
        />
        <path
            d="M36.9992 45C36.7457 45 36.4921 44.997 36.2386 44.9878C27.2675 44.8653 18.9545 42.6145 12.842 38.6427L12.2383 38.2507L12.842 37.8587C14.5625 36.744 16.4823 35.7488 18.553 34.9066C21.2003 33.8287 24.0679 32.9927 27.0773 32.42C30.274 31.8137 33.6124 31.5044 36.9992 31.5044C40.386 31.5044 43.7215 31.8137 46.9211 32.42C49.9366 32.9927 52.8072 33.8287 55.4515 34.9066C57.5373 35.761 59.457 36.7563 61.1565 37.8587L61.7602 38.2507L61.1565 38.6427C55.044 42.6114 46.737 44.8653 37.7569 44.9878C37.5063 44.9939 37.2528 45 36.9992 45ZM13.9588 38.2507C19.8661 41.8826 27.7505 43.9405 36.2567 44.0538C36.7608 44.0691 37.2437 44.0691 37.7327 44.0538H37.7418C46.248 43.9374 54.1324 41.8826 60.0396 38.2507C58.5454 37.332 56.8883 36.499 55.1073 35.7702C52.5205 34.7168 49.7072 33.8961 46.7521 33.3357C43.6098 32.7385 40.3287 32.4353 36.9992 32.4353C33.6698 32.4353 30.3887 32.7385 27.2464 33.3357C24.2973 33.8961 21.487 34.7137 18.8941 35.7702C17.1223 36.4929 15.4651 37.3259 13.9588 38.2507Z"
            fill="#000"
        />
        <path
            d="M36.9969 45C36.7946 45 36.5924 44.997 36.3901 44.9939C29.0159 44.8102 22.2695 41.3008 18.3454 35.6049C16.16 32.4323 15.0039 28.7667 15.0039 25C15.0039 21.2334 16.163 17.5586 18.3514 14.3922C22.2785 8.69933 29.0189 5.18991 36.3871 5.00923C36.7976 5.00311 37.1991 5.00311 37.6036 5.00923C44.9809 5.19297 51.7242 8.69933 55.6483 14.3922C57.8398 17.5617 58.9959 21.2303 58.9959 25.0031C58.9959 28.7759 57.8398 32.4323 55.6544 35.6079C51.7303 41.3038 44.9839 44.8132 37.6096 44.9939C37.4044 44.997 37.2021 45 36.9999 45H36.9969ZM36.9969 5.93405C36.8007 5.93405 36.6014 5.93712 36.4052 5.94018C29.3328 6.11473 22.8641 9.47715 19.1061 14.9281C17.0233 17.9383 15.9246 21.4202 15.9246 25C15.9246 28.5799 17.0233 32.0526 19.1 35.0689C22.8581 40.5229 29.3268 43.8823 36.4083 44.0599C36.7946 44.066 37.1931 44.066 37.5885 44.0599C44.6699 43.8854 51.1417 40.5229 54.8997 35.072C56.9795 32.0556 58.0782 28.5738 58.0782 25.0031C58.0782 21.4324 56.9765 17.9414 54.8967 14.9281C51.1417 9.47715 44.6699 6.11779 37.5885 5.94018C37.3953 5.93712 37.1961 5.93405 36.9999 5.93405H36.9969Z"
            fill="#000"
        />
        <path
            d="M36.9999 45C30.8179 45 25.7891 36.0274 25.7891 25C25.7891 13.9726 30.8179 5 36.9999 5C43.1818 5 48.2107 13.9726 48.2107 25C48.2107 36.0274 43.1818 45 36.9999 45ZM36.9999 5.93094C31.325 5.93094 26.7097 14.484 26.7097 25C26.7097 35.516 31.325 44.0691 36.9999 44.0691C42.6747 44.0691 47.29 35.516 47.29 25C47.29 14.484 42.6747 5.93094 36.9999 5.93094Z"
            fill="#000"
        />
        <path d="M37.4606 5.46558H36.543V44.5346H37.4606V5.46558Z" fill="#000" />
        <path d="M69.5403 24.5344H4.46094V25.4654H69.5403V24.5344Z" fill="#000" />
        <path
            d="M96.214 0.546343C96.766 1.35034 97.258 2.06434 97.69 2.68834C98.134 3.31234 98.566 3.91834 98.986 4.50634C99.478 5.19034 99.898 5.74834 100.246 6.18034C100.606 6.62434 100.918 6.96634 101.182 7.20634C101.446 7.44634 101.698 7.60834 101.938 7.69234C102.178 7.78834 102.43 7.83634 102.694 7.83634C103.834 7.83634 104.404 7.12234 104.404 5.69434C104.404 5.01034 104.26 4.47634 103.972 4.09234C103.696 3.72034 103.24 3.45034 102.604 3.28234L102.91 0.402344C104.17 0.642344 105.13 1.22434 105.79 2.14834C106.45 3.07234 106.78 4.29634 106.78 5.82034C106.78 7.41634 106.444 8.65834 105.772 9.54634C105.1 10.4463 104.164 10.8963 102.964 10.8963C102.4 10.8963 101.884 10.7943 101.416 10.5903C100.948 10.3983 100.474 10.0623 99.994 9.58234C99.514 9.11434 98.968 8.46634 98.356 7.63834C98.02 7.19434 97.708 6.76234 97.42 6.34234C97.132 5.93434 96.796 5.44234 96.412 4.86634V11.1483L94 10.8243V0.546343H96.214Z"
            fill="#000"
        />
        <path
            d="M106.852 13.5999V16.7679H101.38L106.852 22.9059V26.5779L101.938 21.1419L94 27.0999V23.4279L99.994 18.9459L98.14 16.7679H94V13.5999H106.852Z"
            fill="#000"
        />
        <path
            d="M96.214 28.4428C96.766 29.2468 97.258 29.9608 97.69 30.5848C98.134 31.2088 98.566 31.8148 98.986 32.4028C99.478 33.0868 99.898 33.6448 100.246 34.0768C100.606 34.5208 100.918 34.8628 101.182 35.1028C101.446 35.3428 101.698 35.5048 101.938 35.5888C102.178 35.6848 102.43 35.7328 102.694 35.7328C103.834 35.7328 104.404 35.0188 104.404 33.5908C104.404 32.9068 104.26 32.3728 103.972 31.9888C103.696 31.6168 103.24 31.3468 102.604 31.1788L102.91 28.2988C104.17 28.5388 105.13 29.1208 105.79 30.0448C106.45 30.9688 106.78 32.1928 106.78 33.7168C106.78 35.3128 106.444 36.5548 105.772 37.4428C105.1 38.3428 104.164 38.7928 102.964 38.7928C102.4 38.7928 101.884 38.6908 101.416 38.4868C100.948 38.2948 100.474 37.9588 99.994 37.4788C99.514 37.0108 98.968 36.3628 98.356 35.5348C98.02 35.0908 97.708 34.6588 97.42 34.2388C97.132 33.8308 96.796 33.3388 96.412 32.7628V39.0448L94 38.7208V28.4428H96.214Z"
            fill="#000"
        />
        <path
            d="M96.556 47.4903V40.3803H98.788L106.438 47.3103V50.2443H98.734V52.1703L96.556 51.8643V50.2443H94V47.4903H96.556ZM103.45 47.4903L98.734 43.2243V47.4903H103.45Z"
            fill="#000"
        />
        <path
            d="M89.984 0.151855V4.21886H89.312V2.56686H85V1.80386H89.312V0.151855H89.984Z"
            fill="#000"
        />
        <path
            d="M87.905 8.04348H89.984V8.79248H85V8.04348H87.219V5.47448H85V4.72548H89.984V5.47448H87.905V8.04348Z"
            fill="#000"
        />
        <path
            d="M89.984 13.217H89.312V10.41H87.905V12.951H87.247V10.41H85.672V13.196H85V9.66103H89.984V13.217Z"
            fill="#000"
        />
        <path
            d="M88.472 18.5852H89.984V19.3062H85V18.4452L87.415 16.9122C88.115 16.4642 88.6493 16.1398 89.018 15.9392C88.4627 15.9578 87.6273 15.9672 86.512 15.9672H85V15.2392H89.984V16.1002L87.569 17.6402C86.911 18.0555 86.3743 18.3798 85.959 18.6132C86.519 18.5945 87.3567 18.5852 88.472 18.5852Z"
            fill="#000"
        />
        <path
            d="M89.984 23.7375H89.312V20.9305H87.905V23.4715H87.247V20.9305H85.672V23.7165H85V20.1815H89.984V23.7375Z"
            fill="#000"
        />
        <path
            d="M87.723 29.1549L89.984 29.7639V30.5409L85 29.1409V28.3009L87.331 27.6709C87.7837 27.5496 88.36 27.4049 89.06 27.2369C88.36 27.0689 87.7837 26.9243 87.331 26.8029L85 26.1729V25.3329L89.984 23.9329V24.7099L87.723 25.3189C86.9063 25.5289 86.2927 25.6829 85.882 25.7809C86.9927 26.0516 87.611 26.2033 87.737 26.2359L89.984 26.8379V27.6359L87.737 28.2379C87.611 28.2706 86.9927 28.4223 85.882 28.6929C86.2927 28.7909 86.9063 28.9449 87.723 29.1549Z"
            fill="#000"
        />
        <path
            d="M87.723 37.3307L89.984 37.9397V38.7167L85 37.3167V36.4767L87.331 35.8467C87.7837 35.7254 88.36 35.5807 89.06 35.4127C88.36 35.2447 87.7837 35.1 87.331 34.9787L85 34.3487V33.5087L89.984 32.1087V32.8857L87.723 33.4947C86.9063 33.7047 86.2927 33.8587 85.882 33.9567C86.9927 34.2274 87.611 34.379 87.737 34.4117L89.984 35.0137V35.8117L87.737 36.4137C87.611 36.4464 86.9927 36.598 85.882 36.8687C86.2927 36.9667 86.9063 37.1207 87.723 37.3307Z"
            fill="#000"
        />
        <path
            d="M85 42.9942V42.2032L86.295 41.7132V39.4732L85 38.9902V38.2132L89.984 40.1592V41.0202L85 42.9942ZM87.219 39.8162L86.946 39.7112V41.4682L87.219 41.3632C87.835 41.1159 88.5163 40.8569 89.263 40.5862C88.4043 40.2642 87.723 40.0075 87.219 39.8162Z"
            fill="#000"
        />
        <path
            d="M87.086 44.9901L89.984 46.0121V46.7891L85 44.9691V44.1151L89.984 42.2601V43.0511L87.086 44.0941C86.6007 44.2667 86.1433 44.4161 85.714 44.5421C85.9473 44.6121 86.4047 44.7614 87.086 44.9901Z"
            fill="#000"
        />
        <path
            d="M89.984 50.801H89.312V47.994H87.905V50.535H87.247V47.994H85.672V50.78H85V47.245H89.984V50.801Z"
            fill="#000"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M77 54V4.37114e-08L78 0V54H77Z"
            fill="#000"
        />
    </svg>
);

const S2 = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-50"
        width="20"
        height="20"
        viewBox="0 0 26 27"
        fill="none">
        <g clip-path="url(#clip0_88_118)">
            <path
                d="M10.1174 11.6474C6.74708 11.8966 6.48224 12.0978 6.15441 14.6595C5.90571 12.7111 5.69255 12.1281 4.12286 11.8519C3.93714 11.8183 3.73205 11.7912 3.50596 11.764C3.50435 11.764 3.50112 11.764 3.4995 11.764C3.12485 11.7209 2.69205 11.6858 2.19143 11.649C2.65006 11.6155 3.05217 11.582 3.40422 11.5436C3.40745 11.5436 3.40907 11.5436 3.41068 11.5436C3.76273 11.5053 4.06472 11.4622 4.32634 11.4063C5.00783 11.2625 5.40348 11.0405 5.65863 10.6301C5.73938 10.5007 5.80559 10.3538 5.86211 10.1829V10.1781C5.9913 9.79164 6.07205 9.29176 6.15441 8.63696C6.24485 9.34127 6.33044 9.8683 6.47578 10.266C6.47578 10.266 6.47578 10.2692 6.47578 10.2708C6.50484 10.3506 6.53714 10.4241 6.57106 10.4928C6.99416 11.3376 7.85975 11.4829 10.1142 11.649L10.1174 11.6474Z"
                fill="#000"
            />
            <path
                d="M23.4339 11.6474C20.0636 11.8966 19.7988 12.0978 19.4709 14.6595C19.2222 12.7111 19.0091 12.1281 17.4394 11.8519C17.2537 11.8183 17.0486 11.7912 16.8225 11.764C16.8193 11.764 16.8176 11.764 16.816 11.764C16.4414 11.7209 16.0086 11.6858 15.5079 11.649C15.9666 11.6155 16.3687 11.582 16.7207 11.5436C16.7224 11.5436 16.7256 11.5436 16.7272 11.5436C17.0793 11.5053 17.3812 11.4622 17.6429 11.4063C18.3243 11.2625 18.72 11.0405 18.9752 10.6301C19.0559 10.5007 19.1221 10.3538 19.1786 10.1829V10.1781C19.3078 9.79164 19.3886 9.29176 19.4709 8.63696C19.5614 9.34127 19.647 9.8683 19.7923 10.266C19.7923 10.266 19.7923 10.2692 19.7923 10.2708C19.8214 10.3506 19.8537 10.4241 19.8876 10.4928C20.3107 11.3376 21.1763 11.4829 23.4307 11.649L23.4339 11.6474Z"
                fill="#000"
            />
            <path
                d="M26 17.1188C14.9427 17.9349 14.0723 18.5961 13 26.9999C12.1845 20.61 11.4852 18.6951 6.33689 17.788C5.72807 17.681 5.05627 17.5868 4.31503 17.5021C4.30696 17.5021 4.29888 17.5005 4.29081 17.4989C3.06348 17.3584 1.64398 17.2402 0 17.1188C1.50671 17.007 2.82286 16.9 3.97752 16.7739C3.98559 16.7739 3.99366 16.7723 4.00012 16.7707C5.1564 16.6445 6.14795 16.5008 7.00224 16.3203C9.23888 15.8476 10.5373 15.1193 11.3722 13.773C11.6354 13.3498 11.8518 12.8643 12.0375 12.3085L12.0424 12.2925C12.4639 11.0244 12.7239 2.14475 12.9984 -0.00170898C13.2939 2.31084 13.5733 11.2752 14.0545 12.58C14.0561 12.5848 14.0578 12.5896 14.0594 12.5944C14.1547 12.8531 14.2596 13.0958 14.3743 13.3242C15.7631 16.0967 18.6021 16.5726 25.9984 17.1172L26 17.1188Z"
                fill="#000"
            />
        </g>
        <defs>
            <clipPath id="clip0_88_118">
                <rect width="26" height="27" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
