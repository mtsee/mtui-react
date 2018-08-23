'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Dropdown,Panel} from '../../mtui/index'

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            name: 10
        };
    }

    closeBack(){
        console.log('close');
    }

    showBack(){
        const _this = this;
        console.log('show');
        _this.setState({
            name: ++this.state.name
        });
    }

    render(){
        return (

            <Panel header="Dropdown 弹窗">
                <Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} style={{width: 200, height: 200}} visible={false} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="hover">
                    <Panel header="弹窗">
                        {this.state.name}
                    </Panel>
                </Dropdown>
                &nbsp;
                &nbsp;
                <Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} style={{width: 200, height: 200}}>
                    <Panel header="弹窗">
                        {this.state.name}
                    </Panel>
                </Dropdown>

                &nbsp;
                &nbsp;

                <Dropdown btn={<a className="mt-btn mt-btn-info"><i>下拉框click</i></a>} style={{width: 100, height: 100}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="click">
                    <Panel size="min" header="弹窗2">
                        {this.state.name}
                    </Panel>
                </Dropdown>

<div>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style 有效
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
                <td>btn</td>
                <td>按钮组件</td>
                <td>Component</td>
                <td>{'<a>dropdown</a>'}</td>
            </tr>
            <tr>
                <td>showBack</td>
                <td>显示前的回调函数</td>
                <td>function</td>
                <td></td>
            </tr>
            <tr>
                <td>closeBack</td>
                <td>关闭前的回调函数</td>
                <td>function</td>
                <td></td>
            </tr>
            <tr>
                <td>trigger</td>
                <td>触发方式，可用参数 hover/click</td>
                <td>string</td>
                <td>hover</td>
            </tr>
            <tr>
                <td>visible</td>
                <td>默认显示状态，true/false</td>
                <td>bool</td>
                <td>false</td>
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
import {Grid,Button,Dropdown,Panel} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            name : 10
        }
    }

    closeBack(){
        console.log('close')
    }

    showBack(){
        const _this = this;
        console.log('show')
        _this.setState({
            name: ++this.state.name
        })
    }

    render(){
        return (
            <Panel header="Dropdown 弹窗">
                <Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} style={{width:200, height:200}} visible={false} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="hover">
                    <Panel header="弹窗">
                        {this.state.name}
                    </Panel>
                </Dropdown>
                &nbsp;
                &nbsp;
                <Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} style={{width: 200, height: 200}}>
                    <Panel header="弹窗">
                        {this.state.name}
                    </Panel>
                </Dropdown>

                &nbsp;
                &nbsp;

                <Dropdown btn={<a className="mt-btn mt-btn-info"><i>下拉框click</i></a>} style={{width:100, height:100}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="click">
                    <Panel size="min" header="弹窗2">
                        {this.state.name}
                    </Panel>
                </Dropdown>
            </Panel>
        );
    }
}

//主页
export default UI;
`}
</code>
</pre>
</div>

            </Panel>
        );
    }
}

//主页
export default UI;