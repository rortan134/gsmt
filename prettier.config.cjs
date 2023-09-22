// @ts-check
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    plugins: [
        "prettier-plugin-packagejson",
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss", // Must come last
    ],
    arrowParens: "always",
    bracketSpacing: true,
    bracketSameLine: true,
    embeddedLanguageFormatting: "auto",
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    proseWrap: "preserve",
    quoteProps: "as-needed",
    requirePragma: false,
    semi: true,
    singleQuote: false,
    jsxSingleQuote: false,
    trailingComma: "es5",
    useTabs: false,
    printWidth: 100,
    tabWidth: 4,
    rangeStart: 0,
    endOfLine: "auto",
    importOrderTypeScriptVersion: "5.1.6",
};
