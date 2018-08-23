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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

var _outWindow = require('../utils/outWindow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropModal = function (_Component) {
    (0, _inherits3.default)(DropModal, _Component);

    // 构造函数
    function DropModal(props) {
        (0, _classCallCheck3.default)(this, DropModal);
        return (0, _possibleConstructorReturn3.default)(this, (DropModal.__proto__ || (0, _getPrototypeOf2.default)(DropModal)).call(this, props));
    }

    (0, _createClass3.default)(DropModal, [{
        key: 'render',
        value: function render() {
            var set = this.props.getPlace ? this.props.getPlace() : null;
            if (set) {
                var height = set.height,
                    left = set.left,
                    top = set.top,
                    width = set.width;

                // 设置 left

                var out = (0, _outWindow.outWindow)(width, height, top, left, {
                    width: this.props.style.width || this.props.width,
                    height: this.props.style.height || 0
                });

                var style = (0, _assign2.default)([{
                    display: this.props.show ? 'block' : 'none'
                }, {
                    left: out.left,
                    top: out.top
                }, this.props.style || {}]);
            }

            var cName = ['mt-dropdown'];
            if (this.props.className) {
                cName.push(this.props.className);
            }

            return _react2.default.createElement(
                'div',
                { className: cName.join(' '), style: style, id: this.props.mid },
                this.props.children
            );
        }
    }]);
    return DropModal;
}(_react.Component);

// 主页


var _default = DropModal;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DropModal, 'DropModal', 'dev/mtui/dropdown/DropModal.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/dropdown/DropModal.jsx');
}();

;
//# sourceMappingURL=DropModal.js.map