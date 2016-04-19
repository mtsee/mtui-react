import './style.css';
import React from 'react'
import LeftMenu from './Common/LeftMenu'
import setMinHeight from '../../Mixins/setMinHeight'
import conf from '../Conf/Conf'

const Components = React.createClass({
  mixins:[setMinHeight],
  render: function() {
    if(this.props.children){
  		return (
  			<div className="component mtop60" style={{ minHeight: this.state.height+"px"}}>
  				<LeftMenu />
  				{this.props.children}
  			</div>
  		);
  	}else{
  		return (
        <div className="component mtop60" style={{ minHeight: this.state.height+"px"}}>
          <LeftMenu />
          <div className={conf.pageAnimate+" contents"}> 
              首页说明文档,我去~
          </div>
        </div>
      );
  	}
  } 
});
//关于我们
module.exports = Components;