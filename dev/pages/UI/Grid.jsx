'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
		  num:5
		};
	}

	selectGrid(e){
		console.log(e.target.value);
		this.setState({
			num : e.target.value
		})
	}

	render(){
		let arr = [],grid=[];
		for(let i=0; i < 16; i++){
			grid.push(i);
		}
		for(let i=0; i < this.state.num; i++){
			arr.push(i);
		}
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">栅格系统</h3>
        		<div className="mt-panel">	
        			选择栅格：<select value={this.state.num} onChange={this.selectGrid.bind(this)}>
	        			{
	        				grid.map(function(elem, index) {
		        				index = parseInt(index, 10)+1
		        				if(index <= 16)
		        					return <option key={index} value={index}>{index}</option>;
		        				else
		        					return null;
		        			})
	        			}
	        		</select>
	        		<Grid sm="2/2" md="1/2" lg="1/2" className="grids">
		        		{
		        			arr.map(function(elem,index) {
		        				index = parseInt(index, 10)
		        				return <div key={index}><Grid width={(index+1)+'/'+arr.length}>{index+1}/{arr.length}</Grid></div>;
		        			})
		        		}
	        		</Grid>
	        		<div className="code">
	        			width:正常 <br/>
	        			sm {`<=`} 640px <br/>
	        			640px {`<`} md {`<=`} 1024px <br/>
	        			lg {`>`} 1024px <br/>
	        			可用参数：sm, md, lg, smOffset, mdOffset, lgOffset, offset, width
	        		</div>
	        		<div>
	        			<br/>
	        			<br/>
	        			<Grid sm="1/1" md="1/2" lg="1/4" offset="1/12"><Button block={true} type="info">栅格</Button></Grid>
	        		</div>
	        		<div>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style, 继承DOM标签默认
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
                <td>响应式参数说明</td>
                <td>
					width: 正常 <br/>
					sm: 小于等于640px 生效 <br/>
					md: 大于640px 且 小于等于1024px 生效 <br/>
					lg: 大于1024px 生效
				</td>
                <td>string</td>
                <td>null</td>
            </tr>
            <tr>
                <td>sm</td>
                <td>屏幕宽度小于640px 生效， 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>1/1</td>
            </tr>
			<tr>
                <td>md</td>
                <td>大于640px 且 小于等于1024px 生效， 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>1/1</td>
            </tr>
			<tr>
                <td>lg</td>
                <td>大于1024px 生效， 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>1/1</td>
            </tr>
			<tr>
                <td>smOffset</td>
                <td>屏幕宽度小于640px 生效，左偏移宽度， 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>null</td>
            </tr>
			<tr>
                <td>mdOffset</td>
                <td>大于640px 且 小于等于1024px 生效，左偏移宽度, 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>null</td>
            </tr>
			<tr>
                <td>lgOffset</td>
                <td>大于1024px 生效，左偏移宽度, 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>null</td>
            </tr>
			<tr>
                <td>offset</td>
                <td>正常左偏移宽度, 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>null</td>
            </tr>
			<tr>
                <td>width</td>
                <td>正常宽度, 参数 n/m  n和m 都是数字 eg: 1/2 </td>
                <td>string</td>
                <td>1/1</td>
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

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Grid width="1/1" sm="1/1" md="1/2" lg="1/4" offset="1/12"><Button block={true} type="info">栅格</Button></Grid>
		)
	}
}
`}
</code>
</pre>	        		
	        		</div>
        		</div>

	        </div>
	    );
	}
}

//主页
export default UI;