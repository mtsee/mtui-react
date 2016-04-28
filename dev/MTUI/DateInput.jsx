/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import './style.css';
import React from 'react';
import DateBox from './DateBox'

var DateInput = React.createClass({
	getInitialState: function(){
		//获取当前时间
		var myDate = new Date();
		return {
			year : myDate.getFullYear(),
			month : 1+parseInt(myDate.getMonth()),
			day : myDate.getDate(),
			placeholder : this.props.placeholder,
			defaultValue : this.props.defaultValue //默认值，可以是now，null 
		} 
	},

	// //初始化参数
	componentWillMount: function(){
		if(this.props.year != undefined){
			this.setState({
				day : this.props.day,
				year : this.props.year,
				month : this.props.month
			});
		}
	},

	//选择日历后，设置input ,将该函数传递到子对象
	handleChange: function(e, obj){
		this.setState({
			defaultValue : 'static'
		});
		//console.log(e);
		if(obj != undefined){
			this.setState({
				day : obj.day,
				year : obj.year,
				month : obj.month
			});
		}else{
			this.setState({
				defaultValue : 'null'
			});
		}
	},

	//点击input按钮后
	handleClick: function(e){
		$(".mt-date-yearMonth").show().siblings('div').hide();
		$(".mt-date-months").hide().removeClass('mt-date-animate');
		$(".mt-date-years").hide().removeClass('mt-date-animate');
		if(e.target.value != ""){
			//分离value
			var arr = e.target.value.split("/");
			console.log(arr);
			this.setState({
				year : arr[0],
				month : arr[1],
				day : arr[2]
			});
		}
		var $main = $(e.target).siblings(".mt-date-main");
		$main.show();

    	$(document).off("click.DateInput").on("click.DateInput", function(e){
			e.stopPropagation();

			if(!$(e.target).closest('.mt-date-main')[0]){
				$main.hide();
				$(this).off("click.DateInputs");
			}
    	});
    	e.stopPropagation();

	},

	//渲染
    render: function() {
    	if(this.state.defaultValue == "null"){ 
    		var val = "";
    	}else{
    		var val = this.state.year+'/'+this.state.month+'/'+this.state.day;
    	}
        return (
        	<div className="mt-input mt-date mt-icon-input">
        		<input style={{width:this.props.width}} readOnly onClick={this.handleClick} placeholder={this.props.placeholder==undefined?"日期...":this.props.placeholder} onChange={this.handleChange} type="text" value={val} />
        		<a style={{zIndex:9}} className="mt-iconbtn"><i className="iconfont icon-date"></i></a>
        		<DateBox changeEvent={this.handleChange} year={this.state.year} month={this.state.month} day={this.state.day}/>
        	</div>
        );
    }
});

//配置信息
export default DateInput;