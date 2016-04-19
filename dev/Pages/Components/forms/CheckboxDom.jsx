import React from 'react'
import {Checkbox} from '../../../MTUI/index'
import mtuiMixins from '../../../MTUI/Mixins/mtuiMixins'

// 类
const SelectDom = React.createClass({
  mixins: [mtuiMixins],
  handleClick: function(e){ //获取 checkbox 的值
    var arr = this.getCheckboxGroupVal($(".group-checkbox"));
    console.log("==>",arr);
  }, 
  render: function() { 

    return (
    	<div className="mt-page-content">
          <h3 className="mt-padding">checkbox切换：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
                <div className="group-checkbox"> 
                  <Checkbox onClick={this.handleClick} value="1" label="选中" checked/>
                  <Checkbox onClick={this.handleClick} value="2" label="未选中"/>
                  <Checkbox value="3" label="禁用选中" disabled checked/>
                  <Checkbox value="4" label="禁用未选中" disabled/>
                  mixins 中的 getCheckboxGroupVal() 获取checkbox值：<a href="javascript:;" onClick={this.handleClick}>获取checkbox值</a>
                </div>
                <br/><br/>
                <div className="codes" id="code-Checkbox"></div>
            </div>
          </div>
        </div>
    );
  }
});
//帮助中心
export default SelectDom;