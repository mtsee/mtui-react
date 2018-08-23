'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Input} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			val : ''
		}
	}

	handleChange(e){
		this.setState({
			val:e.target.value
		})
	}

	searchClick(){
		console.log("搜索值：",this.state.val)
	}

	componentDidMount() {
	 	     
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">input</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="1/1">
	          			<Input disabled={true} placeholder="size:lg" size="lg"/>&nbsp;
	          			<Input placeholder="size:nm" size="nm"/>&nbsp;
	          			<Input placeholder="size:sm" size="sm"/>&nbsp;
	          			<Input placeholder="size:xs" size="xs"/>&nbsp;
	          			<Input placeholder="密码" type="password" size="xs"/>&nbsp;
	          			<Input type="textarea" placeholder="textarea"/>&nbsp;
	          		</Grid>
	          		<br/>
	          		<br/>
	          		<Grid width="1/1">
	          			<Input placeholder="带小图标" prefix={<i className="iconfont icon-user"></i>}/>&nbsp;
	          			<Input onChange={this.handleChange.bind(this)} value={this.state.val} placeholder="带小图标" suffix={<a onClick={this.searchClick.bind(this)}><i className="iconfont icon-search"></i></a>}/>&nbsp;
	          		</Grid>
	          		<Grid>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style, type, defaultValue, value 继承input的标签默认
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
                <td>按钮尺寸，可用参数 nm,lg,sm,xs 或者不添加</td>
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
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Input} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			val : ''
		}
	}

	handleChange(e){
		this.setState({
			val:e.target.value
		})
	}

	searchClick(){
		console.log("搜索值：",this.state.val)
	}

	componentDidMount() {
	 	     
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">input</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="1/1">
	          			<Input placeholder="size:lg" size="lg"/>&nbsp;
	          			<Input placeholder="size:nm" size="nm"/>&nbsp;
	          			<Input placeholder="size:sm" size="sm"/>&nbsp;
	          			<Input placeholder="size:xs" size="xs"/>&nbsp;
	          		</Grid>
	          		<br/>
	          		<br/>
	          		<Grid width="1/1">
	          			<Input placeholder="带小图标" prefix={<i className="iconfont icon-user"></i>}/>&nbsp;
	          			<Input onChange={this.handleChange.bind(this)} value={this.state.val} placeholder="带小图标" suffix={<a onClick={this.searchClick.bind(this)}><i className="iconfont icon-search"></i></a>}/>&nbsp;
	          		</Grid>
	          	</div>
	        </div>
	    );
	}
}

//主页
export default Dom;
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