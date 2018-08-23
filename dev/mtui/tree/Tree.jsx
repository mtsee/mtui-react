
import './style.scss';
import React, { Component } from 'react';

class Tree extends Component {

    static defaultProps = {
        show: true
    }

    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            show: props.show
        };
        this.refBody = null;
    }

    clickHeader = (e) => {
        this.setState({
            show: !this.state.show
        });
    }

    //
    render(){
        const {className, children, header, show, ...other} = this.props;
        let cName = ['mt-tree'];
        if(className){
            cName.push(className);
        }
        return (
            <div {...other} className={cName.join(' ')}>
                { header ? <div className="mt-tree-header" onClick={ this.clickHeader}>
                    { !this.state.show ? <i className="iconfont icon-you"></i> : <i className="iconfont icon-xia"></i> }{header}</div> : null 
                }
                <div className="mt-tree-body" style={{display: this.state.show ? 'block' : 'none'}}>
                    {children}
                </div>
            </div>	
        );
    }
}

class TreeChild extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return <div className="mt-tree-child">{this.props.children}</div>;
    }
}

Tree.TreeChild = TreeChild;

// 主页
export default Tree;