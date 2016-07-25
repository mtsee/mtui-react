/**
* 自定义内容的弹窗插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'
import mtmixin from './Mixins/mtuiMixins'

var timestamp=new Date().getTime();

//自定义Checkbox插件
const ModalShow = React.createClass({
	mixins:[mtmixin],

	//关闭弹窗
	handleClickClose(e){
		$("#modalDialog_"+timestamp).css({
			"-webkit-animation-name": "bounceOutDown",
    		"animation-name": "bounceOutDown"
		});
		setTimeout(function(){
			if($(".MTUI_DIALOGS").length == 1){
				$("#MTUI_BG").fadeOut();
			}
			$('#MTUI_MODAL_'+timestamp).remove();
			$(document.body).removeClass('html-body-overflow');
		},500);
	},

	//显示弹窗
	handleClick(e){

		//触发绑定的click的click
		if(this.props.onClick != undefined){
			this.props.onClick(e);
		}

		var {width,height,titleColor,title,closeColor,drag} = this.props.modal.props;
		if(!titleColor){
			var titleColor = '#313A49';
		}
		if(!closeColor){
			if(title){
				var closeColor = '#FFFFFF';
			}else{
				var closeColor = '#333333';
			}
		}

		var center = this.center(width, height);

		//设置style
		var style = {
			width:width, 
			height:height,
			position : 'fixed',
    		top : 160,
    		left : center.left
		}
		//渲染一个弹窗，支持弹多个弹窗
		$("#MTUI_MODAL").append('<div class="MTUI_DIALOGS" id="MTUI_MODAL_'+timestamp+'"></div>');

		render(
			<div style={style} className="mt-modal-dialog" id={"modalDialog_"+timestamp}>
				<a style={{color:closeColor}} href="javascript:;" onClick={this.handleClickClose} className="mt-modal-close">
					<i className="iconfont icon-close"></i>
				</a>
				{title?<div style={{backgroundColor:titleColor}} className={title?"mt-dialog-title":""}>{title}</div>:""}
				{this.props.modal}
			</div>,
			$('#MTUI_MODAL_'+timestamp)[0]//document.getElementById('MTUI_MODAL')
		);

		//显示 - 是否拖动
		if(drag){
			$("#modalDialog_"+timestamp).show().dragMt();
		}else{
			$("#modalDialog_"+timestamp).show();
		}
		$("#MTUI_BG").show();
		$(document.body).addClass('html-body-overflow');

		if(this.props.callBack != undefined){
			this.props.callBack();
		}
	},

	//渲染
	render(){
		var child = React.Children.only(this.props.children);
		return React.cloneElement(child,{
	      onClick : this.handleClick
	    });
	}
});

//配置信息
export default ModalShow;