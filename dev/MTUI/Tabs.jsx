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
    //保证页面渲染后执行回调函数
    setTimeout(function(){
      //点击后的回调
      this.callBack(num,name);
    }.bind(this),0);
  },
  tabsHead : function(){
    var arr = [];
    this.props.children.map(function(elem,index) {
      arr.push(<li onClick={this.handleClick} data-name={elem.props.title} className={index==this.state.defaultVal?'mt-tabs-active':''} key={index}><a href="javascript: void(0)">{elem.props.title}</a></li>);
    }.bind(this))
    return arr;
  },
  tabBody : function(){
    var arr = [];
    this.props.children.map(function(elem,index) {
      arr.push(<div className={index==this.state.defaultVal?'mt-tabs-item mt-tabs-active':'mt-tabs-item'} key={index}>{elem}</div>);
    }.bind(this))
    return arr;
  },
  render: function() {
    var animate = ' mt-tabs-animate';
    if(!this.props.animate){
      animate="";
    }
    
    return (
      <div className={"mt-tabs "+this.props.className}>
          <ul className="mt-tabs-header">
            {this.tabsHead()}
          </ul>
          <div className={"mt-tabs-content"+animate}>
            {this.tabBody()}
          </div>
        </div>
    );
  }
});

//配置信息
export default Tabs;