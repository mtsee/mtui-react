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

var _DatePickerBox = require('../dateCore/DatePickerBox');

var _DatePickerBox2 = _interopRequireDefault(_DatePickerBox);

var _dateCore = require('../dateCore/dateCore');

var _offset = require('../utils/offset');

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

var _dom = require('../utils/dom');

var _outWindow = require('../utils/outWindow');

var _triggerBlank = require('../utils/triggerBlank');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickers = function (_Component) {
    (0, _inherits3.default)(DatePickers, _Component);

    // 构造函数
    function DatePickers(props) {
        (0, _classCallCheck3.default)(this, DatePickers);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DatePickers.__proto__ || (0, _getPrototypeOf2.default)(DatePickers)).call(this, props));

        _this.state = {
            show: false,
            startDate: null,
            endDate: null,
            clear: false,
            selectDays: null,
            syncInner: new Date().getTime()
        };
        _this.div = document.createElement('div');
        _this.div.setAttribute('class', 'mt-div');
        _this.handler = null;
        _this.mid = null;
        _this.refBtn = null;
        return _this;
    }

    // 同步inner 样式


    // 默认参数


    (0, _createClass3.default)(DatePickers, [{
        key: 'syncInner',
        value: function syncInner() {
            this.setState({
                syncInner: new Date().getTime()
            });
        }
    }, {
        key: 'setPlace',
        value: function setPlace() {
            return (0, _offset.position)(this.refBtn);
        }

        // setMid

    }, {
        key: 'setMid',
        value: function setMid() {
            if (this.mid === null) {
                this.mid = 'mt_dates_' + +new Date();
            }
        }

        // 渲染div

    }, {
        key: 'renderDiv',
        value: function renderDiv(mark) {
            this.setMid();
            var self = this;
            var dom = document.getElementById(this.mid);
            // 首次渲染即可
            if (!dom || mark) {
                if (!mark) {
                    document.body.appendChild(this.div);
                }

                var _setPlace = this.setPlace(),
                    height = _setPlace.height,
                    left = _setPlace.left,
                    top = _setPlace.top,
                    width = _setPlace.width;

                var out = (0, _outWindow.outWindow)(width, height, top, left, { width: 460, height: 280 });
                var style = (0, _assign2.default)([{
                    left: out.left,
                    top: out.top
                }, this.props.modalStyle || {}, { display: this.state.show ? 'block' : 'none' }]);
                var _props = this.props,
                    mid = _props.mid,
                    format = _props.format,
                    other = (0, _objectWithoutProperties3.default)(_props, ['mid', 'format']);


                var cName = ['mt-dates'];
                if (this.props.className) {
                    cName.push(this.props.className);
                }
                if (this.props.modalClass) {
                    cName.push(this.props.modalClass);
                }
                if (mid) {
                    this.mid = mid;
                }

                _reactDom2.default.render(_react2.default.createElement(
                    'div',
                    { className: cName.join(' '), style: style, id: this.mid },
                    _react2.default.createElement(_DatePickerBox2.default, {
                        inner: this.state.syncInner,
                        syncInner: this.syncInner.bind(this),
                        resetDays: this.resetDays.bind(this),
                        range: this.props.range[0],
                        showOrHide: this.showOrHide.bind(this),
                        nowDate: this.state.startDate,
                        dates: {
                            startDate: this.state.startDate,
                            endDate: this.state.endDate
                        },
                        format: format,
                        mid: this.mid + '_start' }),
                    _react2.default.createElement(_DatePickerBox2.default, {
                        inner: this.state.syncInner + 1,
                        syncInner: this.syncInner.bind(this),
                        range: this.props.range[1],
                        resetDays: this.resetDays.bind(this),
                        showOrHide: this.showOrHide.bind(this),
                        nowDate: this.state.endDate,
                        dates: {
                            startDate: this.state.startDate,
                            endDate: this.state.endDate
                        },
                        format: format,
                        mid: this.mid + '_end' })
                ), this.div);
            }
        }

        // /数据验证，开始时间不能小于结束时间

    }, {
        key: 'dateChecked',
        value: function dateChecked(obj) {
            var start = void 0,
                end = void 0;
            if (obj['startDate']) {
                start = obj.startDate;
                end = this.state.endDate;
            } else {
                start = this.state.startDate;
                end = obj.endDate;
            }

            // 如果开始大于结束
            if (parseInt((0, _dateCore.formatDate)(start, 'yyyymmdd').val, 10) > parseInt((0, _dateCore.formatDate)(end, 'yyyymmdd').val, 10)) {
                var date = obj['startDate'] ? start : end;
                return {
                    startDate: date,
                    endDate: date
                };
            } else {
                return {
                    startDate: start,
                    endDate: end
                };
            }
        }

        // /重新渲染 如果

    }, {
        key: 'resetDays',
        value: function resetDays(date, callback, mark) {
            if (mark) {
                mark = mark.split('_');
                mark = mark[mark.length - 1];
            }
            var obj = {};
            obj[mark + 'Date'] = date;

            obj = this.dateChecked(obj);

            this.setState(obj, function () {
                // 设置days
                if (callback) {
                    callback();
                }
            });
        }

        // /隐藏显示

    }, {
        key: 'showOrHide',
        value: function showOrHide(show, callback, data, e) {
            var box = document.getElementById(this.mid);

            // 如果没有，初始化一个
            if (!box) {
                this.renderDiv();
            }

            this.setState({
                show: !show
            }, function () {
                var self = this;
                if (self.state.show) {
                    if (self.props.showBack) {
                        self.props.showBack();
                    }
                } else {
                    if (self.props.onChange && data) {
                        self.setState({
                            clear: data.clear
                        });

                        self.props.onChange(e, data);

                        self.setState({
                            selectDays: data
                        });
                    }
                }
                if (callback) {
                    callback();
                }
            });
        }

        // /点击事件

    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var _btn = document.getElementById(this.mid);
            if (_btn && _btn.style.display === 'block') {
                return;
            }
            var self = this;
            // 设置set
            self.showOrHide(self.state.show);
            if (self.handler) {
                (0, _triggerBlank.offClickBlank)(self.handler);
            }
            // 绑定点击空白事件
            self.handler = (0, _triggerBlank.clickBlank)(document.getElementById(self.mid), function (mark) {
                if (!mark) {
                    self.showOrHide(true);
                    (0, _triggerBlank.offClickBlank)(self.handler);
                }
            });
        }

        // /更新弹窗里面的数据

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (document.getElementById(this.mid)) {
                this.renderDiv(true);
            }
        }

        // /渲染前，先设置 startDate 和 endDate

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {

            var date = {};
            if (this.props.defaultValue) {
                var arr = this.props.defaultValue.split('/');
                date['startDate'] = (0, _dateCore.strToObj)(arr[0]);
                date['endDate'] = (0, _dateCore.strToObj)(arr[1]);
            } else {
                var now = (0, _dateCore.getDateNow)();
                date['startDate'] = now;
                date['endDate'] = now; // addOrDelMonthDay(now, 'add');
            }
            this.setState({
                startDate: date.startDate,
                endDate: date.endDate
            });

            // 设置默认值
            if (this.props.defaultValue) {
                this.setState({
                    selectDays: {
                        str: (0, _dateCore.formatDate)(date.startDate, this.props.format).val + ' ~ ' + (0, _dateCore.formatDate)(date.endDate, this.props.format).val
                    }
                });
            }
        }

        // 卸载组件

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            (0, _triggerBlank.offClickBlank)(this.handler);
            (0, _dom.removeDom)(this.div);
            _reactDom2.default.unmountComponentAtNode(this.div);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                mid = _props2.mid,
                format = _props2.format,
                showBack = _props2.showBack,
                range = _props2.range,
                modalClass = _props2.modalClass,
                defaultValue = _props2.defaultValue,
                modalStyle = _props2.modalStyle,
                className = _props2.className,
                size = _props2.size,
                onChange = _props2.onChange,
                other = (0, _objectWithoutProperties3.default)(_props2, ['mid', 'format', 'showBack', 'range', 'modalClass', 'defaultValue', 'modalStyle', 'className', 'size', 'onChange']);

            var dayval = this.state.selectDays ? this.state.selectDays.str : '';
            var cName = ['mt-input mt-input-dates'];
            if (className) {
                cName.push(className);
            }
            cName.push('mt-input-' + (size ? size : 'nm'));
            if (mid) {
                this.mid = mid;
            }

            return _react2.default.createElement(
                'span',
                { ref: function ref(c) {
                        _this2.refBtn = c;
                    }, className: cName.join(' '), onClick: this.handleClick.bind(this) },
                _react2.default.createElement('input', (0, _extends3.default)({
                    value: this.state.clear ? '' : dayval,
                    readOnly: true,
                    type: 'text',
                    placeholder: this.props.placeholder
                }, other)),
                _react2.default.createElement(
                    'span',
                    { className: 'mt-input-suffix' },
                    _react2.default.createElement('i', { className: 'iconfont icon-date' })
                )
            );
        }
    }]);
    return DatePickers;
}(_react.Component);

// 主页


DatePickers.defaultProps = {
    placeholder: '选择时间段',
    showBack: null, // 显示时候的回调
    onChange: null, // 关闭时候的回调
    modalClass: '',
    modalStyle: {},
    range: [',', ','], // 取值范围
    format: 'yyyy-mm-dd' // 格式化
};
var _default = DatePickers;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DatePickers, 'DatePickers', 'dev/mtui/datePickers/DatePickers.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/datePickers/DatePickers.jsx');
}();

;
//# sourceMappingURL=DatePickers.js.map