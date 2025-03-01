import { getRequestConfig } from "next-intl/server";
import { z } from "zod";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    // Ensure that the incoming locale is valid
    const validLocale = z.string().array().parse(routing.locales);
    if (!locale || !validLocale.includes(locale)) {
        locale = routing.defaultLocale;
    }

    return { locale, messages: {} };
});
