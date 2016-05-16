import React from 'react'
import {TreeMenu} from '../../../MTUI/index'

// 类
const TreeDom = React.createClass({
  render: function() { 
    var treeData = {
      data:[
        {
          title:'地区',
          children:['四川','重庆','南京','北京']
        },
        {
          title:'类型',
          children:['水果','蔬菜','肉类',
            {
              title:'鱼类',
              children:['鲸鱼','秋刀鱼','草鱼']
            }
          ]
        },
        '其他'
      ],
      callback : null //回调函数
    };

    return (
        <div className="mt-page-content">
          <h3 className="mt-padding">树形列表：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
                {/*
                data[] 菜单数据
                callback 点击后的回调函数
              */}
              <TreeMenu {...treeData}/>
              <br/><br/><div id="code-TreeMenu"></div>

            </div> 
          </div>
        </div>
    );
  }
});
//帮助中心
export default TreeDom;