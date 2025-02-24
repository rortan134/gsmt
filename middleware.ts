import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
});

export const config = {
    matcher: ["/", "/(en|es)/:path*", undefined, "/((?!_next|_vercel|m|.*\\..*).*)"],
};

