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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalBox = function (_Component) {
    (0, _inherits3.default)(ModalBox, _Component);

    // 构造函数
    function ModalBox(props) {
        (0, _classCallCheck3.default)(this, ModalBox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ModalBox.__proto__ || (0, _getPrototypeOf2.default)(ModalBox)).call(this, props));

        _this.state = {
            show: false,
            className: ''
        };
        _this.timer = null;
        return _this;
    }

    (0, _createClass3.default)(ModalBox, [{
        key: 'closeModal',
        value: function closeModal() {
            this.props.showOrHide(true);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                show: this.props.show,
                className: 'animated zoomIn ' + this.props.className
            });
        }

        // 开启关闭动画

    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            var _this2 = this;

            if (nextProps.show !== this.props.show) {
                if (nextProps.show) {
                    this.setState({
                        className: 'animated zoomIn ' + nextProps.className,
                        show: nextProps.show
                    });
                } else {
                    this.setState({
                        className: 'animated zoomOut ' + nextProps.className
                    });
                    this.timer = setTimeout(function () {
                        _this2.setState({
                            show: nextProps.show
                        });
                    }, 600);
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$style = this.props.style,
                height = _props$style.height,
                width = _props$style.width;

            var style = (0, _assign2.default)([{
                marginLeft: -(width || 600) / 2,
                marginTop: -(height || 400) / 2
            }, this.props.style || {}]);

            var cName = ['mt-modal'];
            if (this.props.className) {
                cName.push(this.props.className);
            }

            return _react2.default.createElement(
                'div',
                { className: cName.join(' '), id: this.props.mid,
                    style: {
                        display: this.state.show ? 'block' : 'none',
                        zIndex: this.props.zIndex || 1000 } },
                _react2.default.createElement(
                    'div',
                    { className: 'mt-modal-box ' + this.state.className, style: style },
                    _react2.default.createElement(
                        'a',
                        { className: 'mt-modal-close', onClick: this.closeModal.bind(this) },
                        _react2.default.createElement('i', { className: 'iconfont icon-close' })
                    ),
                    this.props.children
                )
            );
        }
    }]);
    return ModalBox;
}(_react.Component);

// 主页


var _default = ModalBox;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ModalBox, 'ModalBox', 'dev/mtui/modal/ModalBox.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/modal/ModalBox.jsx');
}();

;
//# sourceMappingURL=ModalBox.js.map