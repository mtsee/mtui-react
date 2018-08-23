'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,Swiper} from '../../mtui/index'

const SwiperItem = Swiper;

class Dom extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    changeback(a){
        console.log(a);
    }

    render(){
        return (
            <Panel header="Swiper">
                <Swiper autoPlay={3000} button={true} style={{width:600}} activeIndex="1" animate="move" changeback={this.changeback.bind(this)}>
                    <SwiperItem><img src="/assets/imgs/p1.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p2.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p3.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p4.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p5.jpg" /></SwiperItem>
                </Swiper>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style 继承DOM标签默认
    </p>
    <table className="mt-table mt-table-hover mt-table-striped mt-table-bordered">
        <thead>
            <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>autoPlay</td>
                <td>自动播放时间</td>
                <td>number</td>
                <td>3000</td>
            </tr>
			<tr>
                <td>button</td>
                <td>是否显示切换按钮</td>
                <td>bool</td>
                <td>true</td>
            </tr>
            <tr>
                <td>activeIndex</td>
                <td>默认选中第几页</td>
                <td>number</td>
                <td>1</td>
            </tr>
            <tr>
                <td>animate</td>
                <td>切换动画，参数：move， fade</td>
                <td>string</td>
                <td>move</td>
            </tr>
            <tr>
                <td>changeback</td>
                <td>切换动画后，执行的回调函数 callback(index)</td>
                <td>function</td>
                <td>null</td>
            </tr>
        </tbody>
    </table>
</div>
                <pre>
                <code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,Swiper} from '../../mtui/index'

const SwiperItem = Swiper;

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    changeback(a){
        console.log(a)
    }

    render(){
        return (
            <Panel header="Swiper">
                <Swiper autoPlay={5000} button={true} style={{width:600}} activeIndex='1' animate='move' changeback={this.changeback.bind(this)}>
                    <SwiperItem><img src="/assets/imgs/p1.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p2.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p3.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p4.jpg" /></SwiperItem>
                    <SwiperItem><img src="/assets/imgs/p5.jpg" /></SwiperItem>
                </Swiper>
            </Panel>
        );
    }
}
`}
                </code>
                </pre>
            </Panel>
        );
    }
}

//主页
export default Dom;