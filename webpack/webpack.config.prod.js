const { merge } = require("webpack-merge");
const common = require('./webpack.config.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: "scripts/[name].[contenthash].js",
  },


  module: {
    rules: [
      //using PostCSS for Production only
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv(/* pluginOptions */)],
              },
            },
          },
        ]
      }
    ]
  },



  plugins: [
  
  ],



  optimization: {
    //Enables Tree Shaking
    usedExports: true,


    //enables js code minify
    minimize: true,
    minimizer: [

      //Enables Compression of js code and Tree Shaking (comments are removed)
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: { comments: false },

        },
        extractComments: false,

      }),


      //enables css code minify
      new CssMinimizerPlugin({
        minimizerOptions: {
          //sourceMap: true,
          preset: ["default", { discardComments: { removeAll: true } }]
        }
      }),
    ]

  },


});