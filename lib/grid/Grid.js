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

var _setGridName = require('../utils/setGridName');

var _setGridName2 = _interopRequireDefault(_setGridName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 按钮，输入框同样有该属性

/**
* 超级好用的栅格系统
* @date     2016-11-20
* @author   馒头
* @参数:  width,md,lg,sm,offset,mdOffset,smOffset,lgOffset  offset是偏移值
*   响应式 sm: 0~640px  md: 641~1024  lg: 1025+ 
    eg:  <Grid sm="1/1" md="1/2" lg="1/3">...</Grid> 
    表示在640px分辨率下占100%。在平板上占50%，在PC上占33.33%
* @eg:  <Grid width="1/2" sm="1/1" offset="1/2">...</Grid>
*/
var Grid = function (_Component) {
    (0, _inherits3.default)(Grid, _Component);

    // 构造函数
    function Grid(props) {
        (0, _classCallCheck3.default)(this, Grid);
        return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this, props));
    }

    (0, _createClass3.default)(Grid, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                width = _props.width,
                sm = _props.sm,
                md = _props.md,
                lg = _props.lg,
                smOffset = _props.smOffset,
                mdOffset = _props.mdOffset,
                lgOffset = _props.lgOffset,
                offset = _props.offset,
                className = _props.className,
                style = _props.style,
                children = _props.children,
                other = (0, _objectWithoutProperties3.default)(_props, ['width', 'sm', 'md', 'lg', 'smOffset', 'mdOffset', 'lgOffset', 'offset', 'className', 'style', 'children']);

            var cName = (0, _setGridName2.default)({
                width: width,
                offset: offset,
                sm: sm,
                md: md,
                lg: lg,
                smOffset: smOffset,
                mdOffset: mdOffset,
                lgOffset: lgOffset
            }, className);
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cName, style: style }, other),
                children
            ) // /
            ;
        }
    }]);
    return Grid;
}(_react.Component);

// 主页


var _default = Grid;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Grid, 'Grid', 'dev/mtui/grid/Grid.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/grid/Grid.jsx');
}();

;
//# sourceMappingURL=Grid.js.map