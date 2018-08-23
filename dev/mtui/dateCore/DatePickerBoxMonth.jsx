
import React, { Component } from 'react';

class DatePickerBoxMonth extends Component {

	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		const self = this;
		return <div className="mt-date-body-months" style={{display: this.props.show === 'month'?'block':'none'}}>
					<div className="mt-date-month">
						<ul className="clearfix">
							{
								this.props.months.map(function(elem, index) {
									return <li onClick={self.props.clickMonth.bind(self,elem)} key={index} className={"mt-date-month-item" + (elem.active?' mt-date-active':'')}><a>{elem.month}月</a></li>;
								})
							}
						</ul>
					</div>
				</div>
	}
}

//主页
export default DatePickerBoxMonth;