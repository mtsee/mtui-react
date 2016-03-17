/**
* MTUI
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import DateInput from './DateInput'
import Tabs from './Tabs'
import Selected from './Selected'
import Checkbox from './Checkbox'
import {Radio ,RadioGroup} from './RadioGroup'

const MTUI = { 
	Tabs : Tabs, //tabs切换
	Selected : Selected, //下拉选择框
	Checkbox : Checkbox, //checkbox
	Radio : Radio, //单选
	RadioGroup : RadioGroup,//单选组合框
	DateInput : DateInput //日期组件
}

//配置信息
module.exports = MTUI;

//点击空白，收起选择框，特殊情况
$(document).on('click', function(e) {
	e.stopPropagation();
	if(!$(e.target).closest('.mt-select')[0]){
		$(".mt-select-box").slideUp(200);
	}
	if(!$(e.target).closest('.mt-date-main')[0]){
		$(".mt-date-main").hide();
	}
}).on('click', '.ink-reaction', function(e) {
	var $this = $(this);
	//获取当前的点击点
	var x = e.pageX - $this.offset().left;
	var y = e.pageY - $this.offset().top;
	var timestamp=new Date().getTime();
	$(this).append('<div style="left:'+x+'px; top:'+y+'px;" class="ink ink_'+timestamp+'"></div>');
	var $thisInk = $(".ink_"+timestamp);

	if(window.applicationCache){ //如果支持
		$thisInk[0].addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
			$thisInk.remove();
		}, false);
	}

});