/**
 * @author Mantou
 * @desc 处理 this.props.children 不是数组的情况，调用 map出错
 */
function toArray(arr) {
    if (arr instanceof Array) {
        // ...
    } else {
        if(!arr) {
            arr = [];
        }else {
            arr = [arr];
        }
    }
    return arr;
}

export { toArray };