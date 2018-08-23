
import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import PopoverBox from './PopoverBox';
import {position, offsetLeft, offsetTop} from '../utils/offset';
import { getXY,  clickBlank,  offClickBlank } from '../utils/triggerBlank';
import assign from '../utils/assign';
import { removeDom } from '../utils/dom';

class Popover extends Component {

    // 默认参数
    static defaultProps = {
        trigger: 'hover', 
        show: false, 
        showBack: null,  // 显示时候的回调
        closeBack: null // 关闭时候的回调
    }
    
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            show: false
        };
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'mt-div');
        this.handler = null;
        this.btn = null;
        this.mid = null;
    }

    // getSetPlace
    getPlace() {
        return position(this.btn);
    }

    // 隐藏显示控制
    showOrHide(e, mark){
        let self = this;

        this.setState({
            show: mark
        }, function(){
            this.renderDiv(true);

            // 如果是显示，就绑定点击空白事件
            if(mark){

                if(this.props.showBack){
                    this.props.showBack();
                }

                if(this.props.trigger === 'click'){
                    if(this.handler){
                        offClickBlank(this.handler);
                    }
                    // 绑定事件
                    this.handler = clickBlank(document.getElementById(this.mid), function(mark){
                        if(!mark){

                            self.setState({
                                show: false
                            }, function(){
                                self.renderDiv(true);
                                offClickBlank(self.handler);
                            });
                        }
                    });
                }else{ // 如果是hover 事件
                    if(this.handler){
                        offClickBlank(this.handler, 'mousemove');
                    }
                    // 鼠标进入，如果显示，绑定mousemove事件
                    this.handler = clickBlank(document.getElementById(this.mid), function(mark){

                        if(!mark){
                            self.setState({
                                show: false
                            }, function(){
                                self.renderDiv(true);
                                offClickBlank(self.handler, 'mousemove');
                            });
                        }
                    }, 'mousemove', self.btn, true);
                }
                
            }else{

                if(this.props.closeBack){
                    this.props.closeBack();
                }

            }
        });
    }

    // 鼠标进入
    onMouseHandler(e){

        e.stopPropagation();
        e.preventDefault();
        
        if(!this.state.show){
            this.showOrHide(e, true);
        }

        // 保留原来的事件
        if(this.props.children.props.onMouseMove){
            this.props.children.props.onMouseMove(e);
        }
    }

    // 点击事件
    onClickHandler(e){

        this.showOrHide(e, !this.state.show);

        // 保留原来的事件
        if(this.props.children.props.onClick){
            this.props.children.props.onClick(e);
        }
        if(this.props.onClick){
            this.props.onClick(e);
        }
    }

    // 卸载组件
    componentWillUnmount() {
        if(this.props.trigger === 'hover'){
            if(this.handler){
                offClickBlank(this.handler, 'mousemove');
            }
        }else{
            offClickBlank(this.handler);
        }
        removeDom(this.div);
        ReactDOM.unmountComponentAtNode(this.div);
    }

    componentDidMount() {

        // 获取原生DOM
        this.btn = ReactDOM.findDOMNode(this);

        if(this.props.show){
            this.onClickHandler();
        }
    }

    componentDidUpdate(prevProps,  prevState) {
        if(prevProps.show !== this.props.show){
            this.onClickHandler();
        }     
    }

    // 设置mid
    setMid(){
        if(this.mid === null){
            this.mid = 'mt_popover_' + new Date().getTime();
        }
    }

    // 渲染div
    renderDiv(mark){
        this.setMid();
        var dom = document.getElementById(this.mid);
        // 首次渲染即可
        if(!dom || mark){
            document.body.appendChild(this.div);
            ReactDOM.render(<PopoverBox 
                className={this.props.className} 
                style={this.props.style} 
                mid={this.mid} 
                getPlace={this.getPlace.bind(this)} 
                show={this.state.show} 
                place={this.props.place} 
                content={this.props.content}/>, this.div);
        }
    }

    // 渲染
    render(){

        let {children, trigger, showBack, closeBack, onMouseOver,  ...other} = this.props;
        let {...otherChild} = children.props; // 完全复制子元素
        let child = React.Children.only(children);
        let props = {};
        // 重写事件
        if(trigger === 'hover'){
            props['onMouseMove'] = this.onMouseHandler.bind(this);
        }else{
            props['onClick'] = this.onClickHandler.bind(this);
        }
        props = assign([{...otherChild}, props]);
        let dom = React.cloneElement(child, props);

        return dom;
    }
}

// 主页
export default Popover;