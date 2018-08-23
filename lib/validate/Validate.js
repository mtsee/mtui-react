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

var _regex = require('./regex');

var _regex2 = _interopRequireDefault(_regex);

var _eventProxy = require('../utils/eventProxy');

var _eventProxy2 = _interopRequireDefault(_eventProxy);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Validate = function (_Component) {
    (0, _inherits3.default)(Validate, _Component);

    // 构造函数
    function Validate(props) {
        (0, _classCallCheck3.default)(this, Validate);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Validate.__proto__ || (0, _getPrototypeOf2.default)(Validate)).call(this, props));

        _this.state = {
            type: 'nomarl', // 验证错误的类型
            info: ''
        };
        _this.onChange = null;
        _this.onFocus = null; // 获取焦点
        _this.onBlur = null; // 失去焦点
        _this.lockChange = true; // 监听 onChange的 锁
        return _this;
    }

    // 设置icon


    (0, _createClass3.default)(Validate, [{
        key: 'setIcon',
        value: function setIcon() {
            var suffix = void 0;
            if (this.state.type === 'nomarl') {
                suffix = _react2.default.createElement('i', { className: 'iconfont icon-null' });
            } else {
                suffix = _react2.default.createElement('i', { className: 'iconfont icon-' + this.state.type });
            }

            this.setState({
                suffix: suffix
            });
        }

        // 获取数组中，对应的长度

    }, {
        key: 'arrValLen',
        value: function arrValLen(arr) {
            var obj = {};
            for (var i = 0; i < arr.length; i++) {
                if (!obj[arr[i]['reslt']]) {
                    obj[arr[i]['reslt']] = 1;
                } else {
                    obj[arr[i]['reslt']]++;
                }
            }
            return obj;
        }

        // 通过arr 和 type 设置 info

    }, {
        key: 'setInfo',
        value: function setInfo(arr, type) {
            var info = '';
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].reslt === type) {
                    info = arr[i].info;
                    break;
                }
            }
            return info;
        }

        // 数据验证

    }, {
        key: 'validate',
        value: function validate(val) {
            // console.log(this.props.exgs)
            var exgs = this.props.exgs || [];
            var arr = [];
            for (var i = 0; i < exgs.length; i++) {
                var exg = void 0,
                    _info = void 0,
                    _type = void 0,
                    reslt = void 0;

                if (exgs[i].regs) {
                    exg = _regex2.default[exgs[i].regs];
                } else {
                    exg = exgs[i].regx;
                }
                _info = exgs[i].info;
                _type = exgs[i].type;
                if (new RegExp(exg).test(val)) {
                    reslt = 'success';
                } else {
                    reslt = _type;
                }
                arr.push({
                    type: _type,
                    info: _info,
                    reslt: reslt
                });
            }

            // 因为 type 和 info 有多个。这里danger优先显示原则进行显示
            var type = 'normal';
            var arrlen = this.arrValLen(arr);
            arrlen = arrlen || 0;

            if (arrlen['success'] === exgs.length) {
                type = 'success';
            } else {
                if (arrlen['warning'] || 0 !== 0 && arrlen['warning'] || 0 >= arrlen['danger'] || 0) {
                    type = 'warning';
                } else {
                    type = 'danger';
                }
            }
            var info = this.setInfo(arr, type);

            this.setState({
                type: type,
                info: type === 'success' ? '' : info
            }, function () {
                this.setIcon();
            });
        }
    }, {
        key: 'changeVal',
        value: function changeVal(e) {

            if (this.onChange) {
                this.onChange(e);
            }

            if (!this.lockChange || e.target.localName === 'div') {
                this.validate(e.target.value);
            }
        }
    }, {
        key: 'onFocusDo',
        value: function onFocusDo(e) {
            if (this.onFocus) {
                this.onFocus(e);
            }
        }
    }, {
        key: 'onBlurDo',
        value: function onBlurDo(e) {

            if (this.onBlur) {
                this.onBlur(e);
            }

            if (this.lockChange) {
                this.lockChange = false;
                this.validate(e.target.value);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setIcon();
            _eventProxy2.default.on('mt-validate', function () {
                var dom = _reactDom2.default.findDOMNode(this.refs.input);
                for (var i = 0; i < dom.children.length; i++) {
                    if (dom.children[i].localName === 'input') {
                        dom = dom.children[i];
                        break;
                    }
                }
                this.onBlurDo({
                    target: dom,
                    value: dom.value
                });
            }.bind(this));
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            // 受控的验证表单，如果type 存在
            if (this.props.type) {
                this.setState({
                    type: this.props.type
                });
            }
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextProps.type !== this.props.type) {
                this.setState({
                    type: nextProps.type
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _eventProxy2.default.off('mt-validate');
        }
    }, {
        key: 'render',
        value: function render() {

            var self = this;
            var cName = ['mt-validate'];
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                exgs = _props.exgs,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'exgs']);

            var child = _react2.default.Children.only(children);
            if (className) {
                cName.push(className);
            }

            if (this.state.type) {
                cName.push('mt-validate-' + this.state.type);
            }

            // 保留input 的 onChange
            if (!this.onChange && children.props.onChange) {
                this.onChange = children.props.onChange.bind(children);
            }
            // 保留this.onFocus this.onBlur
            if (!this.onFocus && children.props.onFocus) {
                this.onFocus = children.props.onFocus.bind(children);
            }
            if (!this.onBlur && children.props.onBlur) {
                this.onBlur = children.props.onBlur.bind(children);
            }

            var props = (0, _assign2.default)([{
                className: cName.join(' '),
                ref: 'input',
                suffix: self.state.suffix,
                onChange: self.changeVal.bind(self),
                onFocus: self.onFocusDo.bind(self),
                onBlur: self.onBlurDo.bind(self),
                validateInfo: self.state.info ? _react2.default.createElement(
                    'span',
                    { className: 'mt-validate-info' },
                    self.state.info
                ) : null
            }, (0, _extends3.default)({}, other)]);
            return _react2.default.cloneElement(child, props);
        }
    }]);
    return Validate;
}(_react.Component);

// 组


Validate.defaultProps = {
    size: '' // 默认,  min
};

var ValidateGroup = function (_Component2) {
    (0, _inherits3.default)(ValidateGroup, _Component2);

    function ValidateGroup(props) {
        (0, _classCallCheck3.default)(this, ValidateGroup);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (ValidateGroup.__proto__ || (0, _getPrototypeOf2.default)(ValidateGroup)).call(this, props));

        _this2.refForm = null;
        return _this2;
    }

    (0, _createClass3.default)(ValidateGroup, [{
        key: 'submitEvent',
        value: function submitEvent(e) {
            e.preventDefault();
            var elems = this.refForm.elements;

            for (var i = 0; i < elems.length; i++) {
                if (elems[i].localName === 'input') {
                    _eventProxy2.default.trigger('mt-validate');
                }
            }

            // 因为订阅的方法里面存在异步方法
            setTimeout(function () {
                var obj = {
                    danger: this.refForm.getElementsByClassName('mt-validate-danger').length,
                    warning: this.refForm.getElementsByClassName('mt-validate-warning').length
                };

                if (obj.danger + obj.warning === 0) {
                    obj['success'] = true;
                } else {
                    obj['success'] = false;
                }

                if (this.props.submit) {
                    this.props.submit(obj);
                }
            }.bind(this), 1);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                children = _props2.children,
                submit = _props2.submit,
                other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'submit']);

            return _react2.default.createElement(
                'form',
                (0, _extends3.default)({ ref: function ref(c) {
                        _this3.refForm = c;
                    }, onSubmit: this.submitEvent.bind(this) }, other),
                children
            );
        }
    }]);
    return ValidateGroup;
}(_react.Component);

Validate.ValidateGroup = ValidateGroup;

// 主页
var _default = Validate;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Validate, 'Validate', 'dev/mtui/validate/Validate.jsx');

    __REACT_HOT_LOADER__.register(ValidateGroup, 'ValidateGroup', 'dev/mtui/validate/Validate.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/validate/Validate.jsx');
}();

;
//# sourceMappingURL=Validate.js.map