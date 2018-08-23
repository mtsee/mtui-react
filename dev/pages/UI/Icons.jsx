'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Input,Panel} from '../../mtui/index'

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

	render(){
		return (
			<Panel header="小图标">
          		<Grid width="1/1">
          			图标采用：wwww.iconfont.cn <br/>
          			项目引用地址：http://at.alicdn.com/t/font_xn4aez16mb3jif6r.css <br/>

          			<ul className="ui-icons">
          				<li><i className="iconfont icon-arrow3l"></i></li>
          				<li><i className="iconfont icon-arrow3r"></i></li>
          				<li><i className="iconfont icon-xia"></i></li>
          				<li><i className="iconfont icon-shang"></i></li>
          				<li><i className="iconfont icon-checkbox"></i></li>
          				<li><i className="iconfont icon-checkbox1"></i></li>
          				<li><i className="iconfont icon-loading1"></i></li>
          				<li><i className="iconfont icon-loading2"></i></li>
          				<li><i className="iconfont icon-danger"></i></li>
          				<li><i className="iconfont icon-error1"></i></li>
          				<li><i className="iconfont icon-date"></i></li>
          				<li><i className="iconfont icon-time"></i></li>
          				<li><i className="iconfont icon-success"></i></li>
          				<li><i className="iconfont icon-warn"></i></li>
          				<li><i className="iconfont icon-warning"></i></li>
          				<li><i className="iconfont icon-search"></i></li>
          				<li><i className="iconfont icon-user"></i></li>
          				<li><i className="iconfont icon-password"></i></li>
          				<li><i className="iconfont icon-arrow2l"></i></li>
          				<li><i className="iconfont icon-arrow2b"></i></li>
          				<li><i className="iconfont icon-arrow2r"></i></li>
          				<li><i className="iconfont icon-arrow2t"></i></li>
          				<li><i className="iconfont icon-more"></i></li>
          				<li><i className="iconfont icon-arrowd"></i></li>
          				<li><i className="iconfont icon-arrowt"></i></li>
          				<li><i className="iconfont icon-arrowl"></i></li>
          				<li><i className="iconfont icon-arrowr"></i></li>
          				<li><i className="iconfont icon-close"></i></li>
          			</ul>
          		</Grid>
          		<br/>
          		<br/>
			</Panel>
	    );
	}
}

//主页
export default Dom;