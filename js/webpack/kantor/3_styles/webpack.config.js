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
        test: /\.css$/,
        loader: 'style-loader!css-loader' // !autoprefixer?browsers=last 2 version
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
}
