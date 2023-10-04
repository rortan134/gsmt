import "./globals.css";
import { TooltipProvider } from "@/components/tooltip";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    preload: true,
    display: "swap",
});

export const metadata: Metadata = {
    title: "GSMT",
    description: "GSMT website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <TooltipProvider>
                <body className={inter.className}>{children}</body>
            </TooltipProvider>
        </html>
    );
}
