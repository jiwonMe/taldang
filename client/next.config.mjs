/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // sitemap.xml
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots.txt',
      }
    ];
  },
};

export default nextConfig;
