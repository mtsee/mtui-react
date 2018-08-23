'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<div className="mt-panel">
		        <div className="mt-404">
	                <div className="mt-404-title">404</div>
	                <div className="mt-404-info">Page Not Found</div>
	                <div className="mt-404-content">
	                    <p>对不起,没有找到您所需要的页面,可能是URL不确定,或者页面已被移除。</p>
	                    <button type="button" className="mt-btn mt-btn-primary">Back Home</button>
	                </div>
		        </div>
	        </div>
	    );
	}
}

//主页
export default UI;