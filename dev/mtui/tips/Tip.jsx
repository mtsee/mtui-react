
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { removeClass, addClass} from '../utils/classFun';

function tipsMsg(obj){
    var id = 'mt_tip_' + new Date().getTime();
    var type = 'mt-tip mt-tip-' + obj.type + ' animated fadeInDown';

    // 定时器
    setTimeout(function(){

        let self = document.getElementById(id);

        removeClass(self, 'fadeInDown');
        addClass(self, 'fadeOutUp');

        self.style.height = 0;
        self.style.marginTop = 0;
        setTimeout(function(){
            if(MT_IE9){
                self.removeNode(true);
            }else{
                self.remove();
            }

            if(obj.callback){
                obj.callback(self);
            }
        }, 800);

    }, obj.time || 2000);

    var div = document.createElement('div');
    if(!document.getElementById('mt-div-tips')){
        div.setAttribute('class', 'mt-div');
        div.setAttribute('id', 'mt-div-tips');
        document.body.appendChild(div);
        ReactDOM.render(<div className={type} id={id}>
                <div className="mt-tips-inline">
                    <i className={'iconfont icon-' + obj.type}></i>&nbsp;&nbsp;{obj.msg}
                </div>
            </div>, div);
    }else{
        div.setAttribute('class', type);
        div.setAttribute('id', id);
        div.innerHTML = `<div class="mt-tips-inline"><i class="iconfont icon-${obj.type}"></i>&nbsp;&nbsp;${obj.msg}</div>`;
        document.getElementById('mt-div-tips').appendChild(div);
    }
    
}
let Tip = {};
Tip.success = function(msg, time, callback){
    tipsMsg({msg: msg, type: 'success', time: time, callback: callback});
};
Tip.error = function(msg, time, callback){
    tipsMsg({msg: msg, type: 'danger', time: time, callback: callback});
};
Tip.warning = function(msg, time, callback){
    tipsMsg({msg: msg, type: 'warning', time: time, callback: callback});
};
export default Tip;