import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        unoptimized: true,
      },
    ],
  },
}

export default nextConfig
