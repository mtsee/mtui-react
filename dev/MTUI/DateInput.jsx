/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import './style.css';
import React from 'react';
import DateBox from './DateBox'
import dateMixin from './Mixins/dateMixin'

var DateInput = React.createClass({
	mixins:[dateMixin],
	getInitialState: function(){
		//获取当前时间
		var myDate = new Date();
		return {
			year : myDate.getFullYear(),
			month : 1+parseInt(myDate.getMonth()),
			day : myDate.getDate(),
			defaultValue : this.props.defaultValue, //默认值，可以是now，null 
			style:{}
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
		//console.log(e);
		console.log("==>",obj);
		if(obj != undefined){
			this.setState({
				day : obj.day,
				year : obj.year,
				month : obj.month,
				defaultValue : 'static'
			});
		}else{
			this.setState({
				defaultValue : 'null'
			});
		}
	},

	//点击input按钮后
	handleClick: function(e){
		var $input = $(e.target);
		var $win = $(window);
		var $main = $input.siblings(".mt-date-main");
		if(e.target.value != ""){
			//分离value
			var arr = $input.attr('data-date').split("/");
			//console.log(arr);
			this.setState({
				year : arr[0],
				month : arr[1],
				day : arr[2]
			});
		}

		//碰撞检测 高：250，宽：240
		var top = $input.offset().top - $win.scrollTop(),
			left = $input.offset().left - $win.scrollLeft(),
			inputHei = $input.height(),
			inputWid = $input.width(),
			winHei = $win.height(),
			winWid = $win.width();

		//超出情况
		var topMark = false,
			leftMark = false;
		if(top+inputHei+250 > winHei){
			topMark = true;
		}
		if(left+inputWid+240 > winWid){
			leftMark = true;
		}
		if(leftMark && topMark){
			this.setState({
				style:{top:-250,right:0}
			});
		}else if( topMark && !leftMark){
			this.setState({
				style:{top:-250}
			});
		}else if( !topMark && leftMark){
			this.setState({
				style:{right:0}
			});
		}else{
			this.setState({
				style:{}
			});
		}

		$main.show();
		$(document).on("click.DateInput", function(e){
			e.stopPropagation();
			if(!$(e.target).closest('.mt-date-main')[0]){
				$main.hide();
				$(this).off("click.DateInput")
			}
    	});
		

	},

	//渲染
    render: function() {
    	//规范数据格式
		var format = this.format(this.state); //this.state.year+'/'+this.state.month+'/'+this.state.day;
		var val = (this.state.defaultValue == "null"?"":format.val);
		var formatShow = format.formatShow;
        return (
        	<div className="mt-input mt-date mt-icon-input">
        		<input style={{width:this.props.width}} readOnly data-date={this.state.year+'/'+this.state.month+'/'+this.state.day} onClick={this.handleClick} placeholder={this.props.placeholder==undefined?"日期...":this.props.placeholder} onChange={this.handleChange} type="text" value={val} />
        		<a style={{zIndex:9}} className="mt-iconbtn"><i className="iconfont icon-date"></i></a>
        		<DateBox formatShow={formatShow} style={this.state.style} changeEvent={this.handleChange} year={this.state.year} month={this.state.month} day={this.state.day}/>
        	</div>
        );
    }
});

//配置信息
export default DateInput;