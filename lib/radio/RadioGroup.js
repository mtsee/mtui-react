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

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /组
var RadioGroup = function (_Component) {
    (0, _inherits3.default)(RadioGroup, _Component);

    // 构造函数
    function RadioGroup(props) {
        (0, _classCallCheck3.default)(this, RadioGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    (0, _createClass3.default)(RadioGroup, [{
        key: 'onRadioChange',
        value: function onRadioChange(checked, that, e) {
            // console.log(that);
            if (this.props.onChange) {
                this.props.onChange({
                    value: that.value,
                    children: that.children
                });
            }

            // 不受控组件
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
            var _props = this.props,
                className = _props.className,
                type = _props.type,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'type']);

            var cName = ['mt-radio-group'];
            var self = this;
            var val = null;
            if (this.props.value) {
                val = this.props.value;
            } else {
                val = this.state.value;
            }

            if (type === 'button') {
                cName.push('mt-radio-group-button');
            }

            // ie9 兼容处理
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

                    var checked = val === value ? true : false;
                    return _react2.default.createElement(
                        _Radio2.default,
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


_Radio2.default.RadioGroup = RadioGroup;

// 主页
var _default = _Radio2.default;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RadioGroup, 'RadioGroup', 'dev/mtui/radio/RadioGroup.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/radio/RadioGroup.jsx');
}();

;
//# sourceMappingURL=RadioGroup.js.map