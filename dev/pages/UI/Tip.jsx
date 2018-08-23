'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Tip} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<div className="mt-panel">
        		<h3 className="mt-panel-h2">TIP 提示框</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="2/2" className="btns">
	          			<a className="mt-btn mt-btn-success" onClick={()=>{Tip.success('成功！')}}>成功</a>
	        			<a className="mt-btn mt-btn-danger" onClick={()=>{Tip.error('失败了吧~')}}>失败</a>
	        			<a className="mt-btn mt-btn-warning" onClick={()=>{Tip.warning('警告你，别点我！')}}>警告</a>
	          		</Grid>
	          		<Grid className="code">
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        这个方法是一个JS的方法，在js中调用。
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
                <td>Tip.success('成功')</td>
                <td>成功的提示</td>
                <td>function</td>
                <td>null</td>
            </tr>
			<tr>
                <td>Tip.error('失败了吧~')</td>
                <td>失败提示</td>
                <td>function</td>
                <td>null</td>
            </tr>
            <tr>
                <td>Tip.warning('警告你，别点我！')</td>
                <td>警告提示</td>
                <td>function</td>
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
import {Tip} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<div>
				<a className="mt-btn mt-btn-success" onClick={()=>{Tip.success('成功！')}}>成功</a>
				<a className="mt-btn mt-btn-danger" onClick={()=>{Tip.error('失败了吧~')}}>失败</a>
				<a className="mt-btn mt-btn-warning" onClick={()=>{Tip.warning('警告你，别点我！')}}>警告</a>
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