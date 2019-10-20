var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var merge = require("webpack-merge");
var {CleanWebpackPlugin} = require("clean-webpack-plugin");
var TerserJSPlugin = require('terser-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var webpack = require("webpack");

const mode = "prod";

module.exports = merge(require("./webpack.common"),{
    mode: "production",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index_bundle.[contentHash].js"
    },
    module:{
        rules:
        [
            { 
                test: /\.(scss)$/, 
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
                        }
                    }
                ],
            }
        ]
    },
    optimization: {
        minimizer: 
        [
            new TerserJSPlugin(), 
            new OptimizeCSSAssetsPlugin()
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            ENV_MODE: mode,
            'process.env': {
                SESSION_IP: JSON.stringify(process.env.SESSION_IP)
            }
        })
    ]
});