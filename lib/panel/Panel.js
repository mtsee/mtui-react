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

var Panel = function (_Component) {
    (0, _inherits3.default)(Panel, _Component);

    // 构造函数
    function Panel(props) {
        (0, _classCallCheck3.default)(this, Panel);
        return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).call(this, props));
    }

    (0, _createClass3.default)(Panel, [{
        key: 'render',


        //
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                size = _props.size,
                header = _props.header,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'size', 'header']);

            var cName = [];
            if (size) {
                cName.push('mt-panel-' + size);
            } else {
                cName.push('mt-panel');
            }

            if (className) {
                cName.push(className);
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cName.join(' ') }),
                _react2.default.createElement(
                    'h3',
                    { className: 'mt-panel-h2' },
                    this.props.header
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mt-panel-box' },
                    children
                )
            );
        }
    }]);
    return Panel;
}(_react.Component);

// 主页


Panel.defaultProps = {
    size: '' // 默认, min
};
var _default = Panel;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Panel, 'Panel', 'dev/mtui/panel/Panel.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/panel/Panel.jsx');
}();

;
//# sourceMappingURL=Panel.js.map