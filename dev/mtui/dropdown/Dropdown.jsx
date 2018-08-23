
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import DropModal from './DropModal';
import { removeDom } from '../utils/dom';
import { position } from '../utils/offset';
import { clickBlank, offClickBlank } from '../utils/triggerBlank';

class DropDown extends Component {

    // 默认参数
    static defaultProps = {
        btn: <a>dropdown</a>,
        style: {},  // modal的样式
        visible: false,  // 框默认隐藏
        showBack: null,  // 显示时候的回调
        closeBack: null,  // 关闭时候的回调
        trigger: 'hover' // 触发下拉的行为
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show: props.visible
        };
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'mt-div');
        this.handler = null;
        this.mid = null;

        this.refBtn = null;
    }

    // 设置 mid
    setMid() {
        if (this.mid === null) {
            this.mid = 'mt_dropdown_' + +new Date();
        }
    }

    getPlace() {
        return position(this.refBtn);
    }

    // 渲染div
    renderDiv(mark) {
        this.setMid();
        var _this = this;
        var dom = document.getElementById(this.mid);
        // 首次渲染即可
        if (!dom || mark) {
            if (!mark) {
                document.body.appendChild(this.div);
            }
            // console.log(ReactDOM);
            ReactDOM.render(<DropModal mid={this.mid} getPlace={this.getPlace.bind(this)} show={this.state.show} {...this.props} />, this.div);
        }
    }

    // 隐藏显示
    showOrHide(show, callback) {
        var self = this;
        this.renderDiv();
        this.setState({
            show: !show
        }, function () {
            if (self.state.show && self.props.showBack) {
                self.props.showBack();
            } else if (self.props.closeBack) {
                self.props.closeBack();
            }
            if (callback) {
                callback();
            }
        });
        this.hoverHandler = null;
    }

    // 点击事件
    handleClick() {
        const self = this;
        const show = this.state.show;
        if (this.props.trigger === 'click') {
            this.showOrHide(show, function () {
                if (self.handler) {
                    offClickBlank(self.handler);
                }
                self.handler = clickBlank(document.getElementById(self.mid), function (mark) {
                    if (!mark) {
                        self.showOrHide(true);
                        offClickBlank(self.handler);
                    }
                });
            });
        } else {
            return;
        }
    }

    // 更新弹窗里面的数据
    componentDidUpdate(prevProps) {
        if (document.getElementById(this.mid)) {
            this.renderDiv(true);
        }
    }

    // 初始化状态
    componentDidMount() {

        // 如果默认是显示，直接显示DIV
        if (this.props.visible) {
            this.renderDiv();
        }

        // hover事件
        if (this.props.trigger === 'hover') {
            const self = this;

            // hover 事件
            this.hoverHandler = function (e) {
                // 如果显示，不再继续显示
                if (self.state.show) {
                    return;
                }
                self.showOrHide(false, function () {
                    if (self.handler) {
                        offClickBlank(self.handler, 'mousemove');
                    }
                    // 点击其他区域，隐藏
                    self.handler = clickBlank(document.getElementById(self.mid), function (mark) {
                        if (!mark) {
                            self.showOrHide(true, null);
                            offClickBlank(self.handler, 'mousemove');
                        }
                    }, 'mousemove', self.refBtn);
                });
            };

            // 绑定 hover
            this.refBtn.addEventListener('mouseover', this.hoverHandler);
        }
    }

    // 卸载组件
    componentWillUnmount() {
        if (this.props.trigger === 'hover') {
            offClickBlank(this.handler, 'mousemove');
            this.refBtn.removeEventListener('mouseover', this.hoverHandler);
        } else {
            offClickBlank(this.handler);
        }
        removeDom(this.div);
        ReactDOM.unmountComponentAtNode(this.div);
    }

    render() {
        var Component = this.props.btn.type;
        var { children, className, ...other } = this.props.btn.props;
        var cName = ['mt-dropdown-btn'];
        if (className) {
            cName.push(className);
        }
        return <Component ref={(c) => { this.refBtn = c; }} className={cName.join(' ')} onClick={this.handleClick.bind(this)} {...other}>{children}</Component>;
    }
}

// 主页
export default DropDown;