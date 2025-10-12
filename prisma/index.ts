import { PrismaPg } from "@prisma/adapter-pg";
import { type Prisma, PrismaClient } from "./client/client";

const adapter = new PrismaPg({
    connectionString: process.env.POSTGRES_PRISMA_URL,
});

const globalForPrisma = global as unknown as {
    baseClient: PrismaClient;
};

const prismaOptions: Prisma.PrismaClientOptions = {
    adapter,
};

const baseClient =
    globalForPrisma.baseClient || new PrismaClient(prismaOptions);

export const prisma = baseClient;

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.baseClient = baseClient;
}
