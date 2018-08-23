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

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function (_Component) {
    (0, _inherits3.default)(Progress, _Component);

    // 构造函数
    function Progress(props) {
        (0, _classCallCheck3.default)(this, Progress);
        return (0, _possibleConstructorReturn3.default)(this, (Progress.__proto__ || (0, _getPrototypeOf2.default)(Progress)).call(this, props));
    }

    (0, _createClass3.default)(Progress, [{
        key: 'render',


        //
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                size = _props.size,
                type = _props.type,
                style = _props.style,
                fixed = _props.fixed,
                bgColor = _props.bgColor,
                barColor = _props.barColor,
                strokeWidth = _props.strokeWidth,
                value = _props.value,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'size', 'type', 'style', 'fixed', 'bgColor', 'barColor', 'strokeWidth', 'value']);

            var cName = ['mt-progress'];
            var styles = {};
            if (className) {
                cName.push(className);
            }
            if (type) {
                cName.push('mt-progress-circle');
            }
            if (size) {
                styles.width = size;
            }
            styles = (0, _assign2.default)([style || {}, styles]);
            var val = (value * 100).toFixed(fixed);
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { style: styles, className: cName.join(' ') }),
                _react2.default.createElement(
                    'div',
                    { className: 'mt-progress-text' },
                    val === '0' ? 0 : val + '%'
                ),
                _react2.default.createElement(
                    'svg',
                    { viewBox: '0 0 100 100' },
                    _react2.default.createElement('path', { className: 'ant-progress-circle-trail', d: 'M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94',
                        stroke: bgColor,
                        strokeWidth: strokeWidth,
                        fillOpacity: '0' }),
                    _react2.default.createElement('path', { className: 'ant-progress-circle-path', d: 'M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94',
                        strokeLinecap: 'round',
                        stroke: barColor,
                        strokeWidth: strokeWidth,
                        fillOpacity: '0',
                        style: {
                            strokeDasharray: '295.31px, 295.31px',
                            strokeDashoffset: 295.31 * (1 - this.props.value),
                            transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease'
                        } })
                )
            );
        }
    }]);
    return Progress;
}(_react.Component);

//主页


Progress.defaultProps = {
    size: 100, // 默认, min
    type: 'circle', // circle
    value: 0,
    strokeWidth: 6,
    fixed: 1,
    bgColor: '#f3f3f3',
    barColor: '#108ee9' };
var _default = Progress;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Progress, 'Progress', 'dev/mtui/progress/Progress.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/progress/Progress.jsx');
}();

;
//# sourceMappingURL=Progress.js.map