var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var JSXPath = './dev';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
    //配置服务器
    //webpack-dev-server有两种启动模式：
　　//iFrame：该模式下修改代码后会自动打包，但是浏览器不会自动刷新
　　//inline：内联模式，该模式下修改代码后，webpack将自动打包并且刷新浏览器，让我们看到最终的修改
    devServer: {
        contentBase:'./build',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    //页面入口文件配置 
    entry: {//需要打包的JS，支持数组
        index : JSXPath+'/index.jsx',
        common :['react','react-dom','react-router']
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, 'build'),//'build',
        //publicPath: "build/",// 网站运行时的访问路径
        filename: '/js/[name].js'
    },
    resolve: { 
        //root: 'E:/webpack_and_gulp_react/', //绝对路径
        extensions: ['', '.js', '.jsx', '.scss', '.css'] //require 的时候，可以不用写文件类型
        // alias : {//定义别名
        //     jquery: "./scripts/jquery.min.js"  // require('./scripts/jquery.min.js');可以设置为 require('jquery');
        // }
    },
    module: {
        //加载器配置
        //凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理
        loaders: [
            {
                test:/\.jsx?$/,
                loader: 'babel',
                exclude:/(node_modules)/,
                query:{
                    presets:['react','es2015']
                }
            },
            {
                test: /\.(woff|eot|ttf)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            },
            {test: /\.scss$/, loader: "style!css!sass"},
            {test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css")},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=8192&name=./img/[hash].[ext]"}
        ]
    },
    //插件项
    plugins: [//将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
        new webpack.optimize.CommonsChunkPlugin('common','/js/common.js'),
        new HtmlwebpackPlugin({
            title: 'BBD',
            template:'./dev/index.html', //html模板路径
            filename: 'index.html',
            inject:true,  //允许插件修改哪些内容，包括head与body
            hash:false //为静态资源生成hash值
        }),//添加我们的插件 会自动生成一个html文件
        new webpack.BannerPlugin('This file is created by Mantou'),
        new ExtractTextPlugin("/css/[hash:8].styles.css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development') //设置node环境变量
        }),
       // new webpack.optimize.CommonsChunkPlugin({name: 'commons'}) //多个JS合并成一个JS
    ]
};
