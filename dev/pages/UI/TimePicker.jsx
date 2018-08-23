'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, TimePicker} from '../../mtui/index';

class Dom extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            time: ''
        };
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">TIP 提示框</h3>
                  <div className="mt-panel-box">
                      <Grid width="2/2" className="btns">
                          <TimePicker value={this.state.time} onChange={
                              (time) => this.setState({time})
                          }/>
                      </Grid>
                      <Grid className="code">
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Tip} from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);

        this.state = {
            time: ''
        }
    }

    render(){
        return (
            <div>
                <TimePicker 
                value={this.state.time}
                onChange={
                    (time) => this.setState({time})
                }/>
            </div>
        );
    }
}
`}
</code>
</pre>
                      </Grid>

                      <Grid width="2/2">
                      <div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        没有tips，LOL
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
                <td>onChange</td>
                <td>点击确定后的时间值 function(time)</td>
                <td>function</td>
                <td>function(){'{return;}'}</td>
            </tr>
            <tr>
                <td>value</td>
                <td>受控组件的值,时间格式为：hh:mm:ss</td>
                <td>string</td>
                <td>''</td>
            </tr>
            <tr>
                <td>width</td>
                <td>Input组件占的宽度</td>
                <td>Number</td>
                <td>240</td>
            </tr>
            <tr>
                <td>placeholder</td>
                <td>Input的placeholder</td>
                <td>string</td>
                <td>'时间'</td>
            </tr>
            <tr>
                <td>itemsToshow</td>
                <td>时间选择时，显示的选择项个数</td>
                <td>Number</td>
                <td>7</td>
            </tr>
            <tr>
                <td>inputClassName</td>
                <td>input框的class</td>
                <td>function</td>
                <td>''</td>
            </tr>
            <tr>
                <td>modalClassName</td>
                <td>时间组件弹窗的class</td>
                <td>string</td>
                <td>''</td>
            </tr>
            
        </tbody>
    </table>
</div>
</Grid>

                  </div>
            </div>
        );
    }
}

//主页
export default Dom;