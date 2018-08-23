"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

exports.default = natureArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 生成 0, 1, 2, 3, ... length 的数组
function natureArray(length) {
    return (0, _from2.default)({ length: length }, function (v, k) {
        return k;
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(natureArray, "natureArray", "dev/mtui/utils/natureArray.jsx");
}();

;
//# sourceMappingURL=natureArray.js.map