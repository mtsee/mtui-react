/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

//单选组合
const RadioGroup = React.createClass({
	getInitialState : function() {
	    return {
	    	defaultValue : this.props.defaultValue,
	    	childrens : []
	    };
	},
	handleRadioChange: function(e){
		//console.log("group里面的change");
		this.props.radioChange(e);
	},
	getChildrenArr : function(){ //重置radio的值
		var propsData = this.props.defaultValue;
		var arr = [];
		this.props.children.map(function(index, elem) { 
			//console.log(index);
	    	if(index.type.displayName == 'Radio'){ 
	    		var radioData = {
	    			key :elem,
	    			name : index.props.name,
	    			value : index.props.value,
	    			label : index.props.label,
	    			radioChange : this.handleRadioChange
	    		}
	    		if(index.props.disabled != undefined){
	    			radioData['disabled'] = true;
	    		}
	    		if(radioData.value == propsData){
	    			radioData['checked'] = true;
	    		}
				arr.push(<Radio {...radioData}/>);
	    	}else{
	    		arr.push(index);
	    	}
		}.bind(this)); 
		return arr;
	},
	render : function(){
		return (
			<div className="mt-radio-group">{this.getChildrenArr()}</div>
		);
	}
});

//自定义单选按钮
const Radio = React.createClass({
	getInitialState: function(){
		return {
			value : this.props.value,
			disabled : this.props.disabled==undefined?false:true,
			checked : this.props.checked==undefined?false:true,
			name : this.props.name,
			label : this.props.label
		}
	},
	componentWillReceiveProps: function(nextProps){
		if(this.props.checked != nextProps.checked ){
			this.setState({
				checked : nextProps.checked
			});
		}
	},
	handleRadioChange : function(e){
		//console.log("radio里面的change");
		this.props.radioChange(e);
	},
    render : function() {
    	//alert(1);
    	var radioData = {
    		type : 'radio',
    		ref : 'radios',
    		name : this.state.name,
    		defaultValue : this.state.value,
    		disabled : this.state.disabled,
    		onChange : this.handleRadioChange
    	}
    	if(this.state.checked == 'false'){
    		delete radioData.checked;
    	}else{
    		radioData['checked'] = true;
    	}
        return ( 
            <label className={"mt-radio"+(this.state.checked?" mt-radio-active":"")}>  
				<input {...radioData}/>
				<i className="iconfont icon-radio"></i>
				<span>{this.state.label}</span>
			</label>
        );
    }
});

//配置信息
module.exports = {
	RadioGroup : RadioGroup,
	Radio : Radio
};