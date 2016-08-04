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
			yearArr : [],
			dataShow:{},
			selectMark : 'ymd' //ymd,md,ymd
		}
	},

	//hide DIV
	hideDiv : function(){
		//console.log('hideDiv')
		if(this.props.dataMark == "start" || this.props.dataMark == "end"){
			return;
		}else{
			$(this.refs.myDate).hide();
		}
	},

	//点击后触发
	clickDay : function (e,mark) {
		//console.log('clickDay')
		var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, mark);
		var data = {
			day : e.target.text,
			year : obj.y,
			month : obj.m
		}
		this.propsChangeEvent(e,data);
		this.hideDiv();
	},

	//点击事件
	handleClickPrev : function(e){
		//console.log('handleClickPrev')
		//console.log("点击上个月的：",e.target.text);
		this.clickDay(e,'del');
	},
	handleClickThis : function(e){
		//console.log('handleClickThis')
		//console.log("点击这个月的：",e.target.text);
		this.clickDay(e,'null');
	},
	handleClickNext : function(e){
		//console.log('handleClickNext')
		//console.log("点击下个月的：",e.target.text);
		this.clickDay(e,'add');
	},
	//点击上一年,点击下一年
	handleClickPrevYear : function(e) {
		//console.log('handleClickPrevYear')
		var year = this.state.year-1;
		this.setState({
			year : year
		})
		this.propsChangeEvent(e,{year : year});
		this.resetYear();
	},
	handleClickNextYear : function(e) {
		//console.log('handleClickNextYear')
		var year = parseInt(this.state.year)+1
		this.setState({
			year : year
		})
		this.propsChangeEvent(e,{year : year});
		this.resetYear();
	},
	//点击上个月，点击下个月
	handleClickPrevMonth : function(e) {
		//console.log('handleClickPrevMonth')
		var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'del');
		this.setState({
			month : obj.m,
			year : obj.y
		})
		var data = {
			month : obj.m,
			year : obj.y
		}
		this.propsChangeEvent(e,data);
	},
	handleClickNextMonth : function(e) {
		//console.log('handleClickNextMonth')
		var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'add');
		this.setState({
			month : obj.m,
			year : obj.y
		})
		var data = {
			month : obj.m,
			year : obj.y
		}
		this.propsChangeEvent(e,data);
	},
	//点击年月的 title
	handleClickYandM: function(e) {
		//console.log('handleClickYandM');
		this.setState({
			dataShow:{ 
				year:false,
				month:true,
				day:false
			}
		});
	},

	//根据当前的year 前 12年，后 12年 初始化数据
	resetYear: function(){
		var y = this.state.year;
		var arr = [];
		for(var i=12; i > 0 ; i--){
			arr.push(y-i);
		};
		for(var i=0; i < 12 ; i++){
			arr.push(i+parseInt(y));
		};
		this.setState({
			yearArr : arr
		});
	},

	//点击月
	handleClickM: function(e) {
		//console.log('handleClickM');
		this.resetYear();
		this.setState({
			dataShow:{
				year:true,
				month:false,
				day:false
			}
		});
	},

	propsChangeEvent: function(e,data){
		if(data == null){
			var newData = null;
		}else{
			var newData = {
				year:this.state.year,
				month:this.state.month,
				day:this.state.day
			}

			if(data.year != undefined){
				newData.year = data.year
			}
			if(data.month != undefined){
				newData.month = data.month
			}
			if(data.day != undefined){
				newData.day = data.day
			}

			if(data == undefined){
				newData = undefined
			}
		}

		this.props.changeEvent(e,newData,this.props.dataMark);
	},

	//选择月份
	handleClickMonth : function(e) {
		//console.log('handleClickMonth');
		if(this.state.selectMark == 'ym'){
			this.setState({
				month : $(e.target).data("val")
			});
			this.propsChangeEvent(e,{month : $(e.target).data("val")});
			this.hideDiv();
			return 
		}
		this.setState({
			month : $(e.target).data("val"),
			dataShow:{
				year:false,
				month:false,
				day:true
			}
		});
	},
	//选择年份
	handleClickYear : function(e) {
		//console.log('handleClickYear');
		//只选择年
		var year = $(e.target).text();
		if(this.state.selectMark == 'y'){
			this.propsChangeEvent(e,{year : year});
			this.hideDiv();
			return 
		}

		this.setState({
			year : year,
			dataShow:{
				year:false,
				month:true,
				day:false
			}
		});
		this.propsChangeEvent(e,{year : year});
	},
	//日历更新后
	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps');
		//this.resetYear();
		this.setState({
			year : nextProps.year,
			month : nextProps.month,
			day : nextProps.day
		})
	},

	//点击今天
	handleClickNowDay: function(e) {
		//console.log('handleClickNowDay')
		//获取当前时间
		var myDate = new Date();
		var data ={
			year : myDate.getFullYear(),
			month : 1+parseInt(myDate.getMonth()),
			day : myDate.getDate()
		};
		this.propsChangeEvent(e,data);
		this.hideDiv();
	},

	//点击清除
	handleClickClear: function(e) {
		//console.log('handleClickClear')
		this.propsChangeEvent(e,null);
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

	//这里开始决定渲染哪些
	componentWillMount: function() {
		//console.log('componentWillMount')

		//可选择 年，月
		if(!this.props.formatShow.day && this.props.formatShow.month && this.props.formatShow.year){ 
			this.setState({
				selectMark : 'ym',
				dataShow:{
					year : false,
					month : true,
					day : false
				}
			})
		}

		//可选择 年
		if(!this.props.formatShow.day && !this.props.formatShow.month && this.props.formatShow.year){ 
			this.handleClickM(); //重置年li
			this.setState({
				selectMark : 'y',
				dataShow:{
					year : true,
					month : false,
					day : false
				}
			})
		}

		//可选 年，月，日
		if(this.props.formatShow.day && this.props.formatShow.month && this.props.formatShow.year){ 
			var year = false;
			var month = false;
			var day = true;
			this.setState({
				selectMark : 'ymd',
				dataShow:{
					year : false,
					month : false,
					day : true
				}
			})
		}

	},

	//渲染
    render: function() {
    	var prevDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'del'),
    		nowDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month),
    		nextDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'add');
    	var arr = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

        return (
            <div ref="myDate" style={this.props.style} className={'mt-date-main '+(this.props.cName!=undefined?this.props.cName:"")}> 
				<div className='mt-date-title'>
					<a onClick={this.handleClickNowDay} href="javascript:;" className="mt-btn-blue mt-btn-sm mt-date-nowday">今天</a>
					<a onClick={this.handleClickClear} href="javascript:;" className="mt-btn-blue mt-btn-sm mt-date-clear">{this.props.dataMark != undefined ? "" : "清除"}</a>
					<div className="mt-date-day" style={{display: this.state.dataShow.day?'block':'none'}}>
						<a onClick={this.handleClickPrevMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-left"></i></a>
						<a onClick={this.handleClickYandM} className="mt-btn-blue mt-btn-sm mt-date-ym" href="javascript:;" >{this.state.year} / {this.state.month}</a>
						<a onClick={this.handleClickNextMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-right"></i></a>
					</div>
					<div className="mt-date-month" style={{display: this.state.dataShow.month?'block':'none'}}>
						<a onClick={this.handleClickPrevMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-left"></i></a>
						<a onClick={this.handleClickM} className="mt-btn-blue mt-btn-sm mt-date-m" href="javascript:;" >{this.state.month}</a>
						<a onClick={this.handleClickNextMonth} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-right"></i></a>
					</div>
					<div className="mt-date-year" style={{display: this.state.dataShow.year?'block':'none'}}>
						<a onClick={this.handleClickPrevYear} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-left"></i></a>
						<a onClick={this.handleClickY} className="mt-btn-blue mt-btn-sm mt-date-y" href="javascript:;" >{this.state.year}</a>
						<a onClick={this.handleClickNextYear} className="mt-btn-blue mt-btn-sm" href="javascript:;"><i className="iconfont icon-right"></i></a>
					</div>
				</div> 
				<div className="mt-date-body">
					<div className="mt-date-days clearfix" style={{display: this.state.dataShow.day?'block':'none'}}>
						<ul className='mt-date-week'><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul>
						<div ref="dateDays" className="mt-date-item">
							{this.initMonthDay(nowDay)}
						</div>
					</div>
					<div className="mt-date-months" style={{display: this.state.dataShow.month?'block':'none'}}>
						<ul>
							{
								arr.map(function(index, elem) {
									return <li onClick={this.handleClickMonth} className={"mt-btn-blue mt-btn-sm ink-reaction" + (this.state.month==(elem+1)?" mt-active":"")} key={elem} data-val={elem+1}>{index}</li>;
								}.bind(this))
							}
						</ul>
					</div>
					<div className="mt-date-years" style={{display: this.state.dataShow.year?'block':'none'}}>
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