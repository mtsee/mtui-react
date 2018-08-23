'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, Limit } from '../../mtui/index';

class UI extends Component {
	//构造函数
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid width="1/1">
				<Grid width="1/1">
					<Panel header="Limit">
						<Limit size="10">字数超过10个会自动以省略号结束。这个组件很有用！</Limit>
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
                <td>size</td>
                <td>字数限制，超出字数限制就会出现...</td>
                <td>number</td>
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
import { Grid, Panel, Limit } from '../../mtui/index';

class UI extends Component {
	//构造函数
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid width="1/1">
				<Grid width="1/1">
					<Panel header="Limit">
						<Limit size="10">字数超过10个会自动以省略号结束。这个组件很有用！</Limit>
					</Panel>
				</Grid>
			</Grid>
		);
	}
}

//主页
export default UI;
`}
						</code>
					</pre>
				</div>
					</Panel>
				</Grid>
			</Grid>
		);
	}
}

//主页
export default UI;