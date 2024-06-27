import "./globals.css";
import { Link } from "@/navigation";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@components/drawer";
import { MessageInput } from "@components/message-input";
import { cn } from "@lib/cn";
import { slugify } from "@lib/slugify";
import { Home, MessageCircle } from "lucide-react";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import Image from "next/image";
import { projects } from "./constants";

// TODO: make static
export const dynamic = "force-dynamic";

const WEBSITE_URL = "https://gsmt.link";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
});

export const viewport: Viewport = {
    width: "device-width",
    viewportFit: "cover",
    initialScale: 1,
    minimumScale: 1,
    colorScheme: "light",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#181917" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_URL),
    title: "GSMT",
    description: "GSMT website",
    category: "technology",
    referrer: "origin",
    alternates: { canonical: "/" },
    robots: { noimageindex: true },
    appleWebApp: { capable: true, statusBarStyle: "default" },
    twitter: {
        card: "summary_large_image",
        site: "@gsmmtt",
        creator: "@gsmmtt",
    },
    formatDetection: { address: false, telephone: false },
    other: {
        "msapplication-TileColor": "#000000",
        "msapplication-starturl": "/",
        "applicable-device": "pc,mobile",
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const messages = await getMessages();

    return (
        <html lang="en" dir="ltr">
            <body className={cn("pb-16", inter.className)}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <FloatingNavigation />
                </NextIntlClientProvider>
            </body>
        </html>
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
                <span className="sr-only">Go to home page</span>
            </Link>
            <Drawer>
                <DrawerTrigger
                    title="Featured projects"
                    className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-1.5 text-sm font-medium">
                    Work
                    <span className="sr-only">Expand work drawer</span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerTitle>Work</DrawerTitle>
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
                    <span className="sr-only">Send a Message</span>
                </DrawerTrigger>
                <DrawerContent>
                    <MessageInput />
                </DrawerContent>
            </Drawer>
        </div>
    </nav>
);
