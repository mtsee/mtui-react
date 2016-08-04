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
import SliderDom from './plus/SliderDom'
import ValidateDom from './plus/ValidateDom'
import UploadDom from './plus/UploadDom'

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
var codeDateInput = 'import { DateInput, DateInputs } from \'../../MTUI/index\'\
#var data = {  // DateInput\
#  width : \'200px\', //日历输入框宽度，默认是120px\
#  defaultValue : null, //可以是now，null \
#  placeholder : \'日期\', //内容为空时的描述 \
#  format : \'yyyy-mm-dd\', //日期格式 \
#  year : 2015, //年\
#  month : 3, //月\
#  day : 18 //日\
#}\
#var datas = {  //DateInputs\
#  width : \'200px\', //日历输入框宽度，默认是120px\
#  start : \'now\', //可以是now，null \ 开始时间 固定格式 eg：2016/8/4 这里注意下，必须用/分割\
#  end : \'now\', //可以是now，null \ 结束时间 固定格式 eg：2016/8/4\
#  placeholder : \'日期\', //内容为空时的描述 \
#  format : \'yyyy年mm月dd\', //日期格式 \
#  splitStr : \' 至 \' //日期分割符 \
#}\
#render:\
#  \
#  年：<DateInput format="yyyy" defaultValue="null"/> \
##  年-月：<DateInput format="yyyy-mm" defaultValue="now"/>\
##  年-月-日：<DateInput format="yyyy年mm月dd日"  defaultValue="now"/>\
##  自定义默认值：<DateInput year="2015" month="5" day="18"/>\
##  自定义提示内容：<DateInput format="yyyy+mm+dd"  width="140px" defaultValue="null" placeholder="我是的日期..." year="2015" month="3" day="18"/>\
##  多个日期组合：<DateInputs width="190px" format="yyyy-mm-dd" start="now" end="2016/10/5" placeholder="选择时间段..."/> <br/><br/>\
##  多个日期组合带格式：<DateInputs width="200px" splitStr="至" format="yyyy-mm" placeholder="选择时间段..."/> <br/><br/>\
##  多个日期组合带格式：<DateInputs width="200px" splitStr=" 至 " format="yyyy年" placeholder="选择时间段..."/> <br/><br/>\
'; 
//this.iniEditer(codeDateInput,'code-DateInput'); 

//分页
var codePageList = 'import { PageList } from \'../../MTUI/index\'\
#const PageListDom = React.createClass({\
#  getInitialState: function() {\
#      return {\
#          count : 0,\
#          reData : null\
#      };\
#  },\
#  //分页回调\
#  setCallBack : function(nowpage,eachPageCount){\
#      console.log("请求服务器数据，传递参数：当前页码：",nowpage,\'每页条数：\',eachPageCount);\
#\
#      this.setState({\
#          reData : \'loading...\'\
#      });\
#\
#      //模拟ajax请求\
#      setTimeout(function(){\
#        var count = 300;\
#        this.setState({\
#          count : count,\
#          reData : <div>当前页码：{nowpage},每页条数：{eachPageCount}，服务器返回总条数：{count}</div>\
#        });\
#\
#      }.bind(this),1000);\
#  },\
#  render: function() { \
#\
#    return (\
#      <div className="mt-page-content">\
#        <h3 className="mt-padding">AJAX分页插件：</h3>\
#        <div className="mt-g">\
#          <div className="mt-g-8">\
#              {/*\
#              id 分页插件的id，选填\
#              count 表示有多少条数据\
#              nowpage 默认显示多少页\
#              eachPageCount 每页显示多少条 10/20/50\
#              showPage 当前显示多少按钮\
#              set 控制显示不显示的 jumpShow(跳转):true,\
#                                   nextAndPrevShow（上一页，下一页按钮）:true,\
#                                   firstAndEndShow（开始结束按钮）:true,\
#                                   totalShow（统计）:true,\
#                                   selectShow（下拉选择）:true\
#            */}\
#            <p ref="">当前总数：{this.state.count}</p>\
#            <div> {this.state.reData}</div>\
#            <PageList id="pageList1" count={this.state.count} showPage="7" callback={this.setCallBack}/> \
#\
#          </div>\
#\
#          <div className="mt-g-12">\
#            <div id="code-PageList"></div>\
#          </div>\
#\
#        </div>\
#      </div>\
#    );\
#  }\
#})';

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
 #     callBack: function(index,title){ //切换后的回调函数\
 #       console.log("当前选择的tabs为：",index);\
 #       console.log("当前选择的title为：",title);\
 #     }\
 # }\
 #\
 #render:\
 #<Tabs {...tabsData}>\
 #    <div title="小桥流水" className=\'mytabs mytas-c1\'>我就是随便写点什么</div>\
 #    <div title="拆菊东篱" className=\'mytabs mytas-c2\'>拆菊东篱loading...</div>\
 #    <div title="古道西风" className=\'mytabs mytas-c2\'>古道西风loading...</div>\
 #    <div title="其他" className=\'mytabs mytas-c2\'>其他loading...</div>\
 #</Tabs>\
';
//this.iniEditer(codeTabs,'code-Tabs');   

//Loading
var codeLoading = "import { Loading , LoadingBox} from '../../MTUI/index'\
# Loading.start() //加载开始\
# Loading.done() //加载完成\
### 占位loading（宽度默认是100%，高度默认是100px；高度可以自己调节） ## <LoadingBox height=\"100px\"/>\
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

var codeValidate = "import { validate } from '../../MTUI/index'\
##\
##说明：#data['xx'] xx可以使用正则表达式。\
#Event:\
#handleSubmit(e){\
#  //获取焦点，再失去焦点\
#  $(this.refs.formbox).find('input').trigger('focus').trigger('blur');\
#}\
#\
#DOM:\
#var v1 = {data : {}};\
#v1.data[validate.notempty] = '不能为空！';\
#v1.data[validate.email] = '请输入正确的邮箱！';\
#\
#var v2 = {data : {}};\
#v2.data[validate.notempty] = '不能为空！';\
v2.data[validate.mobile] = '请输入正确的手机号码！';\
#\
#<div ref='formbox'>\
#  <Input type='text' placeholder='邮箱' validate={v1}/>\
#  <br/><br/>\
#  <Input type='text' placeholder='电话' validate={v2}/>\
#  <br/><br/>\
#  <a className='mt-btn-green' onClick={this.handleSubmit}>提交</a>\
#</div>\
\
";

var codeSlider = "import { SliderActive } from '../../MTUI/index'\
##<SliderActive value=\"0.2\" width=\"300\" color=\"green\"/>\
##<SliderActive value=\"0.7\" width=\"300\" color=\"red\"/>\
##<SliderActive value=\"0.5\" width=\"300\"/>\
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
             case '进度条': this.iniEditer(codeSlider,'code-Slider'); break;
             case '表单验证': this.iniEditer(codeValidate,'code-Validate'); break;
           }

         }.bind(this)     
     }

    //分页插件调用
    return (

    	<div className={conf.pageAnimate+" contents"}>
    		<h1>插件</h1>

        <div className="mt-page-content clearfix">
          <Tabs {...tabsData}>
              <PageListDom title="分页"/>
              <ModalShowDom title="模态弹窗"/>
              <PopupDom title="提示弹框"/>
              <TabDom title="Tab切换"/>
              <DateDom title="日历"/>
              <TreeDom title="树形菜单"/>
              <LoadDom title="加载"/>
              <PopoverDom title="气泡提示"/>
              <SliderDom title="进度条"/>
              <ValidateDom title="表单验证"/>
              <UploadDom title="文件上传"/>
          </Tabs>
        </div>

    	</div>
    );
  }
});
//关于我们
export default Plus;