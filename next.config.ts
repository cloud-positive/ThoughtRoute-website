import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Minimize JS payload — remove console.* in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    // Use the more efficient AVIF format first, then WebP as fallback
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
