import { cn } from "@lib/cn";
import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type * as React from "react";
import "./globals.css";

// TODO: make static
export const dynamic = "force-dynamic";

const WEBSITE_URL = "https://gsmt.link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const viewport: Viewport = {
    width: "device-width",
    viewportFit: "cover",
    initialScale: 1,
    minimumScale: 1,
    colorScheme: "light",
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_URL),
    title: { default: "@gsmt", template: "%s | @gsmt" },
    description: "gsmt website",
    category: "technology",
    referrer: "origin",
    alternates: { canonical: "/" },
    robots: { noimageindex: true },
    appleWebApp: { capable: true, statusBarStyle: "default" },
    formatDetection: { address: false, telephone: false },
    other: {
        "msapplication-TileColor": "#000000",
        "msapplication-starturl": "/",
        "applicable-device": "pc,mobile",
    },
};

export default async function RootLayout({
    children,
}: React.PropsWithChildren) {
    const messages = await getMessages();

    return (
        <html dir="ltr" lang="en">
            <body
                className={cn("isolate pb-24", inter.className, serif.variable)}
                style={{ colorScheme: "light" }}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <figure
                    aria-hidden
                    className="-z-10 pointer-events-none fixed inset-x-0 bottom-0 block h-28 flex-none select-none"
                >
                    <div
                        style={{
                            display: "block",
                            flex: "0 0 auto",
                            pointerEvents: "none",
                            position: "relative",
                            borderRadius: "0px",
                            overflow: "visible",
                            height: "100%",
                            width: "100%",
                            transform: "none",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(0px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%)",
                                zIndex: 1,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(0.205761px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 30%)",
                                zIndex: 2,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(0.823045px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 40%)",
                                zIndex: 3,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(1.85185px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 30%, rgb(0, 0, 0) 50%)",
                                zIndex: 4,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(3.29218px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 60%)",
                                zIndex: 5,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(5.14403px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 70%)",
                                zIndex: 6,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(7.40741px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 60%, rgb(0, 0, 0) 80%)",
                                zIndex: 7,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(10.0823px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 90%)",
                                zIndex: 8,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(13.1687px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 80%, rgb(0, 0, 0) 100%)",
                                zIndex: 9,
                                borderRadius: "0px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                                backdropFilter: "blur(16.6667px)",
                                maskImage:
                                    "linear-gradient(rgba(0, 0, 0, 0) 90%, rgb(0, 0, 0) 100%)",
                                zIndex: 10,
                                borderRadius: "0px",
                            }}
                        />
                    </div>
                </figure>
            </body>
        </html>
    );
}
