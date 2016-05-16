import React from 'react'

const setMinHeight = {
	  componentDidMount: function() {
        this.iniCode();
    },
    componentDidUpdate: function(prevProps, prevState) {
      this.iniCode();
  	},
    iniEditer: function(str,id){
      $("#"+id).html("");
      str = str.replace(/\#/g,'\n');
      str = str.replace(/\井/g,'#');
      var editor = CodeMirror(document.getElementById(id),{  // 标识到textarea
          mode : 'javascript',  // 模式
          theme : "monokai",  // CSS样式选择
          indentUnit: 4, //空格缩进，默认2
          indentWithTabs: true,//在缩进时，是否需要把 n*tab宽度个空格替换成n个tab字符，默认为false 。
          tabSize : 8,//tab缩进，默认4
          smartIndent : false,  // 是否智能缩进
          showCursorWhenSelecting : false,
          lineNumbers : false, // 是否显示行号
          readOnly:true,
          tabindex: 4,
          value: str,
      });  
    }
}

module.exports = setMinHeight;