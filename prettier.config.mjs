/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
    arrowParens: "always",
    bracketSameLine: true,
    printWidth: 100,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
    importOrderTypeScriptVersion: "5.4.5",
};

export default config;
