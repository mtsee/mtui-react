import React, { Component } from 'react';
import { offsetLeft, offsetTop } from '../utils/offset';
import assign from '../utils/assign';
import { removeDom } from '../utils/dom';

class Button extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            inks: []
        };
    }

    static defaultProps = {
        size: null, // 默认 lg,sm,xs
        type: 'default', // default,primary,success,info,warning,danger
        block: false, // true
        dom: 'a',
        disabled: false,
        prefix: null, // 前面的图标
        suffix: null // 后面的图标
    }

    clickEvent(e) {

        if (this.props.disabled) {
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }

        // 波纹
        var x = e.pageX - offsetLeft(e.target);
        var y = e.pageY - offsetTop(e.target);
        var arr = this.state.inks;
        var tmp = new Date().getTime();
        var self = this;
        arr.push({
            x: x,
            y: y,
            tmp: tmp
        });
        this.setState({
            inks: arr
        }, function () {
            if (window.applicationCache) { // 如果支持
                self.refs['ink_' + tmp].addEventListener('webkitAnimationEnd', function () { // 动画结束时事件 
                    removeDom(this);
                }, false);
            }
        });
    }

    render() {
        const { className, children, dom, style, type, size, block, disabled, prefix, suffix, htmlType, onClick, ...other } = this.props;
        let arr = ['mt-ink-reaction', 'mt-btn'];
        let Dom = dom;

        // 尺寸
        if (size) {
            arr.push('mt-btn-' + size);
        }

        // 按钮样式
        if (type) {
            arr.push('mt-btn-' + type);
        } else {
            arr.push('mt-btn-primary');
        }

        // block
        if (block) {
            arr.push('mt-btn-block');
        }

        // disabled
        if (disabled) {
            arr.push('mt-btn-disabled');
        }

        // className
        if (className) {
            arr.push(className);
        }

        if (prefix) {
            arr.push('mt-button-prefix-out');
        }

        if (suffix) {
            arr.push('mt-button-suffix-out');
        }

        if (htmlType) {
            other['type'] = htmlType;
        }

        if (htmlType === 'submit') {
            Dom = 'button';
        }

        let styles = style || {};
        styles = assign([{
            width: (htmlType === 'submit' && block) ? '100%' : ''
        }, styles]);

        return (
            <Dom style={styles} onClick={this.clickEvent.bind(this)} {...other} className={arr.join(' ')}>
                {prefix ? <span className="mt-button-prefix">{prefix}</span> : null}
                <span>{children}</span>
                {suffix ? <span className="mt-button-suffix">{suffix}</span> : null}
                {
                    this.state.inks.map(function (elem, index) {
                        return <div style={{ left: elem.x, top: elem.y }} key={elem.tmp} ref={'ink_' + elem.tmp} className="mt-ink"></div>;
                    })
                }
            </Dom>
        );
    }
}

// 主页
export default Button;