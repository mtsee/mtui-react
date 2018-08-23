'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import IndexHeader from '../Common/IndexHeader';

class Update extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index update clearfix">
                <IndexHeader />
                <div className="list">
                    <ul>
                        <li><i>2017-08-25</i> 修改了 Tabs 组件，key=index 的问题，这个问题会导致删除tab时的BUG，修改了日期年切换的BUG</li>
                        <li><i>2017-08-03</i> 修改了document.body.style = 'string' 的 BUG ，会导致谷歌4.4版本的兼容性问题</li>
                        <li><i>2017-07-17</i> 给tabs 添加 className 参数</li>
                        <li><i>2017-07-05</i> 添加了API说明。修改了callBack驼峰的命名标准，格式化了部分代码</li>
                        <li><i>2017-06-28</i> 添加了Input type="textarea" 的支持</li>
                        <li><i>2017-06-05</i> 修改了 utils/offset.jsx 里面的获取DOM的宽和高有误，导致弹窗定位不准确的问题</li>
                        <li><i>2017-05-24</i> 修改所有弹窗的componentDidUpdate数据更新方法，如果DOM不存在，就不更新数据，只在初次渲染后，才会去更新数据。</li>
                        <li><i>2017-05-22</i> 修改了日历组件 value 变化无效的问题。</li>
                        <li><i>2017-05-18</i> 修改了Button为 button属性的时候，宽度不能设置的bug, 给pagelist添加了 refresh 方法。用来刷新组件</li>
                        <li><i>2017-05-11</i> 修改了日历弹窗的超出window的定位，添加了日期插件range参数（格式：xxxx-xx-xx,xxxx-xx-xx）设置日期范围；修改了一些弹窗定位的BUG。修改了tabs设置activeIndex 不能自动刷新的BUG</li>
                        <li><i>2017-05-10</i> 所有弹窗的样式统一使用modalStyle，与之直接关联的样式依然使用style</li>
                        <li><i>2017-05-06</i> 修改一些BUG，添加了limit组件，限制尺寸</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Update;