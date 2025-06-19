import { Link } from "@/i18n/routing";
import { Header } from "@components/header";
import { Line } from "@components/line";
import { Navigation } from "@components/navigation";
import { PageShell } from "@components/page-shell";
import { Signature } from "@components/signature";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { Check, CreditCard, Globe, ShoppingCart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comercio electrónico | Gilberto",
    description:
        "Desarrollo de tiendas en línea a medida, integración de pagos y soluciones escalables para ecommerce.",
};

export default function ComercioPage() {
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
                        Tiendas online a la carta
                    </h1>
                    <span className="whitespace-pre-wrap font-serif text-muted-foreground text-xs">
                        <span className="mr-0.5 opacity-60">Especialista</span>
                        &nbsp; en ecommerce & pagos a gran escala.
                    </span>
                    <Line variant="vertical" className="-right-4 -top-20" />
                </div>
                <div className="relative hidden items-end justify-end gap-3 md:flex">
                    <ShoppingCart className="size-5 text-muted-foreground" />
                    <CreditCard className="size-5 text-muted-foreground" />
                </div>
                <Line className="-bottom-1.5" />
            </section>
            <section className="container mt-12 flex flex-col space-y-4">
                <h1 className="w-full truncate font-semibold text-foreground text-sm">
                    Qué obtienes
                </h1>
                <p className="text-foreground text-sm">
                    Construyo tiendas online rápidas, seguras y escalables.
                    Hablo el idioma del negocio, no sólo el código. Desde la
                    primera venta hasta miles de transacciones diarias, me
                    encargo de toda la arquitectura.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/90">
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Carrito de compras flexible y UX optimizada
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Integración con Stripe, PayPal, Redsys, Adyen...
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Pagos y conciliación automática en volumen
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Inventario y catálogo en tiempo real
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        SEO y Core Web Vitals por encima del 90%
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Multiples canales: marketplace, redes sociales y TPV
                        físico
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Panel de administración a medida
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Email marketing y notificaciones transaccionales
                    </li>
                    <li className="flex gap-2 items-start">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                        Integraciones logísticas y automatización de envíos
                    </li>
                </ul>
                <p className="text-foreground text-sm">
                    Trabajo con equipos de marketing, logística y atención al
                    cliente para ofrecer una solución integral. Tú pones la
                    visión; yo la tecnología.
                </p>
            </section>
            <footer className="container mt-16 flex flex-row items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-muted-foreground/60">
                        Hablemos de tu próximo proyecto.
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
                            gsmt.link/comercio
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
            <Navigation />
        </PageShell>
    );
}
