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
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
    qualities: [25, 50, 75, 95],
  },
};

module.exports = nextConfig;
