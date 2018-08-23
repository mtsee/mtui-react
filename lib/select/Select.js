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

var _SelectModal = require('./SelectModal');

var _SelectModal2 = _interopRequireDefault(_SelectModal);

var _select = require('../utils/select');

var _offset = require('../utils/offset');

var _toArray = require('../utils/toArray');

var _triggerBlank = require('../utils/triggerBlank');

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);

    // 构造函数
    function Select(props) {
        (0, _classCallCheck3.default)(this, Select);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

        _this2.state = {
            show: false,
            text: '',
            value: '',
            modalWidth: 120
        };
        _this2.div = document.createElement('div');
        _this2.div.setAttribute('class', 'mt-div');
        _this2.handler = null;
        _this2.mid = null;

        _this2.refBtn = null;
        return _this2;
    }

    // 默认参数


    (0, _createClass3.default)(Select, [{
        key: 'setMid',
        value: function setMid() {
            if (this.mid === null) {
                this.mid = 'mt_select_' + +new Date();
            }
        }

        // 获取位置 

    }, {
        key: 'getPlace',
        value: function getPlace() {
            return (0, _offset.position)(this.refBtn);
        }

        // 渲染div

    }, {
        key: 'renderDiv',
        value: function renderDiv(mark) {
            var _this = this;
            var dom = document.getElementById(this.mid);
            // 首次渲染即可
            if (!dom || mark) {
                document.body.appendChild(this.div);
                this.renderDOM();
            }
        }
    }, {
        key: 'renderDOM',
        value: function renderDOM() {
            this.setMid();
            _reactDom2.default.render(_react2.default.createElement(_SelectModal2.default, (0, _extends3.default)({
                mid: this.mid }, this.state, {
                showOrHide: this.showOrHide.bind(this),
                modalWidth: this.state.modalWidth,
                show: this.state.show,
                getPlace: this.getPlace.bind(this) }, this.props)), this.div);
        }

        // /设置value

    }, {
        key: 'setValue',
        value: function setValue(data, callback) {
            this.setState({
                text: data.children,
                value: data.value
            }, function () {
                if (callback) {
                    callback(data);
                }
            });
        }

        // 隐藏显示

    }, {
        key: 'showOrHide',
        value: function showOrHide(show, data, callback, e) {

            this.hoverHandler = null;
            var self = this;
            this.setState({
                show: !show,
                modalWidth: this.refBtn.offsetWidth
            }, function () {

                this.renderDiv(true);

                if (!show) {
                    // 显示弹窗
                    if (self.props.showBack) {
                        self.props.showBack();
                    }
                } else {
                    (0, _triggerBlank.offClickBlank)(self.handler);

                    // 选择值
                    if (data) {

                        if (self.props.value) {
                            if (self.props.onChange) {
                                self.props.onChange(e, data);
                            }
                        } else {
                            this.setValue(data, function (data) {
                                if (self.props.onChange) {
                                    self.props.onChange(e, data);
                                }
                            });
                        }
                    }
                }
                if (callback) {
                    callback();
                }
            });
        }

        // 点击事件

    }, {
        key: 'handleClick',
        value: function handleClick() {

            // 如果不可用
            if (this.props.disabled) {
                return;
            }

            var self = this;
            var show = this.state.show;
            if (this.props.trigger === 'click') {
                this.showOrHide(show, null, function () {
                    if (self.handler) {
                        (0, _triggerBlank.offClickBlank)(self.handler);
                    }
                    self.handler = (0, _triggerBlank.clickBlank)(document.getElementById(self.mid), function (mark) {
                        if (!mark) {
                            self.showOrHide(true, null);
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

            // 受控组件
            if (this.props.value || this.props.defaultValue !== undefined) {
                // console.log('受控组件', this.props.value, prevProps.value);
                if (document.getElementById(this.mid)) {
                    this.renderDiv(true);
                }
            }
        }

        // 受控组件方法

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.value && this.props.value !== nextProps.value) {
                var self = this;
                nextProps.children.map(function (elem, index) {
                    if (elem.props.value === nextProps.value) {
                        self.setValue(elem.props);
                    }
                });
            }
        }

        // 初始化状态

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            var self = this;
            // 如果默认是显示，直接显示DIV
            if (this.props.visible) {
                self.renderDiv();
            }

            var child = (0, _toArray.toArray)(this.props.children);

            // 设置默认值
            if (this.props.defaultValue !== undefined || this.props.value !== undefined) {
                child.map(function (elem, index) {
                    if (elem.props.value === self.props.defaultValue || elem.props.value === self.props.value) {
                        self.setState({
                            text: elem.props.children,
                            value: elem.props.value
                        });
                    }
                });
            }

            // 不可用状态
            if (this.props.disabled) {
                return;
            }

            // hover事件
            if (this.props.trigger === 'hover') {
                var _self = this;

                this.hoverHandler = function (e) {
                    _self.showOrHide(false, null, function () {

                        // 绑定blank事件
                        if (_self.handler) {
                            (0, _triggerBlank.offClickBlank)(_self.handler, 'mousemove');
                        }
                        _self.handler = (0, _triggerBlank.clickBlank)(document.getElementById(_self.mid), function (mark) {
                            // console.log('hover', mark, new Date().getTime())
                            if (!mark) {
                                (0, _triggerBlank.offClickBlank)(_self.handler, 'mousemove');
                                _self.showOrHide(true, null);
                            }
                        }, 'mousemove', _self.refBtn);
                    });
                };
                this.refBtn.addEventListener('mouseover', this.hoverHandler);
            }
        }

        // 卸载组件

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.trigger === 'hover') {
                (0, _triggerBlank.offClickBlank)(this.handler, 'mousemove');
            } else {
                (0, _triggerBlank.offClickBlank)(this.handler);
            }
            this.refBtn.removeEventListener('mouseenter', this.hoverHandler);

            (0, _dom.removeDom)(this.div);
            _reactDom2.default.unmountComponentAtNode(this.div);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                className = _props.className,
                prefix = _props.prefix,
                suffix = _props.suffix,
                disabled = _props.disabled,
                width = _props.width,
                height = _props.height,
                block = _props.block,
                style = _props.style,
                validateInfo = _props.validateInfo,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'prefix', 'suffix', 'disabled', 'width', 'height', 'block', 'style', 'validateInfo']);

            var cName = ['mt-select-input'];
            if (className) {
                cName.push(className);
            }
            if (disabled) {
                cName.push('mt-input-disabled');
            }

            var styles = {};
            if (width) {
                styles['width'] = width;
            }
            if (height) {
                styles['height'] = height;
            }
            if (block) {
                styles['display'] = block ? 'block' : 'inline-block';
            }
            if (styles) {
                styles = (0, _assign2.default)([style || {}, styles]);
            }

            return _react2.default.createElement(
                'div',
                {
                    style: styles,
                    ref: function ref(c) {
                        _this3.refBtn = c;
                    },
                    className: cName.join(' '),
                    onClick: this.handleClick.bind(this) },
                prefix ? _react2.default.createElement(
                    'span',
                    { className: 'mt-input-prefix' },
                    prefix
                ) : null,
                _react2.default.createElement(
                    'span',
                    null,
                    this.state.text || _react2.default.createElement(
                        'i',
                        { className: 'mt-placeholder' },
                        this.props.placeholder
                    )
                ),
                _react2.default.createElement('i', { className: 'iconfont icon-arrowd' }),
                _react2.default.createElement('input', { type: 'text', value: this.state.value }),
                suffix ? _react2.default.createElement(
                    'span',
                    { className: 'mt-input-suffix' },
                    suffix
                ) : null,
                validateInfo
            );
        }
    }]);
    return Select;
}(_react.Component);

// /选项卡


Select.defaultProps = {
    visible: false, // 框默认隐藏
    showBack: null, // 显示时候的回调
    onChange: null, // 关闭时候的回调
    trigger: 'hover', // 触发下拉的行为
    placeholder: '下拉选择框',
    defaultValue: undefined, // 不受控组件
    value: undefined, // 受控组件
    prefix: null, // 前面的图标
    suffix: null, // 后面的图标
    validateInfo: null // 表单验证提示
};

var Option = function (_Component2) {
    (0, _inherits3.default)(Option, _Component2);

    function Option() {
        (0, _classCallCheck3.default)(this, Option);
        return (0, _possibleConstructorReturn3.default)(this, (Option.__proto__ || (0, _getPrototypeOf2.default)(Option)).apply(this, arguments));
    }

    (0, _createClass3.default)(Option, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                null,
                this.props.children
            );
        }
    }]);
    return Option;
}(_react.Component);

Select.Option = Option;

// 主页
var _default = Select;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Select, 'Select', 'dev/mtui/select/Select.jsx');

    __REACT_HOT_LOADER__.register(Option, 'Option', 'dev/mtui/select/Select.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/select/Select.jsx');
}();

;
//# sourceMappingURL=Select.js.map