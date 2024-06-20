import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
    rules: [
        {
            userAgent: "*",
            disallow: ["/m/"],
        },
    ],
});

export default robots;

export const dynamic = "error";
