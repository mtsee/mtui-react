var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  contentBase:config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  inline: true,
  progress: true
}).listen(3000, '127.0.0.1', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://127.0.0.1:3000/')
});