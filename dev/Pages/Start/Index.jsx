import './style.css' 
import React from 'react'
import setMinHeight from '../../Mixins/setMinHeight'
import setCode from '../../Mixins/setCode'

const Start = React.createClass({
  mixins:[setMinHeight,setCode],
  iniCode: function(){
      var shtml ='<!DOCTYPE html>\
                #<html>\
                #<head lang="zh-cn">\
                #  <meta charset="utf-8">\
                #  <meta http-equiv="X-UA-Compatible" content="IE=edge">\
                #  <meta name="description" content="">\
                #  <meta name="keywords" content="">\
                #  <meta name="viewport" content="width=device-width,initial-scale=1">\
                #  <title>MTUI React</title>\
                #  <meta name="renderer" content="webkit">\
                #  <!-- No Baidu Siteapp-->\
                #  <meta http-equiv="Cache-Control" content="no-siteapp"/>\
                #  <meta name="apple-mobile-web-app-title" content="MTUI"/>\
                #  <meta name="apple-mobile-web-app-capable" content="yes">\
                #  <meta name="apple-mobile-web-app-status-bar-style" content="black">\
                #  <link rel="stylesheet" href="http://at.alicdn.com/t/font_1458907786_003791.css" />\
                #  <link rel="stylesheet" href="/libs/css/animate.css"/>\
                #  <!--[if lt IE 9]>\
                #  <script src="/libs/js/plugin/jquery-1.11.2.js"></script>\
                #  <script src="/libs/js/html5.js"></script>\
                #  <![endif]-->\
                #  <!--[if (gte IE 9)|!(IE)]><!-->\
                #  <script src="/libs/js/jquery-2.1.1.js"></script>\
                #  <!--<![endif]-->\
                #</head>\
                #<body>\
                #  <div id="App"></div>\
                #</body>\
                #</html>';
      this.iniEditer(shtml,'code-shtml'); 
  },
  render: function() {
  	return (
          <div className="start" style={{ minHeight: this.state.height+"px"}}>
            <div className="contents">
              <h1>1、前期准备</h1>
              <p>MTUI React 组件是基于 React.js 开发的 ，如果你没有使用过 React，请先访问 <a href="https://facebook.github.io/react/index.html">React官网</a>学习。</p>
              <h1>2、获取源码</h1>
              <p>MTUI React 代码托管在Github，你可以点击下面的按钮获取。为了帮助项目更好的发展，请不吝献出你的 Star。</p>
              <p> <a href="https://github.com/mtsee/mtui-react">Github</a> </p>
              <h1>3、源码说明</h1>
              <p>
              组件源码在 dev/js/mtui下面，将该文件夹拷贝到自己的项目下面。<br/><br/>
              html模版建议：
              </p>
              <p id="code-shtml"></p>
            </div>
          </div>
      );
  }
});
//关于我们
module.exports = Start;