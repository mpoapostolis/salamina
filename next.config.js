/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/bucket/:path*",
        destination: "https://appoploo.fra1.digitaloceanspaces.com/:path*",
      },
      {
        source: "/iframe/:path*",
        destination: "http://automatix.talent.gr:82/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
