import React from 'react'
import {SliderActive} from '../../../MTUI/index'

// 类
const TreeDom = React.createClass({
  render: function() { 
    return (
        <div className="mt-page-content">
          <h3 className="mt-padding">树形列表：</h3>
          <div className="mt-g">
            <div className="mt-g-12">

               <div className="mt-g-4">
                <label>进度条：</label><br/><br/>
                
                <SliderActive value="0.2" width="300" color="green"/>
                <br/> <br/>

                <SliderActive value="0.7" width="300" color="red"/>
                <br/> <br/>

                <SliderActive value="0.5" width="300"/>

              </div>

              <br/><br/>
              <div className="mt-g-12">
              <div id="code-Slider"></div>
              </div>

            </div> 
          </div>
        </div>
    );
  }
});
//帮助中心
export default TreeDom;