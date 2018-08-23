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

var CollapseItem = function (_Component) {
    (0, _inherits3.default)(CollapseItem, _Component);

    // 构造函数
    function CollapseItem(props) {
        (0, _classCallCheck3.default)(this, CollapseItem);
        return (0, _possibleConstructorReturn3.default)(this, (CollapseItem.__proto__ || (0, _getPrototypeOf2.default)(CollapseItem)).call(this, props));
    }

    (0, _createClass3.default)(CollapseItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                header = _props.header,
                active = _props.active,
                Itemclick = _props.Itemclick,
                show = _props.show,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'header', 'active', 'Itemclick', 'show']);

            var cName = ['mt-collapse-item'];
            if (className) {
                cName.push(className);
            }
            if (active) {
                cName.push('mt-collapse-active');
            }
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cName.join(' ') }),
                _react2.default.createElement(
                    'div',
                    { onClick: this.props.Itemclick.bind(this), className: 'mt-collapse-header' },
                    _react2.default.createElement('i', { className: 'iconfont icon-arrowr' }),
                    header
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mt-collapse-content' },
                    children
                )
            );
        }
    }]);
    return CollapseItem;
}(_react.Component);

// 主页


var _default = CollapseItem;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(CollapseItem, 'CollapseItem', 'dev/mtui/collapse/CollapseItem.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/collapse/CollapseItem.jsx');
}();

;
//# sourceMappingURL=CollapseItem.js.map