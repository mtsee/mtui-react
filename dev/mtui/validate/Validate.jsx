
import React, { Component } from 'react';
import regex from './regex';
import eventProxy from '../utils/eventProxy';
import ReactDOM from 'react-dom';
import assign from '../utils/assign';

class Validate extends Component {

    static defaultProps = {
        size: '' // 默认,  min
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            type: 'nomarl',  // 验证错误的类型
            info: ''
        };
        this.onChange = null;
        this.onFocus = null; // 获取焦点
        this.onBlur = null; // 失去焦点
        this.lockChange = true; // 监听 onChange的 锁
    }

    // 设置icon
    setIcon() {
        let suffix;
        if (this.state.type === 'nomarl') {
            suffix = <i className="iconfont icon-null"></i>;
        } else {
            suffix = <i className={'iconfont icon-' + this.state.type}></i>;
        }

        this.setState({
            suffix: suffix
        });
    }

    // 获取数组中，对应的长度
    arrValLen(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (!obj[arr[i]['reslt']]) {
                obj[arr[i]['reslt']] = 1;
            } else {
                obj[arr[i]['reslt']]++;
            }
        }
        return obj;
    }

    // 通过arr 和 type 设置 info
    setInfo(arr, type) {
        let info = '';
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].reslt === type) {
                info = arr[i].info;
                break;
            }
        }
        return info;
    }

    // 数据验证
    validate(val) {
        // console.log(this.props.exgs)
        let exgs = this.props.exgs || [];
        let arr = [];
        for (let i = 0; i < exgs.length; i++) {
            let exg, info, type, reslt;

            if (exgs[i].regs) {
                exg = regex[exgs[i].regs];
            } else {
                exg = exgs[i].regx;
            }
            info = exgs[i].info;
            type = exgs[i].type;
            if (new RegExp(exg).test(val)) {
                reslt = 'success';
            } else {
                reslt = type;
            }
            arr.push({
                type: type,
                info: info,
                reslt: reslt
            });
        }

        // 因为 type 和 info 有多个。这里danger优先显示原则进行显示
        let type = 'normal';
        let arrlen = this.arrValLen(arr);
        arrlen = arrlen || 0;

        if (arrlen['success'] === exgs.length) {
            type = 'success';
        } else {
            if (arrlen['warning'] || 0 !== 0 && arrlen['warning'] || 0 >= arrlen['danger'] || 0) {
                type = 'warning';
            } else {
                type = 'danger';
            }
        }
        let info = this.setInfo(arr, type);

        this.setState({
            type: type,
            info: type === 'success' ? '' : info
        }, function () {
            this.setIcon();
        });
    }

    changeVal(e) {

        if (this.onChange) {
            this.onChange(e);
        }

        if (!this.lockChange || e.target.localName === 'div') {
            this.validate(e.target.value);
        }
    }

    onFocusDo(e) {
        if (this.onFocus) {
            this.onFocus(e);
        }
    }

    onBlurDo(e) {

        if (this.onBlur) {
            this.onBlur(e);
        }

        if (this.lockChange) {
            this.lockChange = false;
            this.validate(e.target.value);
        }
    }

    componentDidMount() {
        this.setIcon();
        eventProxy.on('mt-validate', function () {
            let dom = ReactDOM.findDOMNode(this.refs.input);
            for (let i = 0; i < dom.children.length; i++) {
                if (dom.children[i].localName === 'input') {
                    dom = dom.children[i];
                    break;
                }
            }
            this.onBlurDo({
                target: dom,
                value: dom.value
            });
        }.bind(this));
    }

    componentWillMount() {
        // 受控的验证表单，如果type 存在
        if (this.props.type) {
            this.setState({
                type: this.props.type
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.type !== this.props.type) {
            this.setState({
                type: nextProps.type
            });
        }
    }

    componentWillUnmount() {
        eventProxy.off('mt-validate');
    }

    render() {

        let self = this;
        let cName = ['mt-validate'];
        let { className, children, exgs, ...other } = this.props;
        let child = React.Children.only(children);
        if (className) {
            cName.push(className);
        }

        if (this.state.type) {
            cName.push('mt-validate-' + this.state.type);
        }

        // 保留input 的 onChange
        if (!this.onChange && children.props.onChange) {
            this.onChange = children.props.onChange.bind(children);
        }
        // 保留this.onFocus this.onBlur
        if (!this.onFocus && children.props.onFocus) {
            this.onFocus = children.props.onFocus.bind(children);
        }
        if (!this.onBlur && children.props.onBlur) {
            this.onBlur = children.props.onBlur.bind(children);
        }

        let props = assign([{
            className: cName.join(' '),
            ref: 'input',
            suffix: self.state.suffix,
            onChange: self.changeVal.bind(self),
            onFocus: self.onFocusDo.bind(self),
            onBlur: self.onBlurDo.bind(self),
            validateInfo: self.state.info ? <span className="mt-validate-info">{self.state.info}</span> : null
        }, { ...other }]);
        return React.cloneElement(child, props);
    }
}

// 组
class ValidateGroup extends Component {

    constructor(props) {
        super(props);
        this.refForm = null;
    }

    submitEvent(e) {
        e.preventDefault();
        let elems = this.refForm.elements;

        for (let i = 0; i < elems.length; i++) {
            if (elems[i].localName === 'input') {
                eventProxy.trigger('mt-validate');
            }
        }

        // 因为订阅的方法里面存在异步方法
        setTimeout(function () {
            let obj = {
                danger: this.refForm.getElementsByClassName('mt-validate-danger').length,
                warning: this.refForm.getElementsByClassName('mt-validate-warning').length
            };

            if (obj.danger + obj.warning === 0) {
                obj['success'] = true;
            } else {
                obj['success'] = false;
            }

            if (this.props.submit) {
                this.props.submit(obj);
            }

        }.bind(this), 1);

    }

    render() {
        let { children, submit, ...other } = this.props;
        return <form ref={(c) => { this.refForm = c; }} onSubmit={this.submitEvent.bind(this)} {...other}>{children}</form>;
    }
}

Validate.ValidateGroup = ValidateGroup;

// 主页
export default Validate;