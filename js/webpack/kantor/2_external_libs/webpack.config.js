const webpack = require('webpack')

module.exports = {
  context: './frontend', // корневая папка для модулей
  entry: './app', // корневой модуль

  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'app.js'
  },

  // externals: { // позволяет подключать модулем библиотеку из cdn
    // lodash: '_'
  // }
}
