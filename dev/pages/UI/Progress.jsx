'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Progress,Button} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            value : 0.5
        }
    }

    add(){
        let val = this.state.value;
        val+=0.1;
        if(val > 1){
            val = 1;
        }
        this.setState({
            value: val
        })
    }

    del(){
        let val = this.state.value;
        val-=0.1;
        if(val < 0){
            val = 0;
        }
        this.setState({
            value: val
        })
    }

    render(){
        return (
            <Panel header="Progress">
                <Progress fixed={0} value={this.state.value} strokeWidth={4}/>
                &nbsp;&nbsp;
                <Progress size={200} fixed={1} bgColor="#dcdcdc" barColor="#F00" value={this.state.value} strokeWidth={4}/>
                &nbsp;&nbsp;
                <Button type="info" onClick={this.add.bind(this)}>+</Button>
                &nbsp;
                <Button type="info" onClick={this.del.bind(this)}>-</Button>
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
                <td>fixed</td>
                <td>保留小数点的位数</td>
                <td>number</td>
                <td>1</td>
            </tr>
            <tr>
                <td>size</td>
                <td>圆的大小</td>
                <td>number</td>
                <td>100</td>
            </tr>
            <tr>
                <td>value</td>
                <td>默认值，参数 0 ~ 1</td>
                <td>float</td>
                <td>0</td>
            </tr>
            <tr>
                <td>strokeWidth</td>
                <td>边框的宽度</td>
                <td>number</td>
                <td>6</td>
            </tr>
            <tr>
                <td>bgColor</td>
                <td>边框的底色</td>
                <td>color</td>
                <td>#f3f3f3</td>
            </tr>
            <tr>
                <td>barColor</td>
                <td>边框颜色</td>
                <td>color</td>
                <td>#108ee9</td>
            </tr>
        </tbody>
    </table>
</div>
                <pre><code>
                {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Progress,Button} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            value : 0.5
        }
    }

    add(){
        let val = this.state.value;
        val+=0.1;
        if(val > 1){
            val = 1;
        }
        this.setState({
            value: val
        })
    }

    del(){
        let val = this.state.value;
        val-=0.1;
        if(val < 0){
            val = 0;
        }
        this.setState({
            value: val
        })
    }

    render(){
        return (
            <Panel header="Progress">
                <Progress fixed={0} value={this.state.value} strokeWidth={4}/>
                &nbsp;&nbsp;
                <Progress size={200} fixed={1} bgColor="#dcdcdc" barColor="#F00" value={this.state.value} strokeWidth={4}/>
                &nbsp;&nbsp;
                <Button type="info" onClick={this.add.bind(this)}>+</Button>
                &nbsp;
                <Button type="info" onClick={this.del.bind(this)}>-</Button>
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