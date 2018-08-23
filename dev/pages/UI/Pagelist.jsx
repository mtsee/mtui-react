'use strict';

import './style.scss';
import React, { Component } from 'react';
import {PageList, Input, Button, Grid} from '../../mtui/index';

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            total: 0,
            pageListKey: +new Date()
        };
        this.timer = null;

        this.refsPageList = null;
    }

    // 模拟 ajax 异步
    ajax = (current, refresh) => {
        console.log('分页回调 ajax 请求 current:', current);
        this.timer = setTimeout(() => {
            let total = 200;
            this.setState({
                total: total
            }, () => {
                if(refresh){
                    this.refsPageList.refresh();
                }
            });
        }, 100);
    }

    // 分页点击后执行
    callback = (obj) => {
        console.log(obj);
        // this.ajax(obj);
        this.ajax(obj.current);
    }

    onNewPage = () => {
        this.ajax(1, true);
        
    }

    componentWillUnmount() {
        if(this.timer){
            clearTimeout(this.timer); 
        }
    }

    componentDidMount() {
        this.ajax(1);
    }

    toPage(e){
        this.refsPageList.toPage(this.refs.num.getValue());
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">分页</h3>
                <div className="mt-panel-box">
                    <Grid width='2/2'>
                        <a onClick={ this.onNewPage }>切换</a>&nbsp;&nbsp;
                        <PageList ref={ (c) => { this.refsPageList = c; }} current={1} pageSize={10} callback={this.callback} total={this.state.total}/>
                        &nbsp;<Input style={{width: 50}} defaultValue="" ref="num" size="xm" type="text" />
                        &nbsp;<Button size="sm" onClick={this.toPage.bind(this)}>跳转</Button>
                    </Grid>
                    <Grid width='1/1' className="code">
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
                <td>size</td>
                <td>中间预留页码个数</td>
                <td>number</td>
                <td>3</td>
            </tr>
			<tr>
                <td>pageSize</td>
                <td>每页显示多少条数据</td>
                <td>number</td>
                <td>10</td>
            </tr>
            <tr>
                <td>total</td>
                <td>总共有多少条数据，这里必须是异步设置total的，同步设置无效</td>
                <td>number</td>
                <td>0</td>
            </tr>
            <tr>
                <td>current</td>
                <td>默认选中页码</td>
                <td>number</td>
                <td>1</td>
            </tr>
            <tr>
                <td>callback</td>
                <td>选择页码后的回调函数。callback(current, total, pageSize)</td>
                <td>function</td>
                <td>null</td>
            </tr>
            <tr>
                <td>toPage()</td>
                <td>这个方法不重新渲染组件进行页面的自动跳转，使用说明： this.refs.pageList.toPage(current)</td>
                <td>function</td>
                <td>null</td>
            </tr>
            <tr>
                <td>refresh()</td>
                <td>这个方法是手动刷新组件的方法。传入 一个 current 刷新后，默认跳转到第几页。可不填，默认是第一页, 使用说明： this.refs.pageList.refresh(current)</td>
                <td>function</td>
                <td>null</td>
            </tr>
        </tbody>
    </table>
</div>
<pre>
<code>
{`
// pagelist 提供了两个方法
// @param toPage：这个方法不重新渲染组件进行页面的自动跳转
// @param refresh: 这个方法是刷新组件的方法。传入 一个 current 刷新后，默认跳转到第几页。可不填，默认是第一页

'use strict';

import './style.scss';
import React, { Component } from 'react';
import {PageList, Input, Button, Grid} from '../../mtui/index';

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            total: 0,
            pageListKey: +new Date()
        };
        this.timer = null;

        this.refsPageList = null;
    }

    // 模拟 ajax 异步
    ajax = (current, refresh) => {
        console.log('分页回调 ajax 请求 current:', current);
        this.timer = setTimeout(() => {
            let total = 200;
            this.setState({
                total: total
            }, () => {
                if(refresh){
                    this.refsPageList.refresh();
                }
            });
        }, 100);
    }

    // 分页点击后执行
    callback = (obj) => {
        console.log(obj);
        // this.ajax(obj);
        this.ajax(obj.current);
    }

    onNewPage = () => {
        this.ajax(1, true);
        
    }

    componentWillUnmount() {
        if(this.timer){
            clearTimeout(this.timer); 
        }
    }

    componentDidMount() {
        this.ajax(1);
    }

    toPage(e){
        this.refsPageList.toPage(this.refs.num.getValue());
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">分页</h3>
                <div className="mt-panel-box">
                    <Grid width='2/2'>
                        <a onClick={ this.onNewPage }>切换</a>&nbsp;&nbsp;
                        <PageList ref={ (c) => { this.refsPageList = c; }} current={1} pageSize={10} callback={this.callback} total={this.state.total}/>
                        &nbsp;<Input style={{width: 50}} defaultValue="" ref="num" size="xm" type="text" />
                        &nbsp;<Button size="sm" onClick={this.toPage.bind(this)}>跳转</Button>
                    </Grid>
                </div>
            </div>
        );
    }

    //
}

//主页
export default UI;
`}
</code>
</pre>                      
                    </Grid>
                </div>
            </div>
        );
    }

    //
}

//主页
export default UI;