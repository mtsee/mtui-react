/**
* MTUI_MIXINS
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'

var MtuiMixins = {
	getCheckboxGroupVal : function($dom){
		var arr = [];
	  	$dom.find(".mt-checkbox-input:checked").each(function(index, el) {
	  		arr.push($(this).val());
	  	});
	  	return arr;
	},

	//居中显示
	center(w, h){
		var $win = $(window);
		var winH = $win.height();
		var winW = $win.width();
		if(h != 'auto'){
			var top = (winH - parseInt(h) >= 0)?(winH - parseInt(h))/2:20;
		}else{
			var top = 160;
		}
		var left = (winW - parseInt(w))/2;
		return {
			top : top,
			left : left
		}
	}
}

module.exports = MtuiMixins;
