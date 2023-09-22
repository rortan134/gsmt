import prisma from "@/prisma";

async function updateCount() {
    await prisma.counter.upsert({
        where: { id: 1 },
        update: {
            visitCount: {
                increment: 1,
            },
        },
        create: {
            id: 1,
            visitCount: 1,
        },
    });
}

export async function ServerCountUpdate() {
    await updateCount();
    return null;
}
