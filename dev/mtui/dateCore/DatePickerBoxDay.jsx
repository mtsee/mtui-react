
import React, { Component } from 'react';
import { judgeDate } from './dateCore';

class DatePickerBoxDay extends Component {

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            setWeek: ['日', '一', '二', '三', '四', '五', '六']
        };
    }

    render() {
        const self = this;
        return <div className="mt-date-body-days" style={{ display: this.props.show === 'day' ? 'block' : 'none' }}>
            <div className="mt-date-week">
                <ul>
                    {
                        this.state.setWeek.map(function (elem, index) {
                            return <li key={index}>{elem}</li>;
                        })
                    }
                </ul>
            </div>
            <div className="mt-date-day">
                <ul className="clearfix">
                    {
                        this.props.days.map((elem, index) => {
                            let cName = ["mt-date-day-" + elem.type];
                            if (elem.active) {
                                cName.push('mt-date-active');
                            }
                            if (elem.mark) {
                                cName.push('mt-dates-' + elem.mark);
                            }
                            if (elem.inner) {
                                cName.push('mt-dates-inner');
                            }
                            let dom = null;
                            let canClick = judgeDate(elem, this.props.range);
                            if (elem.day && canClick) {
                                dom = <li onClick={this.props.clickDay.bind(this, elem)} key={index} className={cName.join(' ')}><a>{elem.day}</a></li>;
                            } else if (elem.day && !canClick) {
                                cName.push('mt-disable-date');
                                dom = <li key={index} className={cName.join(' ')}><a>{elem.day}</a></li>;
                            }
                            return dom;
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

//主页
export default DatePickerBoxDay;