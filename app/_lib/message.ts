"use server";

import { prisma } from "@/prisma";

export async function registerMessage(id: string, message: string) {
    const response = await prisma.userMessage.upsert({
        where: { id },
        update: { messages: { create: { content: message } } },
        create: { id, messages: { create: { content: message } } },
    });
    const resId = response.id;
    return { ok: true, resId };
}
