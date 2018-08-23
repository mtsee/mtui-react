'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import IndexHeader from '../Common/IndexHeader';

class Index extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div className="index">
                <IndexHeader />
                <div className="index-body">
                    <div className="indexbox sytle1">
                        <h1>MTUI2 技术栈说明*</h1>
                        <p>技术栈：react , react-router , redux , es6 所有组件均采用ES6+react封装，没有集成任何插件，易于修改！</p>
                        <p><span>QQ群：105344750</span></p>
                    </div>
                </div>
                <div className="index-body2">
                    <div className="indexbox sytle2">
                        <h1>麻雀虽小五脏俱全</h1>
                        <div className="item">
                            <div className="icobox">
                                <div className="icon"><span>React</span></div>
                            </div>
                            <div className="info">
                                采用React V15+ 版本
                            </div>
                        </div>
                        <div className="item">
                            <div className="icobox">
                                <div className="icon"><span>ES6</span></div>
                            </div>
                            <div className="info">
                                ES6语法编写，babel编译
                            </div>
                        </div>
                        <div className="item">
                            <div className="icobox">
                                <div className="icon"><span>Router</span></div>
                            </div>
                            <div className="info">
                                采用React-router前端路由
                            </div>
                        </div>
                        <div className="item">
                            <div className="icobox">
                                <div className="icon"><span>Redux</span></div>
                            </div>
                            <div className="info">
                                项目中包含一个Redux小案例，方便学习使用
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// 主页
export default Index;