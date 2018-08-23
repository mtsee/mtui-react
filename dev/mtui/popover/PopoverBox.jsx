
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {position} from '../utils/offset';
import assign from '../utils/assign';

class PopoverBox extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            show: false,
            style: {}
        };
        this.refPopover = null;
    }

    closeModal(){
        this.props.showOrHide(true);
    }

    // 设置place
    setStyle(){
        let obj = {};
        let btn = this.props.getPlace();
        let popover = position(this.refPopover);
        let wid = 8; // 箭头的尺寸
        // console.log('popover',popover)
        if(this.props.place === 'top'){
            obj.left = btn.left + (btn.width - popover.width) / 2;
            obj.top = btn.top - popover.height - wid;
        }else if(this.props.place === 'left'){
            obj.left = btn.left - popover.width - wid;
            obj.top = btn.top + (btn.height - popover.height) / 2;
        }else if(this.props.place === 'right'){
            obj.left = btn.left + btn.width + wid;
            obj.top = btn.top + (btn.height - popover.height) / 2;
        }else if(this.props.place === 'bottom'){
            obj.left = btn.left + (btn.width - popover.width) / 2;
            obj.top = btn.top + btn.height + wid;
        }
        this.setState({
            style: obj,
            show: this.props.show
        });
    }

    showOrHide(mark){
        this.setState({
            show: mark
        }, () => {
            this.setStyle();
        });
    }

    componentDidMount() {
        this.showOrHide(this.props.show);
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.show !== this.props.show){
            this.showOrHide(nextProps.show);
        }     
    }

    render(){
        var style = assign([
            this.state.style, 
            {display: this.state.show ? 'block' : 'none'}, 
            this.props.style || {}]);

        var cName = ['mt-popover', 'animated bounceIn'];
        if(this.props.place){
            cName.push('mt-popover-' + this.props.place);
        }
        if(this.props.className){
            cName.push(this.props.className);
        }

        return <div id={this.props.mid} ref={ c => { this.refPopover = c;}} className={cName.join(' ')} style={style}>
                    {this.props.content}
                    <div className="mt-popover-arrow"></div>
               </div>;
    }
}

// 主页
export default PopoverBox;