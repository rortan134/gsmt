import { cn } from "@lib/cn";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Source_Serif_4 } from "next/font/google";
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const messages = await getMessages();

    return (
        <html lang="en" dir="ltr">
            <body
                className={cn("isolate pb-24", inter.className, serif.variable)}
                style={{ colorScheme: "light" }}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                <figure
                    className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 block h-28 flex-none select-none"
                    aria-hidden>
                    {/* <div style="display: block; flex: 0 0 auto; pointer-events: none; position: relative; border-radius: 0px; overflow: visible; height: 100%; width: 100%; transform: none;">
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(0px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%); z-index: 1; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(0.205761px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 30%); z-index: 2; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(0.823045px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 40%); z-index: 3; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(1.85185px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 30%, rgb(0, 0, 0) 50%); z-index: 4; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(3.29218px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 60%); z-index: 5; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(5.14403px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 70%); z-index: 6; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(7.40741px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 60%, rgb(0, 0, 0) 80%); z-index: 7; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(10.0823px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 90%); z-index: 8; border-radius: 0px;" />
                        <div style="position: absolute; inset: 0px; height: 100%; width: 100%; backdrop-filter: blur(13.1687px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 80%, rgb(0, 0, 0) 100%); z-index: 9; border-radius: 0px;" />
                        <div style="position: absolute;inset: 0px;height: 100%;width: 100%;backdrop-filter: blur(16.6667px);mask-image: linear-gradient(rgba(0, 0, 0, 0) 90%, rgb(0, 0, 0) 100%);z-index: 10;border-radius: 0px;" />
                    </div> */}
                </figure>
            </body>
        </html>
    );
}
