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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _toArray = require('../utils/toArray');

var _assign = require('../utils/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectModal = function (_Component) {
    (0, _inherits3.default)(SelectModal, _Component);

    // 构造函数
    function SelectModal(props) {
        (0, _classCallCheck3.default)(this, SelectModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SelectModal.__proto__ || (0, _getPrototypeOf2.default)(SelectModal)).call(this, props));

        _this.state = {
            cName: ''
        };
        _this.num = 0;
        return _this;
    }

    // 选择option


    (0, _createClass3.default)(SelectModal, [{
        key: 'clickOption',
        value: function clickOption(elem, e) {
            e.target.value = elem.props;
            var obj = {
                target: e.target
            };
            obj.target['value'] = elem.props.value;
            obj.target['childrens'] = elem.props.children;
            this.props.showOrHide(true, elem.props, null, obj);
        }

        // 设置值

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.show !== this.props.show) {
                var cName = ' mt-select-animate';
                var self = this;
                setTimeout(function () {
                    self.setState({
                        cName: self.props.show ? cName : ''
                    });
                }, 10);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var set = this.props.getPlace();
            var modalStyle = this.props.modalStyle || {};
            if (set) {
                var height = set.height,
                    left = set.left,
                    top = set.top,
                    width = set.width;

                var style = (0, _assign2.default)([{
                    display: this.props.show ? 'block' : 'none'
                }, {
                    left: left,
                    top: top + height
                }, {
                    width: this.props.modalWidth
                }, {
                    height: 'auto'
                }, modalStyle]);
            }
            var self = this;
            var cName = ['mt-select', this.state.cName]; // mt-select-ie10

            if (!MT_IE9) {
                cName.push('mt-select-ie10');
            }

            var child = (0, _toArray.toArray)(this.props.children);

            return _react2.default.createElement(
                'div',
                { className: cName.join(' '), style: style, id: this.props.mid },
                child.map(function (elem, index) {
                    return _react2.default.createElement(
                        'div',
                        { onClick: self.clickOption.bind(self, elem), key: index + +new Date(), className: 'mt-select-option' },
                        elem.props.children
                    );
                })
            );
        }
    }]);
    return SelectModal;
}(_react.Component);

// 主页


var _default = SelectModal;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SelectModal, 'SelectModal', 'dev/mtui/select/SelectModal.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/select/SelectModal.jsx');
}();

;
//# sourceMappingURL=SelectModal.js.map