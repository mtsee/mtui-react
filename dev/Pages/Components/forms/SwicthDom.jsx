import React from 'react'
import { Swicth } from '../../../MTUI/index'

// 类
const SwicthDom = React.createClass({
  render: function() { 

    return (
    	<div className="mt-page-content">
        <h3 className="mt-padding">swicth：</h3>
        <div className="mt-g">
          <div className="mt-g-12">
            <Swicth checked="true" id="abc" disabled/>
            &nbsp;&nbsp;
            <Swicth checked="false" />
            &nbsp;&nbsp;
            <Swicth checked="true" />
            <br/><br/>
            <div className="codes" id="code-Swicth"></div>
          </div>
        </div>
      </div>
    );
  }
});
//帮助中心
export default SwicthDom;