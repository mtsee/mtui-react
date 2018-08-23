'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

// 树形菜单
var TreeMenu = function (_Component) {
    (0, _inherits3.default)(TreeMenu, _Component);

    function TreeMenu(props) {
        (0, _classCallCheck3.default)(this, TreeMenu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TreeMenu.__proto__ || (0, _getPrototypeOf2.default)(TreeMenu)).call(this, props));

        _this.handleClickShow = function () {
            return _this.__handleClickShow__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.setHtml = function () {
            return _this.__setHtml__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            data: []
        };
        return _this;
    }

    (0, _createClass3.default)(TreeMenu, [{
        key: '__handleClickShow__REACT_HOT_LOADER__',
        value: function __handleClickShow__REACT_HOT_LOADER__(e) {
            var $this = $(e.currentTarget);
            var $box = $this.next('.mt-treemenu-box');
            var $parent = $box.closest('li');
            if ($box[0]) {
                if ($box.is(':hidden')) {
                    $this.addClass('mt-treemenu-active');
                    $box.show();
                } else {
                    $this.removeClass('mt-treemenu-active');
                    $box.hide();
                }
            }
        }
    }, {
        key: '__setHtml__REACT_HOT_LOADER__',
        value: function __setHtml__REACT_HOT_LOADER__() {
            var setArr = function (data) {
                var _this2 = this;

                var arr = [];
                data.map(function (elem, index) {
                    if ((typeof elem === 'undefined' ? 'undefined' : (0, _typeof3.default)(elem)) === 'object') {
                        arr.push(_react2.default.createElement(
                            'li',
                            { key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-treemenu-title', onClick: _this2.handleClickShow },
                                _react2.default.createElement('i', { className: 'iconfont icon-right' }),
                                ' ',
                                elem.title
                            ),
                            elem.children.length > 0 ? setArr(elem.children) : ''
                        ));
                    } else {
                        arr.push(_react2.default.createElement(
                            'li',
                            { key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-treemenu-title' },
                                ' ',
                                elem
                            )
                        ));
                    }
                    index++;
                });
                return _react2.default.createElement(
                    'ul',
                    { className: 'mt-treemenu-box' },
                    arr
                );
            }.bind(this);
            return setArr(this.props.data);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mt-treemenu' },
                this.setHtml()
            );
        }
    }]);
    return TreeMenu;
}(Component);

// 配置信息
/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/


var _default = TreeMenu;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TreeMenu, 'TreeMenu', 'dev/mtui/tree/TreeMenu.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/tree/TreeMenu.jsx');
}();

;
//# sourceMappingURL=TreeMenu.js.map