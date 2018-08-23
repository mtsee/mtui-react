
import React, { Component } from 'react';

class CollapseItem extends Component {

    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        let { className, children, header, active, Itemclick, show, ...other } = this.props;
        let cName = ['mt-collapse-item'];
        if (className) {
            cName.push(className);
        }
        if (active) {
            cName.push('mt-collapse-active');
        }
        return (
            <div {...other} className={cName.join(' ')}>
                <div onClick={this.props.Itemclick.bind(this)} className="mt-collapse-header">
                    <i className="iconfont icon-arrowr"></i>
                    {header}
                </div>
                <div className="mt-collapse-content">
                    {children}
                </div>
            </div>
        );
    }
}

// 主页
export default CollapseItem;