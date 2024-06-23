import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
});

// We only want the middleware to run on the `/` route
// to redirect users to their preferred locale
export const config = { matcher: ["/"] };
