'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Panel, Tree} from '../../mtui/index';

const TreeChild = Tree.TreeChild;

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <Panel header="Tree">
                <Tree>
                    <TreeChild>
                        <Tree header="标题1" show={false}>
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                            <TreeChild>
                                <Tree header="子菜单3">
                                    <TreeChild>子菜单1</TreeChild>
                                    <TreeChild>子菜单2</TreeChild>
                                </Tree>
                            </TreeChild>
                        </Tree>
                    </TreeChild>
                    <TreeChild>
                        <Tree header="标题2">
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                        </Tree>
                    </TreeChild>
                </Tree>
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
                <td>header</td>
                <td>Tree的DOM</td>
                <td>Component</td>
                <td>标题</td>
            </tr>
            <tr>
                <td>show</td>
                <td>是否显示选项卡</td>
                <td>bool</td>
                <td>true</td>
            </tr>
        </tbody>
    </table>
</div>
                <pre><code>
                {`
// header 可以传入一个 HTML, show 是默认展开或者收起
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Panel, Tree} from '../../mtui/index';

const TreeChild = Tree.TreeChild;

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <Panel header="Tree">
                <Tree>
                    <TreeChild>
                        <Tree header="标题1" show={false}>
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                            <TreeChild>
                                <Tree header="子菜单3">
                                    <TreeChild>子菜单1</TreeChild>
                                    <TreeChild>子菜单2</TreeChild>
                                </Tree>
                            </TreeChild>
                        </Tree>
                    </TreeChild>
                    <TreeChild>
                        <Tree header="标题2">
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                        </Tree>
                    </TreeChild>
                </Tree>
            </Panel>	
        );
    }
}

//主页
export default UI;
                `}
                </code></pre>
            </Panel>	
        );
    }
}

//主页
export default UI;