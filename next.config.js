/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Next doesn't infer it from a stray parent lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/7mzw821b/**",
      },
    ],
    qualities: [25, 50, 75, 95],
  },
};

module.exports = nextConfig;
