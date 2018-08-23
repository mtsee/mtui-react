'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Modal, Grid, Button, DatePicker, Popover} from '../../mtui/index'

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            name: '111',
            arr: [0, 0, 0]
        };
        this.modalID2 = null;
    }

    addArr = () => {
        this.state.arr.push(0);
        this.setState({
            arr: this.state.arr
        });
    }

    showBack() {
        console.log('弹窗开启，2秒后，自动变化值！');
        var _this = this;
        setTimeout(function(){
            _this.setState({
                name: '2222'
            });
        }, 2000);
    }

    closeBack(){
        console.log('弹窗关闭');
    }

    showOrHide(){
        this.modalID2.showModal(true);
    }

    render(){
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">Modal弹窗</div>
                <div className="mt-panel-box">
                    <Modal btn={<a className="mt-btn mt-btn-success"><i>弹窗</i></a>} modalClassName="animated bounceInDown" style={{width:200, height:180}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2">标题</div>
                            <div className="mt-panel-box">{this.state.name}内容...</div>
                        </div>
                    </Modal>
                    &nbsp;
                     <Modal ref={(c) => { this.modalID2 = c; }} style={{width:200, height:180}}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2" onClick={ this.addArr }>标题</div>
                            <div className="mt-panel-box" style={{height: 100, overflow: 'auto'}}>
                                {
                                    this.state.arr.map((elem, index) => {
                                        return <li style={{marginBottom: 20}} key={index}><DatePicker size="xs" style={{ width: 100 }} defaultValue="" format="yyyy-mm-dd" placeholder="选择日期" /></li>;
                                    })
                                }
                            </div>
                        </div>
                    </Modal>

                    <Button onClick={this.showOrHide.bind(this)}>点击我控制弹窗</Button>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style 等继承DIV
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
                <td>showBack</td>
                <td>显示弹窗的回调函数</td>
                <td>function</td>
                <td>null</td>
            </tr>
			<tr>
                <td>closeBack</td>
                <td>关闭弹窗的回调函数</td>
                <td>function</td>
                <td>null</td>
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
import {Modal, Grid, Button} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            name : '111'
        }
    }

    showBack() {
        console.log('弹窗开启，2秒后，自动变化值！')
        var _this = this;
        setTimeout(function(){
            _this.setState({
                name: '2222'
            });
        }, 2000)  
    }

    closeBack(){
        console.log('弹窗关闭');
    }

    showOrHide(){
        this.refs.modalID2.showModal(true);
    }

    render(){
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">Modal弹窗</div>
                <div className="mt-panel-box">
                    <Modal btn={<a className="mt-btn mt-btn-success"><i>弹窗</i></a>} modalClassName="animated bounceInDown" style={{width:200, height:180}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2">标题</div>
                            <div className="mt-panel-box">{this.state.name}内容...</div>
                        </div>
                    </Modal>
                    &nbsp;
                     <Modal ref="modalID2" modalClassName="animated bounceInDown" style={{width:200, height:180}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2">标题</div>
                            <div className="mt-panel-box">{this.state.name}内容...</div>
                        </div>
                    </Modal>
                    <Button onClick={this.showOrHide.bind(this)}>点击我控制弹窗</Button>
                </div>
            </div>
        );
    }
}

//主页
export default UI;
`}
</code>
</pre>
                </div>
                <Grid className="code" width="2/2">
                </Grid>
            </div>
        );
    }
}

//主页
export default UI;