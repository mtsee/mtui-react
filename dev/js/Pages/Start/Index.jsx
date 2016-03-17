import './style.css' 
import React from 'react'
import setMinHeight from '../../Mixins/setMinHeight'

const MyReport = React.createClass({
  mixins:[setMinHeight],
  componentDidMount: function() {
    // if(this.isMounted()){
    //   // $(function(){
    //   //   CodeMirror.fromTextArea($("#myTextarea")[0], {
    //   //    lineNumbers: true,
    //   //    mode:  "text/javascript"
    //   //   });
    //   // }) 
    // }
  },
  render: function() {
    var html = 'var a=124;'
  	return (
          <div className="start" style={{ minHeight: this.state.height+"px"}}>
            <div className="contents">
              <h1>1、前期准备</h1>
              <p>MTUI React 组件是基于 React.js 开发的 ，如果你没有使用过 React，请先访问 <a href="https://facebook.github.io/react/index.html">React官网</a>学习。</p>
              <h1>2、获取源码</h1>
              <p>MTUI React 代码托管在Github，你可以点击下面的按钮获取。为了帮助项目更好的发展，请不吝献出你的 Star。</p>
              <p> <a href="https://facebook.github.io/react/index.html">Github</a> </p>
              {/* <textarea id="myTextarea" defaultValue={Footer}/> */}
              {/* <iframe src="https://ghbtns.com/github-btn.html?user=mtsee&amp;repo=react-router-demo&amp;type=star&amp;count=true&amp;size=large" frameBorder="none" scrolling="0" width="160px" height="30px"></iframe> */}
            </div>
          </div>
      );
  }
});
//关于我们
module.exports = MyReport;