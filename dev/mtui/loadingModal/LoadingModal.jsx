
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoadingBox from '../loadingBox/LoadingBox';
import { hideScroll, showScroll } from '../utils/bodyscroll';

let LoadingModal = {};
let id = 'mt-div-loading';
LoadingModal.show = function(info, type, bg){
    if(!document.getElementById(id)) {
        hideScroll();
        var div = document.createElement('div');
        div.setAttribute('class', 'mt-div');
        div.setAttribute('id', id);
        document.body.appendChild(div);
        ReactDOM.render(<LoadingBox bg={bg || true} type={type || 'loading3'} info={info || ''} />, div);
    }
};

LoadingModal.hide = function() {
    let self = document.getElementById(id);
    showScroll();
    if(self){
        if(MT_IE9){
            self.removeNode(true);
        }else{
            self.remove();
        }
    }
};

// 主页
export default LoadingModal;