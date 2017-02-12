module.exports = {
  context: `${__dirname}/frontend`,
  entry: './main',

  output: {
    path: `${__dirname}/public`,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css' // !autoprefixer?browsers=last 2 version
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
}
