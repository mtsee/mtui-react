/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

//单选组合
const Swicth = React.createClass({
	getInitialState() {
	    return {
	        checked : this.props.checked
	    };
	},
	handleClick(e){
		if(this.props.disabled != undefined){
			console.log('must set att disabled');
			return;
		}

		var $swicth = $(this.refs.swicth);
		if(this.state.checked == 'true'){
			this.setState({
				checked : 'false'
			});
		}else{
			this.setState({
				checked : 'true'
			});
		}
	},
	render(){
		return (
			<div disabled={this.props.disabled} ref="swicth" onClick={this.handleClick} className={"mt-switch"+(this.state.checked=='true'?"":" mt-switch-off")}> 
				<input id={this.props.id} value={this.state.checked} type="hidden"/>
				<span className="mt-switch-info"></span>
				<a href="javascript:;" className="mt-switch-btn"></a>
			</div>
		);
	}
});

//配置信息
export default Swicth;