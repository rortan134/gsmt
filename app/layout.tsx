import "./globals.css";
import { cn } from "@lib/cn";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Source_Serif_4 } from "next/font/google";

// TODO: make static
export const dynamic = "force-dynamic";

const WEBSITE_URL = "https://gsmt.link";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
});

const serif = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
    preload: true,
});

export const viewport: Viewport = {
    width: "device-width",
    viewportFit: "cover",
    initialScale: 1,
    minimumScale: 1,
    colorScheme: "light",
    userScalable: false,
    themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }],
};

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_URL),
    title: "@gsmt",
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
            <body className={cn("pb-16", inter.className, serif.variable)}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
