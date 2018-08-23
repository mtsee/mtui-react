'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classFun = require('../utils/classFun');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tipsMsg(obj) {
    var id = 'mt_tip_' + new Date().getTime();
    var type = 'mt-tip mt-tip-' + obj.type + ' animated fadeInDown';

    // 定时器
    setTimeout(function () {

        var self = document.getElementById(id);

        (0, _classFun.removeClass)(self, 'fadeInDown');
        (0, _classFun.addClass)(self, 'fadeOutUp');

        self.style.height = 0;
        self.style.marginTop = 0;
        setTimeout(function () {
            if (MT_IE9) {
                self.removeNode(true);
            } else {
                self.remove();
            }

            if (obj.callback) {
                obj.callback(self);
            }
        }, 800);
    }, obj.time || 2000);

    var div = document.createElement('div');
    if (!document.getElementById('mt-div-tips')) {
        div.setAttribute('class', 'mt-div');
        div.setAttribute('id', 'mt-div-tips');
        document.body.appendChild(div);
        _reactDom2.default.render(_react2.default.createElement(
            'div',
            { className: type, id: id },
            _react2.default.createElement(
                'div',
                { className: 'mt-tips-inline' },
                _react2.default.createElement('i', { className: 'iconfont icon-' + obj.type }),
                '\xA0\xA0',
                obj.msg
            )
        ), div);
    } else {
        div.setAttribute('class', type);
        div.setAttribute('id', id);
        div.innerHTML = '<div class="mt-tips-inline"><i class="iconfont icon-' + obj.type + '"></i>&nbsp;&nbsp;' + obj.msg + '</div>';
        document.getElementById('mt-div-tips').appendChild(div);
    }
}
var Tip = {};
Tip.success = function (msg, time, callback) {
    tipsMsg({ msg: msg, type: 'success', time: time, callback: callback });
};
Tip.error = function (msg, time, callback) {
    tipsMsg({ msg: msg, type: 'danger', time: time, callback: callback });
};
Tip.warning = function (msg, time, callback) {
    tipsMsg({ msg: msg, type: 'warning', time: time, callback: callback });
};
var _default = Tip;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(tipsMsg, 'tipsMsg', 'dev/mtui/tip/Tip.jsx');

    __REACT_HOT_LOADER__.register(Tip, 'Tip', 'dev/mtui/tip/Tip.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/tip/Tip.jsx');
}();

;
//# sourceMappingURL=Tip.js.map