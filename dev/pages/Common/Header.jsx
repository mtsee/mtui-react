'use strict';
import './style.scss';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header">
            基于React的一套轻量级的组件库 {this.props.tips}
            <div className="menus">
                <div className="btns">
                    <Link to={HOME}><i>首页</i></Link>
                    <Link to={HOME + "/help"}><i>帮助</i></Link>
                    <Link className="update" to={HOME + "/update"}><i>更新</i></Link>
                    <Link className="active" to={HOME + "/ui/input"}><i>UI组件</i></Link>
                    <Link to={HOME + "/ui/redux"}><i>Redux案例</i></Link>
                    <a target="blank" href="https://github.com/mtsee/mtui2.0"><i>Github</i></a>
                </div>
            </div>
        </div>;
    }
}
export default connect(
    state => ({
        tips: state.user.tips
    }), null
)(Header);