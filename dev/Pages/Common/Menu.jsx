import './style.css';
import React from 'react'
import { connect} from 'react-redux'
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
              <li className="item"><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/start"}>开始使用</Link></li>
              <li className="item"><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/components/plus"}>组件库</Link></li>
              <li className="item"><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/help"}>帮助</Link></li> 
              <li className="item"><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/reduxdom"}>Redux Dom {this.props.tips==0?"":<span className="tips">{this.props.tips}</span>}</Link></li> 
              <li className="item"><a target="_blank" href="https://github.com/mtsee/mtui-react">Github</a></li>
            </ul>         
          </div>
        </div>
      );
  }
});
//主页 
export default connect(
  state => ({ 
    tips: state.user.tips,
    path: state.routing.locationBeforeTransitions.pathname
  })
)(Menu);