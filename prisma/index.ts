import { type Prisma, PrismaClient } from "./client/client";

const globalForPrisma = global as unknown as {
    baseClient: PrismaClient;
};

const prismaOptions: Prisma.PrismaClientOptions = {};

const baseClient =
    globalForPrisma.baseClient || new PrismaClient(prismaOptions);

export const prisma = baseClient;

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.baseClient = baseClient;
}
