
import React, { Component } from 'react';
import Checkbox from './Checkbox';

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

// 主页
export default CheckboxGroup;