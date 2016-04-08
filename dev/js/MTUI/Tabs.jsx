/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

//Tabs 插件
const Tabs = React.createClass({
  callBack : function(index,name){
    if(this.props.callBack != undefined){
      this.props.callBack(index,name);
    }
  },
  getInitialState: function(){
    //初始化回调 - 这里回调函数会出现一个BACK，回调函数只再点击切换后执行
    //this.callBack(this.props.defaultVal,this.props.data[this.props.defaultVal].title);
    return {
      defaultVal : this.props.defaultVal
    }
  },
  handleClick: function(e){
    var $li = $(e.currentTarget);
    var num = $li.index();
    var name = $li.data("name");
    this.setState({
      defaultVal : num
    });
    //点击后的回调
    this.callBack(num,name);
  },
  tabsHead : function(){
    var arr = [];
  this.props.data.map(function(index, elem) {
    arr.push(<li onClick={this.handleClick} data-name={index.title} className={elem==this.state.defaultVal?'mt-tabs-active':''} key={elem}><a href="javascript: void(0)">{index.title}</a></li>);
  }.bind(this))
  return arr;
  },
  tabBody : function(){
    var arr = [];
  this.props.data.map(function(index, elem) {
    arr.push(<div className={elem==this.state.defaultVal?'mt-tabs-item mt-tabs-active':'mt-tabs-item'} key={elem}>{index.content}</div>);
  }.bind(this))
  return arr;
  },
  render: function() {
    return (
      <div className={"mt-tabs "+this.props.className}>
          <ul className="mt-tabs-header">
            {this.tabsHead()}
          </ul>
          <div className="mt-tabs-content">
            <div className="mt-tabs-wrap">
              {this.tabBody()}
            </div>
          </div>
        </div>
    );
  }
});

//配置信息
export default Tabs;