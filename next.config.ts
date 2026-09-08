import { withBotId } from "botid/next/config";
import { withGTConfig } from "gt-next/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                destination: "https://www.cachd.app/c/bTFxPm8AlpaK",
                permanent: false,
                source: "/fundamentals",
            },
        ];
    },
};

export default withBotId(
    withGTConfig(nextConfig, {
        getLocalePath: "./get-locale.ts",
        getRegionPath: "./get-region.ts",
        loadTranslationsPath: "./load-translations.ts",
    })
);
