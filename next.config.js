/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "ng.jumia.is",
      "ciseco-nextjs.vercel.app",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          esModule: false,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
