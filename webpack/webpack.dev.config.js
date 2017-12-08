/**
 * Webpack configuration for development 
 * 
 * Webpack configuration must written in ES5 JavaScript
 */

// import base config from webpack.config.js
var baseConfig = require('./webpack.config')

// setup dev server for development
baseConfig.devServer = {
  contentBase: './', // path to your index.js file
  historyApiFallback: true // set true to access dev server by webpeck-dev-server from URL
}

// export settings module
module.exports = baseConfig