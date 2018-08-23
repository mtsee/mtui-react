
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import assign from '../utils/assign';

class ModalBox extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            show: false,
            className: ''
        };
        this.timer = null;
    }

    closeModal(){
        this.props.showOrHide(true);
    }

    componentWillMount() {
        this.setState({
            show: this.props.show,
            className: 'animated zoomIn ' + this.props.className
        });
    }

    // 开启关闭动画
    componentWillUpdate(nextProps, nextState) {
        if( nextProps.show !== this.props.show ) {
            if( nextProps.show ){
                this.setState({
                    className: 'animated zoomIn ' + nextProps.className,
                    show: nextProps.show
                });
            }else {
                this.setState({
                    className: 'animated zoomOut ' + nextProps.className
                });
                this.timer = setTimeout( () => {
                    this.setState({
                        show: nextProps.show
                    });
                }, 600);
            }
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render(){
        var {height, width} = this.props.style;
        var style = assign([{
            marginLeft: - (width || 600) / 2,
            marginTop: - (height || 400) / 2
        }, this.props.style || {}]);

        let cName = ['mt-modal'];
        if(this.props.className) {
            cName.push(this.props.className);
        }
        
        return <div className={cName.join(' ')} id={this.props.mid} 
                    style={{
                        display: this.state.show ? 'block' : 'none', 
                        zIndex: this.props.zIndex || 1000 }
                    }>
                    <div className={'mt-modal-box ' + this.state.className} style={style}>
                        <a className="mt-modal-close" onClick={this.closeModal.bind(this)}><i className="iconfont icon-close"></i></a>
                        {this.props.children}
                    </div>
               </div>;
    }
}

// 主页
export default ModalBox;