// next.config.js
import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            }
        ]
    },
    reactStrictMode: true,
    swcMinify: true
}

export default withContentlayer(nextConfig)