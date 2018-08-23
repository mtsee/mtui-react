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

var _offset = require('../utils/offset');

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Component) {
    (0, _inherits3.default)(Button, _Component);

    // 构造函数
    function Button(props) {
        (0, _classCallCheck3.default)(this, Button);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this, props));

        _this.state = {
            inks: []
        };
        return _this;
    }

    (0, _createClass3.default)(Button, [{
        key: 'clickEvent',
        value: function clickEvent(e) {

            if (this.props.disabled) {
                return;
            }

            if (this.props.onClick) {
                this.props.onClick(e);
            }

            // 波纹
            var x = e.pageX - (0, _offset.offsetLeft)(e.target);
            var y = e.pageY - (0, _offset.offsetTop)(e.target);
            var arr = this.state.inks;
            var tmp = new Date().getTime();
            var self = this;
            arr.push({
                x: x,
                y: y,
                tmp: tmp
            });
            this.setState({
                inks: arr
            }, function () {
                if (window.applicationCache) {
                    // 如果支持
                    self.refs['ink_' + tmp].addEventListener('webkitAnimationEnd', function () {
                        // 动画结束时事件 
                        (0, _dom.removeDom)(this);
                    }, false);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                dom = _props.dom,
                style = _props.style,
                type = _props.type,
                size = _props.size,
                block = _props.block,
                disabled = _props.disabled,
                prefix = _props.prefix,
                suffix = _props.suffix,
                htmlType = _props.htmlType,
                onClick = _props.onClick,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'dom', 'style', 'type', 'size', 'block', 'disabled', 'prefix', 'suffix', 'htmlType', 'onClick']);

            var arr = ['mt-ink-reaction', 'mt-btn'];
            var Dom = dom;

            // 尺寸
            if (size) {
                arr.push('mt-btn-' + size);
            }

            // 按钮样式
            if (type) {
                arr.push('mt-btn-' + type);
            } else {
                arr.push('mt-btn-primary');
            }

            // block
            if (block) {
                arr.push('mt-btn-block');
            }

            // disabled
            if (disabled) {
                arr.push('mt-btn-disabled');
            }

            // className
            if (className) {
                arr.push(className);
            }

            if (prefix) {
                arr.push('mt-button-prefix-out');
            }

            if (suffix) {
                arr.push('mt-button-suffix-out');
            }

            if (htmlType) {
                other['type'] = htmlType;
            }

            if (htmlType === 'submit') {
                Dom = 'button';
            }

            var styles = style || {};
            styles = (0, _assign2.default)([{
                width: htmlType === 'submit' && block ? '100%' : ''
            }, styles]);

            return _react2.default.createElement(
                Dom,
                (0, _extends3.default)({ style: styles, onClick: this.clickEvent.bind(this) }, other, { className: arr.join(' ') }),
                prefix ? _react2.default.createElement(
                    'span',
                    { className: 'mt-button-prefix' },
                    prefix
                ) : null,
                _react2.default.createElement(
                    'span',
                    null,
                    children
                ),
                suffix ? _react2.default.createElement(
                    'span',
                    { className: 'mt-button-suffix' },
                    suffix
                ) : null,
                this.state.inks.map(function (elem, index) {
                    return _react2.default.createElement('div', { style: { left: elem.x, top: elem.y }, key: elem.tmp, ref: 'ink_' + elem.tmp, className: 'mt-ink' });
                })
            );
        }
    }]);
    return Button;
}(_react.Component);

// 主页


Button.defaultProps = {
    size: null, // 默认 lg,sm,xs
    type: 'default', // default,primary,success,info,warning,danger
    block: false, // true
    dom: 'a',
    disabled: false,
    prefix: null, // 前面的图标
    suffix: null // 后面的图标
};
var _default = Button;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Button, 'Button', 'dev/mtui/button/Button.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/button/Button.jsx');
}();

;
//# sourceMappingURL=Button.js.map