'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Grid width="1/1">
				<Grid width="1/2" sm="2/2">
					<Panel header="面板1">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>	
		        </Grid>
		        <Grid width="1/2" sm="2/2">
		          	<Panel header="面板2">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>
		        </Grid>
		        <Grid width="1/1">
		        	<Panel size="min" header="面板3">
		        		小面板
					</Panel>
		        </Grid>
		        <Grid width="1/1">
		        	<Panel size="xm" header="面板3">
		        		小面板
					</Panel>
		        </Grid>
<div>
<Panel>
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
                <td>header</td>
                <td>面板标题内容</td>
                <td>Component/string</td>
                <td>null</td>
            </tr>
			<tr>
                <td>size</td>
                <td>面板大小，参数：min，或者不填写</td>
                <td>string</td>
                <td>null</td>
            </tr>
        </tbody>
    </table>
</div>
</Panel>
<pre>
<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Grid width="1/1">
				<Grid width="1/2" sm="2/2">
					<Panel header="面板1">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>	
		        </Grid>
		        <Grid width="1/2" sm="2/2">
		          	<Panel header="面板2">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>
		        </Grid>
		        <Grid width="1/1">
		        	<Panel size="min" header="面板3">
		        		小面板
					</Panel>
		        </Grid>
	        </Grid>
	    );
	}
}
`}
</code>
</pre>
</div>
	        </Grid>
	    );
	}
}

//主页
export default UI;