'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
* @type 设置栅格className
* @author mantou
*/
function setGridName(obj, className) {
	var cName = [];
	if (obj.width) {
		var wid = obj.width.split('/');
		cName.push('mt-grid ' + 'mt-grid-' + wid[1] + '-' + wid[0]);
	}

	if (obj.offset) {
		var ofs = obj.offset.split('/');
		cName.push('mt-grid-offset-' + ofs[1] + '-' + ofs[0]);
	}

	if (obj.smOffset) {
		var _ofs = obj.smOffset.split('/');
		cName.push('mt-grid-sm-offset-' + _ofs[1] + '-' + _ofs[0]);
	}

	if (obj.mdOffset) {
		var _ofs2 = obj.mdOffset.split('/');
		cName.push('mt-grid-md-offset-' + _ofs2[1] + '-' + _ofs2[0]);
	}

	if (obj.lgOffset) {
		var _ofs3 = obj.lgOffset.split('/');
		cName.push('mt-grid-lg-offset-' + _ofs3[1] + '-' + _ofs3[0]);
	}

	if (obj.sm) {
		var sm = obj.sm.split('/');
		cName.push('mt-grid-sm-' + sm[1] + '-' + sm[0]);
	}

	if (obj.md) {
		var md = obj.md.split('/');
		cName.push('mt-grid-md-' + md[1] + '-' + md[0]);
	}

	if (obj.lg) {
		var lg = obj.lg.split('/');
		cName.push('mt-grid-lg-' + lg[1] + '-' + lg[0]);
	}

	if (className) {
		cName.push(className);
	}

	if (cName.length != 0) {
		cName = cName.join(' ');
	} else {
		cName = '';
	}

	return cName;
}
//
var _default = setGridName;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(setGridName, 'setGridName', 'dev/mtui/utils/setGridName.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/utils/setGridName.jsx');
}();

;
//# sourceMappingURL=setGridName.js.map