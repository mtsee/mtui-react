import React from 'react'
import {} from '../../../MTUI/index'

// 类
const UploadDom = React.createClass({
  render: function() { 

    return (
        <div className="mt-page-content">
          <h3 className="mt-padding">文件上传：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
                {/*
                data[] 菜单数据
                callback 点击后的回调函数
              */}
              {/*<Upload width="200px"/>*/}
              <br/><br/><div id="code-TreeMenu"></div>

            </div> 
          </div>
        </div>
    );
  }
});
//帮助中心
export default UploadDom;