/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    domains: ['https://avatars.dicebear.com']
  }
}

module.exports = nextConfig
