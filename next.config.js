/** @type {import('next').NextConfig} */
// import Webpack to define jquery and window
// const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  images: {
    domains: ["localhost"],
  },

};

module.exports = nextConfig;
