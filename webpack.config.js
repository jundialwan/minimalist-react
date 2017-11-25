/**
 * Webpack configuration for build
 * 
 * Webpack configuration must written in ES5 JavaScript
 */
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
  // entry file of your app
  // you can have more than one entry file in one app
  entry: [
    path.join(__dirname, 'index.js') // path file
  ],

  // output destination, folder path and file name
  output: {
    path: path.join(__dirname, './dist'), // output folder
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
  },

  plugins: [
    new CopyWebpackPlugin([
      path.join(__dirname, 'index.html')
    ])
  ]

}