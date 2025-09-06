import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",               // anything starting with /api
        destination: "http://localhost:8000/api/:path*", // forward to Express backend
      },
    ];
  },
};

export default nextConfig;
