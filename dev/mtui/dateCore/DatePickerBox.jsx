
import React, { Component } from 'react';
import { formatDate, addAndDelOneMonth, getMDay, fliterNum, getDateNow, setHHMMSS, setDays, setMonths } from './dateCore';
import assign from '../utils/assign';
import { outWindow } from '../utils/outWindow';
import DatePickerBoxDay from './DatePickerBoxDay';
import DatePickerBoxMonth from './DatePickerBoxMonth';
import DatePickerBoxYear from './DatePickerBoxYear';

// nowDate 当前日期
// resetDays 重新设置日期
// format 默认格式
// showOrHide 隐藏或者显示
// mid id

// date 组合日期专用，用来存放 start 和 end 日期

// className 模块class 日历组合不用传
// style 模块样式 日历组合不用传
// set 日历组合不用传

class DatePickerBox extends Component {

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show: 'day',
            headtime: null,
            yearList: [],
            defaultShow: 'day',
            date: null // HTML对应的日期obj
        };
    }

    // 
    setInner() {
        // 同步隔壁的inner样式
        if (this.props.syncInner) {
            this.props.syncInner();
        }
    }

    // 上一页
    prevClick() {
        // console.log('上一页');
        let { year, month, day } = this.props.nowDate;
        var obj = addAndDelOneMonth(year, month, 'del');
        obj['day'] = day;
        this.props.resetDays(obj, null, this.props.mid);
        this.setHeadTime(obj);
        this.setInner();
    }

    // 下一页
    nextClick() {
        // console.log('下一页');
        let { year, month, day } = this.props.nowDate;
        var obj = addAndDelOneMonth(year, month, 'add');
        obj['day'] = day;
        this.props.resetDays(obj, null, this.props.mid);
        this.setHeadTime(obj);
        this.setInner();
    }

    // 上一层的上一页
    prevOutClick() {

        let { year, month, day } = this.props.nowDate;
        let self = this;
        year = parseInt(year, 10);
        let obj = {
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
    nextOutClick() {
        let { year, month, day } = this.props.nowDate;
        let self = this;
        year = parseInt(year, 10);
        let obj = {
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
    iniYear(year) {
        year = parseInt(year, 10);
        let yearList = [];
        for (let i = year - 10; i < year + 20; i++) {
            yearList.push({
                year: i,
                type: 'year',
                active: i === year ? true : false
            });
        }
        this.setState({
            show: 'year',
            headtime: (year - 10) + '-' + (year + 19),
            yearList: yearList
        });
    }

    // 切换年，月，日的选择
    changeBox() {
        if (this.state.show === 'day') {
            this.setState({
                show: 'month',
                headtime: formatDate(this.props.nowDate, 'yyyy').val
            });
        } else { //  if(this.state.show == 'month')
            let year = formatDate(this.props.nowDate, 'yyyy').val;
            this.iniYear(year);
        }
    }

    // 设置年
    clickYear(elem) {

        if (elem.active) {
            return;
        }

        // 日这里需要做判断，年份变化，2月可能没有29号
        let maxDay = getMDay(elem.year, elem.month);
        let { day, month } = this.props.nowDate;
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
    clickMonth(elem) {
        this.setHeadTime(elem);
        if (elem.active) {
            return;
        }

        // 日这里需要做判断，年份变化，2月可能没有29号
        let maxDay = getMDay(elem.year, elem.month);
        let { day } = this.props.nowDate;
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
    clickDay(elem) {
        let maxDay = getMDay(elem.year, elem.month);
        this.props.resetDays({
            year: elem.year,
            month: elem.month,
            day: elem.day > maxDay ? maxDay : elem.day
        }, null, this.props.mid);
        // console.log('DatePickerBox 134 >> 当前选择的日期：',elem)
        this.setInner();
    }

    // 设置show,和 headtime
    setHeadTime(obj) {
        if (this.state.show === 'day') {
            this.setState({
                headtime: obj.year + '-' + fliterNum(obj.month)
            });
        } else if (this.state.show === 'month') {
            this.setState({
                headtime: obj.year
            });
        }else if (this.state.show === 'year') {
            this.setState({
                headtime: obj.year + '-' + (parseInt(obj.year, 10) + 30)
            });
            this.iniYear(obj.year);
        }
    }

    // 判断年，月，日的选项
    dateForFormat() {
        var obj = formatDate(this.props.nowDate, this.props.format);
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
    clickNowDay(str) {
        let obj = getDateNow();
        this.props.resetDays({
            year: obj.year,
            month: obj.month,
            day: obj.day
        }, null, this.props.mid);

        this.setInner();
    }

    // 确定
    clickOk(e, str) {
        e.stopPropagation();
        let obj = null;

        // 如果是组合框
        if (this.props.dates) {
            obj = {
                str: formatDate(this.props.dates.startDate, this.props.format).val + ' ~ ' + formatDate(this.props.dates.endDate, this.props.format).val,
                obj: this.props.dates,
                clear: str === 'clear' ? true : false
            };
        } else {
            obj = {
                str: formatDate(this.props.nowDate, this.props.format).val,
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
    clearDate(e) {
        let self = this;
        this.clickOk(e, 'clear');
    }

    // 重新设置
    resetDateList(date, dates) {
        // console.log(date, dates)
        // 设置days
        let days = null;
        if (this.props.dates) {
            days = setDays(date, dates, this.props.mid);
        } else {
            days = setDays(date);
        }
        let months = setMonths(date);
        this.setHeadTime(date);
        this.setState({
            date: {
                days: days,
                months: months
            }
        });
    }

    componentWillMount() {
        // init 时 分 秒
        this.setState({
            date: setHHMMSS()
        });

        // console.log(this.props.nowDate)

        // 设置days
        this.resetDateList(this.props.nowDate, this.props.dates);
    }

    componentWillUpdate(nextProps, nextState) {
        if (formatDate(nextProps.nowDate, 'yyymmdd').val !== formatDate(this.props.nowDate, 'yyymmdd').val || nextProps.inner !== this.props.inner) {
            // console.log('重新设置~',this.props.mid)
            this.resetDateList(nextProps.nowDate, nextProps.dates);
        }
    }

    // 初始化
    componentDidMount() {
        this.setState({
            headtime: formatDate(this.props.nowDate, 'yyyy-mm').val
        });

        // 判断年月日选项
        this.dateForFormat();
    }

    render() {

        // 渲染日历
        var { years, months, days, hours, minutes, seconds } = this.state.date;

        var self = this;
        var style = null;
        var cName = ['mt-date'];
        var set = this.props.setPlace ? this.props.setPlace() : null;
        // 设置定位
        if (set) {
            let { height, left, top, width } = set;

            // 计算临界值，重新设置left,top
            let out = outWindow(width, height, top, left, { width: 230, height: 280 });
            style = assign([{
                left: out.left,
                top: out.top
            }, this.props.modalStyle, { display: this.props.show ? 'block' : 'none' }]);
        } else {
            style = this.props.modalStyle;
        }

        if (this.props.modalClass) {
            cName.push(this.props.modalClass);
        }

        return <div className={cName.join(' ')} id={this.props.mid} style={style}>
            <div className="mt-date-head">
                <a onClick={this.prevOutClick.bind(this)} className="mt-date-btn-prev"><i className="iconfont icon-arrow3l"></i></a>
                {this.state.show === 'day' ? <a onClick={this.prevClick.bind(this)} className="mt-date-btn-prev"><i className="iconfont icon-arrowl"></i></a> : null}
                <span onClick={this.changeBox.bind(this)} className="mt-date-stime">{this.state.headtime}</span>
                {this.state.show === 'day' ? <a onClick={this.nextClick.bind(this)} className="mt-date-btn-next"><i className="iconfont icon-arrowr"></i></a> : null}
                <a onClick={this.nextOutClick.bind(this)} className="mt-date-btn-next"><i className="iconfont icon-arrow3r"></i></a>
            </div>
            <DatePickerBoxYear range={this.props.range} clickYear={this.clickYear.bind(this)} show={this.state.show} yearList={this.state.yearList} />
            {this.state.defaultShow === 'year' ? null :
                <DatePickerBoxMonth range={this.props.range} clickMonth={this.clickMonth.bind(this)} show={this.state.show} months={months} />}
            {this.state.defaultShow === 'month' || this.state.defaultShow === 'year' ? null :
                <DatePickerBoxDay range={this.props.range} clickDay={this.clickDay.bind(this)} show={this.state.show} days={days} />}
            <div className="mt-date-foot">
                <a onClick={this.clickNowDay.bind(this)} className="mt-date-btn-now">今天</a>
                {/* <a className="mt-date-btn-time">时钟</a> */}
                {this.props.mid.indexOf('start') === -1 ? <a onClick={this.clickOk.bind(this)} className="mt-btn-xs mt-btn-primary mt-date-btn-ok">确定</a> : null}
                {this.props.mid.indexOf('start') === -1 ? <a onClick={this.clearDate.bind(this)} className="mt-btn-xs mt-btn-warning mt-date-btn-clear">清除</a> : null}
            </div>
        </div>;
    }
}

// 主页
export default DatePickerBox;