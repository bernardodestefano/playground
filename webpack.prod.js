const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
          ],
        }),
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
    // Minify JS
    new UglifyJsPlugin(),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
});
