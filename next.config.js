const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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
