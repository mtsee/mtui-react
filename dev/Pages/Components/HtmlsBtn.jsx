import './style.css';
import React from 'react'
import conf from '../Conf/Conf' 

const HtmlsBtn = React.createClass({
  render() {
    return (
    	<div className={conf.pageAnimate+" contents"}>
    		<h1>按钮</h1>
	    	
	    	<div className="mt-page-content btnslist">
		    	<h3 className="mt-padding">按钮颜色</h3>
		    	<div className="mt-g">

					  <div className="mt-g-4">
					  		<p>普通按钮：</p><br/>
					  		<a href="javascript:;" className="mt-btn-grey">灰色按钮</a>
					  		<a href="javascript:;" className="mt-btn-red">红色按钮</a>
					  		<a href="javascript:;" className="mt-btn-yellow">黄色按钮</a>
					  		<a href="javascript:;" className="mt-btn-green">绿色按钮</a>
					  		<a href="javascript:;" className="mt-btn-blue">蓝色按钮</a>
					  </div>

					  <div className="mt-g-4">
					  		<p>圆角按钮：</p><br/>
							<a href="javascript:;" className="mt-btn-round-grey">灰色按钮</a>
					  		<a href="javascript:;" className="mt-btn-round-red">红色按钮</a>
					  		<a href="javascript:;" className="mt-btn-round-yellow">黄色按钮</a>
					  		<a href="javascript:;" className="mt-btn-round-green">绿色按钮</a>
					  		<a href="javascript:;" className="mt-btn-round-blue">蓝色按钮</a>
					  </div>

					  <div className="mt-g-4">
					  		<p>特效按钮：</p><br/>
							<a href="javascript:;" className="mt-btn-grey ink-reaction">灰色按钮</a>
					  		<a href="javascript:;" className="mt-btn-red ink-reaction">红色按钮</a>
					  		<a href="javascript:;" className="mt-btn-yellow ink-reaction">黄色按钮</a>
					  		<a href="javascript:;" className="mt-btn-green ink-reaction">绿色按钮</a>
					  		<a href="javascript:;" className="mt-btn-blue ink-reaction">蓝色按钮</a>
					  </div>

					  <div className="mt-g-4">
					  		<p>文字按钮：</p><br/>
					  		<a href="javascript:;" className="mt-btn-text-grey mt-text-fs12">灰色按钮</a>
					  		<a href="javascript:;" className="mt-btn-text-red mt-text-fs12">红色按钮</a>
					  		<a href="javascript:;" className="mt-btn-text-yellow mt-text-fs12">黄色按钮</a>
					  		<a href="javascript:;" className="mt-btn-text-green mt-text-fs12">绿色按钮</a>
					  		<a href="javascript:;" className="mt-btn-text-blue mt-text-fs12">蓝色按钮</a>
					  </div>
				</div>
    		</div>

    		<div className="mt-page-content">
		    	<h3 className="mt-padding">按钮尺寸</h3>
		    	<div className="mt-g">

				  <div className="mt-g-12">
				  		<span className="mt-margin">mt-btn-xl</span>
				  		<a href="javascript:;" className="mt-btn-blue mt-btn-xl ink-reaction">蓝色按钮</a>

				  		<span className="mt-margin">mt-btn-lg</span>
				  		<a href="javascript:;" className="mt-btn-blue mt-btn-lg ink-reaction">蓝色按钮</a>

				  		<span className="mt-margin">默认大小</span>
				  		<a href="javascript:;" className="mt-btn-blue ink-reaction">蓝色按钮</a>

				  		<span className="mt-margin">mt-btn-sm</span>
				  		<a href="javascript:;" className="mt-btn-blue mt-btn-sm ink-reaction">蓝色按钮</a>

				  		<span className="mt-margin">mt-btn-xs</span>
				  		<a href="javascript:;" className="mt-btn-blue mt-btn-xs ink-reaction">蓝色按钮</a>
				  </div>

				  <div className="mt-g-4">
				  		<p>block按钮：</p><br />
				  		<a href="javascript:;" className="mt-btn-grey mt-btn-block ink-reaction">灰色按钮</a><br/>
				  		<a href="javascript:;" className="mt-btn-red mt-btn-block ink-reaction">红色按钮</a><br/>
				  		<a href="javascript:;" className="mt-btn-yellow mt-btn-block ink-reaction">黄色按钮</a><br/>
				  		<a href="javascript:;" className="mt-btn-green mt-btn-block ink-reaction">绿色按钮</a><br/>
				  		<a href="javascript:;" className="mt-btn-blue mt-btn-block ink-reaction">蓝色按钮</a><br/>
				  </div>
				</div>
		    </div>

		    <div className="mt-page-content">
		    	<h3 className="mt-padding">组合按钮</h3>
		    	<div className="mt-g">

					  <div className="mt-g-12">
							<p>图标+按钮：</p><br/>
							<a href="javascript:;" className="mt-btn-grey ink-reaction"><i className="iconfont icon-zhuye"></i> 主页</a>
					  		<a href="javascript:;" className="mt-btn-red ink-reaction"><i className="iconfont icon-yonghu"></i> 用户</a>
					  		<a href="javascript:;" className="mt-btn-yellow ink-reaction"><i className="iconfont icon-duigou"></i> 正确</a>
					  		<a href="javascript:;" className="mt-btn-green ink-reaction"><i className="iconfont icon-shangchuan"></i> 上传文件</a>
					  		<a href="javascript:;" className="mt-btn-blue ink-reaction"><i className="iconfont icon-icon46"></i> 下载按钮</a>
					  </div>

					  <div className="mt-g-12">
					  		<span className="mt-margin">mt-btn-xl</span>
					  		<a href="javascript:;" className="mt-btn-grey mt-btn-xl ink-reaction"><i className="iconfont icon-zhuye"></i> 主页</a>

					  		<span className="mt-margin">mt-btn-lg</span>
					  		<a href="javascript:;" className="mt-btn-red mt-btn-lg ink-reaction"><i className="iconfont icon-yonghu"></i> 用户</a>

					  		<span className="mt-margin">默认大小</span>
					  		<a href="javascript:;" className="mt-btn-yellow ink-reaction"><i className="iconfont icon-duigou"></i> 正确</a>

					  		<span className="mt-margin">mt-btn-sm</span>
					  		<a href="javascript:;" className="mt-btn-green mt-btn-sm ink-reaction"><i className="iconfont icon-shangchuan"></i> 上传文件</a>

					  		<span className="mt-margin">mt-btn-xs</span>
					  		<a href="javascript:;" className="mt-btn-blue mt-btn-xs ink-reaction"><i className="iconfont icon-icon46"></i> 下载按钮</a>
					  </div>

				</div>
		    </div>

    	</div>
    );
  }
});
//联系信息
module.exports = HtmlsBtn;