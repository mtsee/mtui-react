import React from 'react'
import {Tabs} from '../../../MTUI/index'
// 类
const TabsDom = React.createClass({
  render: function() { 
    //tabs切换的数据
    var tabsData = {
      className : 'test',
      defaultVal : 0,
      animate : true,
      data : [
          {title : '小桥流水', content :<div className='mytabs mytas-c1'>我就是随便写点什么~</div> },
          {title : '拆菊东篱', content :<div className='mytabs mytas-c2'>拆菊东篱loading...</div> },
          {title : '古道西风', content :<div className='mytabs mytas-c3'>古道西风loading...</div> },
          {title : '其他', content :<div className='mytabs mytas-c4'>其他loading...</div> }
        ],
        callBack: function(index,title){ //切换后的回调函数
          console.log("tabs为：",index);
          console.log("title为：",title);
        }
    }
    return (
    	<div className="mt-page-content admin-tabs">
        <h3 className="mt-padding">tabs切换：</h3>
        <div className="mt-g">
          <div className="mt-g-12">
              <Tabs {...tabsData}/>
              <br/>
              <div id="code-Tabs"></div>
          </div>
        </div>
      </div>
    );
  }
});
//帮助中心
export default TabsDom;