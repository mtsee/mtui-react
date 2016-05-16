/**
* 自定义内容的弹窗插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'

//获取随机数
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}

var $bar = null;
var timeMark = null;
var Loading = {};
var px = null;

//添加
Loading.set = function(px){
	if(px < 2){
		clearInterval(timeMark);
	}
	$bar.css({
		'transform':'translate3d(-'+px+'%, 0px, 0px)',
		'-webkit-transform':'-webkit-translate3d(-'+px+'%, 0px, 0px)'
	});
}

//开始
Loading.start = function(){
	//渲染
	render(
		<div className="mt-loading" id="mt-loading">
			<div className="mt-bar" id="mt-bar"></div>
			<div className="mt-spinner">
				<div className="mt-spinner-icon"></div> 
			</div>
		</div>,
		$('#MTUI_LOADING')[0]
	);

	$bar = $("#mt-bar");
	px = 100; //起始
	timeMark = setInterval(function(){
		var num = GetRandomNum(1,20);
		px = px-num;
		if(px < 2){
			px = 2; 
		}
		//console.log(px)
		Loading.set(px);
	},500);
}

//done
Loading.done = function(){
	Loading.set(0);
	$("#mt-loading").fadeOut(1000,function(){
		$("#MTUI_LOADING").html("");
	});
}

//done
Loading.error = function(){
	Loading.set(0);
	$("#mt-bar").css({
		'background':'red'
	}).next().remove();
}

//配置信息
export default Loading;