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

var _offset = require('../utils/offset');

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverBox = function (_Component) {
    (0, _inherits3.default)(PopoverBox, _Component);

    // 构造函数
    function PopoverBox(props) {
        (0, _classCallCheck3.default)(this, PopoverBox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PopoverBox.__proto__ || (0, _getPrototypeOf2.default)(PopoverBox)).call(this, props));

        _this.state = {
            show: false,
            style: {}
        };
        _this.refPopover = null;
        return _this;
    }

    (0, _createClass3.default)(PopoverBox, [{
        key: 'closeModal',
        value: function closeModal() {
            this.props.showOrHide(true);
        }

        // 设置place

    }, {
        key: 'setStyle',
        value: function setStyle() {
            var obj = {};
            var btn = this.props.getPlace();
            var popover = (0, _offset.position)(this.refPopover);
            var wid = 8; // 箭头的尺寸
            // console.log('popover',popover)
            if (this.props.place === 'top') {
                obj.left = btn.left + (btn.width - popover.width) / 2;
                obj.top = btn.top - popover.height - wid;
            } else if (this.props.place === 'left') {
                obj.left = btn.left - popover.width - wid;
                obj.top = btn.top + (btn.height - popover.height) / 2;
            } else if (this.props.place === 'right') {
                obj.left = btn.left + btn.width + wid;
                obj.top = btn.top + (btn.height - popover.height) / 2;
            } else if (this.props.place === 'bottom') {
                obj.left = btn.left + (btn.width - popover.width) / 2;
                obj.top = btn.top + btn.height + wid;
            }
            this.setState({
                style: obj,
                show: this.props.show
            });
        }
    }, {
        key: 'showOrHide',
        value: function showOrHide(mark) {
            var _this2 = this;

            this.setState({
                show: mark
            }, function () {
                _this2.setStyle();
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.showOrHide(this.props.show);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextProps.show !== this.props.show) {
                this.showOrHide(nextProps.show);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var style = (0, _assign2.default)([this.state.style, { display: this.state.show ? 'block' : 'none' }, this.props.style || {}]);

            var cName = ['mt-popover', 'animated bounceIn'];
            if (this.props.place) {
                cName.push('mt-popover-' + this.props.place);
            }
            if (this.props.className) {
                cName.push(this.props.className);
            }

            return _react2.default.createElement(
                'div',
                { id: this.props.mid, ref: function ref(c) {
                        _this3.refPopover = c;
                    }, className: cName.join(' '), style: style },
                this.props.content,
                _react2.default.createElement('div', { className: 'mt-popover-arrow' })
            );
        }
    }]);
    return PopoverBox;
}(_react.Component);

// 主页


var _default = PopoverBox;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(PopoverBox, 'PopoverBox', 'dev/mtui/popover/PopoverBox.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/popover/PopoverBox.jsx');
}();

;
//# sourceMappingURL=PopoverBox.js.map