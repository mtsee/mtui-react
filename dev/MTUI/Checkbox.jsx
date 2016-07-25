/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

//自定义Checkbox插件
const Checkbox = React.createClass({
	handleChange : function(e){
		if(this.props.onChange != undefined){
			this.props.onChange(e);
		}
	},
	handleClick: function(e){
		if(this.props.onClick != undefined){
			this.props.onClick(e);
		}
	},
	render : function(){
		let checked = ((this.props.checked==undefined||this.props.checked=='false'||this.props.checked==false)?false:true);
		let label = (this.props.label==undefined?"选项名称":this.props.label);
		let disabled = (this.props.disabled==undefined?false:true);
		return (
			<label id={this.props.id} className={"mt-checkbox"+(checked?" mt-checkbox-active":"")+(this.props.className==undefined?'':' '+this.props.className)}>
				<input onClick={this.handleClick} className="mt-checkbox-input" type="checkbox" checked={checked} value={this.props.value} disabled={disabled} onChange={this.handleChange}/>
				<i className="iconfont icon-checkbox"></i>
				<span>{label}</span>
			</label>
		);
	}
});

//配置信息
module.exports = Checkbox;