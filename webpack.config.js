var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
// var CleanPlugin = require('clean-webpack-plugin')//webpack插件，用于清除目录文件
var ROOT_PATH = path.resolve(__dirname);
var port = 4001;
var host = '127.0.0.1';

// entry就是模块的入口
// 1. entry的值是字符串，这个字符串对应的模块会在启动的时候加载
// 2. entry的值是数组，这个数组内所有模块会在启动的时候加载，数组的最后一个元素作为export
// 3. entry的值是对象，可以构建多个bundle

module.exports = {
    // 页面入口文件配置
    entry: [
        // 'react-hot-loader/patch',// 开启react代码的模块热替换（HMR）
        'webpack-dev-server/client?http://' + host + ':' + port, // 为webpack-dev-server的环境打包好运行代码
        'webpack/hot/only-dev-server', // 为热替换（HMR）打包好运行代码,// only- 意味着只有成功更新运行代码才会执行热替换（HMR）
        path.resolve(ROOT_PATH, 'dev/index_dev.jsx'),
    ],
    //入口文件输出配置
    output: {
        'path': path.resolve(ROOT_PATH, 'build'),
        //'publicPath': 'build',// 网站运行时的访问路径
        'filename': '/assets/js/index.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css'] //require 的时候，可以不用写文件类型
    },
    // devtool: "cheap-module-eval-source-map", //生成map
    //插件项
    plugins: [ //将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
        new HtmlwebpackPlugin({
            title: 'mtui',
            template: './dev/index.html', //'./dev/index.html', //html模板路径
            filename: 'index.html',
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: false //为静态资源生成hash值
        }), //添加我们的插件 会自动生成一个html文件
        //new CleanPlugin(['./build/*.hot-update.js','./build/*.hot-update.json']),
        //把指定文件夹xia的文件复制到指定的目录
        // new CopyWebpackPlugin([{
        //     from: 'dev/assets/libs/css/animate.css',
        //     to: 'build'
        // }]),
        new webpack.DefinePlugin({ //压缩 React
            "process.env": {
                NODE_ENV: JSON.stringify("development") //development,production
            }
        }),
        new webpack.NoErrorsPlugin(), //启用报错不打断模式
        new webpack.HotModuleReplacementPlugin() // 开启全局的模块热替换（HMR）
        //new webpack.NamedModulesPlugin() // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    ],
    module: {
        //加载器配置
        //凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理
        loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
                loaders: ["babel-loader"] //loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],//loaders: ["babel-loader"],//
            },
            { test: /\.(woff|eot|ttf)$/i, loader: 'file-loader?name=./assets/fonts/[name].[ext]' },
            { test: /\.scss$/, loader: "style!css!sass?sourceMap" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg|gif)$/, loader: "file-loader?name=./assets/imgs/[name].[ext]" }
        ]
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'build'), // 输出文件的路径
        historyApiFallback: true,
        hot: true, // 开启服务器的模块热替换（HMR）
        inline: true,
        progress: true,
        stats: 'error-only',
        host: host,
        port: port
    }
};