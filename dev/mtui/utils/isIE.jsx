/**
 * @author Mantou
 * @desc 兼容IE9的代码。全局暴露两个变量： MT_IE9 是否是IE9： true or false , MT_MS 判断是否是IE浏览器
 */
(function(window){
    window.MT_IE9 = false; // 如果是IE9 就是true
    if(navigator.appVersion.indexOf('.NET') !== -1){
        window.MT_MS = 'IE';
        let ms = navigator.appVersion.split(';')[1].replace(/[ ]/g, '');
        if(~~ms.replace('MSIE', '') > 9){
            MT_IE9 = false;
        }else{
            MT_IE9 = true;
        }
    }else{
        window.MT_MS = 'other';
    }
})(window);