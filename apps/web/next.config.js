const withTM = require("next-transpile-modules")([
  "@crispy/ui",
  "@crispy/contentful",
]);

module.exports = withTM({
  reactStrictMode: true,
});
