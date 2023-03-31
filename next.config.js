/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: { disableStaticImages: true },
};
const withVideos = require("next-videos");

module.exports = withVideos({
  basePath: "/AlteZiegeleiFilm1.mp4",

  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
