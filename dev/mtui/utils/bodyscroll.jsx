/**
 * @author Mantou
 * @desc 兼容IE9的代码。全局暴露两个变量： MT_IE9 是否是IE9： true or false , MT_MS 判断是否是IE浏览器
 */
let BODY = document.body;
function showScroll( mark ) {
    // body...
    BODY.style = '';
}

function hideScroll( mark ) {
     // 显示后，禁用滚动条
    if(MT_MS === 'IE'){
        BODY.style.paddingRight = '17px';
    }else{
        BODY.style.paddingRight = '5px';
    }
    BODY.style.overflow = 'hidden';
}

export { showScroll, hideScroll };