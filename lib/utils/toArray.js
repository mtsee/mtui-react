"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @author Mantou
 * @desc 处理 this.props.children 不是数组的情况，调用 map出错
 */
function toArray(arr) {
    if (arr instanceof Array) {
        // ...
    } else {
        if (!arr) {
            arr = [];
        } else {
            arr = [arr];
        }
    }
    return arr;
}

exports.toArray = toArray;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(toArray, "toArray", "dev/mtui/utils/toArray.jsx");
}();

;
//# sourceMappingURL=toArray.js.map