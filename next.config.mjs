/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Set by the Pages workflow when the site is served from a subpath. Empty on a custom domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
