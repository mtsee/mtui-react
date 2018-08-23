
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalBox from './ModalBox';
import { removeDom } from '../utils/dom';
import { hideScroll, showScroll } from '../utils/bodyscroll';

class Modal extends Component {

    // 默认参数
    static defaultProps = {
        className: '',
        style: {width: 400, height: 260}, // 框样式
        showBack: null, // 显示时候的回调
        closeBack: null // 关闭时候的回调
    }
    
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            show: props.visible
        };
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'mt-div');
        this.mid = null;
    }

    componentWillUnmount() {

        removeDom(this.div);
        ReactDOM.unmountComponentAtNode(this.div);
    }

    // 
    setMid(){
        if(this.mid === null){
            this.mid = 'mt_modal_' + +new Date();
        }
    }

    // 渲染div
    renderDiv(mark){
        this.setMid();
        var dom = document.getElementById(this.mid);
        // 首次渲染即可
        if(!dom || mark){
            if(!dom){
                document.body.appendChild(this.div);
            }
            ReactDOM.render(<ModalBox mid={this.mid} show={this.state.show} showOrHide={this.showOrHide.bind(this)} {...this.props}/>, this.div); // 
        }
    }

    // 隐藏显示
    showOrHide(show, callback){

        var _this = this;
        if(!show && _this.props.showBefore){
            _this.props.showBefore();
        }
        this.renderDiv();
        this.setState({
            show: !show
        }, function(){

            // 显示隐藏 scroll
            if( !show ){
                hideScroll();
            }else {
                showScroll();
            }

            // 显示隐藏 回调
            if(!show && _this.props.showBack){
                _this.props.showBack();
            }else if( show && _this.props.closeBack){
                _this.props.closeBack();
            }

            // 总回调
            if(callback){
                callback();
            }
        });
    }

    // 更新弹窗里面的数据, 如果DOM不存在，就不更新
    componentDidUpdate(prevProps){
        if(document.getElementById(this.mid)) {
            this.renderDiv(true);
        }
    }

    // 点击事件
    handleClick(){
        const _this = this;
        this.showOrHide(this.state.show);
        if(this.props.onClick){
            this.props.onClick();
        }
    }

    // 对外暴露的方法
    showModal(mark){
        this.showOrHide(!mark);
    }

    render(){

        let dom = null;
        if (this.props.btn) {
            var Component = this.props.btn.type;
            var {children, ...other} = this.props.btn.props;
            dom = <Component onClick={this.handleClick.bind(this)} {...other}>{children}</Component>; // /
        }
        return dom;
    }
}

// /主页
export default Modal;