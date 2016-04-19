import React from 'react'
import {Selected} from '../../../MTUI/index'

// 类
const SelectDom = React.createClass({
  render: function() { 

    return (
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
    );
  }
});
//帮助中心
export default SelectDom;