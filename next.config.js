const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.truemeds.in",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
});
