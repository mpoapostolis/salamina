/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/bucket/:path*",
        destination: "https://appoploo.fra1.digitaloceanspaces.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
