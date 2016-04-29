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
	},

	//实例化 limit 属性
	mtLimit(){
		$("[data-limit]").each(function(index, el) {
	        var $this = $(this);
	        var limit = $this.attr("data-limit");
	        var text = $this.text();
	        if(text.length > limit){
	            $this.attr("title",text);
	            text = text.substr(0,limit)+"...";
	        }else{
	            return; 
	        }
	        $this.html(text);
	    });  
	},

	//实例化more
	mtMore(){
		$("[data-more]").each(function(index, el) {
	        var $this = $(this);
	        var more = $this.attr("data-more");
	        var text = $this.text();
	        var wid = text.length*14+20;
	        if(text.length > more){
	            text = text.substr(0,more)+'<div class="mt-more">...<div style="width:'+wid+'px;" class="animated fadeInUp mt-more-content">'+text+'</div></div>';
	        }else{
	            return;
	        }
	        $this.html(text);
	    });
	}
}

module.exports = MtuiMixins;
