"use server";

import prisma from "@/prisma";

async function updateCount() {
    try {
        await prisma.counter.upsert({
            where: { id: 1 },
            update: { visitCount: { increment: 1 } },
            create: { id: 1, visitCount: 1 },
        });
    } catch (error) {
        console.error(error);
    }
}

async function UpdateServerCounter() {
    await updateCount();
    return null;
}

async function getPageViewCount() {
    const data = await prisma.counter.findUnique({ where: { id: 1 } });
    return data?.visitCount ?? "?";
}

export { getPageViewCount, UpdateServerCounter };
