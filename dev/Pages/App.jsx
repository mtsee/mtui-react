/**
* 整个项目的入口
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { Link } from 'react-router' 

import Menu from './Common/Menu'
import Footer from './Common/Footer'

const App = React.createClass({
  render() {
    return (
    	<div className="app">
    		<Menu />
    		{this.props.children}
    		<Footer/>
    	</div>
    );
  }
});
//APP入口
module.exports = App;