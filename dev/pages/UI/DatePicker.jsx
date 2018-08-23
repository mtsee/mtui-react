'use strict';

import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, DatePicker, DatePickers, Input } from '../../mtui/index';

class Dates extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            name: '111',
            date: ''
        };
    }

    onChange(data) {
        console.log('弹窗关闭', data);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                date: '2017-03-18'
            });
        }, 1000);
    }

    render() {
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">日期组件</div>
                <div className="mt-panel-box">
                    <DatePicker size="xs" style={{ width: 100 }} defaultValue="" format="yyyy-mm-dd" placeholder="选择日期" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017-03-14" visible={true} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017" onChange={this.onChange.bind(this)} format="yyyy" />&nbsp;
                    <DatePickers size="xs" defaultValue="2017-03-14/2017-03-16" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    一秒后变化：<DatePicker size="xs" value={this.state.date} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker range="2017-03-14," size="xs" defaultValue="2017-03-14" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                </div>
                <Grid className="code" width="2/2">
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style, placeholder继承原来的标签默认
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
                <td>选择值后的回调函数</td>
                <td>function</td>
                <td>null</td>
            </tr>
            <tr>
                <td>onChange</td>
                <td>选择值后的回调函数 callback(e, data)</td>
                <td>function</td>
                <td>null</td>
            </tr>
            <tr>
                <td>modalClass</td>
                <td>日历弹窗的class</td>
                <td>string</td>
                <td>null</td>
            </tr>
            <tr>
                <td>modalStyle</td>
                <td>日历弹窗的style</td>
                <td>string</td>
                <td>null</td>
            </tr>
            <tr>
                <td>validateInfo</td>
                <td>表单验证的提示图标，或者DIV</td>
                <td>Component</td>
                <td>null</td>
            </tr>
            <tr>
                <td>format</td>
                <td>日期格式化 格式： yyyy年mm月dd日 </td>
                <td>string</td>
                <td>yyyy-mm-dd</td>
            </tr>
            <tr>
                <td>size</td>
                <td>输入框大小，继承 Input 组件， nm, lg, sm, xs</td>
                <td>string</td>
                <td>nm</td>
            </tr>
            <tr>
                <td>mid</td>
                <td>日期弹窗的id, 如果为null, 会用 mt_date_时间戳 做ID</td>
                <td>string</td>
                <td>null</td>
            </tr>
            <tr>
                <td>visible</td>
                <td>日期弹窗默认状态，显示还是隐藏</td>
                <td>bool</td>
                <td>false</td>
            </tr>
            <tr>
                <td>defaultValue</td>
                <td>日期默认值，固定格式：yyyy-mm-dd。 如果是日期范围，固定格式："yyyy-mm-dd/yyyy-mm-dd" 或 "yyyy-mm-dd/"或 "/yyyy-mm-dd"</td>
                <td>function</td>
                <td>null</td>
            </tr>
            <tr>
                <td>range（DatePickers 参数）</td>
                <td>日期范围, 固定格式：yyyy-mm-dd。 如果是日期范围，固定格式："yyyy-mm-dd,yyyy-mm-dd" 或 "yyyy-mm-dd," 或 ",yyyy-mm-dd"</td>
                <td>string</td>
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
import ReactDOM from 'react-dom';
import { Grid, Button, DatePicker, DatePickers, Input } from '../../mtui/index';

class Dates extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            name: '111',
            date: '2017-03-14'
        };
    }

    onChange(data) {
        console.log('弹窗关闭', data);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                date: '2017-03-18'
            });
        }, 1000);
    }

    render() {
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">日期组件</div>
                <div className="mt-panel-box">
                    <DatePicker size="xs" style={{ width: 100 }} defaultValue="" format="yyyy-mm-dd" placeholder="选择日期" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017-03-14" visible={true} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017" onChange={this.onChange.bind(this)} format="yyyy" />&nbsp;
                    <DatePickers size="xs" defaultValue="2017-03-14/2017-03-16" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    一秒后变化：<DatePicker size="xs" value={this.state.date} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker range="2017-03-14," size="xs" defaultValue="2017-03-14" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                </div>
            </div>
        );
    }
}

// 主页
export default Dates;
`}
                        </code>
                    </pre>
                </Grid>
            </div>
        );
    }
}

// 主页
export default Dates;