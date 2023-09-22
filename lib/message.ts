"use server";

import prisma from "@/prisma";

export async function registerMessage(id: string, message: string) {
    if (typeof message !== "string") throw new Error("Invalid message");

    const response = prisma.userMessage.upsert({
        where: {
            id,
        },
        update: {
            messages: {
                create: {
                    content: message,
                },
            },
        },
        create: {
            id,
            messages: {
                create: {
                    content: message,
                },
            },
        },
    });

    const resId = (await response).id;

    return { ok: true, resId };
}
