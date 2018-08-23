'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Button, Tip, PageList, BackTop } from '../../mtui/index';
import ReactDOM from 'react-dom';

// 引入公用部分
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Menu from '../Common/Menu';

class UI extends Component {
	// 构造函数
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ui">
				<Header />
				<Menu />
				<div className="uibody">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}

//主页
export default UI;