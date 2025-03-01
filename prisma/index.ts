import { PrismaClient as CustomPrismaClient } from "@prisma/client";

declare global {
    var prisma: typeof customPrismaClient;
}

// biome-ignore lint: type
const prismaOptions: any = {};

if (process.env.NEXT_PUBLIC_DEBUG)
    prismaOptions.log = ["query", "error", "warn"];

const customPrismaClient = new CustomPrismaClient(prismaOptions);

const prismaClient =
    (globalThis.prisma as typeof customPrismaClient) || customPrismaClient;

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prismaClient;
}

export type PrismaClient = typeof prismaClient;
export default prismaClient;
