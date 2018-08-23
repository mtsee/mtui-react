'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// activeIndex 默认选中
// changeBack 切换的回调
// clickBack 点击回调
// type tabs 定位位置  left,top,bottom,right
// animate 是否开启动画
var Tabs = function (_Component) {
    (0, _inherits3.default)(Tabs, _Component);

    // 构造函数
    function Tabs(props) {
        (0, _classCallCheck3.default)(this, Tabs);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

        _this2.state = {
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
        return _this2;
    }

    (0, _createClass3.default)(Tabs, [{
        key: 'setActiveIndex',


        // 设置选中
        value: function setActiveIndex(index, callback) {
            var _tab = this.refs['tab_' + index];
            var _this = this;
            var barStyle = null;
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

    }, {
        key: 'setTranslate3d',
        value: function setTranslate3d(that, index) {

            // 如果是left.right 不设置transX
            if (this.props.type === 'left' || this.props.type === 'right') {
                return;
            }

            var thatLeft = that.offsetLeft + that.offsetWidth,
                headWidth = this.refs.head.offsetWidth,
                transX = Math.abs(this.state.transX);
            // 左超出
            if (transX > that.offsetLeft - 10) {
                // console.log('左超出')
                transX = that.offsetWidth - thatLeft + (index == 0 ? 0 : that.previousSibling.offsetWidth);
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

    }, {
        key: 'setTransX',
        value: function setTransX(transX) {
            var disable = null;
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

    }, {
        key: 'changeTabs',
        value: function changeTabs(index) {
            this.setActiveIndex(index);

            // 点击回调
            this.props.clickBack ? this.props.clickBack(index) : null;
        }

        // 超出宽度，显示切换按钮

    }, {
        key: 'setOverflow',
        value: function setOverflow() {
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

    }, {
        key: 'prevAndNextClick',
        value: function prevAndNextClick(mark) {
            var transX = Math.abs(this.state.transX);
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
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.children.length != 0) {
                this.setActiveIndex(this.state.activeIndex);
                // 设置overflow
                this.setOverflow();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            // 监听按钮
            if (nextProps.children.length !== this.props.children.length) {
                // 设置overflow
                this.setOverflow();
            }

            if (nextProps.activeIndex !== this.props.activeIndex) {
                this.setState({
                    activeIndex: nextProps.activeIndex
                }, function () {
                    _this3.setActiveIndex(nextProps.activeIndex);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var _this = this;
            var _props = this.props,
                activeIndex = _props.activeIndex,
                changeBack = _props.changeBack,
                className = _props.className,
                animate = _props.animate,
                other = (0, _objectWithoutProperties3.default)(_props, ['activeIndex', 'changeBack', 'className', 'animate']);

            var style = null;
            if (MT_IE9) {
                style = { 'left': this.state.transX };
            } else {
                style = { 'transform': 'translate3d(' + this.state.transX + 'px,0,0)' };
            }

            var head = _react2.default.createElement(
                'div',
                { ref: 'head', className: 'mt-tabs-header' + (this.state.overflow ? ' mt-tabs-overflow' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'mt-tabs-headbox', style: style },
                    _react2.default.createElement(
                        'ul',
                        { ref: 'box', className: 'clearfix' },
                        this.props.children.length != 0 ? this.props.children.map(function (elem, index) {
                            if (!elem) {
                                return null;
                            }
                            return _react2.default.createElement(
                                'li',
                                { ref: 'tab_' + index, onClick: _this.changeTabs.bind(_this, index), key: elem.key ? elem.key : index, className: 'mt-tabs-tab' + (_this.state.activeIndex == index ? ' mt-tabs-tab-active' : '') },
                                elem.props.name
                            );
                        }) : null
                    ),
                    _react2.default.createElement('div', { className: 'mt-tabs-active-bar', style: this.state.barStyle })
                )
            );

            var body = _react2.default.createElement(
                'div',
                { className: 'mt-tabs-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'mt-tabs-items clearfix' + (this.props.animate ? ' mt-tabs-animate' : '') },
                    this.props.children.length !== 0 ? this.props.children.map(function (elem, index) {
                        if (!elem) {
                            return null;
                        }
                        return _react2.default.createElement(
                            'div',
                            { key: elem.key ? elem.key : index, className: "mt-tabs-item" + (_this.state.activeIndex == index ? ' mt-tabs-item-active' : '') },
                            elem.props.children
                        );
                    }) : null
                )
            );

            var prevBtn = this.state.overflow ? _react2.default.createElement(
                'a',
                { onClick: this.prevAndNextClick.bind(_this, 'prev'), className: 'mt-tabs-prev' + (this.state.disable.prev ? ' mt-tabs-disabled' : '') },
                _react2.default.createElement('i', { className: 'iconfont icon-arrowl' })
            ) : null;

            var nextBtn = this.state.overflow ? _react2.default.createElement(
                'a',
                { onClick: this.prevAndNextClick.bind(_this, 'next'), className: 'mt-tabs-next' + (this.state.disable.next ? ' mt-tabs-disabled' : '') },
                _react2.default.createElement('i', { className: 'iconfont icon-arrowr' })
            ) : null;

            var cName = ['mt-tabs'];
            if (className) {
                cName.push(className);
            }

            if (this.props.type === 'top') {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cName.join(' ') }, other),
                    prevBtn,
                    nextBtn,
                    head,
                    body
                );
            } else if (this.props.type === 'bottom') {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cName.join(' ') }, other),
                    prevBtn,
                    nextBtn,
                    body,
                    head
                );
            } else {
                cName.push('clearfix');
                cName.push('mt-tabs-' + this.props.type);
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cName.join(' ') }, other),
                    head,
                    body
                );
            }
        }
    }]);
    return Tabs;
}(_react.Component);

// 自定义的item 这里只是为了定义一个标签名称


Tabs.defaultProps = {
    type: 'top',
    animate: true };

var TabItem = function (_Component2) {
    (0, _inherits3.default)(TabItem, _Component2);

    // 构造函数
    function TabItem(props) {
        (0, _classCallCheck3.default)(this, TabItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabItem.__proto__ || (0, _getPrototypeOf2.default)(TabItem)).call(this, props));
    }

    (0, _createClass3.default)(TabItem, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return TabItem;
}(_react.Component);

Tabs.TabItem = TabItem;

// 主页
var _default = Tabs;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tabs, 'Tabs', 'dev/mtui/tab/Tabs.jsx');

    __REACT_HOT_LOADER__.register(TabItem, 'TabItem', 'dev/mtui/tab/Tabs.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/tab/Tabs.jsx');
}();

;
//# sourceMappingURL=Tabs.js.map