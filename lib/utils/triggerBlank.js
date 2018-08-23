'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.offClickBlank = exports.clickBlank = exports.getXY = undefined;

var _offset = require('./offset');

function getXY(dom) {
    return (0, _offset.position)(dom);
}

// 如果点击了空白区域就是false
/**
* @type class操作
* @author : Mantou
*/
function clickBlank(dom, callback, events, _btn, onlybtn) {

    events = events || 'click';

    // 点击事件
    var _handler = function handler(e) {
        var modal = getXY(dom);
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var y = e.clientY + scrollTop || 0;

        var btnJudge = false;
        // 如果是hover
        if (_btn && events === 'mousemove') {
            var btn = null;
            btn = getXY(_btn);
            if (e.clientX >= btn.left && e.clientX <= btn.left + btn.width && y >= btn.top && y <= btn.top + btn.height) {
                btnJudge = true;
            }
        }

        // 判断点击的边界
        if (!onlybtn && e.clientX >= modal.left && e.clientX <= modal.left + modal.width && y >= modal.top && y <= modal.top + modal.height || btnJudge) {
            callback(true);
        } else {
            callback(false);
            if (_btn && events !== 'mousemove') {
                document.removeEventListener(events, _handler);
                _handler = null;
            }
        }
    };
    document.addEventListener(events, _handler);

    return _handler;
}

function offClickBlank(handler, events) {
    if (!handler) {
        return;
    }
    events = events || 'click';
    document.removeEventListener(events, handler);
    handler = null;
}

exports.getXY = getXY;
exports.clickBlank = clickBlank;
exports.offClickBlank = offClickBlank;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getXY, 'getXY', 'dev/mtui/utils/triggerBlank.jsx');

    __REACT_HOT_LOADER__.register(clickBlank, 'clickBlank', 'dev/mtui/utils/triggerBlank.jsx');

    __REACT_HOT_LOADER__.register(offClickBlank, 'offClickBlank', 'dev/mtui/utils/triggerBlank.jsx');
}();

;
//# sourceMappingURL=triggerBlank.js.map