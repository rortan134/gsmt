"use server";

import { prisma } from "@/prisma";

async function updateViewCount() {
    try {
        await prisma.counter.upsert({
            where: { id: 1 },
            update: { visitCount: { increment: 1 } },
            create: { id: 1, visitCount: 1 },
        });
    } catch (error) {
        console.error("Failed to update view count:", error);
    }
}

/**
 * Server component that updates the view counter
 */
export async function UpdateServerViewCounter() {
    await updateViewCount();
    return null;
}

/**
 * Get the page view count
 * @returns The view count or 0 if not found
 */
export async function getPageViewCount() {
    try {
        const data = await prisma.counter.findUnique({ where: { id: 1 } });
        return data?.visitCount ?? 0;
    } catch (error) {
        console.error("Failed to get page view count:", error);
        return 0;
    }
}
