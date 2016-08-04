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
	getInitialState() {
		var myDate = new Date();
	    return {
	        start : {
	        	year:myDate.getFullYear(),
		        month:1+parseInt(myDate.getMonth()),
		        day:myDate.getDate()
	        },
	        end : {
				year:myDate.getFullYear(),
		        month:1+parseInt(myDate.getMonth()),
		        day:myDate.getDate()
	        },
	        inputShow:false,
	        haveValue:false,
	        style:{top:'auto',right:'auto'}
	    };
	},

	componentWillMount() {
		if(this.props.start == undefined || this.props.end == undefined){
			console.log('没配置起始时间');
			this.setState({
				haveValue:false
			})
		}else{
			if(this.props.start == 'now'){
				var myDate = new Date();
				var start = [myDate.getFullYear(),1+parseInt(myDate.getMonth()),myDate.getDate()]
			}else{
				var start = this.props.start.split('/');
			}
			if(this.props.end == 'now'){
				var myDate = new Date();
				var end = [myDate.getFullYear(),1+parseInt(myDate.getMonth()),myDate.getDate()]
			}else{
				var end = this.props.end.split('/');
			}
			
			this.setState({
				haveValue:true,
				start : {
					year:start[0],
				    month:start[1],
				    day:start[2]
				},
				end : {
					year:end[0],
				    month:end[1],
				    day:end[2]
				}
			})
		}
	},

	//比较日期,返回最大的那个
	compareDate(start,end){
		var s_arr = start.split('/');
		var e_arr = end.split('/');
		//如果结束大与开始，结束 = 开始
		var start = s_arr[0] +""+ 
					(parseInt(s_arr[1],10) < 10 ? "0"+parseInt(s_arr[1],10) : parseInt(s_arr[1],10))+
					(parseInt(s_arr[2],10) < 10 ? "0"+parseInt(s_arr[2],10) : parseInt(s_arr[2],10));
		var end = e_arr[0] +""+ 
					(parseInt(e_arr[1],10) < 10 ? "0"+parseInt(e_arr[1],10) : parseInt(e_arr[1],10))+
					(parseInt(e_arr[2],10) < 10 ? "0"+parseInt(e_arr[2],10) : parseInt(e_arr[2],10));

		if(parseInt(start, 10) > parseInt(end, 10)){
			return {
				mark : 'startMax',
				arr : s_arr
			};
		}else{
			return {
				mark : 'endMax',
				arr : e_arr
			};
		}
	},
	
	//选择时间后
	handleChange(e , obj, dataMark){
		//console.log( obj, dataMark);
		//console.log(arr)
		var setCommon = function() {
			this.setState({
				start : {
		        	year:obj.year,
			        month:obj.month,
			        day:obj.day
		        },
		        end : {
		        	year:obj.year,
			        month:obj.month,
			        day:obj.day
		        }
			});
		}.bind(this)

		this.setState({
			haveValue:true
		})

		//设置开始时间
		if(dataMark == 'start'){
			var max = this.compareDate(obj.year+'/'+obj.month+'/'+obj.day , $(this.refs.inputDom).attr('data-enddate'));
			if(max.mark == 'startMax'){
				setCommon();
			}else{
				this.setState({
					start : {
			        	year:obj.year,
				        month:obj.month,
				        day:obj.day
			        }
				});
			}
		}else{ //设置结束时间
			var max = this.compareDate($(this.refs.inputDom).attr('data-startdate') , obj.year+'/'+obj.month+'/'+obj.day);
			if(max.mark == 'startMax'){
				setCommon();
			}else{
				this.setState({
					end : {
			        	year:obj.year,
				        month:obj.month,
				        day:obj.day
			        }
				});
			}
		}

		//设置区间class

	},

	//点击输入框
	handleClickInput(e){

		if(this.state.inputShow){
			this.setState({
				inputShow: false
			})
		}else{
			this.setState({
				inputShow: true
			})
			$(document).on("click.DateInputs", function(e){
				e.stopPropagation();
				if(!$(e.target).closest('.mt-date-main')[0]){
					this.setState({
						inputShow: false
					})
					$(document).off("click.DateInputs")
				}
    		}.bind(this));
		}

		var $input = $(e.target);
		var $win = $(window);
		var $main = $input.closest(".mt-dates");

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
				style:{top:-250,right:'auto'}
			});
		}else if( !topMark && leftMark){
			this.setState({
				style:{top:'auto',right:0}
			});
		}else{
			this.setState({
				style:{top:'auto',right:'auto'}
			});
		}
		// this.setState({
		// 	haveValue:true
		// })
	},

	handleClickClear(){
		this.setState({
			haveValue:false
		})
	},

	handleClickYes(){
		this.setState({
			inputShow:false
		})
	},

	//渲染
    render() {
    	//规范数据格式
		var formatStart = this.format(this.state.start); //this.state.year+'/'+this.state.month+'/'+this.state.day;
		var formatEnd = this.format(this.state.end); //this.state.year+'/'+this.state.month+'/'+this.state.day;
		var val = formatStart.val+(this.props.splitStr==undefined?' ~ ':this.props.splitStr)+formatEnd.val;
		var formatShow = formatStart.formatShow;

		var style = this.state.style;
		style['display'] = (this.state.inputShow?'block':'none');

        return (
        	<div className="mt-input mt-date mt-icon-input">
        		<input ref="inputDom" onClick={this.handleClickInput} 
		        		style={{width:this.props.width}} readOnly 
		        		data-startdate={this.state.start.year+'/'+this.state.start.month+'/'+this.state.start.day} 
		        		data-enddate={this.state.end.year+'/'+this.state.end.month+'/'+this.state.end.day} 
		        		placeholder={this.props.placeholder==undefined?"日期...":this.props.placeholder} 
		        		onChange={this.handleChange} type="text" 
		        		value={!this.state.haveValue?'':val} />
        		<a style={{zIndex:9}} className="mt-iconbtn"><i className="iconfont icon-date"></i></a>
        		<div className="mt-dates" style={{
        			display:this.state.inputShow?'block':'none',
        			top:this.state.style.top,
        			right:this.state.style.right
        		}}>
        			<DateBox formatShow={formatShow} dataMark='start' changeEvent={this.handleChange} year={this.state.start.year} month={this.state.start.month} day={this.state.start.day}/>
        			<DateBox formatShow={formatShow} dataMark='end' changeEvent={this.handleChange} year={this.state.end.year} month={this.state.end.month} day={this.state.end.day}/>
        			<div className="mt-dates-bottom">
	        			<a onClick={this.handleClickClear} className="cleardate" href="javascript:;">清除</a>
	        			<a onClick={this.handleClickYes} className="yesdate" href="javascript:;">确定</a>
	        		</div>
        		</div>
        	</div>
        );
    }
});

//配置信息
export default DateInput;