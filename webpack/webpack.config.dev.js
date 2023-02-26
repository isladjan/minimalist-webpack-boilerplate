const { merge } = require("webpack-merge");
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: "development",

    output: {
        filename: "scripts/[name].js",
    },


    devServer: {
        compress: true,
        hot: true,
        port: 9001,
        static: false,
        watchFiles: ["src/**/*"],
    },


    //Source Map
    //devtool: "eval-source-map",          //fast, it is not generated in the dist folder but is sent directly to the browser, but it is a little harder to read
    devtool: "inline-source-map",          //source map is generated directly in bundler
    //devtool: "source-map",              //more accurate Source Map if needed (but slower)
    //devtool: false,


    //lets you precisely control what bundle information gets displayed in terminal
    stats: {
        modules: false,
        entrypoints: false,
    },


    plugins: [
    ],


    module: {
    }
});