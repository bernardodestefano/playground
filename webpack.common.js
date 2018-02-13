const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
