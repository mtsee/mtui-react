'use strict';
import './style.scss';
import React, { Component } from 'react';
import { Link,browserHistory } from 'react-router';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="index-header">
	        		<div className="headerbox">
	        			<div className="logo">
	        				<Link activeClassName="active" to={HOME}><img src="assets/imgs/logo.png" /></Link>
	        			</div>
		        		<div className="menus">
		        			<div className="btns">
		        				<Link activeClassName="active" to={HOME}><i>首页</i></Link>
								<Link activeClassName="active" to={HOME+"/help"}><i>帮助</i></Link>
				        		<Link className="update" activeClassName="active" to={HOME+"/update"}><i>更新</i></Link>
				        		<Link activeClassName="active" to={HOME+"/ui/input"}><i>UI组件</i></Link>
				        		<Link activeClassName="active" to={HOME+"/ui/redux"}><i>Redux案例</i></Link>
				        		<a target="blank" href="https://github.com/mtsee/mtui2.0"><i>Github</i></a>
				        	</div>
		        		</div>
	        		</div>
	        	</div>
	}
}
export default Header;