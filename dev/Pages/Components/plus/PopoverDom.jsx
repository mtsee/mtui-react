import React from 'react'
import {Popover} from '../../../MTUI/index'

// 类
const PopoverDom = React.createClass({
  render: function() { 
    var dom = <span>我是个弹窗而已~<strong>GG~</strong></span>;
    var dom2 = <span>我是2号弹窗而已~<strong>GG~</strong></span>;
    return (
        <div className="mt-page-content">
          <h3 className="mt-padding">气泡提示：</h3>
          <div className="mt-g">
            <div className="mt-g-12">

              <h4>点击触发</h4><br/>

              <Popover dom={dom} place='top' color='#5EB95E' className='test' event='click' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-blue ink-reaction">Top 气泡</a>
              </Popover>
              &nbsp;&nbsp;
              <Popover dom={dom2} place='left' event='click' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-green ink-reaction">Left 气泡</a>
              </Popover>
              &nbsp;&nbsp;
              <Popover dom={dom2} place='right' event='click' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-yellow ink-reaction">right 气泡</a>
              </Popover>
              &nbsp;&nbsp;
              <Popover dom={dom2} place='down' event='click' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-red ink-reaction">down 气泡</a>
              </Popover>  

              <br/><br/>

              <h4>hover触发</h4><br/>

              <Popover dom={dom} place='top' event='hover' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-blue ink-reaction">Top 气泡</a>
              </Popover>
              &nbsp;&nbsp;
              <Popover dom={dom2} place='left' event='hover' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-green ink-reaction">Left 气泡</a>
              </Popover>
              &nbsp;&nbsp;
              <Popover dom={dom2} place='right' event='hover' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-yellow ink-reaction">right 气泡</a>
              </Popover>
              &nbsp;&nbsp;
              <Popover dom={dom2} place='down' event='hover' animate='bounceIn'>
                <a href="javascript:;" className="mt-btn-red ink-reaction">down 气泡</a>
              </Popover>  

              <br/><br/>
              <h4>focus触发</h4><br/>

              <Popover dom={dom} place='right' event='focus' animate='bounceIn'>
                <div className="mt-input"><input type="text" placeholder="请输入用户名" /></div>
              </Popover>

              <br/><br/>

              <div id="code-Popover"></div>
            </div> 
          </div>
        </div>
    );
  }
});
//帮助中心
export default PopoverDom;