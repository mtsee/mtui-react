'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Button} from '../../mtui/index';

class Dom extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">按钮</h3>
                  <div className="mt-panel-box">
                      <Grid width="1/2" className="btns">
                          <Button type="primary" block={true}>block:true</Button><br/>
                          <Button type="success">block:false</Button>
                          <Button className="btnw" dom="button" type="success">button</Button>
                      </Grid>
                      <Grid width="2/2" className="btns">
                          <Button>default</Button>
                          <Button type="primary">primary</Button>
                          <Button type="success">success</Button>
                          <Button type="info">info</Button>
                          <Button type="warning">warning</Button>
                          <Button type="danger">danger</Button>
                      </Grid>
                      <Grid width="2/2" className="btns">
                          <Button size="lg" type="info">大按钮</Button>
                          <Button type="info">正常按钮</Button>
                          <Button size="sm" type="info">小按钮</Button>
                          <Button size="xs" type="info">超小按钮</Button>
                    </Grid>
                    <Grid width="2/2" className="btns">
                          <Button dom="a" type="success">按钮</Button>
                          <Button disabled={true} type="warning">按钮</Button>
                      </Grid>
                      <Grid width="2/2" className="btns">
                          <Button type="success" prefix={<i className="iconfont icon-loading2 mt-animate-rotate"></i>}>按钮</Button>
                          <Button type="success" suffix={<i className="iconfont icon-loading1 mt-animate-rotate"></i>}>按钮</Button>
                          <Button disabled={true} type="warning">按钮</Button>
                      </Grid>
                      <Grid>
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
                <td>按钮尺寸，可用参数 lg,sm,xs 或者不添加</td>
                <td>string</td>
                <td>null</td>
            </tr>
            <tr>
                <td>type</td>
                <td>按钮样式，可用参数 default,primary,success,info,warning,danger</td>
                <td>string</td>
                <td>default</td>
            </tr>
            <tr>
                <td>block</td>
                <td>按钮是否宽度100%，参数 true/false</td>
                <td>bool</td>
                <td>false</td>
            </tr>
            <tr>
                <td>dom</td>
                <td>按钮DOM标签，参数 a, div, input, button, span ....</td>
                <td>string</td>
                <td>a</td>
            </tr>
            <tr>
                <td>htmlType</td>
                <td>当dom为input/button的时候，设置type参数，参数： submit, button</td>
                <td>string</td>
                <td>a</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>按钮是否可用，参数 false/true</td>
                <td>bool</td>
                <td>false</td>
            </tr>
            <tr>
                <td>prefix</td>
                <td>前面的图标，参数可以是一个字体图标{'<i className="iconfont ico-user"></i>'}</td>
                <td>Component</td>
                <td>null</td>
            </tr>
            <tr>
                <td>suffix</td>
                <td>后面的图标，参数可以是一个字体图标{'<i className="iconfont ico-search"></i>'}</td>
                <td>Component</td>
                <td>null</td>
            </tr>
        </tbody>
    </table>
</div>
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Grid,Button} from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">按钮</h3>
                  <div className="mt-panel-box">
                      <Grid width="1/2" className="btns">
                          <Button type="primary" block={true}>block:true</Button><br/>
                          <Button type="success">block:false</Button>
                      </Grid>
                      <Grid width="2/2" className="btns">
                          <Button>default</Button>
                          <Button type="primary">primary</Button>
                          <Button type="success">success</Button>
                          <Button type="info">info</Button>
                          <Button type="warning">warning</Button>
                          <Button type="danger">danger</Button>
                      </Grid>
                      <Grid width="2/2" className="btns">
                          <Button size="lg" type="info">大按钮</Button>
                          <Button type="info">正常按钮</Button>
                          <Button size="sm" type="info">小按钮</Button>
                          <Button size="xs" type="info">超小按钮</Button>
                    </Grid>
                    <Grid width="2/2" className="btns">
                          <Button dom="div" type="success">按钮</Button>
                          <Button disabled={true} type="warning">按钮</Button>
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