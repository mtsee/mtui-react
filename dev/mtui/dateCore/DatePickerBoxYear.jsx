import React, { Component } from 'react';

class DatePickerBoxYear extends Component {

    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        const self = this;
        return <div className="mt-date-body-years" style={{ display: this.props.show === 'year' ? 'block' : 'none' }}>
            <div className="mt-date-year">
                <ul className="clearfix">
                    {
                        this.props.yearList.map(function (elem, index) {
                            return <li onClick={self.props.clickYear.bind(self, elem)} key={index} className={"mt-date-yearli" + (elem.active ? ' mt-date-active' : '')}><a>{elem.year}</a></li>;
                        })
                    }
                </ul>
            </div>
        </div>;
    }
}

// 主页
export default DatePickerBoxYear;