/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import './style.css';
import React from 'react';
import DateBox from './DateBox'

var DateInputs = React.createClass({
	//初始化
	getInitialState: function(){

		//获取当前时间
		if(this.props.start == undefined){
			var myDate = new Date();
			var start = myDate.getFullYear()+"/"+(1+parseInt(myDate.getMonth()))+"/"+myDate.getDate();
		}else{
			var start = this.props.start;
		}
		//end 
		if(this.props.end == undefined){
			var end = myDate.getFullYear()+"/"+(1+parseInt(myDate.getMonth()))+"/"+myDate.getDate();
		}else{
			var end = this.props.end;
		}
		var s_arr = start.split("/");
		var e_arr = end.split("/");

		//对比起始，结束日期
		e_arr = this.compareDate(s_arr,e_arr); 

		return {
			placeholder : this.props.placeholder,
			defaultValue : this.props.defaultValue, //默认值
			s_year : s_arr[0],
			s_month : s_arr[1],
			s_day : s_arr[2],
			e_year : e_arr[0],
			e_month : e_arr[1],
			e_day : e_arr[2],
			width : this.props.width==undefined?200:this.props.width
		} 
	},

	//比较日期,返回最大的那个
	compareDate : function(s_arr,e_arr){
		var arr = [];

		//如果结束大与开始，结束 = 开始
		var start = s_arr[0] +""+ 
					(parseInt(s_arr[1],10) < 10 ? "0"+parseInt(s_arr[1],10) : parseInt(s_arr[1],10))+
					(parseInt(s_arr[2],10) < 10 ? "0"+parseInt(s_arr[2],10) : parseInt(s_arr[2],10));
		var end = e_arr[0] +""+ 
					(parseInt(e_arr[1],10) < 10 ? "0"+parseInt(e_arr[1],10) : parseInt(e_arr[1],10))+
					(parseInt(e_arr[2],10) < 10 ? "0"+parseInt(e_arr[2],10) : parseInt(e_arr[2],10));

		if(parseInt(start, 10) > parseInt(end, 10)){
			arr = s_arr;
		}else{
			arr = e_arr;
		}
		return arr;
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
		//console.log(obj);
		if(obj != undefined){
			if(obj.mark == 'start'){
				var arr = this.compareDate([obj.year,obj.month,obj.day],[this.state.e_year,this.state.e_month,this.state.e_day]);
				this.setState({
					s_year : obj.year,
					s_month : obj.month,
					s_day : obj.day,
					e_year : arr[0],
					e_month : arr[1],
					e_day : arr[2]
				});
			}else if(obj.mark == 'end'){
				var arr = this.compareDate([this.state.s_year,this.state.s_month,this.state.s_day],[obj.year,obj.month,obj.day]);
				this.setState({
					e_year : arr[0],
					e_month : arr[1],
					e_day : arr[2]
				});
			}else{
				//...
			}
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
			var arr = e.target.value.split("~");
			//console.log(arr);
			var s_arr = arr[0].split("/");
			var e_arr = arr[1].split("/");
			//如果结束大与开始，结束 = 开始
			e_arr = this.compareDate(s_arr,e_arr);
			this.setState({
				s_year : s_arr[0],
				s_month : s_arr[1],
				s_day : s_arr[2],
				e_year : e_arr[0],
				e_month : e_arr[1],
				e_day : e_arr[2]
			});
		}
		var $dates = $(e.target).siblings('.mt-dates');
		$dates.show().find(".mt-date-main").show();

		//点击后隐藏
		$(document).off("click.DateInputs").on("click.DateInputs", function(e){
			e.stopPropagation();
			if(!$(e.target).closest('.mt-date-main')[0]){
				$dates.hide();
				$(this).off("click.DateInputs");
			}
    	});
    	e.stopPropagation();

	},

	handleClickClear: function(e){
		this.setState({
			defaultValue : 'null'
		});
	},

	//渲染
    render: function() {
    	if(this.state.defaultValue == "null"){ 
    		var val = "";
    	}else{
    		var val = this.state.s_year+'/'+this.state.s_month+'/'+this.state.s_day+"~"+
    				  this.state.e_year+'/'+this.state.e_month+'/'+this.state.e_day;
    	}
        return (
        	<div className="mt-input mt-date mt-icon-input"> 
        		<input style={{width:this.state.width}} readOnly onClick={this.handleClick} placeholder={this.props.placeholder==undefined?"日期...":this.props.placeholder} onChange={this.handleChange} type="text" value={val} />
        		<a style={{zIndex:9}} className="mt-iconbtn"><i className="iconfont icon-date"></i></a>
        		<div className="mt-dates">
        			<DateBox cName="mt-dates-start" changeEvent={this.handleChange} mark="start" year={this.state.s_year} month={this.state.s_month} day={this.state.s_day}/>
        			<DateBox cName="mt-dates-end" changeEvent={this.handleChange} mark="end" year={this.state.e_year} month={this.state.e_month} day={this.state.e_day}/>
        			<div className="mt-dates-bottom">
	        			<a onClick={this.handleClickClear} className="mt-btn-grey mt-btn-sm" href="javascript:;">清除</a>
	        			<a onClick={this.handleClickYes} className="mt-btn-green mt-btn-sm" href="javascript:;">确定</a>
	        		</div>
        		</div>
        	</div>
        );
    }
});

//配置信息
export default DateInputs;