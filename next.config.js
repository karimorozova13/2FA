/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt|xml)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "storage.googleapis.com",
      "cdn.sanity.io",
      "via.placeholder.com",
      "i.ytimg.com",
    ],
    dangerouslyAllowSVG: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  devIndicators: {
    buildActivityPosition: "bottom-left",
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: false,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
