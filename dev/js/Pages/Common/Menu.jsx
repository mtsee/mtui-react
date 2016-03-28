import './style.css';
import React from 'react'
import { Link } from 'react-router' 

const Menu = React.createClass({
  render() {
    return (
        <div className="menubox">
          <div className="menu">
            {/*logo*/}
            <div className="menu-logobox">
              <Link to="/"><h1 className="menu-logo"></h1></Link>
            </div>
            {/*菜单列表*/} 
            <ul className="menu-list">
              <li className="item"><Link activeClassName="active" to="/start">开始使用</Link></li>
              <li className="item"><Link activeClassName="active" to="/components">组件库</Link></li>
              <li className="item"><Link activeClassName="active" to="/help">帮助</Link></li> 
              <li className="item"><a target="_blank" href="https://github.com/mtsee/mtui-react">Github</a></li>
            </ul>         
          </div>
        </div>
      );
  }
});
//主页 
module.exports = Menu;