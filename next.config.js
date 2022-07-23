/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "el"],
    defaultLocale: "el",
  },
  async rewrites() {
    return [
      {
        source: "/bucket/:path*",
        destination: "https://mpoapostolis.fra1.digitaloceanspaces.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
