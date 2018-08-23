"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* @type 选择器 closest
* @author : web
*/
function closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return null;
}
//
exports.closest = closest;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(closest, "closest", "dev/mtui/utils/select.jsx");
}();

;
//# sourceMappingURL=select.js.map