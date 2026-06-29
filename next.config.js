/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://medium.com/@marc-doblefilo",
        permanent: false,
        basePath: false,
      },
      {
        source: "/contact",
        destination:
          "https://www.linkedin.com/in/marc-rodriguez-moreno/?locale=es",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
