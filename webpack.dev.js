const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    contentBase: 'src',
    port: '3001',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
});
