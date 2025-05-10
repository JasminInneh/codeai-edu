/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/codeai-edu',
  assetPrefix: '/codeai-edu/',
};

export default nextConfig;
