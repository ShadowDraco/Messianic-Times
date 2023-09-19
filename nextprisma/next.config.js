/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['www.paypal.com'],
  },
}

module.exports = nextConfig
