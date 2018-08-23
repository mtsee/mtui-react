'use strict';
import './style.scss';
import React, { Component } from 'react';
import { Link,browserHistory } from 'react-router';

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="menu">
			<div className="logo"><Link to={HOME}>MTUI 2.0</Link></div>
			<div className="navlist">
				<ul>
					<li className="classn">表单</li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/input"}>input<i>输入框</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/button"}>button<i>按钮</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/switch"}>switch<i>开关</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/slider"}>slider<i>拖动条</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/sliderbar"}>sliderbar<i>进度条</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/select"}>select<i>下拉选择</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/radio"}>radio<i>单选</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/datepicker"}>datePicker<i>日历</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/timepicker"}>timePicker<i>时间</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/checkbox"}>checkbox<i>多选</i></Link></li>
					<li className="classn">数据处理</li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/validate"}>validate<i>表单验证</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/limit"}>limit<i>省略文字</i></Link></li>
					<li className="classn">布局</li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/grid"}>grid<i>栅格</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/panel"}>panel<i>面板</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/table"}>table<i>表格</i></Link></li>
					<li className="classn">功能组件</li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/swiper"}>swiper<i>图片切换</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/pagelist"}>pagelist<i>分页</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/tip"}>tip<i>提示</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/modal"}>modal<i>弹窗</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/dropdown"}>dropdown<i>下拉框</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/backtop"}>backtop<i>返回顶部</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/tabs"}>tabs<i>tabs切换</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/popover"}>popover<i>气泡提示</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/loading"}>loading<i>加载动画</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/progress"}>Progress<i>百分比</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/tree"}>tree<i>树形菜单</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/upload"}>upload<i>文件上传</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/collapse"}>collapse<i>折叠面板</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/popconfirm"}>popconfirm<i>气泡对话</i></Link></li>
					<li className="classn">样式组件</li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/tag"}>tag<i>小标签</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/icons"}>icon<i>小图标</i></Link></li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/404"}>404<i>页面未找到</i></Link></li>
					<li className="classn">Redux Demo</li>
					<li><Link activeClassName="active-menu" to={HOME+"/ui/redux"}>redux Demo</Link></li>
				</ul>
			</div>
		</div>;
	}
}
export default Menu;