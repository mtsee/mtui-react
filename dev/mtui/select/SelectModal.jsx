
import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../utils/toArray';
import assign from '../utils/assign';

class SelectModal extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            cName: ''
        };
        this.num = 0;
    }

    // 选择option
    clickOption(elem, e){
        e.target.value = elem.props;
        let obj = {
            target: e.target
        };
        obj.target['value'] = elem.props.value;
        obj.target['childrens'] = elem.props.children;
        this.props.showOrHide(true, elem.props, null, obj);
    }

    // 设置值
    componentDidUpdate(prevProps,  prevState) {
        if(prevProps.show !== this.props.show){
            let cName = ' mt-select-animate';
            let self = this;
            setTimeout(function(){
                self.setState({
                    cName: self.props.show ? cName : ''
                });
            }, 10);
        }
    }

    render(){
        let set = this.props.getPlace();
        let modalStyle = this.props.modalStyle || {};
        if(set){
            var {height, left, top, width} = set;
            var style = assign([{
                display: this.props.show ? 'block' : 'none'
            }, {
                left: left, 
                top: top + height
            }, {
                width: this.props.modalWidth
            }, {
                height: 'auto'
            }, modalStyle]);
        }
        var self = this;
        var cName = ['mt-select', this.state.cName]; // mt-select-ie10

        if(!MT_IE9){
            cName.push('mt-select-ie10');
        }

        let child = toArray(this.props.children);

        return <div className={cName.join(' ')} style={style} id={this.props.mid}>
                    {
                        child.map(function(elem,  index) {
                            return <div onClick={self.clickOption.bind(self,  elem)} key={index + +new Date()} className="mt-select-option">{elem.props.children}</div>;
                        })
                    }
               </div>;
    }
}

// 主页
export default SelectModal;