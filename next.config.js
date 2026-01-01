/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    compress: true,
    poweredByHeader: false,
    output: 'export',
};

module.exports = nextConfig;
