
import React, { Component } from 'react';

// activeIndex 默认选中
// changeBack 切换的回调
// clickBack 点击回调
// type tabs 定位位置  left,top,bottom,right
// animate 是否开启动画
class Tabs extends Component {

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex || 0,
            barStyle: {
                width: 0,
                left: 0
            },
            transX: 0,
            overflow: false,
            disable: {
                prev: false,
                next: false
            }
        };
    }

    static defaultProps = {
        type: 'top',
        animate: true
    }

    // 设置选中
    setActiveIndex(index, callback) {
        let _tab = this.refs['tab_' + index];
        let _this = this;
        let barStyle = null;
        if (this.props.type === 'right') {
            // 设置选中
            barStyle = {
                width: 2,
                height: _tab.clientHeight,
                top: _tab.offsetTop
            };
        } else if (this.props.type === 'left') {
            // 设置选中
            barStyle = {
                width: 2,
                height: _tab.clientHeight,
                top: _tab.offsetTop,
                left: _tab.clientWidth - 2
            };
        } else {
            // 设置选中
            barStyle = {
                height: 2,
                width: _tab.clientWidth,
                left: _tab.offsetLeft
            };
        }

        this.setState({
            activeIndex: index,
            barStyle: barStyle
        }, function () {
            // 设置moreStyle
            _this.setTranslate3d(_tab, index);
        });

        // 变化回调函数
        this.props.changeBack ? this.props.changeBack(index) : null;
    }

    // 设置transX
    setTranslate3d(that, index) {

        // 如果是left.right 不设置transX
        if (this.props.type === 'left' || this.props.type === 'right') {
            return;
        }

        let thatLeft = that.offsetLeft + that.offsetWidth,
            headWidth = this.refs.head.offsetWidth,
            transX = Math.abs(this.state.transX);
        // 左超出
        if (transX > that.offsetLeft - 10) {
            // console.log('左超出')
            transX = that.offsetWidth - thatLeft + (index == 0 ? 0 : that.previousSibling.offsetWidth)
        } else if (thatLeft - transX > headWidth - (that.nextSibling ? that.nextSibling.offsetWidth : 0)) {
            // console.log('右超出')
            // 偏移headWidth - thatLeft;
            transX = headWidth - thatLeft - (this.props.children.length == index + 1 ? 0 : that.nextSibling.offsetWidth);
        } else {
            transX = -transX;
        }
        this.setTransX(transX);
    }

    // 设置transX
    setTransX(transX) {
        let disable = null;
        if (transX == 0) {
            disable = {
                prev: true,
                next: false
            };
        } else if (-transX == this.refs.box.offsetWidth - this.refs.head.offsetWidth) {
            disable = {
                prev: false,
                next: true
            };
        } else {
            disable = {
                prev: false,
                next: false
            };
        }
        this.setState({
            transX: transX,
            disable: disable
        });
    }

    // tabs切换触发
    changeTabs(index) {
        this.setActiveIndex(index);

        // 点击回调
        this.props.clickBack ? this.props.clickBack(index) : null;
    }

    // 超出宽度，显示切换按钮
    setOverflow() {
        // overflow 判断

        // console.log(this.refs.head.offsetWidth,this.refs.box.offsetWidth)

        if (this.refs.head.offsetWidth < this.refs.box.offsetWidth) {
            this.setState({
                overflow: true
            });
            this.setTransX(this.state.transX);
        }
    }

    // 上一页,下一页
    prevAndNextClick(mark) {
        let transX = Math.abs(this.state.transX);
        if (mark == 'prev') {
            transX = transX - this.refs.head.offsetWidth;
            if (transX < 0) {
                transX = 0;
            }
        } else {
            transX = transX + this.refs.head.offsetWidth;
            if (this.refs.box.offsetWidth - transX < this.refs.head.offsetWidth) {
                transX = this.refs.box.offsetWidth - this.refs.head.offsetWidth;
            }
        }
        this.setTransX(-transX);
    }

    componentDidMount() {
        if (this.props.children.length != 0) {
            this.setActiveIndex(this.state.activeIndex);
            // 设置overflow
            this.setOverflow();
        }
    }

    componentWillReceiveProps(nextProps) {

        // 监听按钮
        if (nextProps.children.length !== this.props.children.length) {
            // 设置overflow
            this.setOverflow();
        }

        if (nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex
            }, () => {
                this.setActiveIndex(nextProps.activeIndex);
            });

        }
    }

    render() {

        let _this = this;
        let { activeIndex, changeBack, className, animate, ...other } = this.props;
        let style = null;
        if (MT_IE9) {
            style = { 'left': this.state.transX };
        } else {
            style = { 'transform': 'translate3d(' + this.state.transX + 'px,0,0)' };
        }

        let head = <div ref="head" className={'mt-tabs-header' + (this.state.overflow ? ' mt-tabs-overflow' : '')}>
            <div className="mt-tabs-headbox" style={style}>
                <ul ref="box" className="clearfix">
                    {
                        this.props.children.length != 0 ?
                            this.props.children.map(function (elem, index) {
                                if (!elem) {
                                    return null;
                                }
                                return <li ref={'tab_' + index} onClick={_this.changeTabs.bind(_this, index)} key={elem.key ? elem.key : index} className={'mt-tabs-tab' + (_this.state.activeIndex == index ? ' mt-tabs-tab-active' : '')}>{elem.props.name}</li>;
                            }) : null
                    }
                </ul>
                <div className="mt-tabs-active-bar" style={this.state.barStyle}></div>
            </div>
        </div>;

        let body = <div className="mt-tabs-content">
            <div className={'mt-tabs-items clearfix' + (this.props.animate ? ' mt-tabs-animate' : '')}>
                {
                    this.props.children.length !== 0 ?
                        this.props.children.map(function (elem, index) {
                            if (!elem) {
                                return null;
                            }
                            return <div key={elem.key ? elem.key : index} className={"mt-tabs-item" + (_this.state.activeIndex == index ? ' mt-tabs-item-active' : '')}>{elem.props.children}</div>;
                        }) : null
                }
            </div>
        </div>;

        let prevBtn = this.state.overflow ? <a onClick={this.prevAndNextClick.bind(_this, 'prev')} className={'mt-tabs-prev' + (this.state.disable.prev ? ' mt-tabs-disabled' : '')}><i className="iconfont icon-arrowl"></i></a> : null;

        let nextBtn = this.state.overflow ? <a onClick={this.prevAndNextClick.bind(_this, 'next')} className={'mt-tabs-next' + (this.state.disable.next ? ' mt-tabs-disabled' : '')}><i className="iconfont icon-arrowr"></i></a> : null;

        let cName = ['mt-tabs'];
        if (className) {
            cName.push(className);
        }

        if (this.props.type === 'top') {
            return (
                <div className={cName.join(' ')} {...other}>
                    {prevBtn}
                    {nextBtn}
                    {head}
                    {body}
                </div>
            );
        } else if (this.props.type === 'bottom') {
            return (
                <div className={cName.join(' ')} {...other}>
                    {prevBtn}
                    {nextBtn}
                    {body}
                    {head}
                </div>
            );
        } else {
            cName.push('clearfix');
            cName.push('mt-tabs-' + this.props.type);
            return (
                <div className={cName.join(' ')} {...other}>
                    {head}
                    {body}
                </div>
            );
        }
    }
}

// 自定义的item 这里只是为了定义一个标签名称
class TabItem extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }
}

Tabs.TabItem = TabItem;

// 主页
export default Tabs;