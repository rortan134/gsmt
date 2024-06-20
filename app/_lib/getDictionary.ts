import "server-only";
import type { Locale } from "@/i18n-config";

const dictionaries = {
    en: () => import("../../public/locale/en.json").then((module) => module.default),
    es: () => import("../../public/locale/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();
