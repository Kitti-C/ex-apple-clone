/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: false,
  basePath: process.env.NEXT_PUBLIC_PATH_BASE,
  async rewrites() {
    return [
      {
        source: process.env.NEXT_PUBLIC_PATH_SOURCE,
        destination: process.env.NEXT_PUBLIC_PATH_DESTINATION,
      },
    ]
  },
  images: {
    domains: ['rb.gy'],
  },
}

module.exports = nextConfig
