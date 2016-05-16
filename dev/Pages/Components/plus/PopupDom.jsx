import React from 'react'
import {Popup} from '../../../MTUI/index'

// 类
const PopupDom = React.createClass({
  handleClickPopup: function(e){
      Popup({ 
          title:'系统提示',
          text: '系统提示信息！', //弹窗文字
          time : null, //自动关闭,  如果有值，一定时间会自动关闭
          width: 200, //弹窗宽度
          height: 'auto', //弹窗高度
          drag : true //是否可拖动
      });
  },
  handleClickPopup2: function(e){
      var clickback = function(mark){
        console.log(mark);
      }
      var closeback = function(){
        console.log("弹窗关闭了~");
      }
      Popup({
          title:'系统提示222',
          text: '系统提示信息！', //弹窗文字
          time : null, //自动关闭,  如果有值，一定时间会自动关闭
          clickback : clickback ,//点击按钮的回调函数 return :mark,$popup
          closeback : closeback, //关闭时的回调函数  return :$popup
          showbtn : 2, //是否显示按钮 0,1,2
          width: 300, //弹窗宽度
          height: 'auto', //弹窗高度
          drag : true //是否可拖动
      });
  },
  handleClickPopup3: function(e){
      Popup({
          title:'3秒后自动关闭',
          text: '系统提示信息！', //弹窗文字
          time : 3000, //自动关闭,  如果有值，一定时间会自动关闭
          width: 300, //弹窗宽度
          height: 'auto', //弹窗高度
          drag : true //是否可拖动
      });
  },
  render: function() { 
    return (
    	<div className="mt-page-content">
          <h3 className="mt-padding">Popup组件:</h3>
          <div className="mt-g">
            <div className="mt-g-12">

            <a href="javascript:;" onClick={this.handleClickPopup} className="mt-btn-yellow ink-reaction mt-modal-btn">alert</a> &nbsp;&nbsp;
            <a href="javascript:;" onClick={this.handleClickPopup2} className="mt-btn-red ink-reaction mt-modal-btn">带回调函数的popup</a> &nbsp;&nbsp;
            <a href="javascript:;" onClick={this.handleClickPopup3} className="mt-btn-blue ink-reaction mt-modal-btn">3秒关闭</a>

            <br/><br/>
            <div id="code-PopupShow"></div>

            </div>
          </div>
        </div>
    );
  }
});
//帮助中心
export default PopupDom;