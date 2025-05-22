/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    remotePatterns: [new URL("https://placehold.co/**")],
    domains: ["https://placehold.co/**"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
