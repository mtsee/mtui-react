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

var _setGridName = require('../utils/setGridName');

var _setGridName2 = _interopRequireDefault(_setGridName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageList = function (_React$Component) {
    (0, _inherits3.default)(PageList, _React$Component);

    function PageList(props) {
        (0, _classCallCheck3.default)(this, PageList);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (PageList.__proto__ || (0, _getPrototypeOf2.default)(PageList)).call(this, props));

        _this2.refresh = function () {
            return _this2.__refresh__REACT_HOT_LOADER__.apply(_this2, arguments);
        };

        _this2.total = props.total;
        _this2.current = props.current;
        _this2.state = {
            list: []
        };
        return _this2;
    }

    //  size : 中间预留个数


    (0, _createClass3.default)(PageList, [{
        key: '__refresh__REACT_HOT_LOADER__',
        value: function __refresh__REACT_HOT_LOADER__() {
            return this.__refresh__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextProps.total !== this.props.total) {
                if (nextProps.total) {
                    this.total = nextProps.total;
                    this.setHtml(true);
                } else {
                    this.setState({
                        list: []
                    });
                }
            }
        }

        // 获取最大页数

    }, {
        key: 'getMaxPage',
        value: function getMaxPage() {
            var total = this.total;
            var pageSize = this.props.pageSize;

            var max = Math.ceil(total / pageSize);
            return max;
        }

        // 跳转页面

    }, {
        key: 'toPage',
        value: function toPage(num) {
            if (num !== '' && num <= this.getMaxPage() && num > 0) {
                this.current = num;
                this.setHtml();
                return true;
            } else {
                console.error('请输入正确的页码！');
                return false;
            }
        }

        // 上一页

    }, {
        key: 'nextPage',
        value: function nextPage() {
            this.current = parseInt(this.current, 10);
            if (this.current + 1 > this.getMaxPage()) {
                return;
            }
            this.toPage(this.current + 1);
        }

        // 下一页

    }, {
        key: 'prevPage',
        value: function prevPage() {
            if (this.current - 1 < 1) {
                return;
            }
            this.toPage(this.current - 1);
        }

        // 上一段

    }, {
        key: 'prevSize',
        value: function prevSize() {
            var size = this.props.size;

            this.current -= size;
            if (this.current < 1) {
                this.current = 1;
            }
            this.setHtml();
        }

        // 下一段

    }, {
        key: 'nextSize',
        value: function nextSize() {
            var size = this.props.size;

            var max = this.getMaxPage();
            this.current = parseInt(this.current, 10) + parseInt(size, 10);
            if (this.current > max) {
                this.current = max;
            }
            this.setHtml();
        }

        // 设置html

    }, {
        key: 'setHtml',
        value: function setHtml(mark) {
            var _props = this.props,
                size = _props.size,
                callback = _props.callback;

            var current = parseInt(this.current, 10);

            if (size < 3) {
                console.error('最小size:3!');
                return;
            }
            var list = [];
            var _this = this;
            var max = parseInt(this.getMaxPage(), 10);

            // 如果小于size ，直接显示出来
            if (max <= size || max <= size + 3) {
                for (var i = 1; i <= max; i++) {
                    list.push(i === current ? i + ':active' : i);
                }
                // 如果大于size
            } else {
                // 比如 1234...10 size=3; current在123中
                if (current <= size) {
                    for (var _i = 1; _i <= size + 1; _i++) {
                        list.push(_i === current ? _i + ':active' : _i);
                    }
                    list.push('next');
                    list.push(max);
                    // 如果current 在 4 ~ 10-size 中
                } else if (current > size && current <= max - size) {
                    list.push(1);
                    list.push('prev');
                    for (var _i2 = current - 1; _i2 < parseInt(size, 10) + parseInt(current, 10) - 1; _i2++) {
                        list.push(_i2 === current ? _i2 + ':active' : _i2);
                    }
                    list.push('next');
                    list.push(max);
                    // 如果current 在 10-size ~ 10 中
                } else {
                    list.push(1);
                    list.push('prev');
                    for (var _i3 = max - size; _i3 < max; _i3++) {
                        list.push(_i3 === current ? _i3 + ':active' : _i3);
                    }
                    list.push(max === current ? max + ':active' : max);
                }
            }
            this.setState({
                list: list
            });

            // 如果是自动加载的数据，不执行回调，避免重复执行
            if (!mark) {
                // 回调函数
                callback({
                    current: parseInt(_this.current, 10),
                    total: _this.total,
                    pageSize: _this.props.pageSize
                });
            }
        }

        // 刷新组件

    }, {
        key: '__refresh__REACT_HOT_LOADER__',
        value: function __refresh__REACT_HOT_LOADER__(current) {
            this.current = current || 1;
            this.setHtml(true);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                grid = _props2.grid,
                size = _props2.size,
                pageSize = _props2.pageSize,
                total = _props2.total,
                current = _props2.current,
                callback = _props2.callback,
                other = (0, _objectWithoutProperties3.default)(_props2, ['className', 'grid', 'size', 'pageSize', 'total', 'current', 'callback']);

            var cName = '';
            var _this = this;
            if (grid) {
                cName = (0, _setGridName2.default)(grid, 'mt-pagelist');
            } else {
                cName = 'mt-pagelist';
            }
            if (total === 0) {
                return null;
            }
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cName }),
                _react2.default.createElement(
                    'a',
                    { className: 'mt-btn mt-pagelist-prev', onClick: this.prevPage.bind(this) },
                    '\u4E0A\u4E00\u9875'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mt-pagelist-list' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        this.state.list.map(function (elem, index) {
                            elem = elem.toString();
                            index = +new Date() + index;
                            if (elem.indexOf('active') !== -1) {
                                var num = elem.replace(':active', '');
                                return _react2.default.createElement(
                                    'li',
                                    { className: 'active', key: index },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'mt-btn', onClick: _this.toPage.bind(_this, num) },
                                        num
                                    )
                                );
                            } else if (elem.indexOf('prev') !== -1) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: index },
                                    _react2.default.createElement('a', { className: 'mt-btn mt-pagelist-prevsize', onClick: _this.prevSize.bind(_this) })
                                );
                            } else if (elem.indexOf('next') !== -1) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: index },
                                    _react2.default.createElement('a', { className: 'mt-btn mt-pagelist-nextsize', onClick: _this.nextSize.bind(_this) })
                                );
                            } else {
                                return _react2.default.createElement(
                                    'li',
                                    { key: index },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'mt-btn', onClick: _this.toPage.bind(_this, elem) },
                                        elem
                                    )
                                );
                            }
                        })
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'mt-btn mt-pagelist-next', onClick: this.nextPage.bind(this) },
                    '\u4E0B\u4E00\u9875'
                )
            );
        }
    }]);
    return PageList;
}(_react2.default.Component);

//  /主页


PageList.defaultProps = { size: 3, pageSize: 10, total: 0, current: 1, callback: null };
var _default = PageList;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(PageList, 'PageList', 'dev/mtui/pagelist/PageList.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/pagelist/PageList.jsx');
}();

;
//# sourceMappingURL=PageList.js.map