
import React, { Component } from 'react';

// loading 占位
class LoadingBox extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        type: 'loading3', // 默认
        show: true
    }

    //
    render() {
        let cName = ['mt-loading', 'animated fadeIn'];

        if (this.props.bg) {
            cName.push('mt-loading-bg');
        }

        return (
            <div style={{ display: this.props.show ? 'block' : 'none' }} className={cName.join(' ')}>
                <div className="mt-loading-spin">
                    <i className={"iconfont icon-" + this.props.type}></i>
                </div>
                {this.props.info ? <div className="mt-loading-info">{this.props.info}</div> : null}
            </div>
        );
    }
}

//主页
export default LoadingBox;