'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _DropModal = require('./DropModal');

var _DropModal2 = _interopRequireDefault(_DropModal);

var _dom = require('../utils/dom');

var _offset = require('../utils/offset');

var _triggerBlank = require('../utils/triggerBlank');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { render } from 'react-dom';
var DropDown = function (_Component) {
    (0, _inherits3.default)(DropDown, _Component);

    // 构造函数
    function DropDown(props) {
        (0, _classCallCheck3.default)(this, DropDown);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (DropDown.__proto__ || (0, _getPrototypeOf2.default)(DropDown)).call(this, props));

        _this2.state = {
            show: props.visible
        };
        _this2.div = document.createElement('div');
        _this2.div.setAttribute('class', 'mt-div');
        _this2.handler = null;
        _this2.mid = null;

        _this2.refBtn = null;
        return _this2;
    }

    // 设置 mid


    // 默认参数


    (0, _createClass3.default)(DropDown, [{
        key: 'setMid',
        value: function setMid() {
            if (this.mid === null) {
                this.mid = 'mt_dropdown_' + +new Date();
            }
        }
    }, {
        key: 'getPlace',
        value: function getPlace() {
            return (0, _offset.position)(this.refBtn);
        }

        // 渲染div

    }, {
        key: 'renderDiv',
        value: function renderDiv(mark) {
            this.setMid();
            var _this = this;
            var dom = document.getElementById(this.mid);
            // 首次渲染即可
            if (!dom || mark) {
                if (!mark) {
                    document.body.appendChild(this.div);
                }
                // console.log(ReactDOM);
                _reactDom2.default.render(_react2.default.createElement(_DropModal2.default, (0, _extends3.default)({ mid: this.mid, getPlace: this.getPlace.bind(this), show: this.state.show }, this.props)), this.div);
            }
        }

        // 隐藏显示

    }, {
        key: 'showOrHide',
        value: function showOrHide(show, callback) {
            var self = this;
            this.renderDiv();
            this.setState({
                show: !show
            }, function () {
                if (self.state.show && self.props.showBack) {
                    self.props.showBack();
                } else if (self.props.closeBack) {
                    self.props.closeBack();
                }
                if (callback) {
                    callback();
                }
            });
            this.hoverHandler = null;
        }

        // 点击事件

    }, {
        key: 'handleClick',
        value: function handleClick() {
            var self = this;
            var show = this.state.show;
            if (this.props.trigger === 'click') {
                this.showOrHide(show, function () {
                    if (self.handler) {
                        (0, _triggerBlank.offClickBlank)(self.handler);
                    }
                    self.handler = (0, _triggerBlank.clickBlank)(document.getElementById(self.mid), function (mark) {
                        if (!mark) {
                            self.showOrHide(true);
                            (0, _triggerBlank.offClickBlank)(self.handler);
                        }
                    });
                });
            } else {
                return;
            }
        }

        // 更新弹窗里面的数据

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (document.getElementById(this.mid)) {
                this.renderDiv(true);
            }
        }

        // 初始化状态

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            // 如果默认是显示，直接显示DIV
            if (this.props.visible) {
                this.renderDiv();
            }

            // hover事件
            if (this.props.trigger === 'hover') {
                var self = this;

                // hover 事件
                this.hoverHandler = function (e) {
                    // 如果显示，不再继续显示
                    if (self.state.show) {
                        return;
                    }
                    self.showOrHide(false, function () {
                        if (self.handler) {
                            (0, _triggerBlank.offClickBlank)(self.handler, 'mousemove');
                        }
                        // 点击其他区域，隐藏
                        self.handler = (0, _triggerBlank.clickBlank)(document.getElementById(self.mid), function (mark) {
                            if (!mark) {
                                self.showOrHide(true, null);
                                (0, _triggerBlank.offClickBlank)(self.handler, 'mousemove');
                            }
                        }, 'mousemove', self.refBtn);
                    });
                };

                // 绑定 hover
                this.refBtn.addEventListener('mouseover', this.hoverHandler);
            }
        }

        // 卸载组件

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.trigger === 'hover') {
                (0, _triggerBlank.offClickBlank)(this.handler, 'mousemove');
                this.refBtn.removeEventListener('mouseover', this.hoverHandler);
            } else {
                (0, _triggerBlank.offClickBlank)(this.handler);
            }
            (0, _dom.removeDom)(this.div);
            _reactDom2.default.unmountComponentAtNode(this.div);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var Component = this.props.btn.type;
            var _props$btn$props = this.props.btn.props,
                children = _props$btn$props.children,
                className = _props$btn$props.className,
                other = (0, _objectWithoutProperties3.default)(_props$btn$props, ['children', 'className']);

            var cName = ['mt-dropdown-btn'];
            if (className) {
                cName.push(className);
            }
            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({ ref: function ref(c) {
                        _this3.refBtn = c;
                    }, className: cName.join(' '), onClick: this.handleClick.bind(this) }, other),
                children
            );
        }
    }]);
    return DropDown;
}(_react.Component);

// 主页


DropDown.defaultProps = {
    btn: _react2.default.createElement(
        'a',
        null,
        'dropdown'
    ),
    style: {}, // modal的样式
    visible: false, // 框默认隐藏
    showBack: null, // 显示时候的回调
    closeBack: null, // 关闭时候的回调
    trigger: 'hover' // 触发下拉的行为
};
var _default = DropDown;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DropDown, 'DropDown', 'dev/mtui/dropdown/Dropdown.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/dropdown/Dropdown.jsx');
}();

;
//# sourceMappingURL=Dropdown.js.map