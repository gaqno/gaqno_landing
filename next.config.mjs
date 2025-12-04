/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'aceternity.com', 'assets.aceternity.com'],
  },
}

export default nextConfig
