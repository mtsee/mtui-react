import React from 'react'
import {DateInput, DateInputs} from '../../../MTUI/index'

// 类
const DateInputDom = React.createClass({
  render: function() { 

    return (
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

            <div className="mt-g-3">
              多个日期组合：<DateInputs defaultValue="null" placeholder="选择时间段..."/>
            </div>

            <div className="mt-g-12">
              <div id="code-DateInput"></div>
            </div>

          </div>

        </div>
      </div>
    );
  }
});
//帮助中心
export default DateInputDom;