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
              年：<DateInput format="yyyy" defaultValue="null"/> 
            </div>

            <div className="mt-g-3">
              年-月：<DateInput format="yyyy-mm" defaultValue="now"/>
            </div>

            <div className="mt-g-3">
              年-月-日：<DateInput width="160px" format="yyyy年mm月dd日" defaultValue="now"/> 
            </div>

            <div className="mt-g-3">
              自定义默认值：<DateInput year="2015" month="5" day="18"/>
            </div>

            <div className="mt-g-3">
              自定义提示内容：<DateInput format="yyyy+mm+dd"  width="140px" defaultValue="null" placeholder="我是的日期..." year="2015" month="3" day="18"/>
            </div>

            <div className="mt-g-3">
              多个日期组合：<DateInputs width="190px" format="yyyy-mm-dd" start="now" end="2016/10/5" placeholder="选择时间段..."/> <br/><br/>
            </div>

            <div className="mt-g-3">
              多个日期组合带格式：<DateInputs width="200px" splitStr="至" format="yyyy-mm" placeholder="选择时间段..."/> <br/><br/>
            </div>

            <div className="mt-g-3">
              多个日期组合带格式：<DateInputs width="200px" splitStr=" 至 " format="yyyy年" placeholder="选择时间段..."/> <br/><br/>
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