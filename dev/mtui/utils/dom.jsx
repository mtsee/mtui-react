// 移除DOM
export function removeDom(dom) {
    if (MT_MS === 'IE') {
        dom.removeNode(true);
    } else {
        dom.remove();
    }
}