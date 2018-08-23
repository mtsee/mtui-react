'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Button, Panel, Slider } from '../../mtui/index';

class Dom extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            val: 300
        };
    }

    onChange(data) {
        console.log(data);
        this.setState({
            val: parseInt(data, 10)
        });
    }

    sliderEnd(data) {
        console.log(data);
    }

    render() {
        return (
            <Panel header="slider">
                <Slider sliderEnd={this.sliderEnd.bind(this)}
                    onChange={this.onChange.bind(this)}
                    width={300}
                    defaultValue={300}
                    minValue={200}
                    maxValue={1000} />

                {this.state.val}

<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style 继承原来的标签默认
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
                <td>size</td>
                <td>尺寸，可用参数 nm,lg,sm,xs 或者不添加</td>
                <td>string</td>
                <td>nm</td>
            </tr>
            <tr>
                <td>maxValue</td>
                <td>滑动范围的最大值</td>
                <td>number</td>
                <td>100</td>
            </tr>
            <tr>
                <td>minValue</td>
                <td>滑动范围的最小值</td>
                <td>number</td>
                <td>0</td>
            </tr>
            <tr>
                <td>width</td>
                <td>滑动条的宽度</td>
                <td>number</td>
                <td>100</td>
            </tr>
        </tbody>
    </table>
</div>
                <div>
                    <pre>
                        <code>
                            {`

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,Slider} from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    onChange(data){
        console.log(data)
    }

    sliderEnd(data){
        console.log(data)
    }

    render(){
        return (
            <Panel header="slider">
                <Slider sliderEnd={this.sliderEnd.bind(this)} 
                    onChange={this.onChange.bind(this)} 
                    width={300} 
                    defaultValue={150} 
                    minValue={100} 
                    maxValue={200} />
            </Panel>
        );
    }
}
`}
                        </code>
                    </pre>
                </div>
            </Panel>
        );
    }
}

//主页
export default Dom;