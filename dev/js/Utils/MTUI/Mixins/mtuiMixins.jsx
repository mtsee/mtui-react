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
	}
}

module.exports = MtuiMixins;
