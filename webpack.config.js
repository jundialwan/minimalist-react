/**
 * Webpack configuration must written in ES5 JavaScript
 */
var webpack = require('webpack')

module.exports = {
  // entry file of your app
  // you can have more than one entry file in one app
  entry = [
    'index.js' // path file, relative to this file location
  ],

  // output destination, folder path and file name
  output: {
    path: 'dist', // output folder, relative to this file
    filename: 'bundle.js' // output file name, placed in output folder
  },

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