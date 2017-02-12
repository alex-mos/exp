module.exports = {
  context: `${__dirname}/frontend`, // корневая папка для модулей
  entry: './app', // корневой модуль

  output: {
    path: `${__dirname}/public`,
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: `${__dirname}/frontend`,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }

  // externals: { // позволяет подключать модулем библиотеку из cdn
    // lodash: '_'
  // }
}
