import gtConfig from "./gt.config.json";
import { locale } from "next/root-params";

export default async function getLocale() {
    const current = await locale();

    if (current && gtConfig.locales.includes(current)) {
        return current;
    }

    return gtConfig.defaultLocale;
}
