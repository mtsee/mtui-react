
import React, { Component } from 'react';

class Switch extends Component {

    static defaultProps = {
        size: 'nm', // 默认nm,lg,sm,xs
        disabled: false,
        defaultValue: false
    }
    
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    clickEvent(e) {

        if (this.props.disabled) {
            return;
        }

        if (this.props.onChange) {
            this.props.onChange(!this.state.checked);
        }

        if (this.props.onClick) {
            this.props.onClick();
        }

        // 设置
        this.setState({
            checked: !this.state.checked
        });

    }

    // 更新
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.defaultValue != this.props.defaultValue) {
            this.setState({
                checked: nextProps.defaultValue
            }, function () {
                if (this.props.onChange) {
                    this.props.onChange(nextProps.defaultValue);
                }
            });
        }
    }

    componentWillMount() {
        this.setState({
            checked: this.props.defaultValue
        });
    }

    render() {
        const { className, size, disabled, defaultValue, ...other } = this.props;
        let arr = ['mt-switch'];

        // 尺寸
        if (size) {
            arr.push('mt-switch-' + size);
        }

        // classname
        if (className) {
            arr.push(className);
        }

        // checked
        if (this.state.checked) {
            arr.push('mt-switch-on');
        } else {
            arr.push('mt-switch-off');
        }

        // disabled
        if (disabled) {
            arr.push('mt-switch-disabled');
        }

        return (
            <span onClick={this.clickEvent.bind(this)} {...other} className={arr.join(' ')}></span>
        );
    }
}

// 主页
export default Switch;