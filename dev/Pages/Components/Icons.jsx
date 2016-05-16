import './style.css';
import React from 'react'
import conf from '../Conf/Conf' 
import {Link} from 'react-router' 

const Icons = React.createClass({
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
	    		<h1>icons 小图标</h1>
	    		<div className="mt-page-content">
			    	<h3 className="mt-padding">icons 采用阿里的字体图标 www.iconfont.cn</h3>
			    	<div className="mt-g">
			    		<div className="mt-g-12">
			    			
			    			<ul className="admin-icons">
			    				<li> <i className="iconfont icon-save"></i> <p>icon-save</p> </li>
			    				<li> <i className="iconfont icon-share"></i> <p>icon-share</p> </li>
			    				<li> <i className="iconfont icon-down"></i> <p>icon-down</p> </li>
			    				<li> <i className="iconfont icon-info"></i> <p>icon-info</p> </li>
			    				<li> <i className="iconfont icon-checkbox"></i> <p>icon-checkbox</p> </li>
			    				<li> <i className="iconfont icon-arrowup"></i> <p>icon-arrowup</p> </li>
			    				<li> <i className="iconfont icon-arrowdown"></i> <p>icon-arrowdown</p> </li>
			    				<li> <i className="iconfont icon-close"></i> <p>icon-close</p> </li>
			    				<li> <i className="iconfont icon-radio"></i> <p>icon-radio</p> </li>
			    				<li> <i className="iconfont icon-menu"></i> <p>icon-menu</p> </li>
			    				<li> <i className="iconfont icon-left"></i> <p>icon-left</p> </li>
			    				<li> <i className="iconfont icon-right"></i> <p>icon-right</p> </li>
			    				<li> <i className="iconfont icon-top"></i> <p>icon-top</p> </li>
			    				<li> <i className="iconfont icon-bottom"></i> <p>icon-bottom</p> </li>
			    				<li> <i className="iconfont icon-date"></i> <p>icon-date</p> </li>
			    				<li> <i className="iconfont icon-search"></i> <p>icon-search</p> </li>
			    				<li> <i className="iconfont icon-password"></i> <p>icon-password</p> </li>
			    				<li> <i className="iconfont icon-user"></i> <p>icon-user</p> </li>
			    				<li> <i className="iconfont icon-file"></i> <p>icon-file</p> </li>
			    				<li> <i className="iconfont icon-mail"></i> <p>icon-mail</p> </li>
			    				<li> <i className="iconfont icon-photo"></i> <p>icon-photo</p> </li>
			    			</ul>

			    		</div>
			    	</div>
			    </div>
	    	</div>
	    );
  	}
  }
});
//联系信息
module.exports = Icons;