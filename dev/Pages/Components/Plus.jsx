import './style.css';
import React from 'react'
import conf from '../Conf/Conf'
import setCode from '../../Mixins/setCode'
import {Tabs} from '../../MTUI/index' 

// 下拉选择模块
import PageListDom from './plus/PageListDom'
import ModalShowDom from './plus/ModalShowDom'
import PopupDom from './plus/PopupDom'
import TabDom from './plus/TabDom'
import DateDom from './plus/DateDom'
import TreeDom from './plus/TreeDom'
import LoadDom from './plus/LoadDom'
import PopoverDom from './plus/PopoverDom'

//
//树形菜单
var codeTreeMenu = "import { TreeMenu } from '../../MTUI/index'\
#var treeData = {\
#            data:[\
#                  {\
#                   title:'地区',\
#                    children:['四川','重庆','南京','北京']\
#                  },\
#                 {\
#                    title:'类型',\
#                    children:['水果','蔬菜','肉类',\
#                      {\
#                        title:'鱼类',\
#                        children:['鲸鱼','秋刀鱼','草鱼']\
#                      } \
#                    ]\
#                  },\
#                  '其他'\
#            ],\
#            callback : null //回调函数\
#};\
#\
#render:\
#\
#<TreeMenu {...treeData}/>#";

//日历
var codeDateInput = 'import { DateInput } from \'../../MTUI/index\'\
#var data = {\
#  width : \'200px\', //日历输入框宽度，默认是120px\
#  defaultValue : null, //可以是now，null \
#  placeholder : \'日期\', //内容为空时的描述 \
#  year : 2015, //年\
#  month : 3, //月\
#  day : 18 //日\
#}\
#render:\
#\
#<DateInput {...data}/>\
#多个日期组合：<DateInputs defaultValue="null" placeholder="选择时间段..."/>\
#多个日期组合：<DateInputs start="2016/4/10" end="2016/5/12" placeholder="选择时间段..."/>';
//this.iniEditer(codeDateInput,'code-DateInput'); 

//分页
var codePageList = 'import { PageList } from \'../../MTUI/index\'\
#var data = {\
#  id : \'pageList1\', //id\
#  count : 300, //默认总条数，这个通过ajax获取 \
#  eachPageCount : 10, //每页显示条数\
#  showPage : 7, //默认显示多少页码\
#  callback : function(nowpage,eachPageCount){\
#       //返回当前第几页，每页多少条\
#  } //点击后的回调函数\
#}\
#render:\
#\
#<PageList {...data}/>';

//弹窗组件
var codeModalShow= 'ModalShow弹窗：#import { ModalShow , Modal} from \'../../MTUI/index\'\
#var modal = <Modal width=\'400px\' height=\'240px\' title="弹窗标题可自定义" drag="true">这个是有头部的弹出窗。</Modal>;\
#render:\
#\
#<ModalShow modal={modal}>\
#    <a href="javascript:;" className="mt-btn-green ink-reaction mt-modal-btn">有头部的弹窗</a>\
#</ModalShow>\
#';

//Popup弹窗
var codePopup = 'Popup 弹窗：\
#import { Popup } from \'../../MTUI/index\'\
#  handleClickPopup: function(e){\
#      Popup({ \
#          title:\'系统提示\',\
#          text: \'系统提示信息！\', //弹窗文字\
#          time : null, //自动关闭,  如果有值，一定时间会自动关闭\
#          width: 200, //弹窗宽度\
#          height: \'auto\', //弹窗高度\
#          drag : true //是否可拖动\
#      });\
#  },\
#  handleClickPopup2: function(e){\
#      var clickback = function(mark){\
#        console.log(mark);\
#      }\
#      var closeback = function(){\
#        console.log("弹窗关闭了~");\
#      }\
#      Popup({\
#          title:\'系统提示222\',\
#          text: \'系统提示信息！\', //弹窗文字\
#          time : null, //自动关闭,  如果有值，一定时间会自动关闭\
#          clickback : clickback ,//点击按钮的回调函数 return :mark(true or false),$popup\
#          closeback : closeback, //关闭时的回调函数  return :$popup\
#          showbtn : 2, //是否显示按钮 0,1,2\
#          width: 300, //弹窗宽度\
#          height: \'auto\', //弹窗高度\
#          drag : true //是否可拖动\
#      });\
#  },\
#  handleClickPopup3: function(e){\
#      Popup({\
#          title:\'3秒后自动关闭\',\
#          text: \'系统提示信息！\', //弹窗文字\
#          time : 3000, //自动关闭,  如果有值，一定时间会自动关闭\
#          width: 300, //弹窗宽度\
#          height: \'auto\', //弹窗高度\
#          drag : true //是否可拖动\
#      });\
#  },\
#\
#render:\
#\
#  <a href="javascript:;" onClick={this.handleClickPopup} className="mt-btn-yellow ink-reaction mt-modal-btn">alert</a>\
#  <a href="javascript:;" onClick={this.handleClickPopup2} className="mt-btn-red ink-reaction mt-modal-btn">带回调函数的popup</a>\
#  <a href="javascript:;" onClick={this.handleClickPopup3} className="mt-btn-blue ink-reaction mt-modal-btn">3秒关闭</a>\
';

//tabs 切换
var codeTabs = 'import { Tabs } from \'../../MTUI/index\'\
 # var tabsData = {\
 #   className : \'test\',\
 #   defaultVal : 0,\
 #   animate : true, //是否支持动画效果？\
 #   data : [\
 #       {title : \'小桥流水\', content :<div>我就是随便写点什么~</div> },\
 #       {title : \'拆菊东篱\', content :<div>loading...</div> },\
 #       {title : \'古道西风\', content :<div>loading...</div> },\
 #       {title : \'其他\', content :<div>loading...</div> }\
 #    ],\
 #     callBack: function(index,title){ //切换后的回调函数\
 #       console.log("当前选择的tabs为：",index);\
 #       console.log("当前选择的title为：",title);\
 #     }\
 # }\
 #\
 #render:\
 #<Tabs {...tabsData}/>\
';
//this.iniEditer(codeTabs,'code-Tabs');   

//Loading
var codeLoading = "import { Loading } from '../../MTUI/index'\
# Loading.start() //加载开始\
# Loading.done() //加载完成\
# Loading.error() //加载错误\
";
//this.iniEditer(codeLoading,'code-Loading'); 

//Loading
var codePopover = "import { Popover } from '../../MTUI/index'\
##\
#let dom = <span>我是个弹窗而已~<strong>GG~</strong></span>;\
#\
#<Popover dom={dom} place='top' className='test' color='井5EB95E' event='click' animate='bounceIn'>\
#   <a href=\"javascript:;\" className=\"mt-btn-blue ink-reaction\">Top 气泡</a>\
#</Popover>\
##\
#参数说明：(弹窗宽度设置了最大值为300px，可以在CSS里面修改)\
#dom : 组件内容\
#place : 弹窗定位（left,top,right,down）\
#event : 触发事件（click,hover,foucs）\
#color : 弹窗的颜色，可以自定义，默认是 \井333 \
#className : 给弹窗添加class\
#animate : 弹窗动画（支持aniamte.css里面所有动画）\
## 动画参考地址：https://daneden.github.io/animate.css/\
#\
#\
";

const Plus = React.createClass({
  mixins:[setCode],
  //初始化代码
  iniCode: function(){
    this.iniEditer(codePageList,'code-PageList');
  },
  render: function() {
    var tabsData = {       
         className : 'test',       
         defaultVal : 0,       
         data : [      
             {title : '分页', content :<PageListDom /> },      
             {title : '模态弹窗', content :<ModalShowDom /> },      
             {title : '提示弹框', content :<PopupDom /> },      
             {title : 'Tab切换', content :<TabDom /> },      
             {title : '日历', content :<DateDom /> },      
             {title : '树形菜单', content :<TreeDom /> },      
             {title : '加载', content :<LoadDom /> },
             {title : '气泡提示', content :<PopoverDom /> }
          ],       
           callBack: function(index,name){ //切换后的回调函数       
             //console.log("当前选择的tabs为：",index,name);
             switch(name) {
               case '分页': this.iniEditer(codePageList,'code-PageList'); break;
               case '模态弹窗': this.iniEditer(codeModalShow,'code-ModalShow'); break;
               case '提示弹框': this.iniEditer(codePopup,'code-PopupShow'); break;
               case 'Tab切换': this.iniEditer(codeTabs,'code-Tabs'); break;
               case '日历': this.iniEditer(codeDateInput,'code-DateInput'); break;
               case '树形菜单': this.iniEditer(codeTreeMenu,'code-TreeMenu'); break;
               case '加载': this.iniEditer(codeLoading,'code-Loading'); break;
               case '气泡提示': this.iniEditer(codePopover,'code-Popover'); break;
             }

           }.bind(this)     
     }

    //分页插件调用
    return (

    	<div className={conf.pageAnimate+" contents"}>
    		<h1>插件</h1>

        <div className="mt-page-content">
          <Tabs {...tabsData}/>
        </div>

    	</div>
    );
  }
});
//关于我们
export default Plus;