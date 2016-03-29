import './style.css';
import React from 'react'
import {Selected, Checkbox, Radio, RadioGroup} from '../../MTUI/index'
import mtuiMixins from '../../MTUI/Mixins/mtuiMixins'
import conf from '../Conf/Conf'
import setCode from '../../Mixins/setCode'

// 类
const Froms = React.createClass({
  mixins: [mtuiMixins,setCode],
  getInitialState: function(){
  	return {
  		checkedVal : '女'
  	}
  },
  handleClick: function(e){ //获取 checkbox 的值
  	var arr = this.getCheckboxGroupVal($("#group-checkbox"));
  	console.log("==>",arr);
  }, 
  handleClickRadio: function(e){ //获取radio的值
  	console.log($(":radio:checked").val());
  },
  handleRadioChange: function(e) { //重新选择radio后执行
  	//console.log("help里面的change");
  	console.log(e.target.value);
  	this.setState({
  		checkedVal : e.target.value
  	});
  },
  componentDidMount: function() { //ajax请求数据后，重新渲染页面
     setTimeout(function(){
     	//console.log("重新设置了组的选项为中性~");
      if(this.isMounted()){
     	  this.setState({
     		  checkedVal : '中性'
     	  });
      }
     }.bind(this),2000); 
  },
  //初始化代码
  iniCode: function(){
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
    this.iniEditer(codeSelected,'code-Selected'); 

    //checkbox 
    var codeCheckbox = 'import { Checkbox } from \'../../MTUI/index\'\
            #handleClick(e){ //获取 checkbox 的值\
            #  var arr = this.getCheckboxGroupVal($("#group-checkbox"));\
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
    this.iniEditer(codeCheckbox,'code-Checkbox'); 

    //checkbox 
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
    this.iniEditer(codeRadio,'code-Radio'); 
 

  }, 
  render: function() { 

    //下拉选择
    var selectProp = {
      width : '160px',
      className :'index-selected',
      value : 2,
      placeholder : "高级选项",
      name : 'testselect',
      id : 'indexSelected',
      data : [
        {value: 1, label: '金融业'},
        {value: 2, label: '房地产业'},
        {value: 3, label: '卫生'},
        {value: 4, label: '教育'},
        {value: 5, label: '体育和娱乐业'},
        {value: 6, label: '其他'}
      ], 
      onChange: function(value) {
        console.log('当前值为：', value);
      }
    }

    return (
    	<div className={conf.pageAnimate+" contents"}>
    		<h1>自定义表单 </h1>

        <div className="mt-page-content">
          <h3 className="mt-padding">下拉选择框：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
              <Selected {...selectProp}/>
              <br/><br/>
              <div id="code-Selected"></div>
            </div>
          </div>
        </div>

        <div className="mt-page-content">
          <h3 className="mt-padding">checkbox切换：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
                <div id="group-checkbox"> 
                  <Checkbox onClick={this.handleClick} value="1" label="选中" checked/>
                  <Checkbox onClick={this.handleClick} value="2" label="未选中"/>
                  <Checkbox value="3" label="禁用选中" disabled checked/>
                  <Checkbox value="4" label="禁用未选中" disabled/>
                  mixins 中的 getCheckboxGroupVal() 获取checkbox值：<a href="javascript:;" onClick={this.handleClick}>获取checkbox值</a>
                </div>
                <br/><br/>
                <div id="code-Checkbox"></div>
            </div>
          </div>
        </div>

        <div className="mt-page-content">
          <h3 className="mt-padding">radio选择：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
                <RadioGroup radioChange={this.handleRadioChange} defaultValue={this.state.checkedVal}>
                  <Radio name="sex" value="男" label="男"/>
                  <Radio name="sex" value="女" label="女"/>
                  <Radio name="sex" value="中性" label="中性" disabled/> 
                  <Radio name="sex" value="无" label="无" disabled/>
                  <a href="javascript:;" onClick={this.handleClickRadio}>获取radio值</a>
                </RadioGroup>
                <br/><br/>
                <div id="code-Radio"></div>
            </div>
          </div>
        </div>

        <div className="mt-page-content">
          <h3 className="mt-padding">input</h3>
          <div className="mt-g">
              <div className="mt-g-4">
                  <label>输入框:</label>
                  <div className="mt-input">
                    <input type="text" placeholder="请输入用户名"/>
                  </div>
                 
                  <br/><br/>
                
                  <label>block输入框:</label>
                  <div className="mt-input-block">
                    <input type="text" />
                  </div>
                
                  <br/><br/>

                  <label>图标合并:</label>
                  <div className="mt-input mt-icon-input">
                    <input type="text"/>
                    <a href="javascript:;" className="mt-iconbtn"><i className="iconfont icon-search"></i></a>
                  </div>
                
                  <br/><br/>

                  <label>block图标合并:</label>
                  <div className="mt-input-block mt-icon-input">
                    <input type="text"/>
                    <a href="javascript:;" className="mt-iconbtn"><i className="iconfont icon-search"></i></a>
                  </div>

                  <br/><br/>
                  <label>圆角输入框:</label>
                  <div className="mt-input">
                    <input type="text" className="mt-round"/>
                  </div>

                  <br/><br/>
                  <label>block圆角输入框:</label>
                  <div className="mt-input-block">
                    <input type="text" className="mt-round"/>
                  </div>

                  <br/><br/>
                  <label>block圆角输入框图标合并:</label>
                  <div className="mt-input-block mt-icon-input">
                    <input type="text" className="mt-round"/>
                    <a href="javascript:;" className="mt-iconbtn"><i className="iconfont icon-sousuo1"></i></a>
                  </div>
              </div>
              <div className="mt-g-4">
                  <label>密码输入框:</label>
                  <div className="mt-input">
                    <input type="password" placeholder="请输入密码"/>
                  </div>

                  <br/><br/>
                  <label>输入框图标合并:</label>
                  <div className="mt-input mt-icon-inputr">
                    <input type="text" className=""/>
                    <a href="javascript:;" className="mt-iconbtn"><i className="iconfont icon-user"></i></a>
                  </div>

                  <br/><br/>
                  <label>密码框图标合并:</label>
                  <div className="mt-input mt-icon-inputr">
                    <input type="password" className=""/>
                    <a href="javascript:;" className="mt-iconbtn"><i className="iconfont icon-password"></i></a>
                  </div>

                  <br/><br/>
                  <label>密码框图标合并disabled:</label>
                  <div className="mt-input mt-icon-inputr">
                    <input disabled="disabled" type="password" className=""/>
                    <a href="javascript:;" className="mt-iconbtn"><i className="iconfont icon-password"></i></a>
                  </div>
              </div> 
          </div>
        </div>

    	</div>
    );
  }
});
//帮助中心
module.exports = Froms;