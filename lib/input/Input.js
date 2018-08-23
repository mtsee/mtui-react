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

var Input = function (_Component) {
    (0, _inherits3.default)(Input, _Component);

    // 构造函数
    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Input, [{
        key: 'onChange',
        value: function onChange(e) {

            if (this.props.onChange) {
                this.props.onChange(e);
            }

            if (this.props.defaultValue !== undefined) {
                this.setState({
                    value: e.target.value
                });
            }
        }

        // 获取值

    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextProps.value !== this.props.value) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {

            // 不受控
            if (this.props.defaultValue !== undefined) {
                this.setState({
                    value: this.props.defaultValue
                });
            }

            // 受控
            if (this.props.value) {
                this.setState({
                    value: this.props.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                prefix = _props.prefix,
                block = _props.block,
                suffix = _props.suffix,
                type = _props.type,
                onPressEnter = _props.onPressEnter,
                className = _props.className,
                validateInfo = _props.validateInfo,
                onChange = _props.onChange,
                defaultValue = _props.defaultValue,
                value = _props.value,
                disabled = _props.disabled,
                other = (0, _objectWithoutProperties3.default)(_props, ['size', 'prefix', 'block', 'suffix', 'type', 'onPressEnter', 'className', 'validateInfo', 'onChange', 'defaultValue', 'value', 'disabled']);


            var cName = ['mt-input'];
            if (className) {
                cName.push(className);
            }
            if (size) {
                cName.push('mt-input-' + (!size ? 'nm' : size));
            }
            if (prefix) {
                cName.push('mt-input-prefix-out');
            }
            if (suffix) {
                cName.push('mt-input-suffix-out');
            }
            if (disabled) {
                cName.push('mt-input-disabled');
            }

            var obj = {};
            if (value !== undefined) {
                obj.value = value;
            }
            if (defaultValue !== undefined) {
                obj.defaultValue = defaultValue;
            }

            var style = {};
            if (block) {
                style = {
                    display: 'block'
                };
            }

            return _react2.default.createElement(
                'span',
                { style: style, className: cName.join(' ') },
                prefix ? _react2.default.createElement(
                    'span',
                    { className: 'mt-input-prefix' },
                    prefix
                ) : null,
                type === 'textarea' ? _react2.default.createElement('textarea', (0, _extends3.default)({ disabled: disabled }, obj, other, { onChange: this.onChange.bind(this) })) : _react2.default.createElement('input', (0, _extends3.default)({ type: type, disabled: disabled }, obj, other, { onChange: this.onChange.bind(this) })),
                suffix ? _react2.default.createElement(
                    'span',
                    { className: 'mt-input-suffix' },
                    suffix
                ) : null,
                validateInfo
            );
        }
    }]);
    return Input;
}(_react.Component);

// 主页


Input.defaultProps = {
    size: 'nm', // lg , nm, sm, xs 大 ，正常，小，超小
    type: 'text',
    block: false,
    prefix: null, // 前面的图标
    suffix: null, // 后面的图标
    onPressEnter: null, // 回车的回调
    validateInfo: null // 表单验证提示
};
var _default = Input;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Input, 'Input', 'dev/mtui/input/Input.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/input/Input.jsx');
}();

;
//# sourceMappingURL=Input.js.map