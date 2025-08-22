/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Enable Next.js image optimization
    domains: [], // Add domains if using external image sources
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Define responsive image sizes
    imageSizes: [16, 32, 64, 96, 128, 256, 384], // Define thumbnail sizes
  },
  // Enable production performance optimizations
  swcMinify: true, // Use SWC for minification (faster than Terser)
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
}

export default nextConfig
