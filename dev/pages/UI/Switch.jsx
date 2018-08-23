'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Switch, Button} from '../../mtui/index';

class Dom extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            val: true
        };
    }

    onChange(data){
        console.log(data);//
    }

    onClick(){
        this.setState({
            val: !this.state.val
        });
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">switch</h3>
                  <div className="mt-panel-box">
                    <Grid width="1/1">
                        默认值true<Switch defaultValue={this.state.val} size="lg" onChange={this.onChange}/> &nbsp;
                        默认值false<Switch defaultValue={false} onChange={this.onChange}/> &nbsp;
                        disabled=true<Switch disabled={true} onChange={this.onChange}/> &nbsp;
                        size="sm"<Switch size="sm" onChange={this.onChange}/> &nbsp;
                        size="xs"<Switch size="xs" onChange={this.onChange}/> &nbsp;

                        <Button type="info" onClick={this.onClick.bind(this)}>控制</Button>

                      </Grid>
                      <Grid width="1/1">
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
                <td>disabled</td>
                <td>按钮是否可用，参数 false/true</td>
                <td>bool</td>
                <td>false</td>
            </tr>
            <tr>
                <td>defaultValue</td>
                <td>当前的按钮状态</td>
                <td>bool</td>
                <td>false</td>
            </tr>
        </tbody>
    </table>
</div>
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Grid,Switch} from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            val : true
        }
    }

    onChange(data){
        console.log(data) //
    }

    onClick(){
        this.setState({
            val: !this.state.val
        })
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">switch</h3>
                  <div className="mt-panel-box">
                    <Grid width="1/1">
                        默认值true<Switch defaultValue={this.state.val} size="lg" onChange={this.onChange}/> &nbsp;
                        默认值false<Switch defaultValue={false} onChange={this.onChange}/> &nbsp;
                        disabled=true<Switch disabled={true} onChange={this.onChange}/> &nbsp;
                        size="sm"<Switch size="sm" onChange={this.onChange}/> &nbsp;
                        size="xs"<Switch size="xs" onChange={this.onChange}/> &nbsp;

                        <Button type="info" onClick={this.onClick.bind(this)}>控制</Button>

                      </Grid>
                  </div>
            </div>
        );
    }
}

`}
</code>
</pre>
                      </Grid>
                  </div>
            </div>
        );
    }
}

//主页
export default Dom;