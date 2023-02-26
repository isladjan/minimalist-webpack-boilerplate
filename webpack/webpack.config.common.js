const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
    target: 'web',

    //path to the .js file from where webpack starts building a dependency graph
    entry: path.resolve(__dirname, "../src/index.js"),


    output: {
        path: path.resolve(__dirname, "../dist"),        // put all of the build in a dist folder
    },


    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },


    module: {
        rules: [

            //css loader
            {
                test: /\.css$/,
                use: [
                    //merges all the specified .css files (from index.js) into one separate bundle file
                    MiniCssExtractPlugin.loader,

                    //'css-loader',
                    { loader: "css-loader", options: { url: false } },

                ]
            },

        ]
    },

    plugins: [

        //It serves to generate the index.html file in dist folder and in it insert .js i .css bundlers files
        new HtmlWebpackPlugin(

            Object.assign(
                {},
                {
                    template: "./public/template.html",  //my template.html used as a base             
                    inject: "body"                       //js files are inserted at the end of <body>
                },

                // Only for production
                process.env.NODE_ENV === "production" ? {
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true
                    }
                } : undefined
            )
        ),



        //removes the content from the specified output folder (dist) every time webpack is started
        new CleanWebpackPlugin(),


        //Copies static resources (images and similar) to Dist folder (from src folder)
        new CopyPlugin({
            patterns: [
                { from: "public/assets", to: "assets" },
            ],
        }),


        //inserts a css bundle file into the html
        new MiniCssExtractPlugin({
            filename: "styles/main.css"
        }),


        new WebpackBar({})
    ],

    
  optimization: {
    //determine how js modules will be bundled
    //all npm Packages go to vendor.js,   all my .js files in one bundle and asynchronous modules are placed in each file separately
    splitChunks: {
        cacheGroups: {
          vendors: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
          },
        }
      },
  }
}