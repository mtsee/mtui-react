import React from 'react'
import {Tabs} from '../../../MTUI/index'
// 类
const TabsDom = React.createClass({
  render: function() { 
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
    	<div className="mt-page-content">
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