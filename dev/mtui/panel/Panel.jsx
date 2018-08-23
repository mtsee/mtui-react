
import React, { Component } from 'react';

class Panel extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        size: '' // 默认, min
    }

    //
    render() {
        const { className, children, size, header, ...other } = this.props;
        let cName = [];
        if (size) {
            cName.push('mt-panel-' + size);
        } else {
            cName.push('mt-panel');
        }

        if (className) {
            cName.push(className);
        }

        return (
            <div {...other} className={cName.join(' ')}>
                <h3 className="mt-panel-h2">{this.props.header}</h3>
                <div className="mt-panel-box">
                    {children}
                </div>
            </div>
        );
    }
}

// 主页
export default Panel;