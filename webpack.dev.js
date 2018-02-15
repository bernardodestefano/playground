const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: '3000',
  },
});
