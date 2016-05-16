/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

//插件
const Modal = React.createClass({
	render : function(){
		return (
			<span>{this.props.children}</span>
		);
	}
});

//配置信息
export default Modal;