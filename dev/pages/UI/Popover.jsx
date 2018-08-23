'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Button,Popover} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            show: false
        }
    }

    onClickHandler(data,e){
        console.log('点击了button的click',data);

        this.setState({
            show: !this.state.show
        });
    }

    render(){
        return (
            <Panel header="Popover">
                <Popover show={this.state.show} trigger="click" content={'就是一个小提示！'} place="top">
                    <a>click弹窗在上</a>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover show={this.state.show} trigger="click" content={'就是一个小提示！'} place="top">
                    <Button type="info">click弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='bottom'>
                    <Button onClick={() => this.onClickHandler(1) } type="warning">click弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='left'>
                    <Button type="success">click弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">click弹窗在右</Button>
                </Popover>
                <br/>
                <br/>
                <br/>
                <br/>
                <Popover trigger="hover" content={'就是一个小提示！'} place="top">
                    <Button type="info">hover弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='bottom'>
                    <Button type="warning">hover弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='left'>
                    <Button type="success">hover弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">hover弹窗在右</Button>
                </Popover>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style 等默认属性继承DIV标签默认
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
                <td>trigger</td>
                <td>交互方式，参数：hover,click</td>
                <td>string</td>
                <td>hover</td>
            </tr>
            <tr>
                <td>content</td>
                <td>提示框里面的内容</td>
                <td>Component</td>
                <td>null</td>
            </tr>
            <tr>
                <td>place</td>
                <td>提示框的位置，参数：top, left, right, bottom</td>
                <td>string</td>
                <td>top</td>
            </tr>
            <tr>
                <td>show</td>
                <td>提示框默认显示状态， 参数 true/false</td>
                <td>bool</td>
                <td>false</td>
            </tr>
        </tbody>
    </table>
</div>
                <pre><code>
                {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Button,Popover} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    onClickHandler(data,e){
        console.log('点击了button的click',data)
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return (
            <Panel header="Popover">
                <Popover show={this.state.show} trigger="click" content={'就是一个小提示！'} place="top">
                    <Button type="info">click弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='bottom'>
                    <Button onClick={() => this.onClickHandler(1) } type="warning">click弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='left'>
                    <Button type="success">click弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">click弹窗在右</Button>
                </Popover>
                <br/>
                <br/>
                <br/>
                <br/>
                <Popover trigger="hover" content={'就是一个小提示！'} place="top">
                    <Button type="info">hover弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='bottom'>
                    <Button type="warning">hover弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='left'>
                    <Button type="success">hover弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">hover弹窗在右</Button>
                </Popover>
            </Panel>    
        );
    }
}
                `}
                </code></pre>
            </Panel>    
        );
    }
}

//主页
export default UI;