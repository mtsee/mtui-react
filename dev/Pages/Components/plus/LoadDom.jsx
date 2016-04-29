import React from 'react'
import {Loading , LoadingBox} from '../../../MTUI/index'

// 类
const LoadDom = React.createClass({
  render: function() { 

    return (
    	<div className="mt-page-content">
        <h3 className="mt-padding">Loading：</h3>
        <div className="mt-g">
          <div className="mt-g-12">  
            <a href="javascript:;" onClick={function(){ Loading.start() }} className="mt-btn-yellow ink-reaction mt-modal-btn">start</a>
            &nbsp;&nbsp;
            <a href="javascript:;" onClick={function(){ Loading.done() }} className="mt-btn-green ink-reaction mt-modal-btn">done</a>
            &nbsp;&nbsp;

            <br/><br/>
            <h3>占位loading</h3>

            <LoadingBox height="100px"/>

            <br/><br/><div id="code-Loading"></div>

          </div> 
        </div>
      </div>
    );
  }
});
//帮助中心
export default LoadDom;