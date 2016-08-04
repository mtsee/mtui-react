'use strict'
//国际化支持
import React from 'react';
import zh_CN from './zh_CN';
import en_US from './en_US'; 

var LANG = null;

function langProvider(defaultVal){
	//判断当前语言环境
	if(localStorage.mtui_language == undefined){
		localStorage.mtui_language = defaultVal;//默认是中文
	}
	if(localStorage.mtui_language == 'zh_CN'){
		LANG = zh_CN;
	}else{
		LANG = en_US;
	}
};

function languageData(obj){
	if(LANG == null){
		console.log('没有加载 LangProvider');
	}else{
		if(LANG[obj.id] == undefined){
			LANG[obj.id] = obj.tips;
		}
		var text = LANG[obj.id];
		text = expText(obj.tips,obj.value,text);
		return text;
	}
}


function setLanguage(str) {
	localStorage.mtui_language = str;
    location.reload();
}

function expText(tips,value,text){
	if(value != undefined){
		for(var key in value){
			var exp = new RegExp('{'+key+'}',"ig");
			text = text.replace(exp,value[key]);
		}
	}
	return text;
}

const Language = React.createClass({
	render() {
		if(LANG == null){
			return <span>没有加载 LangProvider</span>
		}
		var text = LANG[this.props.id];
		if(text == undefined){
			text = this.props.tips;
		}
		text = expText(this.props.tips,this.props.value,text);
		return <span>{text}</span>
	}
});


export { Language, languageData , setLanguage, langProvider }