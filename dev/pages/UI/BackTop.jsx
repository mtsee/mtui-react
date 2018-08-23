'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Button, Tip, BackTop} from '../../mtui/index';

class Dom extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">backtop 返回顶部</h3>
                <br/>
                <div>使劲往下滑</div>
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
                                <td>top</td>
                                <td>滚动到顶部的距离</td>
                                <td>number</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>time</td>
                                <td>滚动动画时间，单位毫秒ms</td>
                                <td>number</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>callBack</td>
                                <td>动画执行完成后的回调函数</td>
                                <td>function</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>dom</td>
                                <td>按钮DOM，null的时候是 {'<a className="mt-backtop">Top</a>'}</td>
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
import {Grid,Button,Tip, BackTop} from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">backtop 返回顶部</h3>
                  <div className="mt-panel-box">
                      <BackTop time={500} top={100} dom={<a>back top</a>}/>
                      <BackTop time={500} top={0} visibilityHeight={200}/>
                  </div>
            </div>
        );
    }
}
`}
</code>
</pre>
                  </div>
                  <div style={{height:800}}></div>
                  <div className="mt-panel-box">
                      <BackTop time={500} top={100} dom={<a>back top</a>}/>
                      <BackTop time={500} top={0} visibilityHeight={200}/>
                  </div>
            </div>
        );
    }
}

//主页
export default Dom;