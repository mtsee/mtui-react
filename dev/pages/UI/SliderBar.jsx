'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Button, Panel, SliderBar } from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor(props) {
        super(props);
    }

    onChange(data) {
        console.log(data)
    }

    sliderEnd(data) {
        console.log(data)
    }

    render() {
        return (
            <Panel header="sliderBar">
                <SliderBar type="danger" width={300} value={0.5} /> <br /><br />
                <SliderBar type="success" width={300} value={0.6} /> <br /><br />
                <SliderBar type="default" width={300} value={0.7} /> <br /><br />
                <SliderBar type="primary" width={300} value={0.8} /> <br /><br />
                <SliderBar type="info" width={300} value={0.9} /> <br /><br />
                <div>
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
                <td>value</td>
                <td>0~1 百分比值</td>
                <td>number</td>
                <td>0</td>
            </tr>
            <tr>
                <td>width</td>
                <td>进度条的宽度</td>
                <td>number</td>
                <td>100</td>
            </tr>
        </tbody>
    </table>
</div>
                    <pre>
                        <code>
                            {`

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,SliderBar} from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <Panel header="slider">
                <SliderBar type="danger" width={300} value={0.5} /> <br/><br/>
                <SliderBar type="success" width={300} value={0.6} /> <br/><br/>
                <SliderBar type="default" width={300} value={0.7} /> <br/><br/>
                <SliderBar type="primary" width={300} value={0.8} /> <br/><br/>
                <SliderBar type="info" width={300} value={0.9} /> <br/><br/>
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