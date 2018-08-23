
import React, { Component } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Input from '../input/Input';
import Button from '../button/Button';
import PropTypes from 'prop-types';
import './style.scss';
import leftPad from '../utils/leftPad';
import natureArray from '../utils/natureArray';

const itemHeight = 25; // 时间选择项的css高度，与css中的对应

function format(date) {
    return [leftPad(date.getHours(), 2, '0'), leftPad(date.getMinutes(), 2, '0'), leftPad(date.getSeconds(), 2, '0')].join(':');
}

function parse(timeStr) {
    return timeStr.split('');
}

class TimePicker extends Component {

    static defaultProps = {
        value: '', // 默认当前的时间，如果输入的话，强约定格式为：hh:mm:ss
        onChange: function() {return;},
        width: 220,
        itemsToshow: 7,
        inputClassName: '',
        modalClassName: ''
        // placeholder: ''
    }
    static propTypes = {
        value: PropTypes.string.isRequired
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            time: [],
            hourList: natureArray(24).map(hour => leftPad(hour, 2, '0')),
            minList: natureArray(60).map(hour => leftPad(hour, 2, '0')),
            secList: natureArray(60).map(hour => leftPad(hour, 2, '0'))
        };
        this.onScroll = this.onScroll.bind(this);
    }

    // 渲染前
    componentWillMount() {
        // 初始化日期 默认是当前日期
        this.setState({
            time: this.props.value ? this.props.value.split(':') : format(new Date()).split(':')
        });
    }

    componentWillUnmount(){
        document.removeEventListener('mousewheel', this.onScroll);
    }
 
    // 更新弹窗里面的数据
    componentDidUpdate(prevProps) {
        // ...
    }

    showBack(e) {
        this.setState({
            time: this.props.value ? this.props.value.split(':') : format(new Date()).split(':')
        });
        document.addEventListener('mousewheel', this.onScroll);
    }
    
    onScroll(evt) {
        let wrapper = evt.target.parentNode;
        if(evt.wheelDeltaY === 0) {
            return;
        }
        let step = evt.wheelDeltaY > 0 ? -1 : 1;
        
        let {time, hourList, minList, secList} = this.state;
        if(wrapper === this.hourWrap) {
            this.inputHour(resolve(hourList, time[0]));
        } else if(wrapper === this.minWrap) {
            this.inputMin(resolve(minList, time[1]));
        } else if(wrapper === this.secWrap) {
            this.inputSec(resolve(secList, time[2]));
        }

        function resolve(set, val) {
            let present = set.indexOf(val);
            let next = present + step;
            next = Math.max(0, next);
            next = Math.min(set.length - 1, next);
            return set[next];
        }
    }

    closeBack(e) {
        document.onmousewheel = null;
    }
    
    inputHour(val) {
        let t = [].concat(this.state.time);
        t[0] = val;
        this.setState({
            time: t
        });
    }
    inputMin(val) {
        let t = [].concat(this.state.time);
        t[1] = val;
        this.setState({
            time: t
        });
    }
    inputSec(val) {
        let t = [].concat(this.state.time);
        t[2] = val;
        this.setState({
            time: t
        });
    }

    btnCancel() {
        this.setState({
            time: this.props.value ? this.props.value.split(':') : format(new Date()).split(':')
        });
        this.modal.handleClick(); // handleClick方法对后事完善的比较好
    }

    btnOkay() {
        this.props.onChange(this.state.time.join(':'));
        this.modal.handleClick();
    }

    //
    render() {
        let {itemsToshow, inputClassName, modalClassName, width, value} = this.props;
        let cName = ['mt-input mt-input-timepicker mt-input-suffix-out'];
        if (inputClassName) {
            cName.push(inputClassName);
        }
        const basicTop = (itemsToshow - 1 ) / 2 * itemHeight;
        const itemListMaxHeight = itemHeight * itemsToshow;
        
        let {time, hourList, minList, secList} = this.state;

        let inputDom = <span>
                <Input readOnly 
                value={this.props.value ? this.props.value : ''} 
                className={cName.join(' ')} 
                placeholder={this.props.hasOwnProperty('placeholder') ? this.props.placeholder : '时间'}
                style={{width}}
                suffix={<i className="iconfont icon-time"></i>}/>
            </span>;
        return (
            <Dropdown 
                ref={(modal) => this.modal = modal}
                btn={inputDom} 
                modalClass={modalClassName}
                showBack={this.showBack.bind(this)} 
                closeBack={this.closeBack.bind(this)}
                style={{width}}
                trigger="click">
        			<div 
                    className="mt-timepicker-panel" 
                    onMouseEnter={()=>{
                        document.body.style.overflow = 'hidden';
                    }}
                    onMouseLeave={()=> {
                        document.body.style.overflow = 'auto';
                    }}
                    >
                        <div className="mt-timepickers">
                            <div className="mt-itempicker">
                                <div className="mt-timepicker-title">时</div>
                                <div className="mt-itemList" style={{height: itemListMaxHeight}}>
                                    <div className="mt-timepicker-pointer" style={{top: basicTop}}></div>
                                    <div ref={ele => this.hourWrap = ele} className="mt-listWrap" style={{
                                        top: basicTop - (hourList.indexOf(time[0]) * itemHeight)
                                    }}>
                                        {hourList.map(hour => {
                                            let className = time[0] === hour ? ['timeItem', 'active'].join(' ') : 'timeItem';
                                            return <div 
                                            key={hour} 
                                            onClick={() => this.inputHour(hour)} 
                                            className={className}>{hour}</div>;
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-itempicker">
                                <div className="mt-timepicker-title">分钟</div>
                                <div className="mt-itemList" style={{height: itemListMaxHeight}}>
                                    <div className="mt-timepicker-pointer" style={{top: basicTop}}></div>
                                    <div ref={ele => this.minWrap = ele} className="mt-listWrap" style={{
                                        top: basicTop - (minList.indexOf(time[1]) * itemHeight)
                                    }}>
                                        {minList.map(min => {
                                            let className = time[1] === min ? ['timeItem', 'active'].join(' ') : 'timeItem';
                                            return <div 
                                                key={min}
                                                onClick={() => this.inputMin(min)}
                                                className={className}>{min}</div>;
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-itempicker">
                                <div className="mt-timepicker-title">秒</div>
                                <div className="mt-itemList" style={{height: itemListMaxHeight}}>
                                    <div className="mt-timepicker-pointer" style={{top: basicTop}}></div>
                                    <div ref={ele => this.secWrap = ele} className="mt-listWrap" style={{
                                        top: basicTop - (secList.indexOf(time[2]) * itemHeight)
                                    }}>
                                        {secList.map(second => {
                                            let className = time[2] === second ? ['timeItem', 'active'].join(' ') : 'timeItem';
                                            return <div 
                                            key={second} 
                                            onClick={() => this.inputSec(second)}
                                            className={className}>{second}</div>;
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-timepicker-operation">
                            <Button onClick={this.btnCancel.bind(this)}>取消</Button>&nbsp;&nbsp;
                            <Button type="primary" onClick={this.btnOkay.bind(this)}>确定</Button>
                        </div>
        			</div>
        	</Dropdown>
        );
    }
}

// TimePicker
export default TimePicker;
