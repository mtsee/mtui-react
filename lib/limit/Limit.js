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

require('./style.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Limit = function (_Component) {
    (0, _inherits3.default)(Limit, _Component);

    // 构造函数
    function Limit(props) {
        (0, _classCallCheck3.default)(this, Limit);
        return (0, _possibleConstructorReturn3.default)(this, (Limit.__proto__ || (0, _getPrototypeOf2.default)(Limit)).call(this, props));
    }

    (0, _createClass3.default)(Limit, [{
        key: 'render',


        //
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                size = _props.size,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'size']);


            if (children === null) {
                return null;
            }

            var cName = ['mt-limit'];
            if (className) {
                cName.push(className);
            }
            var text = '';
            if (children.length > size) {
                text = children.slice(0, size) + '...';
            } else {
                text = children;
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ title: children }, other, { className: cName.join(' ') }),
                text
            );
        }
    }]);
    return Limit;
}(_react.Component);

// 主页


Limit.defaultProps = {
    size: 10 // 默认10 个字
};
var _default = Limit;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Limit, 'Limit', 'dev/mtui/limit/Limit.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/limit/Limit.jsx');
}();

;
//# sourceMappingURL=Limit.js.map