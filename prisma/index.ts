import { PrismaClient as CustomPrismaClient } from "@prisma/client";

declare global {
    var prisma: typeof customPrismaClient;
}

const prismaOptions: any = {};

if (!!process.env.NEXT_PUBLIC_DEBUG) prismaOptions.log = ["query", "error", "warn"];

const customPrismaClient = new CustomPrismaClient(prismaOptions);

export const prisma = (globalThis.prisma as typeof customPrismaClient) || customPrismaClient;

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma;
}

export type PrismaClient = typeof prisma;
export default prisma;