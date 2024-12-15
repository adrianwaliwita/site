/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  future: {
    webpack5: true,
  },
  trailingSlash: true,
};

export default nextConfig;
// distDir: "build",
// output: "export",
