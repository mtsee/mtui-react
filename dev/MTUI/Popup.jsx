/**
* 自定义内容的弹窗插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'
import mtmixin from './Mixins/mtuiMixins'

var timestamp=new Date().getTime();

//弹窗主函数
function Popup(setting){
	//console.log(setting);

	var defaults = {
            title:'系统提示',
            text: '', //弹窗文字
            titlebg:'#313A49', //顶部的颜色
            btnColor:'#FFFFFF', //关闭按钮的颜色
            time : null, //自动关闭,  如果有值，一定时间会自动关闭
            clickback : false ,//点击按钮的回调函数 return :mark
            closeback : false, //关闭时的回调函数  return :null
            showbtn : 0, //是否显示按钮 0,1,2；1个为确定，2为确定取消，0表示不要按钮
            width: 300, //弹窗宽度
            height: 'auto', //高度自动
            top: false, //弹窗距离顶部的高度
            drag : false //是否可拖动
    }

    //如果setting为空，就取default的值
    var setting = $.extend(defaults, setting);
    var timestamp = new Date().getTime();
    var popupID = "popup-"+timestamp;
    //渲染一个弹窗
    var center = mtmixin.center(setting.width, setting.height);
    var style = {
    	zIndex : timestamp,
    	width: setting.width,
    	height : setting.height,
    	top : setting.top?setting.top:center.top,
    	left : center.left
    }
    var timeMark = false;

    //关闭弹窗
    var closePopup = function(){
    	var $popup = $("#"+popupID);
    	$popup.css({
			"-webkit-animation-name": "bounceOutDown",
    		"animation-name": "bounceOutDown"
		});
		setTimeout(function(){
			//console.log($(".MTUI_POPUPS").length);
			if($(".MTUI_DIALOGS").length == 1){
				$("#MTUI_BG").fadeOut();
			}
			$("#MTUI_POPUP_"+timestamp).remove();
			if(timeMark){
				clearTimeout(timeMark);
			}
			$(document.body).removeClass('html-body-overflow');
		},500);
		if(setting.closeback){
			setting.closeback();
		}
    }

    //关闭按钮
	var handClickClose = function(e){
		closePopup();
	}

	//确定按钮
	var handClickYes = function(e){
		closePopup();
		if(setting.clickback){
			setting.clickback(true);
		}
	}

	//取消按钮
	var handClickNo = function(e){
		var $popup = closePopup();
		if(setting.clickback){
			setting.clickback(false);
		}
	}

	//自动关闭
	var autoClose = function(){
		if(setting.time != null){
			timeMark = setTimeout(function(){
				closePopup();
			},setting.time);
		}
	};

	//加入内部DIV支持多个弹窗
	$("#MTUI_POPUP").append('<div class="MTUI_DIALOGS" id="MTUI_POPUP_'+timestamp+'"></div>');

    //渲染
	render(
		<div id={popupID} className="mt-popup" style={style}>
	         <h1 style={{backgroundColor:setting.titlebg}} className="mt-popup-h1">{setting.title}</h1>
	         <a  style={{color:setting.btnColor}}  onClick={handClickClose} href="javascript:;" className="mt-popup-btn-close"><i className="icon-close iconfont"></i></a>
	         <div className="mt-popup-content">{setting.text==""?setting.text:<p className="mt-popup-str">{setting.text}</p>}</div>
	         {
	         	function(){
	         		if(setting.showbtn==1)
			    		return <a href="javascript:void(0)" onClick={handClickYes} className="mt-btn-blue ink-reaction">确定</a>
				    else if(setting.showbtn==2)
				    	return (
				    		<span>
				    			<a href="javascript:void(0)" onClick={handClickNo} className="mt-btn-grey ink-reaction">取消</a>
				    			<a href="javascript:void(0)" onClick={handClickYes} className="mt-btn-blue ink-reaction">确定</a>
				    		</span>
				    	)
				    else return;
	         	}()
	         }
		</div>,
		$('#MTUI_POPUP_'+timestamp)[0]
	);

	//支持拖动
    if(setting.drag){
       $("#"+popupID).dragMt();
    }

	//显示出来
	$("#"+popupID).show();
	$("#MTUI_BG").show();
	$(document.body).addClass('html-body-overflow');

	//启用计时器
	autoClose();
}

//配置信息
export default Popup;