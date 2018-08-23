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

var Switch = function (_Component) {
    (0, _inherits3.default)(Switch, _Component);

    // 构造函数
    function Switch(props) {
        (0, _classCallCheck3.default)(this, Switch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).call(this, props));

        _this.state = {
            checked: false
        };
        return _this;
    }

    (0, _createClass3.default)(Switch, [{
        key: 'clickEvent',
        value: function clickEvent(e) {

            if (this.props.disabled) {
                return;
            }

            if (this.props.onChange) {
                this.props.onChange(!this.state.checked);
            }

            if (this.props.onClick) {
                this.props.onClick();
            }

            // 设置
            this.setState({
                checked: !this.state.checked
            });
        }

        // 更新

    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextProps.defaultValue != this.props.defaultValue) {
                this.setState({
                    checked: nextProps.defaultValue
                }, function () {
                    if (this.props.onChange) {
                        this.props.onChange(nextProps.defaultValue);
                    }
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                checked: this.props.defaultValue
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                size = _props.size,
                disabled = _props.disabled,
                defaultValue = _props.defaultValue,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'size', 'disabled', 'defaultValue']);

            var arr = ['mt-switch'];

            // 尺寸
            if (size) {
                arr.push('mt-switch-' + size);
            }

            // classname
            if (className) {
                arr.push(className);
            }

            // checked
            if (this.state.checked) {
                arr.push('mt-switch-on');
            } else {
                arr.push('mt-switch-off');
            }

            // disabled
            if (disabled) {
                arr.push('mt-switch-disabled');
            }

            return _react2.default.createElement('span', (0, _extends3.default)({ onClick: this.clickEvent.bind(this) }, other, { className: arr.join(' ') }));
        }
    }]);
    return Switch;
}(_react.Component);

// 主页


Switch.defaultProps = {
    size: 'nm', // 默认nm,lg,sm,xs
    disabled: false,
    defaultValue: false };
var _default = Switch;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Switch, 'Switch', 'dev/mtui/switch/Switch.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/switch/Switch.jsx');
}();

;
//# sourceMappingURL=Switch.js.map