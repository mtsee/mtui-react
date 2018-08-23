
import React, { Component } from 'react';

class Error extends Component {

    render() {
        const { text } = this.props;
        return <div className="mt-error">error: (组件使用方法错误)：{text}</div>
    }
}

//主页
export default Error;