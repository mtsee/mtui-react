import './style.css';
import React from 'react'
import conf from '../Conf/Conf' 

const HtmlsBtn = React.createClass({
  render() {
    return (
    	<div className={conf.pageAnimate+" contents"}>
    		<h1>表格</h1>
    	</div>
    );
  }
});
//联系信息
module.exports = HtmlsBtn;