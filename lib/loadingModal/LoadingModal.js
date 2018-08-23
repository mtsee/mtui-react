'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LoadingBox = require('../loadingBox/LoadingBox');

var _LoadingBox2 = _interopRequireDefault(_LoadingBox);

var _bodyscroll = require('../utils/bodyscroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingModal = {};
var id = 'mt-div-loading';
LoadingModal.show = function (info, type, bg) {
    if (!document.getElementById(id)) {
        (0, _bodyscroll.hideScroll)();
        var div = document.createElement('div');
        div.setAttribute('class', 'mt-div');
        div.setAttribute('id', id);
        document.body.appendChild(div);
        _reactDom2.default.render(_react2.default.createElement(_LoadingBox2.default, { bg: bg || true, type: type || 'loading3', info: info || '' }), div);
    }
};

LoadingModal.hide = function () {
    var self = document.getElementById(id);
    (0, _bodyscroll.showScroll)();
    if (self) {
        if (MT_IE9) {
            self.removeNode(true);
        } else {
            self.remove();
        }
    }
};

// 主页
var _default = LoadingModal;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LoadingModal, 'LoadingModal', 'dev/mtui/loadingModal/LoadingModal.jsx');

    __REACT_HOT_LOADER__.register(id, 'id', 'dev/mtui/loadingModal/LoadingModal.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/loadingModal/LoadingModal.jsx');
}();

;
//# sourceMappingURL=LoadingModal.js.map