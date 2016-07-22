/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

//自定义Checkbox插件
const Checkbox = React.createClass({
	getInitialState : function(){
		return {
			checked : (this.props.checked==undefined||this.props.checked=='false')?false:true,
			value : this.props.value,
			label : this.props.label==undefined?"选项名称":this.props.label,
			disabled : this.props.disabled==undefined?false:true
		}
	},
	handleChange : function(e){
		//console.log(e.target.checked);
		this.setState({
			checked : e.target.checked
		});

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
		return (
			<label id={this.props.id} className={"mt-checkbox"+(this.state.checked?" mt-checkbox-active":"")+(this.props.className==undefined?'':' '+this.props.className)}>
				<input onClick={this.handleClick} className="mt-checkbox-input" type="checkbox" checked={this.state.checked} value={this.state.value} disabled={this.state.disabled} defaultChecked={this.state.checked} onChange={this.handleChange}/>
				<i className="iconfont icon-checkbox"></i>
				<span>{this.state.label}</span>
			</label>
		);
	}
});

//配置信息
module.exports = Checkbox;