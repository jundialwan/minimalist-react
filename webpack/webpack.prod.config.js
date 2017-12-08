/**
 * Webpack configuration for production
 * 
 * Webpack configuration must written in ES5 JavaScript
 */

var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

// import base config from webpack.config.js
var baseConfig = require('./webpack.config')

// configure plugins for production
baseConfig.plugins = [

  // copy webpack plugin used to copy files there are used by production code
  new CopyWebpackPlugin([
    // copy index.html to /dist/index.html
    { from: path.join(__dirname, '../index.html'), to: path.join(__dirname, '../dist')}
  ])
]

// export settings module
module.exports = baseConfig