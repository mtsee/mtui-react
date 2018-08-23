/**
* @type 获取dom 行对body的left
* @author : Mantou
*/
export function offsetLeft(dom) {
    return dom.getBoundingClientRect().left;
}

export function offsetTop(dom) {
    return dom.getBoundingClientRect().top;
}

export function position(dom){
    if(!dom || typeof dom !== 'object'){
        return false;
    }
    let rect = dom.getBoundingClientRect();
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
        left: rect.left + (scrollLeft || 0),
        top: rect.top + (scrollTop || 0),
        width: dom.offsetWidth,
        height: dom.offsetHeight
    };
}