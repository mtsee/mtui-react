/**
* @type class操作
* @author : Mantou
*/
import { position } from './offset';

function getXY(dom){
    return position(dom);
}

// 如果点击了空白区域就是false
function clickBlank(dom, callback, events, _btn, onlybtn){

    events = events || 'click';

    // 点击事件
    var handler = function(e){
        let modal = getXY(dom);
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let y = e.clientY + scrollTop || 0;

        let btnJudge = false;
        // 如果是hover
        if(_btn && events === 'mousemove'){
            let btn = null;
            btn = getXY(_btn);
            if(e.clientX >= btn.left && e.clientX <= btn.left + btn.width && y >= btn.top && y <= btn.top + btn.height){
                btnJudge = true;
            }
        }

        // 判断点击的边界
        if(!onlybtn && (e.clientX >= modal.left && e.clientX <= modal.left + modal.width && y >= modal.top && y <= modal.top + modal.height) || btnJudge){
            callback(true);
        }else{
            callback(false);
            if(_btn && events !== 'mousemove'){
                document.removeEventListener(events, handler);
                handler = null;
            }
        }
    };
    document.addEventListener(events, handler);

    return handler;
}

function offClickBlank(handler, events){
    if (!handler) {
        return;
    }
    events = events || 'click';
    document.removeEventListener(events, handler);
    handler = null;
}

export { getXY, clickBlank, offClickBlank};