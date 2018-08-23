
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import assign from '../utils/assign';
import { outWindow } from '../utils/outWindow';

class DropModal extends Component {

    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        let set = ( this.props.getPlace ? this.props.getPlace() : null );
        if(set){
            var {height, left, top, width} = set;

            // 设置 left
            let out = outWindow(width, height, top, left, {
                width: this.props.style.width || this.props.width,
                height: this.props.style.height || 0
            });

            var style = assign([{
                display: this.props.show ? 'block' : 'none'
            }, {
                left: out.left,
                top: out.top
            }, this.props.style || {}]);
        }

        let cName = ['mt-dropdown'];
        if( this.props.className ){
            cName.push(this.props.className);
        }
        
        return <div className={cName.join(' ')} style={style} id={this.props.mid}>
                    {this.props.children}
               </div>;
    }
}

// 主页
export default DropModal;