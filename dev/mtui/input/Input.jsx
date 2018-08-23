
import React, { Component } from 'react';

class Input extends Component {
    static defaultProps = {
        size: 'nm', // lg , nm, sm, xs 大 ，正常，小，超小
        type: 'text',
        block: false,
        prefix: null, // 前面的图标
        suffix: null, // 后面的图标
        onPressEnter: null, // 回车的回调
        validateInfo: null // 表单验证提示
    }

    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onChange(e){

        if(this.props.onChange){
            this.props.onChange(e);
        }

        if(this.props.defaultValue !== undefined){
            this.setState({
                value: e.target.value
            });
        }
    }

    // 获取值
    getValue(){
        return this.state.value;
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.value !== this.props.value){
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentWillMount() {

        // 不受控
        if(this.props.defaultValue !== undefined){
            this.setState({
                value: this.props.defaultValue
            });
        }

        // 受控
        if(this.props.value){
            this.setState({
                value: this.props.value
            });
        }
    }

    render(){
        const {size, prefix, block, suffix, type, onPressEnter, className, validateInfo, onChange, defaultValue, value, disabled, ...other} = this.props;

        let cName = ['mt-input'];
        if(className){
            cName.push(className);
        }
        if(size){
            cName.push('mt-input-' + ( !size ? 'nm' : size));
        }
        if(prefix){
            cName.push('mt-input-prefix-out');
        }
        if(suffix){
            cName.push('mt-input-suffix-out');
        }
        if(disabled){
            cName.push('mt-input-disabled');
        }

        let obj = {};
        if(value !== undefined){
            obj.value = value;
        }
        if(defaultValue !== undefined){
            obj.defaultValue = defaultValue;
        }

        let style = {};
        if(block){
            style = {
                display: 'block'
            };
        }

        return (
            <span style={style} className={cName.join(' ')}>
                {prefix ? <span className="mt-input-prefix">{prefix}</span> : null}
                {type === 'textarea' ? <textarea disabled={disabled} {...obj} {...other} onChange={this.onChange.bind(this)}/> : <input type={type} disabled={disabled} {...obj} {...other} onChange={this.onChange.bind(this)}/>}
                {suffix ? <span className="mt-input-suffix">{suffix}</span> : null}
                {validateInfo}
            </span>
        );
    }
}

// 主页
export default Input;