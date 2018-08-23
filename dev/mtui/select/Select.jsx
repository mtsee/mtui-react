
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectModal from './SelectModal';
import { closest } from '../utils/select';
import { position } from '../utils/offset';
import { toArray } from '../utils/toArray';
import { clickBlank, offClickBlank } from '../utils/triggerBlank';
import assign from '../utils/assign';
import { removeDom } from '../utils/dom';

class Select extends Component {

    // 默认参数
    static defaultProps = {
        visible: false,  // 框默认隐藏
        showBack: null,  // 显示时候的回调
        onChange: null,  // 关闭时候的回调
        trigger: 'hover',  // 触发下拉的行为
        placeholder: '下拉选择框',
        defaultValue: undefined,  // 不受控组件
        value: undefined,  // 受控组件
        prefix: null,  // 前面的图标
        suffix: null,  // 后面的图标
        validateInfo: null // 表单验证提示
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            text: '',
            value: '',
            modalWidth: 120
        };
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'mt-div');
        this.handler = null;
        this.mid = null;

        this.refBtn = null;
    }

    setMid() {
        if (this.mid === null) {
            this.mid = 'mt_select_' + +new Date();
        }
    }

    // 获取位置 
    getPlace() {
        return position(this.refBtn);
    }

    // 渲染div
    renderDiv(mark) {
        var _this = this;
        var dom = document.getElementById(this.mid);
        // 首次渲染即可
        if (!dom || mark) {
            document.body.appendChild(this.div);
            this.renderDOM();
        }
    }

    renderDOM() {
        this.setMid();
        ReactDOM.render(<SelectModal
            mid={this.mid} {...this.state}
            showOrHide={this.showOrHide.bind(this)} 
            modalWidth={this.state.modalWidth} 
            show={this.state.show}
            getPlace={this.getPlace.bind(this)} {...this.props} />, this.div);
    }

    // /设置value
    setValue(data, callback) {
        this.setState({
            text: data.children,
            value: data.value
        }, function () {
            if (callback) {
                callback(data);
            }
        });
    }

    // 隐藏显示
    showOrHide(show, data, callback, e) {

        this.hoverHandler = null;
        var self = this;
        this.setState({
            show: !show,
            modalWidth: this.refBtn.offsetWidth
        }, function () {

            this.renderDiv(true);

            if (!show) {
                // 显示弹窗
                if (self.props.showBack) {
                    self.props.showBack();
                }
            } else {
                offClickBlank(self.handler);

                // 选择值
                if (data) {

                    if (self.props.value) {
                        if (self.props.onChange) {
                            self.props.onChange(e, data);
                        }
                    } else {
                        this.setValue(data, function (data) {
                            if (self.props.onChange) {
                                self.props.onChange(e, data);
                            }
                        });
                    }
                }
            }
            if (callback) {
                callback();
            }
        });
    }

    // 点击事件
    handleClick() {

        // 如果不可用
        if(this.props.disabled) {
            return;
        }

        const self = this;
        const show = this.state.show;
        if (this.props.trigger === 'click') {
            this.showOrHide(show, null, function () {
                if (self.handler) {
                    offClickBlank(self.handler);
                }
                self.handler = clickBlank(document.getElementById(self.mid), function (mark) {
                    if (!mark) {
                        self.showOrHide(true, null);
                    }
                });
            });
        } else {
            return;
        }
    }

    // 更新弹窗里面的数据
    componentDidUpdate(prevProps) {

        // 受控组件
        if (this.props.value || this.props.defaultValue !== undefined) {
            // console.log('受控组件', this.props.value, prevProps.value);
            if(document.getElementById(this.mid)) {
                this.renderDiv(true);
            }
        }
    }

    // 受控组件方法
    componentWillReceiveProps(nextProps) {
        if (this.props.value && this.props.value !== nextProps.value) {
            let self = this;
            nextProps.children.map(function (elem, index) {
                if (elem.props.value === nextProps.value) {
                    self.setValue(elem.props);
                }
            });
        }
    }

    // 初始化状态
    componentDidMount() {

        let self = this;
        // 如果默认是显示，直接显示DIV
        if (this.props.visible) {
            self.renderDiv();
        }

        let child = toArray(this.props.children);

        // 设置默认值
        if (this.props.defaultValue !== undefined || this.props.value !== undefined) {
            child.map(function (elem, index) {
                if (elem.props.value === self.props.defaultValue || elem.props.value === self.props.value) {
                    self.setState({
                        text: elem.props.children,
                        value: elem.props.value
                    });
                }
            });
        }

        // 不可用状态
        if(this.props.disabled) {
            return;
        }

        // hover事件
        if (this.props.trigger === 'hover') {
            const self = this;

            this.hoverHandler = function (e) {
                self.showOrHide(false, null, function () {

                    // 绑定blank事件
                    if (self.handler) {
                        offClickBlank(self.handler, 'mousemove');
                    }
                    self.handler = clickBlank(document.getElementById(self.mid), function (mark) {
                        // console.log('hover', mark, new Date().getTime())
                        if (!mark) {
                            offClickBlank(self.handler, 'mousemove');
                            self.showOrHide(true, null);
                        }
                    }, 'mousemove', self.refBtn);

                });
            };
            this.refBtn.addEventListener('mouseover', this.hoverHandler);
        }
    }

    // 卸载组件
    componentWillUnmount() {
        if (this.props.trigger === 'hover') {
            offClickBlank(this.handler, 'mousemove');
        } else {
            offClickBlank(this.handler);
        }
        this.refBtn.removeEventListener('mouseenter', this.hoverHandler);

        removeDom(this.div);
        ReactDOM.unmountComponentAtNode(this.div);
    }

    render() {

        let { className, prefix, suffix, disabled, width, height, block, style, validateInfo, ...other } = this.props;
        let cName = ['mt-select-input'];
        if (className) {
            cName.push(className);
        }
        if(disabled){
            cName.push('mt-input-disabled');
        }

        let styles = {};
        if (width) {
            styles['width'] = width;
        }
        if (height) {
            styles['height'] = height;
        }
        if (block) {
            styles['display'] = block ? 'block' : 'inline-block';
        }
        if (styles) {
            styles = assign([style || {}, styles]);
        }

        return <div
            style={styles}
            ref={(c) => { this.refBtn = c; }}
            className={cName.join(' ')}
            onClick={this.handleClick.bind(this)}>
            {prefix ? <span className="mt-input-prefix">{prefix}</span> : null}
            <span>{this.state.text || <i className="mt-placeholder">{this.props.placeholder}</i>}</span>
            <i className="iconfont icon-arrowd"></i>
            <input type="text" value={this.state.value} />
            {suffix ? <span className="mt-input-suffix">{suffix}</span> : null}
            {validateInfo}
        </div>;
    }
}

// /选项卡
class Option extends Component {
    render() {
        return <span>{this.props.children}</span>;
    }
}

Select.Option = Option;

// 主页
export default Select;