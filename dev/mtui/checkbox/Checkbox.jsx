
import React, { Component } from 'react';

class Checkbox extends Component {
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
    onClick(val, e){

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
                value: val
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

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.checked !== this.props.checked){
            this.setState({
                checked: nextProps.checked,
                value: nextProps.value
            });
        }
    }

    render(){
        let {className, disabled, onClick, checked, value, ...other} = this.props;
        let cName = ['mt-checkbox'];

        if(this.state.checked && this.state.checked !== 'other'){
            cName.push('mt-checkbox-checked');
        }else if(this.state.checked === 'other'){
            cName.push('mt-checkbox-other');
        }

        if(className){
            cName.push(className);
        }

        if(disabled){
            cName.push('mt-checkbox-disabled');
        }

        return (
            <div {...other} onClick={this.onClick.bind(this, value)} className={cName.join(' ')}>
                <span className="mt-checkbox-icon"></span>
                <span className="mt-text">{this.props.children}</span>
            </div>
        );
    }
}

// /组
class CheckboxGroup extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            value: []
        };
    }

    static defaultProps = {
        type: 'checkbox',
        value: null
    }

    changeGroup(checked, that, e){

        let arr = this.state.value;
        if(checked && arr.indexOf(that.value) === -1){
            arr.push(that.value);
        }else{
            arr.splice(arr.indexOf(that.value), 1);
        }

        if(this.props.onChange){
            this.props.onChange(arr);
        }

        // 不受控组件
        if(this.props.defaultValue){
            this.setState({
                value: arr
            });
        }

    }

    // 受控组件
    componentWillMount() {
        if(this.props.defaultValue){
            this.setState({
                value: this.props.defaultValue
            });
        }

        if(this.props.value){
            this.setState({
                value: this.props.value
            });
        }
    }

    // 受控组件
    componentWillUpdate(nextProps, nextState) {
        if(nextProps.value !== this.props.value){
            this.setState({
                value: nextProps.value
            });
        }     
    }

    render(){

        let self = this;
        let {className, type, ...other} = this.props;
        let cName = ['mt-checkbox-group'];

        if(type === 'button'){
            cName.push('mt-checkbox-group-button');
        }

        let tmp = '';
        if(MT_IE9){
            tmp = new Date().getTime();
        }

        return <div className={cName.join(' ')}>
                    {
                        this.props.children.map(function(elem, index) {
                            let {children, checked, ...other} = elem.props;

                            let check = false;
                            if(self.state.value.indexOf(elem.props.value) !== -1){
                                check = true;
                            }
                            return <Checkbox onChange={self.changeGroup.bind(self)} checked={check || checked} {...other} key={index + tmp}>{elem.props.children}</Checkbox>;
                        })
                    }
                </div>;
    }
}

Checkbox.CheckboxGroup = CheckboxGroup;

// 主页
export default Checkbox;