
const workboxBuild = require('workbox-build')
const path = require(`path`)
const slash = require(`slash`)
const _ = require(`lodash`)

exports.createPages = ({ boundActionCreators }) => {
  if (process.env.NODE_ENV === `production`) {
    const { createPage } = boundActionCreators
    createPage({
      path: `/offline-plugin-app-shell-fallback/`,
      component: slash(path.resolve(`${__dirname}/app-shell.js`)),
    })
  }
}


exports.onPostBuild = (args, pluginOptions) => {
  const options = {
    cacheId: 'gatsby-plugin-workbox',
    globDirectory: 'public',
    globPatterns: [
      '**\/*.{html,json,js,css}',
    ],
    navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
    swDest: 'public/sw.js',
  }

  const combinedOptions = _.defaults(pluginOptions, options)

  return workboxBuild.generateSW(combinedOptions)
}