
const workboxBuild = require('workbox-build')

exports.onPostBuild = (args, pluginOptions) => {
  workboxBuild.generateSW({
    cacheId: 'gatsby-plugin-workbox',
    globDirectory: 'public',
    globPatterns: [
      '**\/*.{html,json,js,css}',
    ],
    swDest: 'public/sw.js',
  })
}