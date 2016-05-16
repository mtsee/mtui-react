import React from 'react'
import {ModalShow , Modal} from '../../../MTUI/index'

// 类
const ModalShowDom = React.createClass({
  render: function() { 

    //弹窗
    var modal = <Modal width='400px' height='240px' title="弹窗标题可自定义" drag="true">这个是有头部的弹出窗。</Modal>;
    var modal2 = <Modal width='400px' height='240px'>这是一个自定义内容的弹出窗，没有头部。</Modal>;

    return (
    	<div className="mt-page-content">
          <h3 className="mt-padding">Modal弹窗组件:</h3>
          <div className="mt-g">
            <div className="mt-g-12">

            <ModalShow modal={modal}>
              <a href="javascript:;" className="mt-btn-blue ink-reaction mt-modal-btn">有头部的弹窗</a>
            </ModalShow>&nbsp;&nbsp;

            <ModalShow modal={modal2}> 
              <a href="javascript:;" className="mt-btn-green ink-reaction mt-modal-btn">没有头部的弹窗</a>
            </ModalShow>&nbsp;&nbsp;

            <br/><br/>
            <div id="code-ModalShow"></div>

            </div>
          </div>
        </div>
    );
  }
});
//帮助中心
export default ModalShowDom;