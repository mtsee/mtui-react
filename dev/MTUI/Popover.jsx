/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'

//Tabs 插件
const Popover = React.createClass({

  //获取坐标
  getPoint($dom){
    //实例化弹窗节点，获取 wid，hei
    return {
      x : $dom.offset().left,
      y : $dom.offset().top
    };
  },

  //设置 className
  getClassName(){
    //设置 className
    var className = "mt-popover mt-popover-"+this.props.place;
    if(this.props.animate.length > 0){
      className +=" animated "+this.props.animate;
    }
    className += this.props.className==undefined?"":(" "+this.props.className);
    return className;
  },

  //设置时间戳
  setTimestamp(timestamp){
      var $btn = $(this.refs.popover);
      if($btn.attr("data-timestamp") == undefined){
        $btn.attr("data-timestamp",timestamp);
      }else{
        timestamp = $btn.attr("data-timestamp");
      }
      return timestamp;
  },

  //显示弹窗
  showPopover(e,timestamp){
    //渲染后，设置宽度，定位
    var $dom = $(e.currentTarget);
    var $popover = $("#popover_"+timestamp);
    var p = this.getPoint($dom);
    var color = this.props.color==undefined?'#333':this.props.color;
    //设置样式
    $popover.css({
      'background':color
    });

    const top = function(){
      //top
      $popover.css({
        left : p.x - ($popover.outerWidth() - $dom.outerWidth())/2,
        top : p.y - $popover.outerHeight() - 10
      });

      $popover.find(".mt-arrow").css({
        'border-top-color':color
      });

    }

    const left = function(){
      $popover.css({
        left : p.x - $popover.outerWidth() - 10,
        top : p.y - ($popover.outerHeight() - $dom.outerHeight())/2
      });

      $popover.find(".mt-arrow").css({
        'border-left-color':color
      });
    }

    const right = function(){
      $popover.css({
        left : p.x + $dom.outerWidth() + 10,
        top : p.y - ($popover.outerHeight() - $dom.outerHeight())/2
      });

      $popover.find(".mt-arrow").css({
        'border-right-color':color
      });

    }

    const down = function(){
      $popover.css({
        left : p.x - ($popover.outerWidth() - $dom.outerWidth())/2,
        top : p.y + $dom.outerHeight() + 10
      });

      $popover.find(".mt-arrow").css({
        'border-bottom-color':color
      });
    }

    switch(this.props.place) {
      case 'top': top(); break;
      case 'left': left(); break;
      case 'right': right(); break;
      case 'down': down(); break;
    }

  },

  //事件
  handleEvents(e){

    var timestamp = new Date().getTime();

    //设置时间戳
    timestamp = this.setTimestamp(timestamp);

    //销毁弹窗
    if($("#MTUI_POPOVER_"+timestamp)[0] != undefined){
      $("#MTUI_POPOVER_"+timestamp).remove();
      return;
    }

    //渲染一个弹窗，支持弹多个弹窗
    $("#MTUI_POPOVER").append('<div id="MTUI_POPOVER_'+timestamp+'"></div>');
    render(
      <div className={this.getClassName()} id={"popover_"+timestamp}>
        {this.props.dom}
        <i className="mt-arrow"></i>
      </div>,
      $('#MTUI_POPOVER_'+timestamp)[0]
    );

    //显示弹窗
    this.showPopover(e,timestamp); 

  },

  //渲染
  render() { 
    var child = React.Children.only(this.props.children);
    var props = {};
    //事件分类
    if(this.props.event == "focus"){
      props.onFocus = this.handleEvents;
      props.onBlur = this.handleEvents;
    }else if(this.props.event == "hover"){
      props.onMouseOver = this.handleEvents;
      props.onMouseOut = this.handleEvents;
    }else{
      props.onClick = this.handleEvents;
    }
    props.ref = 'popover';
    return React.cloneElement(child,props);
  }

});

//配置信息
export default Popover;