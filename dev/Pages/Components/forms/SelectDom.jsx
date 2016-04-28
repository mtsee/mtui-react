import React from 'react'
import {Selected} from '../../../MTUI/index'

// 类
const SelectDom = React.createClass({
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
    	<div className="mt-page-content">
        <h3 className="mt-padding">下拉选择框：</h3>
        <div className="mt-g">
          <div className="mt-g-12">
            <Selected {...selectProp}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Selected {...selectProp}/>
            <br/><br/>
            <div className="codes" id="code-Selected"></div>
          </div>
        </div>
      </div>
    );
  }
});
//帮助中心
export default SelectDom;