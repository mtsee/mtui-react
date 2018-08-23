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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @type 返回顶部
* @author : Mantou
* @props :
* 	top 滚动到顶部的距离
* 	time 滚动动画时间
* 	visibilityHeight 滚动高度达到此参数值才出现 
* 	callBack 回调函数
* 	dom 可以传入一个DOM，就不浮动了
*/
var BackTop = function (_Component) {
    (0, _inherits3.default)(BackTop, _Component);

    function BackTop(props) {
        (0, _classCallCheck3.default)(this, BackTop);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BackTop.__proto__ || (0, _getPrototypeOf2.default)(BackTop)).call(this, props));

        _this.state = {
            show: false
        };
        _this.timer = null;
        _this.scrollEventHand = null;
        return _this;
    }

    (0, _createClass3.default)(BackTop, [{
        key: 'getScrollTop',
        value: function getScrollTop(that) {
            var top = null;
            if (!that) {
                top = document.documentElement.scrollTop || document.body.scrollTop;
            } else {
                top = that.scrollTop;
            }
            return top;
        }
    }, {
        key: 'setScrollTop',
        value: function setScrollTop(that, top) {
            if (that === 'document') {
                if (document.body.scrollTop) {
                    document.body.scrollTop = top;
                }
                if (document.documentElement.scrollTop) {
                    document.documentElement.scrollTop = top;
                }
            } else {
                that.scrollTop = top;
            }
        }
    }, {
        key: 'scrollTopFun',
        value: function scrollTopFun() {
            var self = this;
            var top = this.getScrollTop();
            top = top - self.props.top;
            var time = self.props.time; //
            var x = 10; // 每次位移
            var fps = x * time / top; // 时间段

            this.timer = setInterval(function () {
                top -= x;
                if (top <= self.props.top) {
                    top = self.props.top;
                    self.setScrollTop('document', top);
                    clearInterval(self.timer);
                } else {
                    self.setScrollTop('document', top);
                }
            }, fps);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            if (this.props.callBack) {
                this.props.callBack();
            }
            this.scrollTopFun();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('scroll', this.scrollEventHand);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            if (this.props.visibilityHeight) {
                this.scrollEventHand = function (e) {
                    if (self.getScrollTop() >= self.props.visibilityHeight) {
                        self.setState({
                            show: true
                        });
                    } else {
                        self.setState({
                            show: false
                        });
                    }
                };
                document.addEventListener('scroll', this.scrollEventHand);
            } else {
                self.setState({
                    show: true
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var dom = null;
            if (this.props.dom) {
                var Component = this.props.dom.type;
                var _props$dom$props = this.props.dom.props,
                    children = _props$dom$props.children,
                    other = (0, _objectWithoutProperties3.default)(_props$dom$props, ['children']);

                dom = _react2.default.createElement(
                    Component,
                    (0, _extends3.default)({ onClick: this.handleClick.bind(this) }, other),
                    children
                );
            } else {
                dom = _react2.default.createElement(
                    'a',
                    { style: { display: this.state.show ? 'block' : 'none' }, onClick: this.handleClick.bind(this), className: (this.props.className || '') + ' mt-backtop' },
                    'Top'
                );
            }
            return dom;
        }
    }]);
    return BackTop;
}(_react.Component);

BackTop.defaultProps = {
    top: 0,
    time: 1000
};
var _default = BackTop;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BackTop, 'BackTop', 'dev/mtui/backtop/BackTop.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/backtop/BackTop.jsx');
}();

;
//# sourceMappingURL=BackTop.js.map