"use server";

import prisma from "@/prisma";

export async function registerMessage(id: string, message: string) {
    const response = prisma.userMessage.upsert({
        where: { id },
        update: { messages: { create: { content: message } } },
        create: { id, messages: { create: { content: message } } },
    });
    const resId = (await response).id;
    return { ok: true, resId };
}
