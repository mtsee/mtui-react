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

var _dateCore = require('./dateCore');

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

var _outWindow = require('../utils/outWindow');

var _DatePickerBoxDay = require('./DatePickerBoxDay');

var _DatePickerBoxDay2 = _interopRequireDefault(_DatePickerBoxDay);

var _DatePickerBoxMonth = require('./DatePickerBoxMonth');

var _DatePickerBoxMonth2 = _interopRequireDefault(_DatePickerBoxMonth);

var _DatePickerBoxYear = require('./DatePickerBoxYear');

var _DatePickerBoxYear2 = _interopRequireDefault(_DatePickerBoxYear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// nowDate 当前日期
// resetDays 重新设置日期
// format 默认格式
// showOrHide 隐藏或者显示
// mid id

// date 组合日期专用，用来存放 start 和 end 日期

// className 模块class 日历组合不用传
// style 模块样式 日历组合不用传
// set 日历组合不用传

var DatePickerBox = function (_Component) {
    (0, _inherits3.default)(DatePickerBox, _Component);

    // 构造函数
    function DatePickerBox(props) {
        (0, _classCallCheck3.default)(this, DatePickerBox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DatePickerBox.__proto__ || (0, _getPrototypeOf2.default)(DatePickerBox)).call(this, props));

        _this.state = {
            show: 'day',
            headtime: null,
            yearList: [],
            defaultShow: 'day',
            date: null // HTML对应的日期obj
        };
        return _this;
    }

    // 


    (0, _createClass3.default)(DatePickerBox, [{
        key: 'setInner',
        value: function setInner() {
            // 同步隔壁的inner样式
            if (this.props.syncInner) {
                this.props.syncInner();
            }
        }

        // 上一页

    }, {
        key: 'prevClick',
        value: function prevClick() {
            // console.log('上一页');
            var _props$nowDate = this.props.nowDate,
                year = _props$nowDate.year,
                month = _props$nowDate.month,
                day = _props$nowDate.day;

            var obj = (0, _dateCore.addAndDelOneMonth)(year, month, 'del');
            obj['day'] = day;
            this.props.resetDays(obj, null, this.props.mid);
            this.setHeadTime(obj);
            this.setInner();
        }

        // 下一页

    }, {
        key: 'nextClick',
        value: function nextClick() {
            // console.log('下一页');
            var _props$nowDate2 = this.props.nowDate,
                year = _props$nowDate2.year,
                month = _props$nowDate2.month,
                day = _props$nowDate2.day;

            var obj = (0, _dateCore.addAndDelOneMonth)(year, month, 'add');
            obj['day'] = day;
            this.props.resetDays(obj, null, this.props.mid);
            this.setHeadTime(obj);
            this.setInner();
        }

        // 上一层的上一页

    }, {
        key: 'prevOutClick',
        value: function prevOutClick() {
            var _props$nowDate3 = this.props.nowDate,
                year = _props$nowDate3.year,
                month = _props$nowDate3.month,
                day = _props$nowDate3.day;

            var self = this;
            year = parseInt(year, 10);
            var obj = {
                year: this.state.show === 'year' ? year - 30 : --year,
                month: month,
                day: day
            };
            console.log(obj);
            this.setHeadTime(obj);
            this.props.resetDays(obj, function () {
                if (self.state.show === 'year') {
                    self.changeBox();
                }
            }, this.props.mid);
            this.setInner();
        }

        // 上一层的上一页

    }, {
        key: 'nextOutClick',
        value: function nextOutClick() {
            var _props$nowDate4 = this.props.nowDate,
                year = _props$nowDate4.year,
                month = _props$nowDate4.month,
                day = _props$nowDate4.day;

            var self = this;
            year = parseInt(year, 10);
            var obj = {
                year: this.state.show === 'year' ? year + 30 : ++year,
                month: month,
                day: day
            };
            this.setHeadTime(obj);
            this.props.resetDays(obj, function () {
                if (self.state.show === 'year') {
                    self.changeBox();
                }
            }, this.props.mid);
            this.setInner();
        }

        // 初始化年

    }, {
        key: 'iniYear',
        value: function iniYear(year) {
            year = parseInt(year, 10);
            var yearList = [];
            for (var i = year - 10; i < year + 20; i++) {
                yearList.push({
                    year: i,
                    type: 'year',
                    active: i === year ? true : false
                });
            }
            this.setState({
                show: 'year',
                headtime: year - 10 + '-' + (year + 19),
                yearList: yearList
            });
        }

        // 切换年，月，日的选择

    }, {
        key: 'changeBox',
        value: function changeBox() {
            if (this.state.show === 'day') {
                this.setState({
                    show: 'month',
                    headtime: (0, _dateCore.formatDate)(this.props.nowDate, 'yyyy').val
                });
            } else {
                //  if(this.state.show == 'month')
                var year = (0, _dateCore.formatDate)(this.props.nowDate, 'yyyy').val;
                this.iniYear(year);
            }
        }

        // 设置年

    }, {
        key: 'clickYear',
        value: function clickYear(elem) {

            if (elem.active) {
                return;
            }

            // 日这里需要做判断，年份变化，2月可能没有29号
            var maxDay = (0, _dateCore.getMDay)(elem.year, elem.month);
            var _props$nowDate5 = this.props.nowDate,
                day = _props$nowDate5.day,
                month = _props$nowDate5.month;

            this.props.resetDays({
                year: elem.year,
                month: month,
                day: day > maxDay ? maxDay : day
            }, null, this.props.mid);

            // 没有月份的选择了
            if (this.state.defaultShow === 'year') {
                this.iniYear(elem.year);
            } else {
                this.setState({
                    show: 'month'
                }, function () {
                    this.setHeadTime(elem);
                }.bind(this));
            }
            this.setInner();
        }

        // 选择月

    }, {
        key: 'clickMonth',
        value: function clickMonth(elem) {
            this.setHeadTime(elem);
            if (elem.active) {
                return;
            }

            // 日这里需要做判断，年份变化，2月可能没有29号
            var maxDay = (0, _dateCore.getMDay)(elem.year, elem.month);
            var day = this.props.nowDate.day;

            this.props.resetDays({
                year: elem.year,
                month: elem.month,
                day: day > maxDay ? maxDay : day
            }, null, this.props.mid);

            // 如果没有天的选择
            if (this.state.defaultShow === 'month') {
                this.setHeadTime(elem);
            } else {
                this.setState({
                    show: 'day'
                }, function () {
                    this.setHeadTime(elem);
                }.bind(this));
            }
            this.setInner();
        }

        // 选择天

    }, {
        key: 'clickDay',
        value: function clickDay(elem) {
            var maxDay = (0, _dateCore.getMDay)(elem.year, elem.month);
            this.props.resetDays({
                year: elem.year,
                month: elem.month,
                day: elem.day > maxDay ? maxDay : elem.day
            }, null, this.props.mid);
            // console.log('DatePickerBox 134 >> 当前选择的日期：',elem)
            this.setInner();
        }

        // 设置show,和 headtime

    }, {
        key: 'setHeadTime',
        value: function setHeadTime(obj) {
            if (this.state.show === 'day') {
                this.setState({
                    headtime: obj.year + '-' + (0, _dateCore.fliterNum)(obj.month)
                });
            } else if (this.state.show === 'month') {
                this.setState({
                    headtime: obj.year
                });
            } else if (this.state.show === 'year') {
                this.setState({
                    headtime: obj.year + '-' + (parseInt(obj.year, 10) + 30)
                });
                this.iniYear(obj.year);
            }
        }

        // 判断年，月，日的选项

    }, {
        key: 'dateForFormat',
        value: function dateForFormat() {
            var obj = (0, _dateCore.formatDate)(this.props.nowDate, this.props.format);
            // 如果没有天的选择
            if (!obj.show.day) {

                // 如果又没有月份
                if (!obj.show.month) {
                    this.setState({
                        show: 'year',
                        defaultShow: 'year'
                    });
                    this.iniYear(obj.val);
                } else {
                    this.setState({
                        show: 'month',
                        defaultShow: 'month'
                    });
                }
            }
        }

        // 今天

    }, {
        key: 'clickNowDay',
        value: function clickNowDay(str) {
            var obj = (0, _dateCore.getDateNow)();
            this.props.resetDays({
                year: obj.year,
                month: obj.month,
                day: obj.day
            }, null, this.props.mid);

            this.setInner();
        }

        // 确定

    }, {
        key: 'clickOk',
        value: function clickOk(e, str) {
            e.stopPropagation();
            var obj = null;

            // 如果是组合框
            if (this.props.dates) {
                obj = {
                    str: (0, _dateCore.formatDate)(this.props.dates.startDate, this.props.format).val + ' ~ ' + (0, _dateCore.formatDate)(this.props.dates.endDate, this.props.format).val,
                    obj: this.props.dates,
                    clear: str === 'clear' ? true : false
                };
            } else {
                obj = {
                    str: (0, _dateCore.formatDate)(this.props.nowDate, this.props.format).val,
                    obj: this.props.nowDate,
                    clear: str === 'clear' ? true : false
                };
            }

            this.props.showOrHide(true, null, obj, {
                target: {
                    value: str === 'clear' ? '' : obj.str
                }
            });
        }

        // 清除

    }, {
        key: 'clearDate',
        value: function clearDate(e) {
            var self = this;
            this.clickOk(e, 'clear');
        }

        // 重新设置

    }, {
        key: 'resetDateList',
        value: function resetDateList(date, dates) {
            // console.log(date, dates)
            // 设置days
            var days = null;
            if (this.props.dates) {
                days = (0, _dateCore.setDays)(date, dates, this.props.mid);
            } else {
                days = (0, _dateCore.setDays)(date);
            }
            var months = (0, _dateCore.setMonths)(date);
            this.setHeadTime(date);
            this.setState({
                date: {
                    days: days,
                    months: months
                }
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            // init 时 分 秒
            this.setState({
                date: (0, _dateCore.setHHMMSS)()
            });

            // console.log(this.props.nowDate)

            // 设置days
            this.resetDateList(this.props.nowDate, this.props.dates);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if ((0, _dateCore.formatDate)(nextProps.nowDate, 'yyymmdd').val !== (0, _dateCore.formatDate)(this.props.nowDate, 'yyymmdd').val || nextProps.inner !== this.props.inner) {
                // console.log('重新设置~',this.props.mid)
                this.resetDateList(nextProps.nowDate, nextProps.dates);
            }
        }

        // 初始化

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                headtime: (0, _dateCore.formatDate)(this.props.nowDate, 'yyyy-mm').val
            });

            // 判断年月日选项
            this.dateForFormat();
        }
    }, {
        key: 'render',
        value: function render() {

            // 渲染日历
            var _state$date = this.state.date,
                years = _state$date.years,
                months = _state$date.months,
                days = _state$date.days,
                hours = _state$date.hours,
                minutes = _state$date.minutes,
                seconds = _state$date.seconds;


            var self = this;
            var style = null;
            var cName = ['mt-date'];
            var set = this.props.setPlace ? this.props.setPlace() : null;
            // 设置定位
            if (set) {
                var height = set.height,
                    left = set.left,
                    top = set.top,
                    width = set.width;

                // 计算临界值，重新设置left,top

                var out = (0, _outWindow.outWindow)(width, height, top, left, { width: 230, height: 280 });
                style = (0, _assign2.default)([{
                    left: out.left,
                    top: out.top
                }, this.props.modalStyle, { display: this.props.show ? 'block' : 'none' }]);
            } else {
                style = this.props.modalStyle;
            }

            if (this.props.modalClass) {
                cName.push(this.props.modalClass);
            }

            return _react2.default.createElement(
                'div',
                { className: cName.join(' '), id: this.props.mid, style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'mt-date-head' },
                    _react2.default.createElement(
                        'a',
                        { onClick: this.prevOutClick.bind(this), className: 'mt-date-btn-prev' },
                        _react2.default.createElement('i', { className: 'iconfont icon-arrow3l' })
                    ),
                    this.state.show === 'day' ? _react2.default.createElement(
                        'a',
                        { onClick: this.prevClick.bind(this), className: 'mt-date-btn-prev' },
                        _react2.default.createElement('i', { className: 'iconfont icon-arrowl' })
                    ) : null,
                    _react2.default.createElement(
                        'span',
                        { onClick: this.changeBox.bind(this), className: 'mt-date-stime' },
                        this.state.headtime
                    ),
                    this.state.show === 'day' ? _react2.default.createElement(
                        'a',
                        { onClick: this.nextClick.bind(this), className: 'mt-date-btn-next' },
                        _react2.default.createElement('i', { className: 'iconfont icon-arrowr' })
                    ) : null,
                    _react2.default.createElement(
                        'a',
                        { onClick: this.nextOutClick.bind(this), className: 'mt-date-btn-next' },
                        _react2.default.createElement('i', { className: 'iconfont icon-arrow3r' })
                    )
                ),
                _react2.default.createElement(_DatePickerBoxYear2.default, { range: this.props.range, clickYear: this.clickYear.bind(this), show: this.state.show, yearList: this.state.yearList }),
                this.state.defaultShow === 'year' ? null : _react2.default.createElement(_DatePickerBoxMonth2.default, { range: this.props.range, clickMonth: this.clickMonth.bind(this), show: this.state.show, months: months }),
                this.state.defaultShow === 'month' || this.state.defaultShow === 'year' ? null : _react2.default.createElement(_DatePickerBoxDay2.default, { range: this.props.range, clickDay: this.clickDay.bind(this), show: this.state.show, days: days }),
                _react2.default.createElement(
                    'div',
                    { className: 'mt-date-foot' },
                    _react2.default.createElement(
                        'a',
                        { onClick: this.clickNowDay.bind(this), className: 'mt-date-btn-now' },
                        '\u4ECA\u5929'
                    ),
                    this.props.mid.indexOf('start') === -1 ? _react2.default.createElement(
                        'a',
                        { onClick: this.clickOk.bind(this), className: 'mt-btn-xs mt-btn-primary mt-date-btn-ok' },
                        '\u786E\u5B9A'
                    ) : null,
                    this.props.mid.indexOf('start') === -1 ? _react2.default.createElement(
                        'a',
                        { onClick: this.clearDate.bind(this), className: 'mt-btn-xs mt-btn-warning mt-date-btn-clear' },
                        '\u6E05\u9664'
                    ) : null
                )
            );
        }
    }]);
    return DatePickerBox;
}(_react.Component);

// 主页


var _default = DatePickerBox;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DatePickerBox, 'DatePickerBox', 'dev/mtui/dateCore/DatePickerBox.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/dateCore/DatePickerBox.jsx');
}();

;
//# sourceMappingURL=DatePickerBox.js.map