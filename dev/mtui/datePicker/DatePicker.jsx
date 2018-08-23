
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getMDay, weekNumber, judgeDate, addAndDelOneMonth, getDateNow, formatDate, setHHMMSS, setDays, setMonths } from '../dateCore/dateCore';
import DatePickerBox from '../dateCore/DatePickerBox';
import { position } from '../utils/offset';
import { removeDom } from '../utils/dom';
import { getXY, clickBlank, offClickBlank } from '../utils/triggerBlank';

class DatePicker extends Component {

    // 默认参数
    static defaultProps = {
        placeholder: '日期',
        showBack: null,  // 显示时候的回调
        onChange: function () {
            // ...
        },  // 关闭时候的回调
        modalClass: '',
        modalStyle: {}, // 
        validateInfo: null,
        format: 'yyyy-mm-dd' // 格式化
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            nowDate: null,
            clear: false,
            inputDate: null
        };
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'mt-div');
        this.handler = null;
        this.mid = null;
        this.refBtn = null;
    }

    // 重新渲染
    resetDays(date, mark) {
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

    setPlace() {
        return position(this.refBtn);
    }

    // 渲染div mark == true 表示更新
    renderDiv(mark) {

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
            ReactDOM.render(<DatePickerBox
                nowDate={this.state.nowDate}
                range={this.props.range}
                format={this.props.format}
                mid={this.mid}
                setPlace={this.setPlace.bind(this)}
                show={this.state.show}
                modalStyle={this.props.modalStyle}
                modalClass={this.props.modalClass}
                resetDays={this.resetDays.bind(this)}
                showOrHide={this.showOrHide.bind(this)} />, this.div); // 
        }
    }

    // 隐藏显示
    showOrHide(show, callback, data, e) {
        let box = document.getElementById(this.mid);

        // 如果没有，初始化一个
        if (!box) {
            this.renderDiv();
        }

        this.setState({
            show: !show
        }, () => {
            if (this.state.show) {
                if (this.props.showBack) {
                    this.props.showBack();
                }
            } else {
                if (this.props.onChange && data && judgeDate(data.obj, this.props.range)) {
                    this.setState({
                        clear: data.clear
                    });

                    // 数据过滤
                    for (let key in data.obj) {
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
                    this.props.onChange(e, data);
                }
            }

            // 修改input 里面的值
            if (data && judgeDate(data.obj, this.props.range)) {
                this.setState({
                    inputDate: data.obj
                });
            }

            if (callback) {
                callback(data);
            }
        });
    }

    // 点击事件
    handleClick(e) {
        let _btn = document.getElementById(this.mid);
        if (_btn && _btn.style.display === 'block') {
            return;
        }

        const self = this;

        this.showOrHide(self.state.show);
        if (this.handler) {
            offClickBlank(self.handler);
        }
        // 绑定点击空白事件
        this.handler = clickBlank(
            document.getElementById(self.mid),
            function (mark) {
                if (!mark) {
                    self.showOrHide(true);
                    offClickBlank(self.handler);
                }
            }
        );
    }

    // xxxx-xx-xx　转换成 obj
    dateToOBj = (dateVal) => {
        let date = null;
        if (dateVal) {
            let val = dateVal.split('-');
            date = {
                year: parseInt(val[0], 10) || null,
                month: parseInt(val[1], 10) || null,
                day: parseInt(val[2], 10) || null
            };
        } else {
            date = getDateNow();
            this.setState({
                clear: true,
                show: this.props.visible ? true : false
            });
        }

        return date;
    }

    // 渲染前
    componentWillMount() {
        // 初始化日期 默认是当前日期
        let dateVal = this.props.defaultValue || this.props.value;
        this.resetDays(this.dateToOBj(dateVal), true);
    }

    componentDidMount() {
        if (this.props.visible) {
            this.handleClick();
        }
    }

    // 更新弹窗里面的数据
    componentDidUpdate(prevProps) {
        if(document.getElementById(this.mid)) {
            this.renderDiv(true);
        }
    }

    // 卸载组件
    componentWillUnmount() {
        offClickBlank(this.handler);
        removeDom(this.div);
        ReactDOM.unmountComponentAtNode(this.div);
    }

    // 如果 value 更新
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                clear: nextProps.value ? false : true,
                nowDate: this.dateToOBj(nextProps.value),
                inputDate: this.dateToOBj(nextProps.value)
            });
        }
    }

    render() {
        var { mid, format, showBack, range, modalClass, modalStyle, defaultValue, value, className, size, datePickers, visible, suffix, validateInfo, onChange, ...other } = this.props;
        var cName = ['mt-input mt-input-date mt-input-suffix-out'];
        var dayval = formatDate(this.state.inputDate, this.props.format).val;
        if (className) {
            cName.push(className);
        }
        cName.push('mt-input-' + (size ? size : 'nm'));
        if (mid) {
            this.mid = mid;
        }
        return <span ref={(c) => { this.refBtn = c; }} className={cName.join(' ')} onClick={this.handleClick.bind(this)}  >
            <input
                value={this.state.clear ? '' : dayval}
                readOnly
                type="text"
                placeholder={this.props.placeholder}
                {...other} />
            {validateInfo ? <span className="mt-input-suffix">{suffix}</span> : <span className="mt-input-suffix"><i className="iconfont icon-date"></i></span>}
            {validateInfo}
        </span>;
    }
}

// 主页
export default DatePicker;