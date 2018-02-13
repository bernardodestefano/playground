const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    contentBase: 'src',
    port: '3001',
  },
});
