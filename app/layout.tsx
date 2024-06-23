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
import { ExternalLink, Home, MessageCircle } from "lucide-react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <body className={inter.className}>
                {children}
                <FloatingNavigation />
            </body>
        </html>
    );
}

function FloatingNavigation() {
    return (
        <nav className="fixed inset-x-0 bottom-0 bg-gradient-to-t from-black/15 pb-12 pt-6 backdrop-blur-sm">
            <div className="absolute bottom-3 left-1/2 flex w-64 -translate-x-1/2 items-center justify-between overflow-hidden rounded-3xl border bg-neutral-300/80 px-1 py-0.5 backdrop-blur-md">
                <Link
                    href="/"
                    title="Home"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-400/60 px-3 py-1.5">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Go to home</span>
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
                            My focus these days is mainly on the web ecosystem, but I have worked
                            with many languages and platforms.{" "}
                            <span className="opacity-50">—&nbsp;Click on a project to expand</span>
                        </DrawerDescription>
                        <div className="mt-6 flex w-full flex-col space-y-4 md:space-y-16">
                            <div className="grid grid-cols-4 gap-4 md:grid-cols-1 md:gap-x-0">
                                <div className="relative col-span-1 flex flex-col overflow-hidden md:col-span-full md:row-span-full md:w-full md:py-4">
                                    <div className="absolute inset-0 hidden bg-neutral-200 object-cover md:block"></div>
                                    <div className="z-10 ml-4 aspect-square h-full max-h-20 w-auto max-w-[80px] rounded-md bg-neutral-300" />
                                </div>
                                <div className="col-span-3 flex w-full flex-col space-y-0.5 pr-4 md:pl-4">
                                    <h3 className="text-sm font-medium text-foreground">Project</h3>
                                    <p className="text-xs text-muted-foreground">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quo laborum veniam at nostrum quia tenetur magnam quasi
                                        vitae.
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <span className="truncate text-xs text-muted-foreground">
                                            Lorem • ipsum • dolor
                                        </span>
                                        <Link
                                            href="/"
                                            className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline">
                                            View live
                                            <ExternalLink className="ml-1 h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex w-full flex-col space-y-4 md:space-y-16">
                            <div className="grid grid-cols-4 gap-4 md:grid-cols-1 md:gap-x-0">
                                <div className="relative col-span-1 flex flex-col overflow-hidden md:col-span-full md:row-span-full md:w-full md:py-4">
                                    <div className="absolute inset-0 hidden bg-neutral-200 object-cover md:block"></div>
                                    <div className="z-10 ml-4 aspect-square h-full max-h-20 w-auto max-w-[80px] rounded-md bg-neutral-300" />
                                </div>
                                <div className="col-span-3 flex w-full flex-col space-y-0.5 pr-4 md:pl-4">
                                    <h3 className="text-sm font-medium text-foreground">Project</h3>
                                    <p className="text-xs text-muted-foreground">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quo laborum veniam at nostrum quia tenetur magnam quasi
                                        vitae.
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <span className="truncate text-xs text-muted-foreground">
                                            Lorem • ipsum • dolor
                                        </span>
                                        <Link
                                            href="/"
                                            className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline">
                                            View live
                                            <ExternalLink className="ml-1 h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        className="inline-flex w-full items-center justify-center rounded-2xl px-3 py-1.5">
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
}
