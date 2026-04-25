import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  cacheHandler: require.resolve("./cache-handler.js"),
  images: {
    maximumDiskCacheSize: 0,
  },
};

export default nextConfig;
