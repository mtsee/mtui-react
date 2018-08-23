
import React, { Component } from 'react';

class SliderBar extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        value: 0,
        width: 100
    }

    render() {
        const { className, type, ...other } = this.props;
        let cName = ['mt-sliderbar-active'];
        if (className) {
            cName.push(className);
        }
        if (this.props.type) {
            cName.push('mt-sliderbar-active-' + this.props.type);
        } else {
            cName.push('mt-sliderbar-active');
        }
        return (
            <div style={{ width: this.props.width }} className={cName.join(' ')}>
                <div className="mt-sliderbar-active-bar" style={{ width: this.props.width * this.props.value }}></div>
            </div>
        );
    }
}

// 主页
export default SliderBar;