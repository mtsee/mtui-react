import './style.css';
import React from 'react'
import conf from '../Conf/Conf'
import {Tabs , DateInput} from '../../Utils/MTUI/MTUI'

const Plus = React.createClass({
  render() {
  	//tabs切换的数据
    var tabsData = {
      className : 'test',
      defaultVal : 0,
      data : [
          {title : '小桥流水', content :<div>我就是随便写点什么~</div> },
          {title : '拆菊东篱', content :<div>loading...</div> },
          {title : '古道西风', content :<div>loading...</div> },
          {title : '其他', content :<div>loading...</div> }
        ],
        callBack: function(index){ //切换后的回调函数
          console.log("当前选择的tabs为：",index);
        }
    }
    return (
    	<div className={conf.pageAnimate+" contents"}>
    		<h1>插件</h1>

    		<div className="mt-page-content">
	          <h3 className="mt-padding">tab切换：</h3>
	          <div className="mt-g">
	            <div className="mt-g-12">
	                <Tabs {...tabsData}/>
	            </div>
	          </div>
	        </div>

	        <div className="mt-page-content">
	          <h3 className="mt-padding">日期插件：</h3>
	          <div className="mt-g">
	            <div className="mt-g-12">
	              
	              <div className="mt-g-3">
	                没有默认值：<DateInput defaultValue="null"/> 
	              </div>

	              <div className="mt-g-3">
	                默认值是今天：<DateInput defaultValue="now"/>
	              </div>

	              <div className="mt-g-3">
	                自定义默认值：<DateInput year="2015" month="5" day="18"/>
	              </div>

	              <div className="mt-g-3">
	                自定义提示内容：<DateInput width="200px" defaultValue="null" placeholder="我是个任性的日期..." year="2015" month="3" day="18"/>
	              </div>

	            </div>
	          </div>
	        </div>

    	</div>
    );
  }
});
//关于我们
module.exports = Plus;