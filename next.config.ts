import type { NextConfig } from "next";

// Static export: the whole audit runs in the browser, no server and no stored data.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
