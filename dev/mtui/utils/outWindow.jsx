/**
* @desc 计算边界值。不能超出window边界
* @param {number} width 输入框的宽度
* @param {number} height 输入框的高度
* @param {number} top 输入框的top位置
* @param {number} left 输入框的left位置
* @param {object} box {width, height} 弹窗的大小
* @return {object} obj {left, top} 合适的位置
*/
export function outWindow(width, height, top, left, box) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
        left: left + box.width > window.innerWidth + scrollLeft ? window.innerWidth - box.width - 10 : left, // 判断left,不能超过body区域
        top: top + height + box.height > window.innerHeight + scrollTop ? window.innerHeight - box.height : top + height
    };
}