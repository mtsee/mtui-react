/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import './style.css';
import React from 'react';

//日历核心算法
var MtDate = {
	// 给定年月获取当月天数
	GetMDay : function(y, m){ 
		var mday = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
		if((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)//判断是否是闰月 
		   mday[1] = 29; 
		return mday[m - 1]; 
	},
	
	// 获取星期数 
	WeekNumber : function(y, m, d) {
		var wk; 
		if (m <= 12 && m >= 1) { 
			for (var i = 1; i < m; ++i) { 
				d += this.GetMDay(y, i); 
			} 
		} 
		/*根据日期计算星期的公式*/
		wk = (y - 1 + (y - 1) / 4 - (y - 1) / 100 + (y - 1) / 400 + d) % 7; 
		//0对应星期天，1对应星期一 
		return parseInt(wk); 
	},

	//加，减一个月,返回对应的 y ，m
	addAndDelOneMonth : function(y,m,mark){
		//加一个月
		if(mark == 'add'){
			if(m != 12){
				m++;
			}else{
				m=1;
				y++;
			}
		}else if(mark == 'del'){ //减一个月
			if(m != 1){
				m--;
			}else{
				m=12;
				y--;
			}
		}else{
			//...
		} 
		return {
			y : y, 
 			m : m
		}
	}
};

var DateBox = React.createClass({
	getInitialState: function(){
		return {
			year : this.props.year,
			month : this.props.month,
			day : this.props.day,
			yearArr : []
		} 
	},

	//hide DIV
	hideDiv : function(){
		if(this.props.mark == "start"){
			return;
		}else if(this.props.mark == "end"){
			//$(this.refs.myDate).parent(".mt-dates").hide();
			return;
		}else{
			$(this.refs.myDate).hide();
			//...
		}
	},

	//点击后触发
	clickDay : function (e,mark) {
		var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, mark);
		var data = {
			day : e.target.text,
			year : obj.y,
			month : obj.m,
			mark : this.props.mark
		}
		this.props.changeEvent(e,data);
		this.hideDiv();
	},

	//点击事件
	handleClickPrev : function(e){
		//console.log("点击上个月的：",e.target.text);
		this.clickDay(e,'del');
	},
	handleClickThis : function(e){
		//console.log("点击这个月的：",e.target.text);
		this.clickDay(e,'null');
	},
	handleClickNext : function(e){
		//console.log("点击下个月的：",e.target.text);
		this.clickDay(e,'add');
	},

	//点击上一年,点击下一年
	handleClickPrevYear : function(e) {
		this.setState({
			year : this.state.year-1
		})
	},
	handleClickNextYear : function(e) {
		this.setState({
			year : parseInt(this.state.year)+1
		})
	},

	//点击上个月，点击下个月
	handleClickPrevMonth : function(e) {
		var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'del');
		this.setState({
			month : obj.m,
			year : obj.y
		})
	},
	handleClickNextMonth : function(e) {
		var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'add');
		this.setState({
			month : obj.m,
			year : obj.y
		})
	},

	//选择显示
	hideWitch : function(str) {
		$(this.refs.yearMonth).hide();
		$(this.refs.year).hide();
		$(this.refs.month).hide();

		if(str == 'month'){
			$(this.refs.month).show();
		}else if(str == 'year'){
			$(this.refs.year).show();
		}else{
			$(this.refs.yearMonth).show();
		}
	},

	//点击年月的 title
	handleClickYandM: function(e) {
		this.hideWitch('month');
		$(this.refs.dateMonths).show(0).addClass('mt-date-animate');
	},
	//点击月
	handleClickM: function(e) {

		//根据当前的year 前 12年，后 12年 初始化数据
		var y = this.state.year;
		var arr = [];
		for(var i=12; i > 0 ; i--){
			arr.push(y-i);
		};
		for(var i=0; i < 12 ; i++){
			arr.push(i+parseInt(y));
		};
		//console.log(arr);
		this.setState({
			yearArr : arr
		});

		this.hideWitch('year');
		$(this.refs.dateYears).show(0).addClass('mt-date-animate');
	},
	//选择月份
	handleClickMonth : function(e) {
		this.hideWitch('yearMonth');
		this.setState({
			month : $(e.target).data("val")
		});
		var $dateMonths = $(this.refs.dateMonths);
		$dateMonths.removeClass('mt-date-animate');
		setTimeout(function(){
			$dateMonths.hide();
		},300);
	},
	//选择年份
	handleClickYear : function(e) {

		this.hideWitch('month');
		this.setState({
			year : $(e.target).text()
		});
		var $dateYears = $(this.refs.dateYears);
		$dateYears.removeClass('mt-date-animate');
		setTimeout(function(){
			$dateYears.hide();
		},300);
	},
	//日历更新后
	componentWillReceiveProps: function(nextProps) {
		//console.log("我擦，更新咯~");
		this.setState({
			year : nextProps.year,
			month : nextProps.month,
			day : nextProps.day
		})
	},

	//点击今天
	handleClickNowDay: function(e) {
		//获取当前时间
		var myDate = new Date();
		var data ={
			year : myDate.getFullYear(),
			month : 1+parseInt(myDate.getMonth()),
			day : myDate.getDate(),
			mark : this.props.mark
		};
		this.props.changeEvent(e,data);
		this.hideDiv();
	},

	//点击清除
	handleClickClear: function(e) {
		this.props.changeEvent(e,undefined);
		this.hideDiv();
	},

	//初始化日历插件
	initMonthDay : function(data){  //统一显示6周
		var days = MtDate.GetMDay(data.y, data.m);//当月天数  
		var firstDay = MtDate.WeekNumber(data.y, data.m, 1);//当月第一天星期  

		//获取上个月的y，m
		var prev = MtDate.addAndDelOneMonth(data.y, data.m, 'del');
		var prevDays = MtDate.GetMDay(prev.y, prev.m);

		//一共有6*7 = 42 个格子
		var arr = [];
		//特殊情况，特殊考虑，如果第一天是周日，那么可以考虑多留出上个月的一周，方便选择
		if(firstDay == 0){
			firstDay = 7;
		}

		//渲染day
		for(var i=0; i<42; i++){
			if(i < firstDay){
				arr.push(<li key={i}><a onClick={this.handleClickPrev} href="javascript:;" className="mt-date-prevday">{prevDays - firstDay + i + 1}</a></li>);
			}else if(i >= firstDay && i <= (days+firstDay-1)){ //中间部分
				var day = i - firstDay + 1;
				if(day < this.state.day){
					var cName = 'mt-dates-up';
				}else if(day == this.state.day){
					var cName = 'mt-date-selected';
				}else{
					var cName = 'mt-dates-down';
				}
				arr.push(<li key={i}><a onClick={this.handleClickThis} href="javascript:;" className={cName}>{day}</a></li>);
				
			}else{
				arr.push(<li key={i}><a onClick={this.handleClickNext} href="javascript:;" className="mt-date-nextday">{i - days}</a></li>);
			}
		}
		return (
			<ul className="mt-date-day">
				{arr}
			</ul>
		);
	},

	//渲染
    render: function() {
    	var prevDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'del'),
    		nowDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month),
    		nextDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'add');
    	var arr = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        return (
            <div ref="myDate" className={'mt-date-main '+(this.props.cName!=undefined?this.props.cName:"")}> 
				<div className='mt-date-title'>
					<a onClick={this.handleClickNowDay} href="javascript:;" className="mt-btn-blue mt-btn-sm mt-date-nowday">今天</a>
					<a onClick={this.handleClickClear} href="javascript:;" className="mt-btn-blue mt-btn-sm mt-date-clear">{this.props.mark != undefined ? "" : "清除"}</a>
					<div className="mt-date-yearMonth" ref="yearMonth">
						<a onClick={this.handleClickPrevMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-left"></i></a>
						<a onClick={this.handleClickYandM} className="mt-btn-blue mt-btn-sm mt-date-ym" href="javascript:;" >{this.state.year} / {this.state.month}</a>
						<a onClick={this.handleClickNextMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-right"></i></a>
					</div>
					<div className="mt-date-month" ref="month">
						<a onClick={this.handleClickPrevMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-left"></i></a>
						<a onClick={this.handleClickM} className="mt-btn-blue mt-btn-sm mt-date-m" href="javascript:;" >{this.state.month}</a>
						<a onClick={this.handleClickNextMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-right"></i></a>
					</div>
					<div className="mt-date-year" ref="year">
						<a onClick={this.handleClickPrevYear} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-left"></i></a>
						<a onClick={this.handleClickY} className="mt-btn-blue mt-btn-sm mt-date-y" href="javascript:;" >{this.state.year}</a>
						<a onClick={this.handleClickNextYear} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-right"></i></a>
					</div>
				</div> 
				<div className="mt-date-body">
					<div className="mt-date-days clearfix">
						<ul className='mt-date-week'><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul>
						<div ref="dateDays" className="mt-date-item">
							{this.initMonthDay(nowDay)}
						</div>
					</div>
					<div ref="dateMonths" className="mt-date-months">
						<ul>
							{
								arr.map(function(index, elem) {
									return <li onClick={this.handleClickMonth} className={"mt-btn-blue mt-btn-sm ink-reaction" + (this.state.month==(elem+1)?" mt-active":"")} key={elem} data-val={elem+1}>{index}</li>;
								}.bind(this))
							}
						</ul>
					</div>
					<div ref="dateYears" className="mt-date-years">
						<ul>
							{
								this.state.yearArr.map(function(index, elem) {
									return <li onClick={this.handleClickYear} className={"mt-btn-blue mt-btn-sm ink-reaction" + (this.state.year==index?" mt-active":"")} key={elem}>{index}</li>;
								}.bind(this))
							}
						</ul>
					</div>
				</div> 
			</div>
        );
    }
});

//配置信息
module.exports = DateBox;