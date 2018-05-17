
const workboxBuild = require('workbox-build')

exports.onPostBuild = (args, pluginOptions) => {
  return workboxBuild.generateSW({
    globDirectory: 'public',
    globPatterns: [
      '**/*.{woff2}',
      'commons-*js',
      'app-*js',
      'index.html',
      'manifest.json',
      'manifest.webmanifest',
    ],
    swDest: 'public/sw.js',
  })
}