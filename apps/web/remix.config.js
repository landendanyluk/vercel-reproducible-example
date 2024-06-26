/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  tailwind: true,
  serverDependenciesToBundle: ['@xaeon/interface', /.*/, /^remix-utils.*/],
  serverModuleFormat: 'cjs',
  future: {},
  watchPaths: ['../../interface/**/*']
}
