'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = assign;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @type 合并obj 方法, 如果传入为null ,也会返回一个{}
* @author : Mantou
*/
function assign(arr) {
    var newObj = {};
    if (arr instanceof Array) {
        for (var i = 0; i < arr.length; i++) {
            if ((0, _typeof3.default)(arr[i]) === 'object') {
                for (var key in arr[i]) {
                    if ((0, _typeof3.default)(arr[i]) === 'object') {
                        newObj[key] = arr[i][key];
                    }
                }
            }
        }
    }
    return newObj;
}
// return Object.assign

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(assign, 'assign', 'dev/mtui/utils/assign.jsx');
}();

;
//# sourceMappingURL=assign.js.map