// 生成 0, 1, 2, 3, ... length 的数组
export default function natureArray(length) {
    return Array.from({length}, (v, k) => k);
}