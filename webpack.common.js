var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },
    plugins:[
        new WebpackBar(),
        //works only in production for some reason
        new CopyWebpackPlugin([
            { from: './public/fav', to: 'fav' }
        ], { copyUnmodified: false })
    ],
    resolve: {
        alias: {
            utils: path.resolve(__dirname, 'src/utils/'),
            components: path.resolve(__dirname, 'src/components/'),
            views: path.resolve(__dirname, 'src/views/'),
            img: path.resolve(__dirname, 'src/img/'),
            scss: path.resolve(__dirname, 'src/scss')
        },
    },
    devServer:{
        noInfo: true,
        stats: 'minimal'
    }
}