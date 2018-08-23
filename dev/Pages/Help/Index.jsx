'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import IndexHeader from '../Common/IndexHeader';

class Help extends Component {
	//构造函数
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="index help clearfix">
				<IndexHeader />
				<div className="helpbox">
					HTML结构：
					<pre><code>
					{
						`
【MTUI2.0 UI React】
components build with React.

基于 React 封装的 Web 组件库。

【npm地址】
https://www.npmjs.com/package/mtui 
[Node V6.9.5] [React V15+]

【使用】
安装使用 npm install mtui
  import 'mtui/style.css';
  import {DatePicker} from 'mtui/index';

  ReactDOM.render(<DatePicker format="yyyy-mm-dd"/>, mountNode);

【开发及构建】

目录结构

├── package.json
├── build         # 生成目录
├── dev           # 源文件目录 
├── dev/mtui      # 组件库目录 
└── lib           # npm 包构建目录

【开发】

使用之前先安装相关依赖：

npm install webpack -g
npm install
开发 npm start
构建 npm run build

浏览器输入：127.0.0.1:4001
						`
					}
</code></pre>
				</div>
			</div>
		);
	}
}

export default Help;