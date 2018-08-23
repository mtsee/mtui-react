'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _ModalBox = require('./ModalBox');

var _ModalBox2 = _interopRequireDefault(_ModalBox);

var _dom = require('../utils/dom');

var _bodyscroll = require('../utils/bodyscroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);

    // 构造函数
    function Modal(props) {
        (0, _classCallCheck3.default)(this, Modal);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

        _this2.state = {
            show: props.visible
        };
        _this2.div = document.createElement('div');
        _this2.div.setAttribute('class', 'mt-div');
        _this2.mid = null;
        return _this2;
    }

    // 默认参数


    (0, _createClass3.default)(Modal, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            (0, _dom.removeDom)(this.div);
            _reactDom2.default.unmountComponentAtNode(this.div);
        }

        // 

    }, {
        key: 'setMid',
        value: function setMid() {
            if (this.mid === null) {
                this.mid = 'mt_modal_' + +new Date();
            }
        }

        // 渲染div

    }, {
        key: 'renderDiv',
        value: function renderDiv(mark) {
            this.setMid();
            var dom = document.getElementById(this.mid);
            // 首次渲染即可
            if (!dom || mark) {
                if (!dom) {
                    document.body.appendChild(this.div);
                }
                _reactDom2.default.render(_react2.default.createElement(_ModalBox2.default, (0, _extends3.default)({ mid: this.mid, show: this.state.show, showOrHide: this.showOrHide.bind(this) }, this.props)), this.div); // 
            }
        }

        // 隐藏显示

    }, {
        key: 'showOrHide',
        value: function showOrHide(show, callback) {

            var _this = this;
            if (!show && _this.props.showBefore) {
                _this.props.showBefore();
            }
            this.renderDiv();
            this.setState({
                show: !show
            }, function () {

                // 显示隐藏 scroll
                if (!show) {
                    (0, _bodyscroll.hideScroll)();
                } else {
                    (0, _bodyscroll.showScroll)();
                }

                // 显示隐藏 回调
                if (!show && _this.props.showBack) {
                    _this.props.showBack();
                } else if (show && _this.props.closeBack) {
                    _this.props.closeBack();
                }

                // 总回调
                if (callback) {
                    callback();
                }
            });
        }

        // 更新弹窗里面的数据, 如果DOM不存在，就不更新

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (document.getElementById(this.mid)) {
                this.renderDiv(true);
            }
        }

        // 点击事件

    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _this = this;
            this.showOrHide(this.state.show);
            if (this.props.onClick) {
                this.props.onClick();
            }
        }

        // 对外暴露的方法

    }, {
        key: 'showModal',
        value: function showModal(mark) {
            this.showOrHide(!mark);
        }
    }, {
        key: 'render',
        value: function render() {

            var dom = null;
            if (this.props.btn) {
                var Component = this.props.btn.type;
                var _props$btn$props = this.props.btn.props,
                    children = _props$btn$props.children,
                    other = (0, _objectWithoutProperties3.default)(_props$btn$props, ['children']);

                dom = _react2.default.createElement(
                    Component,
                    (0, _extends3.default)({ onClick: this.handleClick.bind(this) }, other),
                    children
                ); // /
            }
            return dom;
        }
    }]);
    return Modal;
}(_react.Component);

// /主页


Modal.defaultProps = {
    className: '',
    style: { width: 400, height: 260 }, // 框样式
    showBack: null, // 显示时候的回调
    closeBack: null // 关闭时候的回调
};
var _default = Modal;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Modal, 'Modal', 'dev/mtui/modal/Modal.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/modal/Modal.jsx');
}();

;
//# sourceMappingURL=Modal.js.map