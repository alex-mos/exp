const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')

module.exports = {
    entry: { // точки входа, которые необходимо собрать
      home: './frontend/home',
      about: './frontend/about'
    },

    output: {
        path: `${__dirname}/public`,
        filename: '[name].js',
        library: '[name]'
    },

    watch: NODE_ENV == 'development', // true or false

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : 'source-map',

    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015']
                }
            }
            // {
              // test: /\.less/,
              // exclude: /(node_modules|bower_components)/,
              // loader: 'style!css!less'
            // }
        ]
    },

    plugins: [
      new webpack.NoErrorsPlugin(), // плагин, мешающий созданию билда при ошибках компиляции
      new webpack.optimize.UglifyJsPlugin({ // плагин для минификации
        compress: {
          warnings: false,
          drop_console: true,
          unsafe: true
        }
      })
    ]
}
