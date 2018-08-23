
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePickerBox from '../dateCore/DatePickerBox';
import { getMDay, weekNumber, addAndDelOneMonth, addOrDelMonthDay, getDateNow, formatDate, setHHMMSS, setMonths, strToObj } from '../dateCore/dateCore';
import { position } from '../utils/offset';
import assign from '../utils/assign';
import { removeDom } from '../utils/dom';
import { outWindow } from '../utils/outWindow';
import { getXY, clickBlank, offClickBlank } from '../utils/triggerBlank';

class DatePickers extends Component {

    // 默认参数
    static defaultProps = {
        placeholder: '选择时间段',
        showBack: null, // 显示时候的回调
        onChange: null, // 关闭时候的回调
        modalClass: '',
        modalStyle: {},
        range: [',', ','], // 取值范围
        format: 'yyyy-mm-dd' // 格式化
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            startDate: null,
            endDate: null,
            clear: false,
            selectDays: null,
            syncInner: new Date().getTime()
        };
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'mt-div');
        this.handler = null;
        this.mid = null;
        this.refBtn = null;
    }

    // 同步inner 样式
    syncInner() {
        this.setState({
            syncInner: new Date().getTime()
        });
    }

    setPlace() {
        return position(this.refBtn);
    }

    // setMid
    setMid() {
        if (this.mid === null) {
            this.mid = 'mt_dates_' + +new Date();
        }
    }

    // 渲染div
    renderDiv(mark) {
        this.setMid();
        var self = this;
        var dom = document.getElementById(this.mid);
        // 首次渲染即可
        if (!dom || mark) {
            if (!mark) {
                document.body.appendChild(this.div);
            }

            let { height, left, top, width } = this.setPlace();
            let out = outWindow(width, height, top, left, {width: 460, height: 280});
            let style = assign([{
                left: out.left,
                top: out.top
            }, this.props.modalStyle || {}, { display: this.state.show ? 'block' : 'none' }]);
            let { mid, format, ...other } = this.props;

            let cName = ['mt-dates'];
            if (this.props.className) {
                cName.push(this.props.className);
            }
            if (this.props.modalClass) {
                cName.push(this.props.modalClass);
            }
            if (mid) {
                this.mid = mid;
            }

            ReactDOM.render(
                <div className={cName.join(' ')} style={style} id={this.mid}>
                    <DatePickerBox
                        inner={this.state.syncInner}
                        syncInner={this.syncInner.bind(this)}
                        resetDays={this.resetDays.bind(this)}
                        range={this.props.range[0]}
                        showOrHide={this.showOrHide.bind(this)}
                        nowDate={this.state.startDate}
                        dates={{
                            startDate: this.state.startDate,
                            endDate: this.state.endDate
                        }}
                        format={format}
                        mid={this.mid + '_start'} />
                    <DatePickerBox
                        inner={this.state.syncInner + 1}
                        syncInner={this.syncInner.bind(this)}
                        range={this.props.range[1]}
                        resetDays={this.resetDays.bind(this)}
                        showOrHide={this.showOrHide.bind(this)}
                        nowDate={this.state.endDate}
                        dates={{
                            startDate: this.state.startDate,
                            endDate: this.state.endDate
                        }}
                        format={format}
                        mid={this.mid + '_end'} />
                </div>
                , this.div);
        }
    }

    // /数据验证，开始时间不能小于结束时间
    dateChecked(obj) {
        let start, end;
        if (obj['startDate']) {
            start = obj.startDate;
            end = this.state.endDate;
        } else {
            start = this.state.startDate;
            end = obj.endDate;
        }

        // 如果开始大于结束
        if (parseInt(formatDate(start, 'yyyymmdd').val, 10) > parseInt(formatDate(end, 'yyyymmdd').val, 10)) {
            let date = obj['startDate'] ? start : end;
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
    resetDays(date, callback, mark) {
        if (mark) {
            mark = mark.split('_');
            mark = mark[mark.length - 1];
        }
        let obj = {};
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
    showOrHide(show, callback, data, e) {
        let box = document.getElementById(this.mid);

        // 如果没有，初始化一个
        if (!box) {
            this.renderDiv();
        }

        this.setState({
            show: !show
        }, function () {
            let self = this;
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
    handleClick(e) {
        let _btn = document.getElementById(this.mid);
        if (_btn && _btn.style.display === 'block') {
            return;
        }
        const self = this;
        // 设置set
        self.showOrHide(self.state.show);
        if (self.handler) {
            offClickBlank(self.handler);
        }
        // 绑定点击空白事件
        self.handler = clickBlank(
            document.getElementById(self.mid),
            function (mark) {
                if (!mark) {
                    self.showOrHide(true);
                    offClickBlank(self.handler);
                }
            }
        );
    }

    // /更新弹窗里面的数据
    componentDidUpdate(prevProps) {
        if(document.getElementById(this.mid)){
            this.renderDiv(true);
        }
    }

    // /渲染前，先设置 startDate 和 endDate
    componentWillMount() {

        let date = {};
        if (this.props.defaultValue) {
            let arr = this.props.defaultValue.split('/');
            date['startDate'] = strToObj(arr[0]);
            date['endDate'] = strToObj(arr[1]);
        } else {
            let now = getDateNow();
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
                    str: formatDate(date.startDate, this.props.format).val + ' ~ ' + formatDate(date.endDate, this.props.format).val
                }
            });
        }
    }

    // 卸载组件
    componentWillUnmount() {
        offClickBlank(this.handler);
        removeDom(this.div);
        ReactDOM.unmountComponentAtNode(this.div);
    }

    render() {
        var { mid, format, showBack, range, modalClass, defaultValue, modalStyle, className, size, onChange, ...other } = this.props;
        var dayval = this.state.selectDays ? this.state.selectDays.str : '';
        var cName = ['mt-input mt-input-dates'];
        if (className) {
            cName.push(className);
        }
        cName.push('mt-input-' + (size ? size : 'nm'));
        if (mid) {
            this.mid = mid;
        }

        return <span ref={(c) => { this.refBtn = c; }} className={cName.join(' ')} onClick={this.handleClick.bind(this)}>
            <input
                value={this.state.clear ? '' : dayval}
                readOnly
                type="text"
                placeholder={this.props.placeholder}
                {...other} />
            <span className="mt-input-suffix"><i className="iconfont icon-date"></i></span>
        </span>;
    }
}

// 主页
export default DatePickers;