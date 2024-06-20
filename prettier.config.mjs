/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
    semi: true,
    singleQuote: false,
    bracketSameLine: true,
    trailingComma: "all",
    arrowParens: "always",
    printWidth: 100,
    tabWidth: 4,
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-packagejson",
        "prettier-plugin-tailwindcss",
    ],
    importOrderTypeScriptVersion: "5.4.5",
};

export default config;
