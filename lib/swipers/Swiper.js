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
// changeback 切换的回调
// clickback 点击回调
// animate 是否开启动画
var Swiper = function (_Component) {
    (0, _inherits3.default)(Swiper, _Component);

    // 构造函数
    function Swiper(props) {
        (0, _classCallCheck3.default)(this, Swiper);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || (0, _getPrototypeOf2.default)(Swiper)).call(this, props));

        _this2.state = {
            activeIndex: props.activeIndex || 0,
            transX: 0,
            overflow: false,
            disable: {
                prev: false,
                next: false
            }
        };
        _this2.timer = null;
        return _this2;
    }

    (0, _createClass3.default)(Swiper, [{
        key: 'componentDidUpdate',


        // 更新设置
        value: function componentDidUpdate(nextProps, nextState) {

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

    }, {
        key: 'setActiveIndex',
        value: function setActiveIndex(index, callback) {
            var _tab = this.refs['swiper_' + index];
            var _this = this;
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

    }, {
        key: 'setTranslate3d',
        value: function setTranslate3d(that, index) {

            var thatLeft = that.offsetLeft + that.offsetWidth,
                headWidth = this.refs.head.offsetWidth,
                transX = Math.abs(this.state.transX);
            // 左超出
            if (transX > that.offsetLeft - 10) {
                // console.log('左超出')
                transX = that.offsetWidth - thatLeft + (index === 0 ? 0 : that.previousSibling.offsetWidth);
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

        // swiper切换触发

    }, {
        key: 'changeswiper',
        value: function changeswiper(index) {
            this.setActiveIndex(index);

            // 点击回调
            this.props.clickback ? this.props.clickback(index) : null;
        }

        // 超出宽度，显示切换按钮

    }, {
        key: 'setOverflow',
        value: function setOverflow() {
            // overflow 判断
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

    }, {
        key: 'prevNextButtonClick',
        value: function prevNextButtonClick(mark) {
            var index = this.state.activeIndex;
            var len = this.props.children.length;
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
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
            this.timer = null;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.children.length !== 0) {
                this.setActiveIndex(this.state.activeIndex);
                // 设置overflow
                this.setOverflow();
            }

            // 自动播放
            if (this.props.autoPlay) {
                var self = this;
                this.timer = setInterval(function () {
                    var index = self.state.activeIndex;
                    if (index > self.props.children.length - 2) {
                        index = 0;
                    } else {
                        index++;
                    }
                    self.setActiveIndex(index);
                }, this.props.autoPlay);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var _this = this;
            var _props = this.props,
                activeIndex = _props.activeIndex,
                changeback = _props.changeback,
                animate = _props.animate,
                button = _props.button,
                autoPlay = _props.autoPlay,
                other = (0, _objectWithoutProperties3.default)(_props, ['activeIndex', 'changeback', 'animate', 'button', 'autoPlay']);

            var head = _react2.default.createElement(
                'div',
                { ref: 'head', style: { width: this.props.style.width - 40 }, className: "mt-swiper-header" + (this.state.overflow ? ' mt-swiper-overflow' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'mt-swiper-headbox', style: { "transform": "translate3d(" + this.state.transX + "px,0,0)" } },
                    _react2.default.createElement(
                        'ul',
                        { ref: 'box', className: 'clearfix' },
                        this.props.children.length != 0 ? this.props.children.map(function (elem, index) {
                            return _react2.default.createElement(
                                'li',
                                { ref: 'swiper_' + index, onClick: _this.changeswiper.bind(_this, index), key: index, className: "mt-swiper-tab" + (_this.state.activeIndex == index ? ' mt-swiper-tab-active' : '') },
                                elem.props.name
                            );
                        }) : null
                    )
                )
            );
            var body = _react2.default.createElement(
                'div',
                { className: 'mt-swiper-content' },
                _react2.default.createElement(
                    'div',
                    { className: "mt-swiper-items clearfix" + (" mt-swiper-animate-" + this.props.animate) },
                    this.props.children.length != 0 ? this.props.children.map(function (elem, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: index, className: "mt-swiper-item" + (_this.state.activeIndex == index ? ' mt-swiper-item-active' : '') },
                            elem.props.children
                        );
                    }) : null
                )
            );
            var prevBtn = this.state.overflow ? _react2.default.createElement(
                'a',
                { onClick: this.prevAndNextClick.bind(_this, 'prev'), className: "mt-swiper-prev" + (this.state.disable.prev ? ' mt-swiper-disabled' : '') },
                _react2.default.createElement('i', { className: 'iconfont icon-arrowl' })
            ) : null;
            var nextBtn = this.state.overflow ? _react2.default.createElement(
                'a',
                { onClick: this.prevAndNextClick.bind(_this, 'next'), className: "mt-swiper-next" + (this.state.disable.next ? ' mt-swiper-disabled' : '') },
                _react2.default.createElement('i', { className: 'iconfont icon-arrowr' })
            ) : null;

            // 切换图
            var prevButton = this.props.button ? _react2.default.createElement(
                'a',
                { onClick: this.prevNextButtonClick.bind(_this, 'prev'), className: 'mt-swiper-prevbutton' },
                _react2.default.createElement('i', { className: 'iconfont icon-arrowl' })
            ) : null;
            var nextButton = this.props.button ? _react2.default.createElement(
                'a',
                { onClick: this.prevNextButtonClick.bind(_this, 'next'), className: 'mt-swiper-nextbutton' },
                _react2.default.createElement('i', { className: 'iconfont icon-arrowr' })
            ) : null;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: 'mt-swiper' }, other),
                prevButton,
                nextButton,
                prevBtn,
                nextBtn,
                head,
                body
            );
        }
    }]);
    return Swiper;
}(_react.Component);

// 自定义的item 这里只是为了定义一个标签名称


Swiper.defaultProps = {
    animate: 'move',
    name: '',
    button: true,
    autoPlay: false };

var SwiperItem = function (_Component2) {
    (0, _inherits3.default)(SwiperItem, _Component2);

    // 构造函数
    function SwiperItem(props) {
        (0, _classCallCheck3.default)(this, SwiperItem);
        return (0, _possibleConstructorReturn3.default)(this, (SwiperItem.__proto__ || (0, _getPrototypeOf2.default)(SwiperItem)).call(this, props));
    }

    (0, _createClass3.default)(SwiperItem, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return SwiperItem;
}(_react.Component);

Swiper.SwiperItem = SwiperItem;

// 主页
var _default = Swiper;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Swiper, 'Swiper', 'dev/mtui/swipers/Swiper.jsx');

    __REACT_HOT_LOADER__.register(SwiperItem, 'SwiperItem', 'dev/mtui/swipers/Swiper.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/swipers/Swiper.jsx');
}();

;
//# sourceMappingURL=Swiper.js.map