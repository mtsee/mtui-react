
import React, { Component } from 'react';
import Radio from './Radio';

// /组
class RadioGroup extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    static defaultProps = {
        type: 'radio'
    }

    onRadioChange(checked, that, e){
        // console.log(that);
        if(this.props.onChange){
            this.props.onChange({
                value: that.value,
                children: that.children
            });
        }

        // 不受控组件
        if(this.props.defaultValue){
            this.setState({
                value: that.value
            });
        }
    }

    componentWillMount() {
        if(this.props.defaultValue){
            this.setState({
                value: this.props.defaultValue
            });
        }
    }

    render(){
        let {className, type, ...other} = this.props;
        let cName = ['mt-radio-group'];
        let self = this;
        let val = null;
        if(this.props.value){
            val = this.props.value;
        }else{
            val = this.state.value;
        }

        if(type === 'button'){
            cName.push('mt-radio-group-button');
        }

        // ie9 兼容处理
        let tmp = '';
        if(MT_IE9){
            tmp = new Date().getTime();
        }

        return <div {...other} className={cName.join(' ')}>
                    {
                        this.props.children.map(function(elem, index) {
                            let {children, value, ...other} = elem.props;
                            let checked = ( val === value ? true : false);
                            return <Radio {...other} onChange={self.onRadioChange.bind(self)} value={value} checked={checked} key={index + tmp}>{elem.props.children}</Radio>;
                        })
                    }
                </div>;
    }
}

Radio.RadioGroup = RadioGroup;

// 主页
export default Radio;