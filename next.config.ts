import type { NextConfig } from "next";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
if (configuredBasePath && !/^\/[A-Za-z0-9_-]+$/.test(configuredBasePath)) {
  throw new Error("NEXT_PUBLIC_BASE_PATH must be empty or a single URL path segment beginning with /");
}

const nextConfig: NextConfig = {
  basePath: configuredBasePath,
};

export default nextConfig;
