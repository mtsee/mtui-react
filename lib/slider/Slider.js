'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = function (_Component) {
    (0, _inherits3.default)(Slider, _Component);

    // 构造函数
    function Slider(props) {
        (0, _classCallCheck3.default)(this, Slider);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

        _this.state = {
            barWidth: 0
        };
        _this.startX = 0;
        _this.oldWid = 0;
        return _this;
    }

    (0, _createClass3.default)(Slider, [{
        key: 'onMouseDown',
        value: function onMouseDown(e) {
            this.startX = e.pageX;
            this.oldWid = this.state.barWidth;

            var self = this;
            var updo = function updo(e) {
                document.removeEventListener('mousemove', mouseMove);
                document.removeEventListener('mouseup', updo);

                if (self.props.sliderEnd) {
                    self.props.sliderEnd(self.getValue() + self.props.minValue);
                }
            };

            // 鼠标移动
            var mouseMove = function mouseMove(e) {
                var wid = self.oldWid + e.pageX - self.startX;

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
                            self.props.onChange(self.getValue() + self.props.minValue);
                        }
                    });
                }
            };

            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', updo);
        }

        // 获取当前值

    }, {
        key: 'getValue',
        value: function getValue() {
            var val = this.state.barWidth / this.props.width * (this.props.maxValue - this.props.minValue);
            return val;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var val = this.props.defaultValue / (this.props.maxValue + this.props.minValue) * this.props.width;
            if (this.props.sliderStart) {
                this.props.sliderStart(this.props.defaultValue);
            }
            this.setState({
                barWidth: val
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                className = _props.className,
                maxValue = _props.maxValue,
                minValue = _props.minValue,
                width = _props.width,
                onChange = _props.onChange,
                sliderEnd = _props.sliderEnd,
                other = (0, _objectWithoutProperties3.default)(_props, ['size', 'className', 'maxValue', 'minValue', 'width', 'onChange', 'sliderEnd']);

            var cName = ['mt-slider', 'clearfix'];
            if (className) {
                cName.push(className);
            }
            if (size) {
                cName.push('mt-slider-' + size);
            }
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { style: { width: width }, className: cName.join(' ') }),
                _react2.default.createElement(
                    'div',
                    { className: 'mt-slider-bar', style: { width: this.state.barWidth } },
                    _react2.default.createElement('a', { onMouseDown: this.onMouseDown.bind(this), className: 'mt-slider-btn' })
                )
            );
        }
    }]);
    return Slider;
}(_react.Component);

//主页


Slider.defaultProps = {
    size: 'nm', // lg , nm, sm, xs 大 ，正常，小，超小
    maxValue: 100,
    minValue: 0,
    width: 100 };
var _default = Slider;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Slider, 'Slider', 'dev/mtui/slider/Slider.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/slider/Slider.jsx');
}();

;
//# sourceMappingURL=Slider.js.map