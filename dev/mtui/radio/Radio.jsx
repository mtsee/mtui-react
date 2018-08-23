
import React, { Component } from 'react';

class Radio extends Component {
    static defaultProps = {
        checked: false,
        value: null
    }

    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            checked: false,
            value: null
        };
    }

    //
    onClick(value, e){

        if(this.props.onClick){
            this.props.onClick(e);
        }

        if(this.props.disabled){
            return;
        }

        if(this.props.onChange){
            this.props.onChange(!this.props.checked, this.props, e);
        }

        if(this.props.defaultChecked !== undefined){
            let checked = !this.state.checked;
            this.setState({
                checked: checked,
                value: value
            });
        }

    }

    // 获取值
    getValue(){
        return {
            checked: !this.state.checked,
            value: this.state.value
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.checked !== this.props.checked){
            this.setState({
                checked: nextProps.checked,
                value: nextProps.value
            });
        }
    }

    componentWillMount() {

        // 不受控
        if(this.props.defaultChecked !== undefined){
            this.setState({
                checked: this.props.defaultChecked,
                value: this.props.value
            });
        }

        // 受控
        if(this.props.checked){
            this.setState({
                checked: this.props.checked,
                value: this.props.value
            });
        }
    }

    render(){
        let {className, disabled, onClick, value, ...other} = this.props;
        let cName = ['mt-radio'];

        if(this.state.checked){
            cName.push('mt-radio-checked');
        }

        if(className){
            cName.push(className);
        }

        if(disabled){
            cName.push('mt-radio-disabled');
        }

        return (
            <div {...other} onClick={this.onClick.bind(this, value)} className={cName.join(' ')}>
                <span className="mt-radio-icon"></span>
                <span className="mt-text">{this.props.children}</span>
            </div>
        );
    }
}

// /组
class RadioGroup extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            value : ''
        }
    }

    static defaultProps = {
        type : 'radio'
    }

    onRadioChange(checked,that,e){
        //console.log(that);
        if(this.props.onChange){
            this.props.onChange({
                value:that.value,
                children:that.children
            })
        }

        //不受控组件
        if(this.props.defaultValue){
            this.setState({
                value: that.value
            })
        }
    }

    componentWillMount() {
        if(this.props.defaultValue){
            this.setState({
                value: this.props.defaultValue
            })
        }
    }

    render(){
        let {className,type, ...other} = this.props;
        let cName = ['mt-radio-group'];
        let self = this;
        let val = null;
        if(this.props.value){
            val = this.props.value
        }else{
            val = this.state.value
        }

        if(type == 'button'){
            cName.push('mt-radio-group-button')
        }

        //ie9 兼容处理
        let tmp = '';
        if(MT_IE9){
            tmp = new Date().getTime()
        }

        return <div {...other} className={cName.join(' ')}>
                    {
                        this.props.children.map(function(elem, index) {
                            let {children, value, ...other} = elem.props;
                            let checked = ( val == value ? true : false);
                            return <Radio {...other} onChange={self.onRadioChange.bind(self)} value={value} checked={checked} key={index+tmp}>{elem.props.children}</Radio>;
                        })
                    }
                </div>
    }
}

Radio.RadioGroup = RadioGroup;

//主页
export default Radio;