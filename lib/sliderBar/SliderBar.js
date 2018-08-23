'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var SliderBar = function (_Component) {
    (0, _inherits3.default)(SliderBar, _Component);

    // 构造函数
    function SliderBar(props) {
        (0, _classCallCheck3.default)(this, SliderBar);
        return (0, _possibleConstructorReturn3.default)(this, (SliderBar.__proto__ || (0, _getPrototypeOf2.default)(SliderBar)).call(this, props));
    }

    (0, _createClass3.default)(SliderBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                type = _props.type,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'type']);

            var cName = ['mt-sliderbar-active'];
            if (className) {
                cName.push(className);
            }
            if (this.props.type) {
                cName.push('mt-sliderbar-active-' + this.props.type);
            } else {
                cName.push('mt-sliderbar-active');
            }
            return _react2.default.createElement(
                'div',
                { style: { width: this.props.width }, className: cName.join(' ') },
                _react2.default.createElement('div', { className: 'mt-sliderbar-active-bar', style: { width: this.props.width * this.props.value } })
            );
        }
    }]);
    return SliderBar;
}(_react.Component);

// 主页


SliderBar.defaultProps = {
    value: 0,
    width: 100
};
var _default = SliderBar;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SliderBar, 'SliderBar', 'dev/mtui/sliderBar/SliderBar.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/sliderBar/SliderBar.jsx');
}();

;
//# sourceMappingURL=SliderBar.js.map