import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wodwebsite",
  assetPrefix: "/wodwebsite/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
