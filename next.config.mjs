import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = { experimental: { ppr: true, reactCompiler: true } };

export default withNextIntl(nextConfig);
