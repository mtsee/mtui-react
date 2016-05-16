/**
* 自定义内容的弹窗插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'

const SliderActive = React.createClass({
    render() {
        return (
            <div ref="slider" style={{width:this.props.width}} className={"mt-slider-active mt-slider-active"+(this.props.color!=undefined?'-'+this.props.color:'')}>
              <div className="mt-slider-active-bar" style={{width:this.props.width*this.props.value}}></div>
            </div>
        );
    }
});

//配置信息
export default SliderActive;