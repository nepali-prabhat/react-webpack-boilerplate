var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var merge = require("webpack-merge");
var webpack = require("webpack");

const mode = "dev";

module.exports = merge(require("./webpack.common"),{
    mode: "development",
    module:{
        rules:
        [
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
                            name: '[path][name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        }
                    }
                ],
            }
        ]   
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.DefinePlugin({
            'ENV_MODE': JSON.stringify(mode),
            'process.env': {
                SESSION_IP: JSON.stringify(process.env.SESSION_IP)
            }
        })
    ],
    devtool:'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index_bundle.js"
    }
});