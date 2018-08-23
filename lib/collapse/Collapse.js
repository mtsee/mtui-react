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

var _eventProxy = require('../utils/eventProxy');

var _eventProxy2 = _interopRequireDefault(_eventProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapseItem = function (_Component) {
    (0, _inherits3.default)(CollapseItem, _Component);

    // 构造函数
    function CollapseItem(props) {
        (0, _classCallCheck3.default)(this, CollapseItem);
        return (0, _possibleConstructorReturn3.default)(this, (CollapseItem.__proto__ || (0, _getPrototypeOf2.default)(CollapseItem)).call(this, props));
    }

    (0, _createClass3.default)(CollapseItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                header = _props.header,
                active = _props.active,
                Itemclick = _props.Itemclick,
                show = _props.show,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'header', 'active', 'Itemclick', 'show']);

            var cName = ['mt-collapse-item'];
            if (className) {
                cName.push(className);
            }
            if (active) {
                cName.push('mt-collapse-active');
            }
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cName.join(' ') }),
                _react2.default.createElement(
                    'div',
                    { onClick: this.props.Itemclick.bind(this), className: 'mt-collapse-header' },
                    _react2.default.createElement('i', { className: 'iconfont icon-arrowr' }),
                    header
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mt-collapse-content' },
                    children
                )
            );
        }
    }]);
    return CollapseItem;
}(_react.Component);

var Collapse = function (_Component2) {
    (0, _inherits3.default)(Collapse, _Component2);

    // 构造函数
    function Collapse(props) {
        (0, _classCallCheck3.default)(this, Collapse);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call(this, props));

        _this2.state = {
            active: []
        };
        return _this2;
    }

    (0, _createClass3.default)(Collapse, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            var arr = [];
            this.props.children.map(function (elem, index) {
                arr.push(elem.props.show);
            });
            this.setState({
                active: arr
            });
        }

        // 设置显示

    }, {
        key: 'showOnlyItem',
        value: function showOnlyItem(index) {
            var child = this.props.children;
            for (var i = 0; i < child.length; i++) {
                var active = void 0;
                if (index === i) {
                    active = true;
                } else {
                    active = false;
                }
            }
        }
    }, {
        key: 'Itemclick',
        value: function Itemclick(index) {
            // return index;
            var arr = this.state.active;

            // 只显示其中一个
            for (var i = 0; i < arr.length; i++) {
                if (i === index) {
                    arr[i] = !arr[i];
                } else {
                    if (this.props.only) {
                        arr[i] = false;
                    }
                }
            }

            this.setState({
                active: arr
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var _props2 = this.props,
                className = _props2.className,
                children = _props2.children,
                only = _props2.only,
                other = (0, _objectWithoutProperties3.default)(_props2, ['className', 'children', 'only']);

            var cName = ['mt-collapse'];
            if (className) {
                cName.push(className);
            }
            var tmp = new Date().getTime();
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cName.join(' ') }),
                children.map(function (elem, index) {
                    var _elem$props = elem.props,
                        children = _elem$props.children,
                        other = (0, _objectWithoutProperties3.default)(_elem$props, ['children']);

                    return _react2.default.createElement(
                        CollapseItem,
                        (0, _extends3.default)({
                            active: self.state.active[index],
                            Itemclick: self.Itemclick.bind(self, index) }, other, {
                            key: tmp + index }),
                        elem.props.children
                    );
                })
            );
        }
    }]);
    return Collapse;
}(_react.Component);

Collapse.defaultProps = {
    only: false //
};


Collapse.CollapseItem = CollapseItem;

// 主页
var _default = Collapse;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(CollapseItem, 'CollapseItem', 'dev/mtui/collapse/Collapse.jsx');

    __REACT_HOT_LOADER__.register(Collapse, 'Collapse', 'dev/mtui/collapse/Collapse.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/collapse/Collapse.jsx');
}();

;
//# sourceMappingURL=Collapse.js.map