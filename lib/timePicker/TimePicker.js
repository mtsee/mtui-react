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

var _Dropdown = require('../dropdown/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Input = require('../input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.scss');

var _leftPad = require('../utils/leftPad');

var _leftPad2 = _interopRequireDefault(_leftPad);

var _natureArray = require('../utils/natureArray');

var _natureArray2 = _interopRequireDefault(_natureArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemHeight = 25; // 时间选择项的css高度，与css中的对应

function format(date) {
    return [(0, _leftPad2.default)(date.getHours(), 2, '0'), (0, _leftPad2.default)(date.getMinutes(), 2, '0'), (0, _leftPad2.default)(date.getSeconds(), 2, '0')].join(':');
}

function parse(timeStr) {
    return timeStr.split('');
}

var TimePicker = function (_Component) {
    (0, _inherits3.default)(TimePicker, _Component);

    // 构造函数
    function TimePicker(props) {
        (0, _classCallCheck3.default)(this, TimePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TimePicker.__proto__ || (0, _getPrototypeOf2.default)(TimePicker)).call(this, props));

        _this.state = {
            time: [],
            hourList: (0, _natureArray2.default)(24).map(function (hour) {
                return (0, _leftPad2.default)(hour, 2, '0');
            }),
            minList: (0, _natureArray2.default)(60).map(function (hour) {
                return (0, _leftPad2.default)(hour, 2, '0');
            }),
            secList: (0, _natureArray2.default)(60).map(function (hour) {
                return (0, _leftPad2.default)(hour, 2, '0');
            })
        };
        _this.onScroll = _this.onScroll.bind(_this);
        return _this;
    }

    // 渲染前


    (0, _createClass3.default)(TimePicker, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // 初始化日期 默认是当前日期
            this.setState({
                time: this.props.value ? this.props.value.split(':') : format(new Date()).split(':')
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousewheel', this.onScroll);
        }

        // 更新弹窗里面的数据

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // ...
        }
    }, {
        key: 'showBack',
        value: function showBack(e) {
            this.setState({
                time: this.props.value ? this.props.value.split(':') : format(new Date()).split(':')
            });
            document.addEventListener('mousewheel', this.onScroll);
        }
    }, {
        key: 'onScroll',
        value: function onScroll(evt) {
            var wrapper = evt.target.parentNode;
            if (evt.wheelDeltaY === 0) {
                return;
            }
            var step = evt.wheelDeltaY > 0 ? -1 : 1;

            var _state = this.state,
                time = _state.time,
                hourList = _state.hourList,
                minList = _state.minList,
                secList = _state.secList;

            if (wrapper === this.hourWrap) {
                this.inputHour(resolve(hourList, time[0]));
            } else if (wrapper === this.minWrap) {
                this.inputMin(resolve(minList, time[1]));
            } else if (wrapper === this.secWrap) {
                this.inputSec(resolve(secList, time[2]));
            }

            function resolve(set, val) {
                var present = set.indexOf(val);
                var next = present + step;
                next = Math.max(0, next);
                next = Math.min(set.length - 1, next);
                return set[next];
            }
        }
    }, {
        key: 'closeBack',
        value: function closeBack(e) {
            document.onmousewheel = null;
        }
    }, {
        key: 'inputHour',
        value: function inputHour(val) {
            var t = [].concat(this.state.time);
            t[0] = val;
            this.setState({
                time: t
            });
        }
    }, {
        key: 'inputMin',
        value: function inputMin(val) {
            var t = [].concat(this.state.time);
            t[1] = val;
            this.setState({
                time: t
            });
        }
    }, {
        key: 'inputSec',
        value: function inputSec(val) {
            var t = [].concat(this.state.time);
            t[2] = val;
            this.setState({
                time: t
            });
        }
    }, {
        key: 'btnCancel',
        value: function btnCancel() {
            this.setState({
                time: this.props.value ? this.props.value.split(':') : format(new Date()).split(':')
            });
            this.modal.handleClick(); // handleClick方法对后事完善的比较好
        }
    }, {
        key: 'btnOkay',
        value: function btnOkay() {
            this.props.onChange(this.state.time.join(':'));
            this.modal.handleClick();
        }

        //

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                itemsToshow = _props.itemsToshow,
                inputClassName = _props.inputClassName,
                modalClassName = _props.modalClassName,
                width = _props.width,
                value = _props.value;

            var cName = ['mt-input mt-input-timepicker mt-input-suffix-out'];
            if (inputClassName) {
                cName.push(inputClassName);
            }
            var basicTop = (itemsToshow - 1) / 2 * itemHeight;
            var itemListMaxHeight = itemHeight * itemsToshow;

            var _state2 = this.state,
                time = _state2.time,
                hourList = _state2.hourList,
                minList = _state2.minList,
                secList = _state2.secList;


            var inputDom = _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_Input2.default, { readOnly: true,
                    value: this.props.value ? this.props.value : '',
                    className: cName.join(' '),
                    placeholder: this.props.hasOwnProperty('placeholder') ? this.props.placeholder : '时间',
                    style: { width: width },
                    suffix: _react2.default.createElement('i', { className: 'iconfont icon-time' }) })
            );
            return _react2.default.createElement(
                _Dropdown2.default,
                {
                    ref: function ref(modal) {
                        return _this2.modal = modal;
                    },
                    btn: inputDom,
                    modalClass: modalClassName,
                    showBack: this.showBack.bind(this),
                    closeBack: this.closeBack.bind(this),
                    style: { width: width },
                    trigger: 'click' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'mt-timepicker-panel',
                        onMouseEnter: function onMouseEnter() {
                            document.body.style.overflow = 'hidden';
                        },
                        onMouseLeave: function onMouseLeave() {
                            document.body.style.overflow = 'auto';
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'mt-timepickers' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mt-itempicker' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-timepicker-title' },
                                '\u65F6'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-itemList', style: { height: itemListMaxHeight } },
                                _react2.default.createElement('div', { className: 'mt-timepicker-pointer', style: { top: basicTop } }),
                                _react2.default.createElement(
                                    'div',
                                    { ref: function ref(ele) {
                                            return _this2.hourWrap = ele;
                                        }, className: 'mt-listWrap', style: {
                                            top: basicTop - hourList.indexOf(time[0]) * itemHeight
                                        } },
                                    hourList.map(function (hour) {
                                        var className = time[0] === hour ? ['timeItem', 'active'].join(' ') : 'timeItem';
                                        return _react2.default.createElement(
                                            'div',
                                            {
                                                key: hour,
                                                onClick: function onClick() {
                                                    return _this2.inputHour(hour);
                                                },
                                                className: className },
                                            hour
                                        );
                                    })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mt-itempicker' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-timepicker-title' },
                                '\u5206\u949F'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-itemList', style: { height: itemListMaxHeight } },
                                _react2.default.createElement('div', { className: 'mt-timepicker-pointer', style: { top: basicTop } }),
                                _react2.default.createElement(
                                    'div',
                                    { ref: function ref(ele) {
                                            return _this2.minWrap = ele;
                                        }, className: 'mt-listWrap', style: {
                                            top: basicTop - minList.indexOf(time[1]) * itemHeight
                                        } },
                                    minList.map(function (min) {
                                        var className = time[1] === min ? ['timeItem', 'active'].join(' ') : 'timeItem';
                                        return _react2.default.createElement(
                                            'div',
                                            {
                                                key: min,
                                                onClick: function onClick() {
                                                    return _this2.inputMin(min);
                                                },
                                                className: className },
                                            min
                                        );
                                    })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mt-itempicker' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-timepicker-title' },
                                '\u79D2'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-itemList', style: { height: itemListMaxHeight } },
                                _react2.default.createElement('div', { className: 'mt-timepicker-pointer', style: { top: basicTop } }),
                                _react2.default.createElement(
                                    'div',
                                    { ref: function ref(ele) {
                                            return _this2.secWrap = ele;
                                        }, className: 'mt-listWrap', style: {
                                            top: basicTop - secList.indexOf(time[2]) * itemHeight
                                        } },
                                    secList.map(function (second) {
                                        var className = time[2] === second ? ['timeItem', 'active'].join(' ') : 'timeItem';
                                        return _react2.default.createElement(
                                            'div',
                                            {
                                                key: second,
                                                onClick: function onClick() {
                                                    return _this2.inputSec(second);
                                                },
                                                className: className },
                                            second
                                        );
                                    })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mt-timepicker-operation' },
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: this.btnCancel.bind(this) },
                            '\u53D6\u6D88'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            _Button2.default,
                            { type: 'primary', onClick: this.btnOkay.bind(this) },
                            '\u786E\u5B9A'
                        )
                    )
                )
            );
        }
    }]);
    return TimePicker;
}(_react.Component);

// TimePicker


TimePicker.defaultProps = {
    value: '', // 默认当前的时间，如果输入的话，强约定格式为：hh:mm:ss
    onChange: function onChange() {
        return;
    },
    width: 220,
    itemsToshow: 7,
    inputClassName: '',
    modalClassName: ''
    // placeholder: ''
};
TimePicker.propTypes = {
    value: _propTypes2.default.string.isRequired };
var _default = TimePicker;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(itemHeight, 'itemHeight', 'dev/mtui/timePicker/TimePicker.jsx');

    __REACT_HOT_LOADER__.register(format, 'format', 'dev/mtui/timePicker/TimePicker.jsx');

    __REACT_HOT_LOADER__.register(parse, 'parse', 'dev/mtui/timePicker/TimePicker.jsx');

    __REACT_HOT_LOADER__.register(TimePicker, 'TimePicker', 'dev/mtui/timePicker/TimePicker.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/timePicker/TimePicker.jsx');
}();

;
//# sourceMappingURL=TimePicker.js.map