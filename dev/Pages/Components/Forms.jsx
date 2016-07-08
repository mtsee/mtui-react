import './style.css';
import React from 'react'
import conf from '../Conf/Conf'
import { Tabs } from '../../MTUI/index'

// 下拉选择模块
import SelectDom from './forms/SelectDom'
import InputDom from './forms/InputDom'
import CheckboxDom from './forms/CheckboxDom'
import RadioDom from './forms/RadioDom'
import SwicthDom from './forms/SwicthDom'

import setCode from '../../Mixins/setCode'

//checkbox 
var codeCheckbox = 'import { Checkbox } from \'../../MTUI/index\'\
        #handleClick(e){ //获取 checkbox 的值\
        #  var arr = this.getCheckboxGroupVal($(".group-checkbox"));\
        #  console.log("==>",arr);\
        #}\
        #\
        #render:\
        #\
        #<div id="group-checkbox">\
        #  <Checkbox onClick={this.handleClick} value="1" label="选中" checked/>\
        #  <Checkbox onClick={this.handleClick} value="2" label="未选中"/>\
        #  <Checkbox value="3" label="禁用选中" disabled checked/>\
        #  <Checkbox value="4" label="禁用未选中" disabled/>\
        #  mixins 中的 getCheckboxGroupVal() 获取checkbox值：<a href="javascript:;" onClick={this.handleClick}>获取checkbox值</a>\
        #</div>';
        
//codeRadio 
var codeRadio = 'import { Radio, RadioGroup} from \'../../MTUI/index\'\
        #getInitialState(){ //设置radio默认值\
        #  return {\
        #    checkedVal : "女"\
        #  }\
        #},\
        #handleClickRadio(e){ //获取radio的值\
        #  console.log($(":radio:checked").val());\
        #},\
        #handleRadioChange(e) { //重新选择radio后执行\
        #  console.log(e.target.value);\
        #  this.setState({\
        #    checkedVal : e.target.value\
        #  });\
        #},\
        #componentDidMount() { //异步设置radio\
        #   setTimeout(function(){\
        #    //console.log("重新设置了组的选项为中性~");\
        #    if(this.isMounted()){\
        #      this.setState({\
        #        checkedVal : "中性"\
        #      });\
        #    }\
        #   }.bind(this),2000);\
        #},\
        #\
        #render:\
        #\
        #<RadioGroup radioChange={this.handleRadioChange} defaultValue={this.state.checkedVal}>\
        #  <Radio name="sex" value="男" label="男"/>\
        #  <Radio name="sex" value="女" label="女"/>\
        #  <Radio name="sex" value="中性" label="中性" disabled/>\
        #  <Radio name="sex" value="无" label="无" disabled/>\
        #  <a href="javascript:;" onClick={this.handleClickRadio}>获取radio值</a>\
        #</RadioGroup>\
        #</div>';

//下拉列表
var codeSelected = "import { Selected } from '../../MTUI/index'\
        #//下拉选择\
        #var selectProp = {\
        #  width : '160px',\
        #  className :'index-selected',\
        #  value : 2,\
        #  placeholder : '高级选项',\
        #  name : 'testselect',\
        #  id : 'indexSelected',\
        #  data : [\
        #    {value: 1, label: '金融业'},\
        #    {value: 2, label: '房地产业'},\
        #    {value: 3, label: '卫生'},\
        #    {value: 4, label: '教育'},\
        #    {value: 5, label: '体育和娱乐业'},\
        #    {value: 6, label: '其他'}\
        #  ], \
        #  onChange: function(value) {\
        #    console.log('当前值为：', value);\
        #  }\
        #}\
        #\
        #render:\
        #\
        #<Selected {...selectProp}/>#";

//下拉列表
var codeSwicth = "import { Swicth } from '../../MTUI/index'\
        #//开关\
        #\
        #render:\
        #\
        #<Swicth checked=\"true\" id=\"abc\" disabled/>\
        ##<Swicth checked=\"false\" />\
        ##<Swicth checked=\"true\" />\
        ##参数说明：\
        # checked : 状态\
        # id : 传入id\
        # disabled : 不可选状态\
        #";

//下拉列表
var codeInput = "import { Input } from '../../MTUI/index'\
##input text 和 password, textarea 可配置参数\
#类型: type :  text 或 password, textarea //默认是 text\
#事件：onClick , onChange , onFocus, onBlur\
#样式：width，height ,block, round, align:top/middle/bottom //默认无block，无round,width:160px; align为对齐方式控制vertical-align属性\
#图标组合: icon，iconplace:'left'或'right' //默认是right, icon采用www.iconfont.cn 字体图标\
#placeholder: 默认提示\
#className: 类名 //默认无\
#id: ID //默认无\
#disabled：默认无\
##eg:\
#<Input disabled placeholder=\"请输入密码\" icon=\"icon-user\" iconplace=\"left\" icon=\"icon-password\" iconplace=\"left\" type=\"password\"/>\
#<Input type=\"textarea\" placeholder=\"我是textarea\"/>";

// 类
const Froms = React.createClass({
  mixins:[setCode],
  iniCode:function(){
    this.iniEditer(codeSelected,'code-Selected');
  },
  render: function() { 

    var tabsData = {
         className : 'test',       
         defaultVal : 0,           
         callBack: function(index,name){ //切换后的回调函数       
           //console.log("当前选择的tabs为：",index,name);
           switch(name) {
             case 'select': this.iniEditer(codeSelected,'code-Selected'); break;
             case 'checkbox': this.iniEditer(codeCheckbox,'code-Checkbox'); break;
             case 'radio': this.iniEditer(codeRadio,'code-Radio'); break;
             case 'swicth': this.iniEditer(codeSwicth,'code-Swicth'); break;
             case 'input': this.iniEditer(codeInput,'code-Input'); break;
           }

         }.bind(this)     
     }

    return (
    	<div className={conf.pageAnimate+" contents"}>
    		<h1 className="m-h1">自定义表单 </h1>

        <div className="mt-page-content">
          <Tabs {...tabsData}>
              <SelectDom title="select"/>
              <CheckboxDom title="checkbox"/>
              <RadioDom title="radio"/>
              <InputDom title="input"/>
              <SwicthDom title="swicth"/>
          </Tabs>
        </div>

    	</div>
    );
  }
});
//帮助中心
module.exports = Froms;