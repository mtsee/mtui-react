import React from 'react'
import {PageList} from '../../../MTUI/index'
// 类
const PageListDom = React.createClass({
  getInitialState: function() {
      return {
          nowpage : 'loading....',
          eachPageCount : 'loading...',
          loading: 'Loading...'
      };
  },
  //分页回调
  setCallBack : function(nowpage,eachPageCount){
      console.log("当前：",nowpage,eachPageCount);
      $(this.refs.pageData).html('您选择了页码: '+nowpage+'  当前每页有：'+eachPageCount);
  },
  render: function() { 

    return (
    	<div className="mt-page-content">
        <h3 className="mt-padding">AJAX分页插件：</h3>
        <div className="mt-g">
          <div className="mt-g-8">
              {/*
              count 表示有多少条数据
              eachPageCount 每页显示多少条 10/20/50
            */}
            <p ref="pageData"></p>

            <PageList id="pageList1" count="300" eachPageCount="10" showPage="6" callback={this.setCallBack}/> 

          </div>

          <div className="mt-g-12">
            <div id="code-PageList"></div>
          </div>

        </div>
      </div>
    );
  }
});
//帮助中心
export default PageListDom;