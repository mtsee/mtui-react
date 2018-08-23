/*
* @type Tabs 组件
* @author Mantou
*/

import './style.scss';
import React, { Component } from 'react';
import { Grid, Button, Tip, Tabs } from '../../mtui/index';

const TabItem = Tabs.TabItem;
class Dom extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            text: '111111111111',
            num: 0,
            items: [],
            index: 10
        };
        this.num = 0;
        this.timer = null;
    }

    changeBack() {
        this.setState({
            text: '2222222222222'
        });
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                index: 3
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    addItems() {
        var arr = this.state.items;
        arr.push({
            name: '标题' + this.num++,
            contents: <span>我就想写点什么~</span>
        });
        this.setState({
            items: arr
        });
    }

    render() {
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">Tabs 切换</h3>
                <div className="mt-panel-box">
                    <div>
                        <Tabs type="top" className="tabsStyle" animate={false}>
                            <TabItem name="数据源">数据源</TabItem>
                            <TabItem name="接口">接口</TabItem>
                        </Tabs>
                        <Grid width="1/4" className="grids">

                            <Tabs type="top" activeIndex={this.state.index} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容1</TabItem>
                                <TabItem name='标题2'>{this.state.text}</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                                <TabItem name='标题名字很长也没关系'>内容 4</TabItem>
                                <TabItem name='标题5'>内容 5</TabItem>
                                <TabItem name='标题6'>内容 6</TabItem>
                                <TabItem name='标题7'>内容 7</TabItem>
                                <TabItem name='标题8'>内容 8</TabItem>
                                <TabItem name='标题9'>内容 9</TabItem>
                                <TabItem name='标题10'>内容 10</TabItem>
                                <TabItem name='标题11'>内容 11</TabItem>
                                <TabItem name='标题12'>内容 12</TabItem>
                                <TabItem name='标题13'>内容 13</TabItem>
                                <TabItem name='标题14'>内容 14</TabItem>
                                <TabItem name='标题15'>内容 15</TabItem>
                                <TabItem name='标题16'>内容 16</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs type="bottom" animate={false} activeIndex={0} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容1</TabItem>
                                <TabItem name='标题2'>内容 2</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs type="left" activeIndex={0} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容1</TabItem>
                                <TabItem name='标题2'>内容 2</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs type="right" activeIndex={0} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容 1</TabItem>
                                <TabItem name='标题2'>内容 2</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs activeIndex={0} animate={false} changeBack={this.changeBack.bind(this)}>
                                {
                                    this.state.items.map(function (elem, index) {
                                        return <TabItem key={index} name={elem.name}>{elem.contents}{index}</TabItem>;
                                    })
                                }
                            </Tabs>
                        </Grid>
                        <br />
                        <br />
                        <a onClick={this.addItems.bind(this)} className="mt-btn">add</a>
                    </div>
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
                                    <td>type</td>
                                    <td>tabs标题的位置，参数：top, left, right, bottom</td>
                                    <td>string</td>
                                    <td>top</td>
                                </tr>
                                <tr>
                                    <td>animate</td>
                                    <td>是否开启切换动画，参数 false/true</td>
                                    <td>bool</td>
                                    <td>true</td>
                                </tr>
                                <tr>
                                    <td>activeIndex</td>
                                    <td>默认选中</td>
                                    <td>number</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>changeBack</td>
                                    <td>切换后的回调函数 callback(index)</td>
                                    <td>function</td>
                                    <td>null</td>
                                </tr>
                                <tr>
                                    <td>clickBack</td>
                                    <td>点击后的回调函数 callback(index)</td>
                                    <td>function</td>
                                    <td>null</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <pre><code>
                        {`
/*
* @type Tabs 组件
* @author Mantou
*/

import './style.scss';
import React, { Component } from 'react';
import { Grid, Button, Tip, Tabs } from '../../mtui/index';

const TabItem = Tabs.TabItem;
class Dom extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            text: '111111111111',
            num: 0,
            items: [],
            index: 10
        };
        this.num = 0;
    }

    changeBack() {
        this.setState({
            text: '2222222222222'
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                index: 3
            });
        }, 3000);
    }

    addItems() {
        var arr = this.state.items;
        arr.push({
            name: '标题' + this.num++,
            contents: <span>我就想写点什么~</span>
        });
        this.setState({
            items: arr
        });
    }

    render() {
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">Tabs 切换</h3>
                <div className="mt-panel-box">
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs type="top" activeIndex={this.state.index} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容1</TabItem>
                                <TabItem name='标题2'>{this.state.text}</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                                <TabItem name='标题名字很长也没关系'>内容 4</TabItem>
                                <TabItem name='标题5'>内容 5</TabItem>
                                <TabItem name='标题6'>内容 6</TabItem>
                                <TabItem name='标题7'>内容 7</TabItem>
                                <TabItem name='标题8'>内容 8</TabItem>
                                <TabItem name='标题9'>内容 9</TabItem>
                                <TabItem name='标题10'>内容 10</TabItem>
                                <TabItem name='标题11'>内容 11</TabItem>
                                <TabItem name='标题12'>内容 12</TabItem>
                                <TabItem name='标题13'>内容 13</TabItem>
                                <TabItem name='标题14'>内容 14</TabItem>
                                <TabItem name='标题15'>内容 15</TabItem>
                                <TabItem name='标题16'>内容 16</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs type="bottom" activeIndex={0} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容1</TabItem>
                                <TabItem name='标题2'>内容 2</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs type="left" activeIndex={0} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容1</TabItem>
                                <TabItem name='标题2'>内容 2</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs type="right" activeIndex={0} changeBack={this.changeBack.bind(this)}>
                                <TabItem name='标题1'>内容 1</TabItem>
                                <TabItem name='标题2'>内容 2</TabItem>
                                <TabItem name='标题3'>内容 3</TabItem>
                            </Tabs>
                        </Grid>
                    </div>
                    <div>
                        <Grid width="1/4" className="grids">
                            <Tabs activeIndex={0} changeBack={this.changeBack.bind(this)}>
                                {
                                    this.state.items.map(function (elem, index) {
                                        return <TabItem key={index} name={elem.name}>{elem.contents}</TabItem>;
                                    })
                                }
                            </Tabs>
                        </Grid>
                        <br />
                        <br />
                        <a onClick={this.addItems.bind(this)} className="mt-btn">add</a>
                    </div>
                </div>
            </div>
        );
    }
}

//主页
export default Dom;
`}
                    </code></pre>

                </div>
            </div>
        );
    }
}

//主页
export default Dom;