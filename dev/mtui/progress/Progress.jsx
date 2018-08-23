
import React, { Component } from 'react';

class Progress extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        size: 100, // 默认, min
        type: 'circle', // circle
        value: 0,
        strokeWidth: 6,
        fixed: 1,
        bgColor: '#f3f3f3',
        barColor: '#108ee9'
    }

    //
    render() {
        const { className, children, size, type, style, fixed, bgColor, barColor, strokeWidth, value, ...other } = this.props;
        let cName = ['mt-progress'];
        let styles = {};
        if (className) {
            cName.push(className);
        }
        if (type) {
            cName.push('mt-progress-circle');
        }
        if (size) {
            styles.width = size;
        }
        styles = Object.assign(style || {}, styles);
        let val = (value * 100).toFixed(fixed);
        return (
            <div {...other} style={styles} className={cName.join(' ')}>
                <div className="mt-progress-text">{val === '0' ? 0 : val + '%'}</div>
                <svg viewBox="0 0 100 100">
                    <path className="ant-progress-circle-trail" d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                        stroke={bgColor}
                        strokeWidth={strokeWidth}
                        fillOpacity="0"></path>
                    <path className="ant-progress-circle-path" d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                        strokeLinecap="round"
                        stroke={barColor}
                        strokeWidth={strokeWidth}
                        fillOpacity="0"
                        style={{
                            strokeDasharray: '295.31px, 295.31px',
                            strokeDashoffset: 295.31 * (1 - this.props.value),
                            transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease'
                        }}></path>
                </svg>
            </div>
        );
    }
}

// 主页
export default Progress;