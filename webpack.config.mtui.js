//打包时用的配置文件
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //页面入口文件配置 
    entry: { //需要打包的JS，支持数组
        index: './dev/mtui/style.jsx'
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, 'lib'), //'build',
        filename: '/style.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css'] //require 的时候，可以不用写文件类型
    },
    module: {
        //加载器配置
        //凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理
        loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ["babel-loader"]
            },
            { test: /\.(woff|eot|ttf)$/i, loader: 'file-loader?name=./assets/fonts/[name].[ext]' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass") },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!autoprefixer") },
            { test: /\.(png|jpg|gif)$/, loader: "file-loader?name=./assets/imgs/[name].[ext]" }
        ]
    },
    //插件项
    plugins: [ //将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
        new ExtractTextPlugin("style.css") //[hash:8].
    ]
};