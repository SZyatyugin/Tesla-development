const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const $ = require("jquery");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpeg|gif|jpg)$/i,
                loader: "file-loader",
                options: {
                    name: "./assets/images/[name].[ext]",
                },
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                loader: "file-loader",
                options: {
                    name: "./assets/fonts/[name].[ext]",
                },
            },
            {
                test: /\.(js)$/i,
                use: ["babel-loader", "prettier-loader"],
                exclude: [/node_modules/],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? "style.css" : "style.[contenthash].css",
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new ESLintPlugin(),
        new PrettierPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
};
