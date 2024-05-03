/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://medium.com/@marc-doblefilo",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
