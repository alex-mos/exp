var webpack = require('webpack')
var path = require('path')

// The APP_DIR holds the directory path of the React application's codebase
// and the BUILD_DIR represents the directory path of the bundle file output.
var BUILD_DIR = path.resolve(__dirname, 'src/client/public')
var APP_DIR = path.resolve(__dirname, 'src/client/app')

var config = {
  entry: APP_DIR + '/comments.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
}

module.exports = config;
