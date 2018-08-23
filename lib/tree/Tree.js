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

require('./style.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function (_Component) {
    (0, _inherits3.default)(Tree, _Component);

    // 构造函数
    function Tree(props) {
        (0, _classCallCheck3.default)(this, Tree);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Tree.__proto__ || (0, _getPrototypeOf2.default)(Tree)).call(this, props));

        _this.clickHeader = function () {
            return _this.__clickHeader__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            show: props.show
        };
        _this.refBody = null;
        return _this;
    }

    (0, _createClass3.default)(Tree, [{
        key: '__clickHeader__REACT_HOT_LOADER__',
        value: function __clickHeader__REACT_HOT_LOADER__() {
            return this.__clickHeader__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__clickHeader__REACT_HOT_LOADER__',


        //
        value: function __clickHeader__REACT_HOT_LOADER__(e) {
            this.setState({
                show: !this.state.show
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                header = _props.header,
                show = _props.show,
                other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'header', 'show']);

            var cName = ['mt-tree'];
            if (className) {
                cName.push(className);
            }
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cName.join(' ') }),
                header ? _react2.default.createElement(
                    'div',
                    { className: 'mt-tree-header', onClick: this.clickHeader },
                    !this.state.show ? _react2.default.createElement('i', { className: 'iconfont icon-you' }) : _react2.default.createElement('i', { className: 'iconfont icon-xia' }),
                    header
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: 'mt-tree-body', style: { display: this.state.show ? 'block' : 'none' } },
                    children
                )
            );
        }
    }]);
    return Tree;
}(_react.Component);

Tree.defaultProps = {
    show: true };

var TreeChild = function (_Component2) {
    (0, _inherits3.default)(TreeChild, _Component2);

    // 构造函数
    function TreeChild(props) {
        (0, _classCallCheck3.default)(this, TreeChild);
        return (0, _possibleConstructorReturn3.default)(this, (TreeChild.__proto__ || (0, _getPrototypeOf2.default)(TreeChild)).call(this, props));
    }

    (0, _createClass3.default)(TreeChild, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mt-tree-child' },
                this.props.children
            );
        }
    }]);
    return TreeChild;
}(_react.Component);

Tree.TreeChild = TreeChild;

// 主页
var _default = Tree;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tree, 'Tree', 'dev/mtui/tree/Tree.jsx');

    __REACT_HOT_LOADER__.register(TreeChild, 'TreeChild', 'dev/mtui/tree/Tree.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/tree/Tree.jsx');
}();

;
//# sourceMappingURL=Tree.js.map