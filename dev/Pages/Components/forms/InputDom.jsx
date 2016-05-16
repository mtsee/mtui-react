import React from 'react'
import {Input } from '../../../MTUI/index'

// 类
const SelectDom = React.createClass({
  render: function() { 

    return (
    	<div className="mt-page-content">
          <h3 className="mt-padding">input</h3>
          <div className="mt-g">
              <div className="mt-g-4">

                  <label>输入框:</label>
                  <Input placeholder='请输入用户名'/>
                 
                  <br/><br/>
                
                  <label>block输入框:</label>
                  <Input block/>
                  <br/><br/>

                  <label>textarea:</label>
                  <Input type="textarea" placeholder="我是textarea" align="top"/>

                  <br/><br/>

                  <label>图标合并:</label>
                  <Input icon='icon-search'/>
                
                  <br/><br/>

                  <label>block图标合并:</label>
                  <Input block icon='icon-search'/>

                  <br/><br/>
                  <label>圆角输入框:</label>
                  <Input round/>

                  <br/><br/>
                  <label>block圆角输入框:</label>
                  <Input round block/>

                  <br/><br/>
                  <label>block圆角输入框图标合并:</label>
                  <Input round icon="icon-sousuo1" block/>
              </div>
              <div className="mt-g-4">
                  <label>密码输入框:</label>
                  <Input placeholder="请输入密码" type="password"/>

                  <br/><br/>
                  <label>输入框图标合并:</label>
                  <Input placeholder="请输入用户" icon="icon-user" iconplace="left"/>

                  <br/><br/>
                  <label>密码框图标合并:</label>
                  <Input placeholder="请输入密码" icon="icon-password" iconplace="left" type="password"/>

                  <br/><br/>
                  <label>密码框图标合并disabled:</label>
                  <Input disabled placeholder="请输入密码" icon="icon-password" iconplace="left" type="password"/>
              </div> 

              <div className="mt-g-12">
                <div className="codes" id="code-Input"></div>
              </div>
          </div>
        </div>
    );
  }
});
//帮助中心
export default SelectDom;