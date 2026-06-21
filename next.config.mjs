const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProduction ? "/sbs-next" : "",
  assetPrefix: isProduction ? "/sbs-next/" : "",
};

export default nextConfig;
