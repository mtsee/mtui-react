import React from 'react'
import {PageList} from '../../../MTUI/index'
// 类
const PageListDom = React.createClass({
  getInitialState: function() {
      return {
          count : 0,
          reData : null
      };
  },
  //分页回调
  setCallBack : function(nowpage,eachPageCount){
      console.log("请求服务器数据，传递参数：当前页码：",nowpage,'每页条数：',eachPageCount);

      this.setState({
          reData : 'loading...'
      });

      //模拟ajax请求
      setTimeout(function(){
        var count = 300;
        this.setState({
          count : count,
          reData : <div>当前页码：{nowpage},每页条数：{eachPageCount}，服务器返回总条数：{count}</div>
        });

      }.bind(this),1000);
  },
  render: function() { 

    return (
    	<div className="mt-page-content">
        <h3 className="mt-padding">AJAX分页插件：</h3>
        <div className="mt-g">
          <div className="mt-g-8">
              {/*
              id 分页插件的id，选填
              count 表示有多少条数据
              nowpage 默认显示多少页
              eachPageCount 每页显示多少条 10/20/50
              showPage 当前显示多少按钮
            */}
            <p ref="">当前总数：{this.state.count}</p>
            <div>{this.state.reData}</div>
            <PageList jumpShow={false} id="pageList1" count={this.state.count} showPage="7" callback={this.setCallBack}/> 

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