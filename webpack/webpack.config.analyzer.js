const { merge } = require("webpack-merge");
//const common = require('./webpack.config.common.js');
const prod = require('./webpack.config.prod.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(prod, {


  plugins: [
    new BundleAnalyzerPlugin()
  ],


});