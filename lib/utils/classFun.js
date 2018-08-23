'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* @type class操作
* @author : Mantou
*/
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;
    }
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj, cls) {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
}
//
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(hasClass, 'hasClass', 'dev/mtui/utils/classFun.jsx');

    __REACT_HOT_LOADER__.register(addClass, 'addClass', 'dev/mtui/utils/classFun.jsx');

    __REACT_HOT_LOADER__.register(removeClass, 'removeClass', 'dev/mtui/utils/classFun.jsx');

    __REACT_HOT_LOADER__.register(toggleClass, 'toggleClass', 'dev/mtui/utils/classFun.jsx');
}();

;
//# sourceMappingURL=classFun.js.map