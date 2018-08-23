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

var Radio = function (_Component) {
    (0, _inherits3.default)(Radio, _Component);

    // 构造函数
    function Radio(props) {
        (0, _classCallCheck3.default)(this, Radio);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this, props));

        _this.state = {
            checked: false,
            value: null
        };
        return _this;
    }

    //


    (0, _createClass3.default)(Radio, [{
        key: 'onClick',
        value: function onClick(value, e) {

            if (this.props.onClick) {
                this.props.onClick(e);
            }

            if (this.props.disabled) {
                return;
            }

            if (this.props.onChange) {
                this.props.onChange(!this.props.checked, this.props, e);
            }

            if (this.props.defaultChecked !== undefined) {
                var checked = !this.state.checked;
                this.setState({
                    checked: checked,
                    value: value
                });
            }
        }

        // 获取值

    }, {
        key: 'getValue',
        value: function getValue() {
            return {
                checked: !this.state.checked,
                value: this.state.value
            };
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextProps.checked !== this.props.checked) {
                this.setState({
                    checked: nextProps.checked,
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {

            // 不受控
            if (this.props.defaultChecked !== undefined) {
                this.setState({
                    checked: this.props.defaultChecked,
                    value: this.props.value
                });
            }

            // 受控
            if (this.props.checked) {
                this.setState({
                    checked: this.props.checked,
                    value: this.props.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                onClick = _props.onClick,
                value = _props.value,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'disabled', 'onClick', 'value']);

            var cName = ['mt-radio'];

            if (this.state.checked) {
                cName.push('mt-radio-checked');
            }

            if (className) {
                cName.push(className);
            }

            if (disabled) {
                cName.push('mt-radio-disabled');
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { onClick: this.onClick.bind(this, value), className: cName.join(' ') }),
                _react2.default.createElement('span', { className: 'mt-radio-icon' }),
                _react2.default.createElement(
                    'span',
                    { className: 'mt-text' },
                    this.props.children
                )
            );
        }
    }]);
    return Radio;
}(_react.Component);

// /组


Radio.defaultProps = {
    checked: false,
    value: null };

var RadioGroup = function (_Component2) {
    (0, _inherits3.default)(RadioGroup, _Component2);

    // 构造函数
    function RadioGroup(props) {
        (0, _classCallCheck3.default)(this, RadioGroup);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call(this, props));

        _this2.state = {
            value: ''
        };
        return _this2;
    }

    (0, _createClass3.default)(RadioGroup, [{
        key: 'onRadioChange',
        value: function onRadioChange(checked, that, e) {
            //console.log(that);
            if (this.props.onChange) {
                this.props.onChange({
                    value: that.value,
                    children: that.children
                });
            }

            //不受控组件
            if (this.props.defaultValue) {
                this.setState({
                    value: that.value
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.defaultValue) {
                this.setState({
                    value: this.props.defaultValue
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                type = _props2.type,
                other = (0, _objectWithoutProperties3.default)(_props2, ['className', 'type']);

            var cName = ['mt-radio-group'];
            var self = this;
            var val = null;
            if (this.props.value) {
                val = this.props.value;
            } else {
                val = this.state.value;
            }

            if (type == 'button') {
                cName.push('mt-radio-group-button');
            }

            //ie9 兼容处理
            var tmp = '';
            if (MT_IE9) {
                tmp = new Date().getTime();
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cName.join(' ') }),
                this.props.children.map(function (elem, index) {
                    var _elem$props = elem.props,
                        children = _elem$props.children,
                        value = _elem$props.value,
                        other = (0, _objectWithoutProperties3.default)(_elem$props, ['children', 'value']);

                    var checked = val == value ? true : false;
                    return _react2.default.createElement(
                        Radio,
                        (0, _extends3.default)({}, other, { onChange: self.onRadioChange.bind(self), value: value, checked: checked, key: index + tmp }),
                        elem.props.children
                    );
                })
            );
        }
    }]);
    return RadioGroup;
}(_react.Component);

RadioGroup.defaultProps = {
    type: 'radio'
};


Radio.RadioGroup = RadioGroup;

//主页
var _default = Radio;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Radio, 'Radio', 'dev/mtui/radio/Radio.jsx');

    __REACT_HOT_LOADER__.register(RadioGroup, 'RadioGroup', 'dev/mtui/radio/Radio.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/radio/Radio.jsx');
}();

;
//# sourceMappingURL=Radio.js.map