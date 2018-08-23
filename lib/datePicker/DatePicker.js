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

var _dateCore = require('../dateCore/dateCore');

var _DatePickerBox = require('../dateCore/DatePickerBox');

var _DatePickerBox2 = _interopRequireDefault(_DatePickerBox);

var _offset = require('../utils/offset');

var _dom = require('../utils/dom');

var _triggerBlank = require('../utils/triggerBlank');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function (_Component) {
    (0, _inherits3.default)(DatePicker, _Component);

    // 构造函数
    function DatePicker(props) {
        (0, _classCallCheck3.default)(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call(this, props));

        _this.dateToOBj = function () {
            return _this.__dateToOBj__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            show: false,
            nowDate: null,
            clear: false,
            inputDate: null
        };
        _this.div = document.createElement('div');
        _this.div.setAttribute('class', 'mt-div');
        _this.handler = null;
        _this.mid = null;
        _this.refBtn = null;
        return _this;
    }

    // 重新渲染


    // 默认参数


    (0, _createClass3.default)(DatePicker, [{
        key: '__dateToOBj__REACT_HOT_LOADER__',
        value: function __dateToOBj__REACT_HOT_LOADER__() {
            return this.__dateToOBj__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: 'resetDays',
        value: function resetDays(date, mark) {
            if (mark) {
                this.setState({
                    nowDate: date,
                    inputDate: date
                });
            } else {
                this.setState({
                    nowDate: date
                });
            }
        }
    }, {
        key: 'setPlace',
        value: function setPlace() {
            return (0, _offset.position)(this.refBtn);
        }

        // 渲染div mark == true 表示更新

    }, {
        key: 'renderDiv',
        value: function renderDiv(mark) {

            // 设置 mid
            if (this.mid === null) {
                this.mid = 'mt_date_' + +new Date();
            }

            var self = this;
            var dom = document.getElementById(this.mid);
            // 首次渲染即可
            if (!dom || mark) {
                if (!mark) {
                    document.body.appendChild(this.div);
                }
                _reactDom2.default.render(_react2.default.createElement(_DatePickerBox2.default, {
                    nowDate: this.state.nowDate,
                    range: this.props.range,
                    format: this.props.format,
                    mid: this.mid,
                    setPlace: this.setPlace.bind(this),
                    show: this.state.show,
                    modalStyle: this.props.modalStyle,
                    modalClass: this.props.modalClass,
                    resetDays: this.resetDays.bind(this),
                    showOrHide: this.showOrHide.bind(this) }), this.div); // 
            }
        }

        // 隐藏显示

    }, {
        key: 'showOrHide',
        value: function showOrHide(show, callback, data, e) {
            var _this2 = this;

            var box = document.getElementById(this.mid);

            // 如果没有，初始化一个
            if (!box) {
                this.renderDiv();
            }

            this.setState({
                show: !show
            }, function () {
                if (_this2.state.show) {
                    if (_this2.props.showBack) {
                        _this2.props.showBack();
                    }
                } else {
                    if (_this2.props.onChange && data && (0, _dateCore.judgeDate)(data.obj, _this2.props.range)) {
                        _this2.setState({
                            clear: data.clear
                        });

                        // 数据过滤
                        for (var key in data.obj) {
                            if (data.obj[key]) {
                                data.obj[key] = parseInt(data.obj[key], 10);
                            } else {
                                delete data.obj[key];
                            }
                        }
                        data.str = data.str.replace(/-NaN/g, '');
                        data.str = data.str.replace(/-null/g, '');
                        data.str = data.str.replace(/-undefined/g, '');

                        // 在范围内修改才有效
                        _this2.props.onChange(e, data);
                    }
                }

                // 修改input 里面的值
                if (data && (0, _dateCore.judgeDate)(data.obj, _this2.props.range)) {
                    _this2.setState({
                        inputDate: data.obj
                    });
                }

                if (callback) {
                    callback(data);
                }
            });
        }

        // 点击事件

    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var _btn = document.getElementById(this.mid);
            if (_btn && _btn.style.display === 'block') {
                return;
            }

            var self = this;

            this.showOrHide(self.state.show);
            if (this.handler) {
                (0, _triggerBlank.offClickBlank)(self.handler);
            }
            // 绑定点击空白事件
            this.handler = (0, _triggerBlank.clickBlank)(document.getElementById(self.mid), function (mark) {
                if (!mark) {
                    self.showOrHide(true);
                    (0, _triggerBlank.offClickBlank)(self.handler);
                }
            });
        }

        // xxxx-xx-xx　转换成 obj

    }, {
        key: '__dateToOBj__REACT_HOT_LOADER__',


        // 渲染前
        value: function __dateToOBj__REACT_HOT_LOADER__(dateVal) {
            var date = null;
            if (dateVal) {
                var val = dateVal.split('-');
                date = {
                    year: parseInt(val[0], 10) || null,
                    month: parseInt(val[1], 10) || null,
                    day: parseInt(val[2], 10) || null
                };
            } else {
                date = (0, _dateCore.getDateNow)();
                this.setState({
                    clear: true,
                    show: this.props.visible ? true : false
                });
            }

            return date;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            // 初始化日期 默认是当前日期
            var dateVal = this.props.defaultValue || this.props.value;
            this.resetDays(this.dateToOBj(dateVal), true);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this.handleClick();
            }
        }

        // 更新弹窗里面的数据

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (document.getElementById(this.mid)) {
                this.renderDiv(true);
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

        // 如果 value 更新

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({
                    clear: nextProps.value ? false : true,
                    nowDate: this.dateToOBj(nextProps.value),
                    inputDate: this.dateToOBj(nextProps.value)
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                mid = _props.mid,
                format = _props.format,
                showBack = _props.showBack,
                range = _props.range,
                modalClass = _props.modalClass,
                modalStyle = _props.modalStyle,
                defaultValue = _props.defaultValue,
                value = _props.value,
                className = _props.className,
                size = _props.size,
                datePickers = _props.datePickers,
                visible = _props.visible,
                suffix = _props.suffix,
                validateInfo = _props.validateInfo,
                onChange = _props.onChange,
                other = (0, _objectWithoutProperties3.default)(_props, ['mid', 'format', 'showBack', 'range', 'modalClass', 'modalStyle', 'defaultValue', 'value', 'className', 'size', 'datePickers', 'visible', 'suffix', 'validateInfo', 'onChange']);

            var cName = ['mt-input mt-input-date mt-input-suffix-out'];
            var dayval = (0, _dateCore.formatDate)(this.state.inputDate, this.props.format).val;
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
                        _this3.refBtn = c;
                    }, className: cName.join(' '), onClick: this.handleClick.bind(this) },
                _react2.default.createElement('input', (0, _extends3.default)({
                    value: this.state.clear ? '' : dayval,
                    readOnly: true,
                    type: 'text',
                    placeholder: this.props.placeholder
                }, other)),
                validateInfo ? _react2.default.createElement(
                    'span',
                    { className: 'mt-input-suffix' },
                    suffix
                ) : _react2.default.createElement(
                    'span',
                    { className: 'mt-input-suffix' },
                    _react2.default.createElement('i', { className: 'iconfont icon-date' })
                ),
                validateInfo
            );
        }
    }]);
    return DatePicker;
}(_react.Component);

// 主页


DatePicker.defaultProps = {
    placeholder: '日期',
    showBack: null, // 显示时候的回调
    onChange: function onChange() {
        // ...
    }, // 关闭时候的回调
    modalClass: '',
    modalStyle: {}, // 
    validateInfo: null,
    format: 'yyyy-mm-dd' // 格式化
};
var _default = DatePicker;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DatePicker, 'DatePicker', 'dev/mtui/datePicker/DatePicker.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/datePicker/DatePicker.jsx');
}();

;
//# sourceMappingURL=DatePicker.js.map