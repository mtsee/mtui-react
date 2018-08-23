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

var Checkbox = function (_Component) {
    (0, _inherits3.default)(Checkbox, _Component);

    // 构造函数
    function Checkbox(props) {
        (0, _classCallCheck3.default)(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this, props));

        _this.state = {
            checked: false,
            value: null
        };
        return _this;
    }

    //


    (0, _createClass3.default)(Checkbox, [{
        key: 'onClick',
        value: function onClick(val, e) {

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
                    value: val
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
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                onClick = _props.onClick,
                checked = _props.checked,
                value = _props.value,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'disabled', 'onClick', 'checked', 'value']);

            var cName = ['mt-checkbox'];

            if (this.state.checked && this.state.checked !== 'other') {
                cName.push('mt-checkbox-checked');
            } else if (this.state.checked === 'other') {
                cName.push('mt-checkbox-other');
            }

            if (className) {
                cName.push(className);
            }

            if (disabled) {
                cName.push('mt-checkbox-disabled');
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { onClick: this.onClick.bind(this, value), className: cName.join(' ') }),
                _react2.default.createElement('span', { className: 'mt-checkbox-icon' }),
                _react2.default.createElement(
                    'span',
                    { className: 'mt-text' },
                    this.props.children
                )
            );
        }
    }]);
    return Checkbox;
}(_react.Component);

// /组


Checkbox.defaultProps = {
    checked: false,
    value: null };

var CheckboxGroup = function (_Component2) {
    (0, _inherits3.default)(CheckboxGroup, _Component2);

    // 构造函数
    function CheckboxGroup(props) {
        (0, _classCallCheck3.default)(this, CheckboxGroup);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (CheckboxGroup.__proto__ || (0, _getPrototypeOf2.default)(CheckboxGroup)).call(this, props));

        _this2.state = {
            value: []
        };
        return _this2;
    }

    (0, _createClass3.default)(CheckboxGroup, [{
        key: 'changeGroup',
        value: function changeGroup(checked, that, e) {

            var arr = this.state.value;
            if (checked && arr.indexOf(that.value) === -1) {
                arr.push(that.value);
            } else {
                arr.splice(arr.indexOf(that.value), 1);
            }

            if (this.props.onChange) {
                this.props.onChange(arr);
            }

            // 不受控组件
            if (this.props.defaultValue) {
                this.setState({
                    value: arr
                });
            }
        }

        // 受控组件

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.defaultValue) {
                this.setState({
                    value: this.props.defaultValue
                });
            }

            if (this.props.value) {
                this.setState({
                    value: this.props.value
                });
            }
        }

        // 受控组件

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
        key: 'render',
        value: function render() {

            var self = this;
            var _props2 = this.props,
                className = _props2.className,
                type = _props2.type,
                other = (0, _objectWithoutProperties3.default)(_props2, ['className', 'type']);

            var cName = ['mt-checkbox-group'];

            if (type === 'button') {
                cName.push('mt-checkbox-group-button');
            }

            var tmp = '';
            if (MT_IE9) {
                tmp = new Date().getTime();
            }

            return _react2.default.createElement(
                'div',
                { className: cName.join(' ') },
                this.props.children.map(function (elem, index) {
                    var _elem$props = elem.props,
                        children = _elem$props.children,
                        checked = _elem$props.checked,
                        other = (0, _objectWithoutProperties3.default)(_elem$props, ['children', 'checked']);


                    var check = false;
                    if (self.state.value.indexOf(elem.props.value) !== -1) {
                        check = true;
                    }
                    return _react2.default.createElement(
                        Checkbox,
                        (0, _extends3.default)({ onChange: self.changeGroup.bind(self), checked: check || checked }, other, { key: index + tmp }),
                        elem.props.children
                    );
                })
            );
        }
    }]);
    return CheckboxGroup;
}(_react.Component);

CheckboxGroup.defaultProps = {
    type: 'checkbox',
    value: null
};


Checkbox.CheckboxGroup = CheckboxGroup;

// 主页
var _default = Checkbox;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', 'dev/mtui/checkbox/Checkbox.jsx');

    __REACT_HOT_LOADER__.register(CheckboxGroup, 'CheckboxGroup', 'dev/mtui/checkbox/Checkbox.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/checkbox/Checkbox.jsx');
}();

;
//# sourceMappingURL=Checkbox.js.map