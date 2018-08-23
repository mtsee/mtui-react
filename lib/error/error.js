"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_Component) {
    (0, _inherits3.default)(Error, _Component);

    function Error() {
        (0, _classCallCheck3.default)(this, Error);
        return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
    }

    (0, _createClass3.default)(Error, [{
        key: "render",
        value: function render() {
            var text = this.props.text;

            return _react2.default.createElement(
                "div",
                { className: "mt-error" },
                "error: (\u7EC4\u4EF6\u4F7F\u7528\u65B9\u6CD5\u9519\u8BEF)\uFF1A",
                text
            );
        }
    }]);
    return Error;
}(_react.Component);

//主页


var _default = Error;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Error, "Error", "dev/mtui/error/error.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "dev/mtui/error/error.jsx");
}();

;
//# sourceMappingURL=error.js.map