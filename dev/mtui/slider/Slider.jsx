
import React, { Component } from 'react';

class Slider extends Component {

    static defaultProps = {
        size: 'nm', // lg , nm, sm, xs 大 ，正常，小，超小
        maxValue: 100,
        minValue: 0,
        width: 100
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            barWidth: 0
        };
        this.startX = 0;
        this.oldWid = 0;
    }

    onMouseDown(e) {
        this.startX = e.pageX;
        this.oldWid = this.state.barWidth;

        let self = this;
        let updo = function (e) {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', updo);

            if (self.props.sliderEnd) {
                self.props.sliderEnd(self.getValue() + self.props.minValue);
            }

        };

        // 鼠标移动
        let mouseMove = function (e) {
            let wid = self.oldWid + e.pageX - self.startX;

            if (wid > self.props.width) {
                wid = self.props.width;
            } else if (wid < 0) {
                wid = 0;
            }
            if (wid <= self.props.width && wid >= 0) {
                self.setState({
                    barWidth: wid
                }, function () {
                    if (self.props.onChange) {
                        self.props.onChange(self.getValue() + self.props.minValue)
                    }
                });
            }
        };

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', updo);
    }

    // 获取当前值
    getValue() {
        let val = (this.state.barWidth / this.props.width) * (this.props.maxValue - this.props.minValue)
        return val;
    }

    componentWillMount() {
        let val = this.props.defaultValue / (this.props.maxValue + this.props.minValue) * this.props.width;
        if (this.props.sliderStart) {
            this.props.sliderStart(this.props.defaultValue);
        }
        this.setState({
            barWidth: val
        });
    }

    render() {
        const { size, className, maxValue, minValue, width, onChange, sliderEnd, ...other } = this.props;
        let cName = ['mt-slider', 'clearfix'];
        if (className) {
            cName.push(className);
        }
        if (size) {
            cName.push('mt-slider-' + size);
        }
        return (
            <div {...other} style={{ width: width }} className={cName.join(' ')}>
                <div className="mt-slider-bar" style={{ width: this.state.barWidth }}>
                    <a onMouseDown={this.onMouseDown.bind(this)} className="mt-slider-btn"></a>
                </div>
            </div>
        );
    }
}

//主页
export default Slider;