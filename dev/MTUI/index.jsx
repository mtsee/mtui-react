/**
* MTUI
* @author : Mantou
* @date : 2016-03-01
*/
import './style.css'
import React from 'react'
import DateInput from './DateInput'
import Tabs from './Tabs'
import Selected from './Selected'
import ModalShow from './ModalShow'
import Modal from './Modal'
import Popup from './Popup'
import Checkbox from './Checkbox'
import PageList from './PageList'
import Loading from './Loading'
import TreeMenu from './TreeMenu'
import {Radio ,RadioGroup} from './RadioGroup'

//配置信息
export {
	Tabs, //tabs切换
	Selected, //下拉选择框
	Checkbox, //checkbox
	Radio, //单选
	RadioGroup,//单选组合框
	DateInput, //日期组件
	Modal, //modal弹窗
	ModalShow, //modal弹窗 
	Popup, //提示框
	PageList, //页面列表
    Loading, //loading
    TreeMenu //树形菜单
}

//center插件 by mantou 
;(function($){ 
	$.fn.centerMt = function(setting){ 
		var defaults = { 
			parent : 'out' //out 相对外层, body 相对body ，window 相对window
		} 
		//如果setting为空，就取default的值
		var set = $.extend(defaults, setting); 

		//插件实现代码 
		var $this = $(this);
		var $outer,wid,hei,thisWid,thisHei;
		if(set.parent == 'body'){
			$outer = $('body');
		}else if(set.parent == 'window'){
			$outer = $(window);
		}else{
			$outer = $this.parent();
		}
		wid = $outer.width();
		hei = $outer.height();
		thisWid = $this.width();
		thisHei = $this.height();

		//console.log(wid,hei,thisWid,thisHei);

		$this.css({
			left: (wid - thisWid)/2,
			top: (hei - thisHei)/2
		});
		return $this;
	}
})(jQuery);

//拖拽插件 by mantou
;(function($){ 
	$.fn.dragMt = function(setting){ 
		var defaults = { 
			//drag_callback : null//默认回调函数为空
			down_callback : null,
			move_callback : null,
			up_callback : null
		} 
		//如果setting为空，就取default的值
		var setting = $.extend(defaults, setting); 
		this.each(function(){ 
			//插件实现代码 
			var $this = $(this);
			
			//点击事件
			$this.on("mousedown",function(e){
				e.preventDefault();
				var ev = {
					x_start : null,
					y_start : null,
					x_move : null,
					y_move : null,
					x_end : null,
					y_end : null,
					left : null,
					top :　null
				};
					
				ev.x_start = e.pageX;
				ev.y_start = e.pageY;
				ev.left = $this.position().left + $this.parent().get(0).scrollLeft;
				ev.top = $this.position().top + $this.parent().get(0).scrollTop;

				if(setting.down_callback != null){
					setting.down_callback(ev);
				}

				$(document).on("mousemove.dragMt",function(e){
					ev.x_move = e.pageX - ev.x_start + ev.left;
					ev.y_move = e.pageY - ev.y_start + ev.top;
					if(setting.move_callback != null){
						setting.move_callback(ev,(e.pageX - ev.x_start + e.pageY - ev.y_start));
					}
					$this.css({
						"left" : ev.x_move,
						"top" : ev.y_move
					});
				}).on("mouseup.dragMt",function(e){
					ev.x_end = e.pageX;
					ev.y_end = e.pageY;
					if(setting.up_callback != null){
						setting.up_callback(ev);
					}
					$(document).off("mousemove.dragMt mouseup.dragMt");
				});
			});
		});
	}
})(jQuery);

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
