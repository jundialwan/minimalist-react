/**
 * Webpack configuration must written in ES5 JavaScript
 */
var webpack = require('webpack')
var path = require('path')

module.exports = {
  // entry file of your app
  // you can have more than one entry file in one app
  entry: [
    path.join(__dirname, 'index.js') // path file, relative to this file location
  ],

  // output destination, folder path and file name
  output: {
    path: path.join(__dirname, './dist'), // output folder, must be absolute path
    filename: 'bundle.js' // output file name, placed in output folder
  },

  // configure your dev server for development purpose
  devServer: {
    contentBase: './', // path to your index.js file
    historyApiFallback: true // set true to access dev server by webpeck-dev-server from URL
  },

  // module configuration
  // configure how your file loaded and bundled by webpack
  module: {
    loaders: [
      {
        test: /\.js$/, // webpack will match the file extension with regex, in this case .js extension
        exclude: /node_modules/, // webpack will not looking for .js file in node_modules
        loader: ['babel-loader'] // webpack will load it with babel-loader to transpile it to ES5
      }
    ]
  }

}