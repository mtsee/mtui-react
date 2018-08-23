'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeDom = removeDom;
// 移除DOM
function removeDom(dom) {
    if (MT_MS === 'IE') {
        dom.removeNode(true);
    } else {
        dom.remove();
    }
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(removeDom, 'removeDom', 'dev/mtui/utils/dom.jsx');
}();

;
//# sourceMappingURL=dom.js.map