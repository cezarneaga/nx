/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "cloudflare-workers",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [
    '**/.*',
    "**/*.css",
    "**/*.test.{js,jsx,ts,tsx}",
    "README.md"
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
