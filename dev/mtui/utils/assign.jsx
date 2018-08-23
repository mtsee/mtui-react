/**
* @type 合并obj 方法, 如果传入为null ,也会返回一个{}
* @author : Mantou
*/
export default function assign(arr) {
    var newObj = {};
    if(arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === 'object') {
                for (let key in arr[i]) {
                    if(typeof arr[i] === 'object') {
                        newObj[key] = arr[i][key];
                    }
                }
            }
            
        }
    }
    return newObj;
}
// return Object.assign