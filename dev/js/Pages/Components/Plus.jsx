import './style.css';
import React from 'react'
import conf from '../Conf/Conf'
import {Tabs , DateInput, ModalShow , Modal, Popup, PageList, Loading} from '../../MTUI/index' 

var a = 1;
const Plus = React.createClass({
  getInitialState: function() {
      return {
          nowpage : 'loading....',
          eachPageCount : 'loading...'
      };
  },
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

  //分页回调
  setCallBack : function(nowpage,eachPageCount){
      console.log("当前：",nowpage,eachPageCount);
      $(this.refs.pageData).html('您选择了页码: '+nowpage+'  当前每页有：'+eachPageCount);
  },

  componentDidMount: function() {
       Loading.start();
       //Loading.error();

       setTimeout(function(){
          Loading.done();
       },3000);
  },

  render: function() {

  	//tabs切换的数据
    var tabsData = {
      className : 'test',
      defaultVal : 0,
      data : [
          {title : '小桥流水', content :<div>我就是随便写点什么~</div> },
          {title : '拆菊东篱', content :<div>loading...</div> },
          {title : '古道西风', content :<div>loading...</div> },
          {title : '其他', content :<div>loading...</div> }
        ],
        callBack: function(index){ //切换后的回调函数
          console.log("当前选择的tabs为：",index);
        }
    }

    //弹窗
    var modal = <Modal width='400px' height='240px' title="弹窗标题可自定义" drag="true">这个是有头部的弹出窗。</Modal>;
    var modal2 = <Modal width='400px' height='240px'>这是一个自定义内容的弹出窗，没有头部。</Modal>;

    //分页插件调用
    return (

    	<div className={conf.pageAnimate+" contents"}>
    		<h1>插件</h1>

        {/*分页插件*/}
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
            </div>
          </div>

    		<div className="mt-page-content">
	          <h3 className="mt-padding">弹窗组件:</h3>
	          <div className="mt-g">
	            <div className="mt-g-12">

	            <ModalShow modal={modal}>
	              <a href="javascript:;" className="mt-btn-green ink-reaction mt-modal-btn">有头部的弹窗</a>
	            </ModalShow>&nbsp;&nbsp;

	            <ModalShow modal={modal2}> 
	              <a href="javascript:;" className="mt-btn-green ink-reaction mt-modal-btn">没有头部的弹窗</a>
	            </ModalShow>&nbsp;&nbsp;

	            <a href="javascript:;" onClick={this.handleClickPopup} className="mt-btn-yellow ink-reaction mt-modal-btn">alert</a> &nbsp;&nbsp;
	            <a href="javascript:;" onClick={this.handleClickPopup2} className="mt-btn-red ink-reaction mt-modal-btn">带回调函数的popup</a> &nbsp;&nbsp;
	            <a href="javascript:;" onClick={this.handleClickPopup3} className="mt-btn-blue ink-reaction mt-modal-btn">3秒关闭</a>

	            </div>
	          </div>
	        </div>

    		<div className="mt-page-content">
	          <h3 className="mt-padding">tab切换：</h3>
	          <div className="mt-g">
	            <div className="mt-g-12">
	                <Tabs {...tabsData}/>
	            </div>
	          </div>
	        </div>

	        <div className="mt-page-content">
	          <h3 className="mt-padding">日期插件：</h3>
	          <div className="mt-g">
	            <div className="mt-g-12">
	              
	              <div className="mt-g-3">
	                没有默认值：<DateInput defaultValue="null"/> 
	              </div>

	              <div className="mt-g-3">
	                默认值是今天：<DateInput defaultValue="now"/>
	              </div>

	              <div className="mt-g-3">
	                自定义默认值：<DateInput year="2015" month="5" day="18"/>
	              </div>

	              <div className="mt-g-3">
	                自定义提示内容：<DateInput width="200px" defaultValue="null" placeholder="我是个任性的日期..." year="2015" month="3" day="18"/>
	              </div>

	            </div>
	          </div>
	        </div>

    	</div>
    );
  }
});
//关于我们
export default Plus;