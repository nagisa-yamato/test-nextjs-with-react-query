/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stg-fam-fansite.imgix.net",
        port: "",
        pathname: "/shared_file/**",
      },
    ],
  },
};

module.exports = nextConfig;
