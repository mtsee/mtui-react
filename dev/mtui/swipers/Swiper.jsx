
import React, { Component } from 'react';

// activeIndex 默认选中
// changeback 切换的回调
// clickback 点击回调
// animate 是否开启动画
class Swiper extends Component {

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex || 0,
            transX: 0,
            overflow: false,
            disable: {
                prev: false,
                next: false
            }
        }
        this.timer = null;
    }

    static defaultProps = {
        animate: 'move',
        name: '',
        button: true,
        autoPlay: false
    }

    // 更新设置
    componentDidUpdate(nextProps, nextState) {

        // 设置选中状态
        if (nextProps.activeIndex !== this.props.activeIndex) {
            this.setActiveIndex(nextProps.activeIndex);
        }

        // 监听按钮
        if (nextProps.children.length !== this.props.children.length) {
            // 设置overflow
            this.setOverflow();
        }
    }

    // 设置选中
    setActiveIndex(index, callback) {
        let _tab = this.refs['swiper_' + index];
        let _this = this;
        this.setState({
            activeIndex: index
        }, function () {
            // 设置moreStyle
            _this.setTranslate3d(_tab, index);
        });

        // 变化回调函数
        this.props.changeback ? this.props.changeback(index) : null;
    }

    // 设置transX
    setTranslate3d(that, index) {

        let thatLeft = that.offsetLeft + that.offsetWidth,
            headWidth = this.refs.head.offsetWidth,
            transX = Math.abs(this.state.transX);
        // 左超出
        if (transX > that.offsetLeft - 10) {
            // console.log('左超出')
            transX = that.offsetWidth - thatLeft + (index === 0 ? 0 : that.previousSibling.offsetWidth)
        } else if (thatLeft - transX > headWidth - (that.nextSibling ? that.nextSibling.offsetWidth : 0)) {
            // console.log('右超出')
            // 偏移headWidth - thatLeft;
            transX = headWidth - thatLeft - (this.props.children.length === index + 1 ? 0 : that.nextSibling.offsetWidth);
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

    // swiper切换触发
    changeswiper(index) {
        this.setActiveIndex(index);

        // 点击回调
        this.props.clickback ? this.props.clickback(index) : null;
    }

    // 超出宽度，显示切换按钮
    setOverflow() {
        // overflow 判断
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
        if (mark === 'prev') {
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

    // 上一个图
    prevNextButtonClick(mark) {
        let index = this.state.activeIndex;
        let len = this.props.children.length;
        if (mark === 'prev') {
            index--;
            if (index < 0) {
                index = len - 1;
            }
        } else {
            index++;
            if (index > len - 1) {
                index = 0;
            }
        }
        this.setActiveIndex(index);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    componentDidMount() {
        if (this.props.children.length !== 0) {
            this.setActiveIndex(this.state.activeIndex);
            // 设置overflow
            this.setOverflow();
        }

        // 自动播放
        if (this.props.autoPlay) {
            let self = this;
            this.timer = setInterval(function () {
                let index = self.state.activeIndex;
                if (index > self.props.children.length - 2) {
                    index = 0;
                } else {
                    index++;
                }
                self.setActiveIndex(index);
            }, this.props.autoPlay);
        }
    }

    render() {

        let _this = this;
        let { activeIndex, changeback, animate, button, autoPlay, ...other } = this.props;
        let head = <div ref="head" style={{ width: this.props.style.width - 40 }} className={"mt-swiper-header" + (this.state.overflow ? ' mt-swiper-overflow' : '')}>
            <div className="mt-swiper-headbox" style={{ "transform": "translate3d(" + this.state.transX + "px,0,0)" }}>
                <ul ref="box" className="clearfix">
                    {
                        this.props.children.length != 0 ?
                            this.props.children.map(function (elem, index) {
                                return <li ref={'swiper_' + index} onClick={_this.changeswiper.bind(_this, index)} key={index} className={"mt-swiper-tab" + (_this.state.activeIndex == index ? ' mt-swiper-tab-active' : '')}>{elem.props.name}</li>
                            }) : null
                    }
                </ul>
            </div>
        </div>
        let body = <div className="mt-swiper-content">
            <div className={"mt-swiper-items clearfix" + (" mt-swiper-animate-" + this.props.animate)}>
                {
                    this.props.children.length != 0 ?
                        this.props.children.map(function (elem, index) {
                            return <div key={index} className={"mt-swiper-item" + (_this.state.activeIndex == index ? ' mt-swiper-item-active' : '')}>{elem.props.children}</div>
                        }) : null
                }
            </div>
        </div>;
        let prevBtn = this.state.overflow ? <a onClick={this.prevAndNextClick.bind(_this, 'prev')} className={"mt-swiper-prev" + (this.state.disable.prev ? ' mt-swiper-disabled' : '')}><i className="iconfont icon-arrowl"></i></a> : null;
        let nextBtn = this.state.overflow ? <a onClick={this.prevAndNextClick.bind(_this, 'next')} className={"mt-swiper-next" + (this.state.disable.next ? ' mt-swiper-disabled' : '')}><i className="iconfont icon-arrowr"></i></a> : null;

        // 切换图
        let prevButton = this.props.button ? <a onClick={this.prevNextButtonClick.bind(_this, 'prev')} className="mt-swiper-prevbutton"><i className="iconfont icon-arrowl"></i></a> : null;
        let nextButton = this.props.button ? <a onClick={this.prevNextButtonClick.bind(_this, 'next')} className="mt-swiper-nextbutton"><i className="iconfont icon-arrowr"></i></a> : null;

        return (
            <div className="mt-swiper" {...other}>
                {prevButton}
                {nextButton}
                {prevBtn}
                {nextBtn}
                {head}
                {body}
            </div>
        )
    }
}

// 自定义的item 这里只是为了定义一个标签名称
class SwiperItem extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }
}

Swiper.SwiperItem = SwiperItem;

// 主页
export default Swiper;