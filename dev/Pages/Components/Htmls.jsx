import './style.css';
import React from 'react'
import conf from '../Conf/Conf' 
import {Link} from 'react-router' 

const Htmls = React.createClass({
  render() {
  	if(this.props.children){
  		return (
	    	<div className={conf.pageAnimate+" contents"}>
	    		{this.props.children}
	    	</div>
	    );
  	}else{
  		return (
	    	<div className={conf.pageAnimate+" contents"}>
	    		<h1>HTML组件</h1>
	    		<div className="mt-page-content">
			    	<h3 className="mt-padding">选择组件查看详情</h3>
			    	<div className="mt-g">
			    		<div className="mt-g-12">
			    			<Link className="mt-btn-green" activeClassName="active" to="/components/htmls/btn">按钮</Link>&nbsp;
			    			<Link className="mt-btn-green" activeClassName="active" to="/components/htmls/table">表格</Link>
			    		</div>
			    	</div>
			    </div>
	    	</div>
	    );
  	}
  }
});
//联系信息
module.exports = Htmls;