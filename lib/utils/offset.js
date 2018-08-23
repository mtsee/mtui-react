'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.offsetLeft = offsetLeft;
exports.offsetTop = offsetTop;
exports.position = position;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @type 获取dom 行对body的left
* @author : Mantou
*/
function offsetLeft(dom) {
    return dom.getBoundingClientRect().left;
}

function offsetTop(dom) {
    return dom.getBoundingClientRect().top;
}

function position(dom) {
    if (!dom || (typeof dom === 'undefined' ? 'undefined' : (0, _typeof3.default)(dom)) !== 'object') {
        return false;
    }
    var rect = dom.getBoundingClientRect();
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
        left: rect.left + (scrollLeft || 0),
        top: rect.top + (scrollTop || 0),
        width: dom.offsetWidth,
        height: dom.offsetHeight
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(offsetLeft, 'offsetLeft', 'dev/mtui/utils/offset.jsx');

    __REACT_HOT_LOADER__.register(offsetTop, 'offsetTop', 'dev/mtui/utils/offset.jsx');

    __REACT_HOT_LOADER__.register(position, 'position', 'dev/mtui/utils/offset.jsx');
}();

;
//# sourceMappingURL=offset.js.map