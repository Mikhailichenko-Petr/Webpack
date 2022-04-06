const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development'

const isProd = !isDev
console.log('IS DEV', isDev);


module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry:{
        main:'./index.js',
        analytics:'./analitick.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js','.json']
    },
    devServer: {
      port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
              collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(jpg|png|svg|jpeg|gif|ico)$/,
            type: 'asset/resource'
          },
          {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
          },
          {
            test: /\.(xml|csv)$/,
            type: 'asset/inline',
          }
        ]
    }
}