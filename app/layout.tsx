import "./globals.css";
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
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
    },
    twitter: {
        card: "summary_large_image",
        site: "@gsmmtt",
        creator: "@gsmmtt",
    },
    formatDetection: {
        address: false,
        telephone: false,
    },
    other: {
        "msapplication-TileColor": "#000000",
        "msapplication-starturl": "/",
        "applicable-device": "pc,mobile",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
