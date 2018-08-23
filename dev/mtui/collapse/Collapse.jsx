
import React, { Component } from 'react';
import eventProxy from '../utils/eventProxy';

class CollapseItem extends Component {

    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        let { className, children, header, active, Itemclick, show, ...other } = this.props;
        let cName = ['mt-collapse-item'];
        if (className) {
            cName.push(className);
        }
        if (active) {
            cName.push('mt-collapse-active');
        }
        return (
            <div {...other} className={cName.join(' ')}>
                <div onClick={this.props.Itemclick.bind(this)} className="mt-collapse-header">
                    <i className="iconfont icon-arrowr"></i>
                    {header}
                </div>
                <div className="mt-collapse-content">
                    {children}
                </div>
            </div>
        );
    }
}

class Collapse extends Component {
    static defaultProps = {
        only: false //
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            active: []
        };
    }

    componentWillMount() {
        let self = this;
        let arr = [];
        this.props.children.map(function (elem, index) {
            arr.push(elem.props.show);
        });
        this.setState({
            active: arr
        });
    }

    // 设置显示
    showOnlyItem(index) {
        let child = this.props.children;
        for (let i = 0; i < child.length; i++) {
            let active;
            if (index === i) {
                active = true;
            } else {
                active = false;
            }
        }
    }

    Itemclick(index) {
        // return index;
        let arr = this.state.active;

        // 只显示其中一个
        for (let i = 0; i < arr.length; i++) {
            if (i === index) {
                arr[i] = !arr[i];
            } else {
                if (this.props.only) {
                    arr[i] = false;
                }
            }
        }

        this.setState({
            active: arr
        });
    }

    render() {
        let self = this;
        let { className, children, only, ...other } = this.props;
        let cName = ['mt-collapse'];
        if (className) {
            cName.push(className);
        }
        let tmp = new Date().getTime();
        return (
            <div {...other} className={cName.join(' ')}>
                {
                    children.map(function (elem, index) {
                        let { children, ...other } = elem.props;
                        return <CollapseItem
                            active={self.state.active[index]}
                            Itemclick={self.Itemclick.bind(self, index)} {...other}
                            key={tmp + index}>
                            {elem.props.children}
                        </CollapseItem>;
                    })
                }
            </div>
        );
    }
}

Collapse.CollapseItem = CollapseItem;

// 主页
export default Collapse;