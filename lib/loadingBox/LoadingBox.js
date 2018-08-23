'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

// loading 占位
var LoadingBox = function (_Component) {
    (0, _inherits3.default)(LoadingBox, _Component);

    // 构造函数
    function LoadingBox(props) {
        (0, _classCallCheck3.default)(this, LoadingBox);
        return (0, _possibleConstructorReturn3.default)(this, (LoadingBox.__proto__ || (0, _getPrototypeOf2.default)(LoadingBox)).call(this, props));
    }

    (0, _createClass3.default)(LoadingBox, [{
        key: 'render',


        //
        value: function render() {
            var cName = ['mt-loading', 'animated fadeIn'];

            if (this.props.bg) {
                cName.push('mt-loading-bg');
            }

            return _react2.default.createElement(
                'div',
                { style: { display: this.props.show ? 'block' : 'none' }, className: cName.join(' ') },
                _react2.default.createElement(
                    'div',
                    { className: 'mt-loading-spin' },
                    _react2.default.createElement('i', { className: "iconfont icon-" + this.props.type })
                ),
                this.props.info ? _react2.default.createElement(
                    'div',
                    { className: 'mt-loading-info' },
                    this.props.info
                ) : null
            );
        }
    }]);
    return LoadingBox;
}(_react.Component);

//主页


LoadingBox.defaultProps = {
    type: 'loading3', // 默认
    show: true };
var _default = LoadingBox;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LoadingBox, 'LoadingBox', 'dev/mtui/loadingBox/LoadingBox.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/loadingBox/LoadingBox.jsx');
}();

;
//# sourceMappingURL=LoadingBox.js.map