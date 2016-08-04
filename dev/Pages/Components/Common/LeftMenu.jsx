import '../style.css';
import React from 'react'
import {Link} from 'react-router' 

const LeftMenu = React.createClass({
  render() {
    return (
    	<div className="leftmenu">
    		 <ul className="menu">
              <li>
                  <Link activeClassName="active" to="/components/htmls">HTML组件</Link>
                  {/*
                    <ul className="sub-menu">
                      <li><Link activeClassName="active" to="/components/htmls/btn">按钮</Link></li>
                      <li><Link activeClassName="active" to="/components/htmls/table">表格</Link></li>
                  </ul>
                  */}
              </li>
              <li><Link activeClassName="active" to="/components/forms">表单组件</Link></li>
              <li><Link activeClassName="active" to="/components/plus">插件库</Link></li>
              <li><Link activeClassName="active" to="/components/icons">Icons</Link></li>
              <li><Link activeClassName="active" to="/components/language">国际化</Link></li>
          </ul>
    	</div>
    );
  }
});
//关于我们
module.exports = LeftMenu;