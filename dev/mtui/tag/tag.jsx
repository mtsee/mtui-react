
import React, { Component } from 'react';

class Tag extends Component {

    static defaultProps = {
        size: '', // 默认, min
        type: 'default'
    }

    // 构造函数
    constructor(props) {
        super(props);
    }

    //
    render() {
        const { className, children, size, type, ...other } = this.props;
        let cName = [];
        if (size) {
            cName.push('mt-tag-' + size);
        } else {
            cName.push('mt-tag');
        }
        if (className) {
            cName.push(className);
        }
        cName.push('mt-btn-' + type);

        return (
            <div {...other} className={cName.join(' ')}>
                {children}
            </div>
        );
    }
}

// 主页
export default Tag;