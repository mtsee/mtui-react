/**
* MTUI
* @author : Mantou
* @date : 2016-03-01
*/
import './style.css'
import React from 'react'
import Input from './Input'
import DateInput from './DateInput'
import DateInputs from './DateInputs'
import Tabs from './Tabs'
import Selected from './Selected'
import ModalShow from './ModalShow'
import Modal from './Modal'
import Popup from './Popup'
import Checkbox from './Checkbox'
import PageList from './PageList'
import Loading from './Loading'
import LoadingBox from './LoadingBox'
import TreeMenu from './TreeMenu'
import Popover from './Popover'
import Swicth from './Swicth'
import SliderActive from './SliderActive'
import {Radio ,RadioGroup} from './RadioGroup'
import validate from './Validate'
//import Upload from './Upload'

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

//波纹按钮
$(document).on('click', '.ink-reaction', function(e) {
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

/**
*   重写ajax方法
*/
;(function($){  
    //备份jquery的ajax方法  
    var _ajax=$.ajax;  
      
    //重写jquery的ajax方法  
    $.ajax=function(opt){  
        //备份opt中error和success方法  
        var fn = {    
            error:function(XMLHttpRequest, textStatus, errorThrown){},
            beforeSend:function(data, textStatus){},
            success:function(data, textStatus){}
        }  
        if(opt.error){  
            fn.error=opt.error;  
        }  
        if(opt.success){  
            fn.success=opt.success;  
        }  
          
        //扩展增强处理  
        var _opt = $.extend(opt,{  
            error:function(XMLHttpRequest, textStatus, errorThrown){  
                //错误方法增强处理  
                // fn.error(XMLHttpRequest, textStatus, errorThrown);
                // var str = XMLHttpRequest.responseText;
                // str = eval("("+str+")");
                Loading.done();
            },  
            beforeSend:function(data, textStatus){
            	Loading.start();
            },
            success:function(data, textStatus){  
                //成功回调方法增强处理  
                fn.success(data, textStatus);  
                //成功
                Loading.done();
            }  
        });  
        _ajax(_opt);  
    };  
})(jQuery);

//添加DOM
if(!$("#MTUI_BG")[0]){
	$("#App").after('\
	<div id="MTUI_BG"></div>\
	<div id="MTUI_LOADING"></div>\
	<div id="MTUI_MODAL"></div>\
	<div id="MTUI_POPOVER"></div>\
	<div id="MTUI_POPUP"></div>');
}

//配置信息
export {
	Tabs, //tabs切换
	Selected, //下拉选择框
	Input, //输入框
	Checkbox, //checkbox
	Radio, //单选
	RadioGroup,//单选组合框
	DateInput, //日期组件
	Swicth, //Swicth 开关 
	SliderActive, //SliderActive 
	DateInputs, //多个日期组合 ======================================
	Modal, //modal弹窗
	ModalShow, //modal弹窗 
	Popup, //提示框
	PageList, //页面列表
    Loading, //loading
    LoadingBox, //LoadingBox
    TreeMenu, //树形菜单
    Popover, //提示框
    validate //表单验证
    //Upload //文件上传
}