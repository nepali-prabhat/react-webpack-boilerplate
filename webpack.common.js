var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                exclude:/(node_modules)/,
                use: 'babel-loader'
            },
            { 
                test: /\.(scss)$/, 
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images/',
                            name: '[name].[contenthash].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}