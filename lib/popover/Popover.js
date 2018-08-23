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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PopoverBox = require('./PopoverBox');

var _PopoverBox2 = _interopRequireDefault(_PopoverBox);

var _offset = require('../utils/offset');

var _triggerBlank = require('../utils/triggerBlank');

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popover = function (_Component) {
    (0, _inherits3.default)(Popover, _Component);

    // 构造函数
    function Popover(props) {
        (0, _classCallCheck3.default)(this, Popover);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props));

        _this.state = {
            show: false
        };
        _this.div = document.createElement('div');
        _this.div.setAttribute('class', 'mt-div');
        _this.handler = null;
        _this.btn = null;
        _this.mid = null;
        return _this;
    }

    // getSetPlace


    // 默认参数


    (0, _createClass3.default)(Popover, [{
        key: 'getPlace',
        value: function getPlace() {
            return (0, _offset.position)(this.btn);
        }

        // 隐藏显示控制

    }, {
        key: 'showOrHide',
        value: function showOrHide(e, mark) {
            var self = this;

            this.setState({
                show: mark
            }, function () {
                this.renderDiv(true);

                // 如果是显示，就绑定点击空白事件
                if (mark) {

                    if (this.props.showBack) {
                        this.props.showBack();
                    }

                    if (this.props.trigger === 'click') {
                        if (this.handler) {
                            (0, _triggerBlank.offClickBlank)(this.handler);
                        }
                        // 绑定事件
                        this.handler = (0, _triggerBlank.clickBlank)(document.getElementById(this.mid), function (mark) {
                            if (!mark) {

                                self.setState({
                                    show: false
                                }, function () {
                                    self.renderDiv(true);
                                    (0, _triggerBlank.offClickBlank)(self.handler);
                                });
                            }
                        });
                    } else {
                        // 如果是hover 事件
                        if (this.handler) {
                            (0, _triggerBlank.offClickBlank)(this.handler, 'mousemove');
                        }
                        // 鼠标进入，如果显示，绑定mousemove事件
                        this.handler = (0, _triggerBlank.clickBlank)(document.getElementById(this.mid), function (mark) {

                            if (!mark) {
                                self.setState({
                                    show: false
                                }, function () {
                                    self.renderDiv(true);
                                    (0, _triggerBlank.offClickBlank)(self.handler, 'mousemove');
                                });
                            }
                        }, 'mousemove', self.btn, true);
                    }
                } else {

                    if (this.props.closeBack) {
                        this.props.closeBack();
                    }
                }
            });
        }

        // 鼠标进入

    }, {
        key: 'onMouseHandler',
        value: function onMouseHandler(e) {

            e.stopPropagation();
            e.preventDefault();

            if (!this.state.show) {
                this.showOrHide(e, true);
            }

            // 保留原来的事件
            if (this.props.children.props.onMouseMove) {
                this.props.children.props.onMouseMove(e);
            }
        }

        // 点击事件

    }, {
        key: 'onClickHandler',
        value: function onClickHandler(e) {

            this.showOrHide(e, !this.state.show);

            // 保留原来的事件
            if (this.props.children.props.onClick) {
                this.props.children.props.onClick(e);
            }
            if (this.props.onClick) {
                this.props.onClick(e);
            }
        }

        // 卸载组件

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.trigger === 'hover') {
                if (this.handler) {
                    (0, _triggerBlank.offClickBlank)(this.handler, 'mousemove');
                }
            } else {
                (0, _triggerBlank.offClickBlank)(this.handler);
            }
            (0, _dom.removeDom)(this.div);
            _reactDom2.default.unmountComponentAtNode(this.div);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            // 获取原生DOM
            this.btn = _reactDom2.default.findDOMNode(this);

            if (this.props.show) {
                this.onClickHandler();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.show !== this.props.show) {
                this.onClickHandler();
            }
        }

        // 设置mid

    }, {
        key: 'setMid',
        value: function setMid() {
            if (this.mid === null) {
                this.mid = 'mt_popover_' + new Date().getTime();
            }
        }

        // 渲染div

    }, {
        key: 'renderDiv',
        value: function renderDiv(mark) {
            this.setMid();
            var dom = document.getElementById(this.mid);
            // 首次渲染即可
            if (!dom || mark) {
                document.body.appendChild(this.div);
                _reactDom2.default.render(_react2.default.createElement(_PopoverBox2.default, {
                    className: this.props.className,
                    style: this.props.style,
                    mid: this.mid,
                    getPlace: this.getPlace.bind(this),
                    show: this.state.show,
                    place: this.props.place,
                    content: this.props.content }), this.div);
            }
        }

        // 渲染

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                trigger = _props.trigger,
                showBack = _props.showBack,
                closeBack = _props.closeBack,
                onMouseOver = _props.onMouseOver,
                other = (0, _objectWithoutProperties3.default)(_props, ['children', 'trigger', 'showBack', 'closeBack', 'onMouseOver']);
            var otherChild = (0, _objectWithoutProperties3.default)(children.props, []); // 完全复制子元素

            var child = _react2.default.Children.only(children);
            var props = {};
            // 重写事件
            if (trigger === 'hover') {
                props['onMouseMove'] = this.onMouseHandler.bind(this);
            } else {
                props['onClick'] = this.onClickHandler.bind(this);
            }
            props = (0, _assign2.default)([(0, _extends3.default)({}, otherChild), props]);
            var dom = _react2.default.cloneElement(child, props);

            return dom;
        }
    }]);
    return Popover;
}(_react.Component);

// 主页


Popover.defaultProps = {
    trigger: 'hover',
    show: false,
    showBack: null, // 显示时候的回调
    closeBack: null // 关闭时候的回调
};
var _default = Popover;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Popover, 'Popover', 'dev/mtui/popover/Popover.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/popover/Popover.jsx');
}();

;
//# sourceMappingURL=Popover.js.map