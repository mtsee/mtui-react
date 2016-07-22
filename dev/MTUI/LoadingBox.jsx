/**
* 自定义内容的弹窗插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'

const LoadingBox = React.createClass({
    render() {
        var style = {
            height : this.props.height,
            display: this.props.show?'block':'none'
        };
        return (
            <div className="mt-loading-box" style={style}>
              <div className="mt-loading-cricle">Loading</div>
            </div>
        );
    }
});

LoadingBox.defaultProps = {
    show : true
}

//配置信息
export default LoadingBox;