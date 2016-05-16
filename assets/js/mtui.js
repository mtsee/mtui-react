String.prototype.replaceAll  = function(s1,s2){     
    return this.replace(new RegExp(s1,"gm"),s2);     
}

/**
页面居中
简单使用：
$('#cbox1').center();
不是所有人都喜欢让某元素垂直居中，同时想要它跟随屏幕滚动的话，可以这样配置(所有在此合理配置的CSS样式都将被应用)：
$('#cbox2').center();
要让#cobx1脱离父容器(假定它是静态定位)的话：
$('#cbox1').center();
*/
;(function($) {
    $.fn.center = function(f) {
        return this.each(function() {
            var p = f === false ? document.body : this.parentNode;
            if (p.nodeName.toLowerCase() != "body" && jQuery.css(p, "position") == 'static')
                p.style.position = 'relative';
            var s = this.style;
            s.position = 'absolute';
            if (p.nodeName.toLowerCase() == "body")
                var w = $(window);
            if (!f || f == "horizontal") {
                s.left = "0px";
                if (p.nodeName.toLowerCase() == "body") {
                    var clientLeft = w.scrollLeft() - 10 + (w.width() - parseInt(jQuery.css(this, "width"))) / 2;
                    s.left = Math.max(clientLeft, 0) + "px";
                } else if (((parseInt(jQuery.css(p, "width")) - parseInt(jQuery.css(this, "width"))) / 2) > 0)
                    s.left = ((parseInt(jQuery.css(p, "width")) - parseInt(jQuery.css(this, "width"))) / 2) + "px";
            }
            if (!f || f == "vertical") {
                s.top = "0px";
                if (p.nodeName.toLowerCase() == "body") {
                    var clientHeight = w.scrollTop() - 10 + (w.height() - parseInt(jQuery.css(this, "height"))) / 2;
                    s.top = Math.max(clientHeight, 0) + "px";
                } else if (((parseInt(jQuery.css(p, "height")) - parseInt(jQuery.css(this, "height"))) / 2) > 0)
                    s.top = ((parseInt(jQuery.css(p, "height")) - parseInt(jQuery.css(this, "height"))) / 2) + "px";
            }
        });
    }
})(jQuery);

;(function($){ 
    $.fn.centerMt = function(setting){ 
        var defaults = { 
            parent : 'out' //out 相对外层, body 相对body ，window 相对window
        } 
        //如果setting为空，就取default的值
        var set = $.extend(defaults, setting); 

        //插件实现代码 
        var $this = $(this);
        var $outer,wid,hei,thisWid,thisHei;
        if(set.parent == 'body'){
            $outer = $('body');
        }else if(set.parent == 'window'){
            $outer = $(window);
        }else{
            $outer = $this.parent();
        }
        wid = $outer.width();
        hei = $outer.height();
        thisWid = $this.width();
        thisHei = $this.height();

        //console.log(wid,hei,thisWid,thisHei);

        $this.css({
            left: (wid - thisWid)/2,
            top: (hei - thisHei)/2
        });
        return $this;
    }
})(jQuery);


(function($) {
    $.fn.mtShowMaxPic = function(settings) {
        var defaults = $.extend({
            callback : null //回调函数
        }, settings || {});
        var setting = $.extend(defaults, setting);

        //设置编号
        var $thisGroup = $(this);
        var className = $thisGroup.attr("data-group");
        var $imgs = $('[data-group="'+className+'"]');
        var srcArr = [];
        $imgs.each(function(index, el) {
            var $this = $(this);
            $this.data("mtNum",index);
            var data = {
                src : $this.attr("data-src"),
                num : index
            }
            srcArr.push(data);
        });
        console.log(srcArr);

        //设置HTML
        var date = new Date().getTime();
        var shtml = '<div class="mt-show-max-pic" id="mtShowMaxPicBox_'+date+'">\
                        <div class="mt-show-max-pic-main">\
                            <a href="javascript:void(0)" class="mt-show-max-pic-close"><i class="s-ico s-ico-del"></i></a>\
                            <a href="javascript:void(0)" class="mt-show-max-pic-prev"><i class="ico-d ico-d-aleft"></i></a>\
                            <a href="javascript:void(0)" class="mt-show-max-pic-next"><i class="ico-d ico-d-aright"></i></a>\
                            <div class="mt-show-img"><img data-num="" src=""/></div>\
                        </div>\
                        <div class="mt-show-max-pic-loading"></div>\
                    </div>';
        mtui.$bd.append(shtml);
        var win_width = mtui.$win.width();
        var win_height = mtui.$win.height();
        var $showMaxPicBox = $("#mtShowMaxPicBox_"+date); //弹窗
        var $showMaxPicBox_main = $showMaxPicBox.find(".mt-show-max-pic-main"); //主图的框

        //加载图片
        var loadComplate = function(real){
            //接收到返回的数据
            var $img = $showMaxPicBox_main.find("img");
            var pic = {
                width : null,
                height : null   
            };
            if( real.width >= (win_width - 100) && real.height < win_height){
                ////console.log("仅宽度超出");
                pic.width = win_width - 100;
                pic.height = pic.width*real.height/real.width;
            }
            else if( real.height >= (win_height - 100) && real.width < win_width){
                ////console.log("仅高度超出");
                pic.height = win_height - 100;
                pic.width = pic.height*real.width/real.height;
            }else if( real.height >= win_height && real.width >= win_width){
                ////console.log("都超出");
                pic.height = win_height - 100;
                pic.width = pic.height*real.width/real.height;
                //如果缩放后宽度还超出，再缩100
                while(pic.width >= win_width){
                    pic.height = pic.height - 100;
                    pic.width = pic.height*real.width/real.height;    
                };
            }
            else{
                ////console.log("都没超出");    
                pic.height = real.height;
                pic.width = real.width;
                //什么都不用变
            }
            $img.attr({
                "src":real.src,
                "data-num":real.num
            });
            //设置弹窗main的尺寸
            $showMaxPicBox_main.css({
                "left" : (win_width - pic.width)/2,
                "top" : (win_height - pic.height)/2,
                "width" : pic.width,
                "height" : pic.height
            }); 
            $showMaxPicBox_main.show();
        }

        //获取图片的真实尺寸
        var getRealSource = function(data){
            var real = {
                width : null,
                height : null,
                src : data.src,
                num : data.num
            }
            var img = new Image();
            img.src = real.src;
            if (img.complete) {
                real.width = img.width;   
                real.height = img.height;
                //console.log("图片加载完成走这里...");
                loadComplate(real);
            } else {
                $("<img/>").attr("src",real.src).load(function() {
                    real.width = this.width;   
                    real.height = this.height;
                    //console.log("图片加载完成走这里...");
                    loadComplate(real);
                });
            };
        };
        
        //查看大图 - 启动循环
        var showMaxPic = function(){
            console.log(className);
            mtui.$doc.on('click','[data-group="'+className+'"]', function() {
                //显示弹窗
                $showMaxPicBox.fadeIn();
                //显示这张图
                var $this = $(this);
                var data = {
                    src : $this.attr("data-src"),
                    num : $this.data("mtNum")
                }
                getRealSource(data);
            });
        };
        showMaxPic();

        //上一张
        $showMaxPicBox.on("click",".mt-show-max-pic-prev",function(e){
            e.stopPropagation();
            var num = parseInt($showMaxPicBox_main.find("img").attr("data-num"));
            if(num <= 0){
                console.log("已经是第一张了");
                return;
            }else{
                num--;
                var data = {
                    src : srcArr[num].src,
                    num : num
                }
                getRealSource(data);
            }
        });
        
        //下一张
        $showMaxPicBox.on("click",".mt-show-max-pic-next",function(e){
            e.stopPropagation();
            var num = parseInt($showMaxPicBox_main.find("img").attr("data-num"));
            if(num >= srcArr.length - 1){
                console.log("已经是最后一张了");
                return
            }else{
                num++;
                var data = {
                    src : srcArr[num].src,
                    num : num
                }
                getRealSource(data);
            } 
        });
        
        //关闭窗口
        $showMaxPicBox.on("click",".mt-show-max-pic-close,.mt-show-max-pic-loading",function(){
            $showMaxPicBox.fadeOut();
        });

        //改变窗口大小
        mtui.$win.resize(function(){
            mtui.$win = $(window);
            win_width = mtui.$win.width();
            win_height = mtui.$win.height();
            //设置弹窗main的尺寸
            var num = parseInt($showMaxPicBox_main.find("img").attr("data-num"));
            if(!isNaN(num)){
                var data = {
                    src : srcArr[num].src,
                    num : num
                }
                getRealSource(data);  
            }
            
        });

    };
})(jQuery);

/**
* 分页插件
*/
;(function($) {
    $.fn.pagelist = function(setting) {
        var defaults = {
            nowpage:1, //当前第几页 
            count:80, //总共多少条数据
            maxcount:10, //每页多少条
            url : 'javascript:;',
            callback : false
        }
        
        var shtml = '<div class="mt-pagelist-left">\
                        <div class="mt-select" style="width: 90px;">\
                            <div class="mt-select-title" data-val="10">10条/页</div>\
                            <i class="iconfont icon-xia"></i>\
                            <ul class="mt-select-box">\
                                <li class="option" data-val="10">10条/页</li>\
                                <li class="option" data-val="20">20条/页</li>\
                                <li class="option" data-val="50">50条/页</li>\
                            </ul>\
                        </div>\
                        <span>共 <em class="mt-pagelist-count">0</em> 页 /  <em class="mt-pagelist-total">0</em> 条</span>\
                    </div>\
                    <div class="mt-pagelist-right">\
                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-first">首页</a>\
                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-prev">上一页</a>\
                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runprev"><i class="iconfont icon-duduyinleappicon0501"></i></a>\
                        <div class="mt-pagelist-content">\
                            <ul class="mt-pagelist-page"></ul>\
                        </div>\
                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runnext"><i class="iconfont icon-duduyinleappicon1401"></i></a>\
                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-next">下一页</a>\
                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-end">尾页</a>\
                        <span class="mt-pagelist-input">\
                            第<input class="mt-input" type="text">页\
                        </span>\
                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-btn">跳转</a>\
                    </div>';

        //设置HTML
        $(this).addClass('mt-pagelist clearfix').html(shtml);
        mtui.select();

        if($(this).length >1){
            console.log("分页插件对象必须唯一！请使用ID");
            return
        }
        var setting = $.extend(defaults, setting);
        var liWid = 40;//每个li标签的宽度
        var speed = 300;
        var showPage = 7;
        var $this = $(this);
        var $ul = $this.find(".mt-pagelist-page");
        var pagecount = null;

        var init = function(){
            pagecount = Math.ceil(setting.count/setting.maxcount);//计算有多少页
            //设置mt-pagelist-count
            $this.find(".mt-pagelist-count").html(pagecount);
            $this.find(".mt-pagelist-total").html(setting.count);

            //初始化select
            $this.find(".mt-select-title").html(setting.maxcount+'条/页');

            if(pagecount <= showPage){
                $this.find(".mt-pagelist-runnext").hide();
                $this.find(".mt-pagelist-runprev").hide();
                $ul.css('left', 0);
            }else{
                $this.find(".mt-pagelist-runnext").show();
                $this.find(".mt-pagelist-runprev").show();
            }
        };

        init();

        //执行动画事件，滚动到指定的位置
        var runTo = function(page){
            console.log("runTo")
            //console.log(page,pix);
            setting.nowpage = page;
            var pix = -parseInt($ul.position().left/liWid);//偏移量

            if(pagecount <= showPage) return;

            //如果点击的是中点，保持
            if(page == pix+4){
                return
            }else if(page > pix+4){
                //console.log("page >　pix+4"); 
                if(page >= pagecount-4){
                    pix = pagecount-showPage;
                }else{
                    pix = page - 4;
                }
            }else{
                //console.log("page <　pix+4"); 
                if(page <= 4){
                    pix = 0;
                }else{
                    pix = page - 4;
                }
            }
            //console.log("====>",pix);
            $ul.stop();
            $ul.animate({
                left: -pix*liWid
            },speed);
        }

        //跳转到第几页
        var gotoPage = function(page){
            if(page >= pagecount){
                page = pagecount;
            }
            if(page <=0){
                page = 1;
            }
            console.log(page);
            //if($ul.find(".on").index() == page-1)return;
            $ul.find(".on").removeClass('on');
            $ul.find("li").eq(page-1).addClass('on');
            runTo(page);
            callbackFun(page);
        }

        //设置UL里面的HTML
        var setPageHtml = function(){
            var str = "";
            for(var i=0; i<pagecount; i++){
                str+='<li '+(setting.nowpage==(i+1)?'class="on"':"")+'><a class="ink-reaction" href="'+setting.url+'">'+(i+1)+'</a></li>';
            }
            $ul.html(str).width(liWid*pagecount);
        };

        var callbackFun = function(page){
            if(setting.callback){
                setting.callback(page,setting.maxcount);
            }
        }
        setPageHtml();
        runTo(setting.nowpage);

        //点击页码
        $ul.on('click', 'li', function(e) {
            e.stopPropagation();
            if($ul.is(':animated'))return;
            var page = $(this).text();
            //设置class
            $(this).addClass('on').siblings('.on').removeClass('on');
            //console.log(page,pix+4);
            callbackFun(page);
            runTo(page);
        });

        //点击下一分页
        $this.find(".mt-pagelist-runnext").on('click',function(e) {
            e.stopPropagation();
            if($ul.is(':animated'))return;
            var pix = -parseInt($ul.position().left/liWid);//偏移量
            //console.log(pix);
            runTo(pix+showPage+3);
        });

        //点击上一分页
        $this.find(".mt-pagelist-runprev").on('click',function(e) {
            e.stopPropagation();
            if($ul.is(':animated'))return;
            var pix = -parseInt($ul.position().left/liWid);//偏移量
            runTo(pix-2);
        });

        //点击下一页
        $this.find(".mt-pagelist-next").on('click',function(e) {
            e.stopPropagation();
            var page = parseInt($ul.find(".on").text())+1;//偏移量
            gotoPage(page);
        });

        //点击上一页
        $this.find(".mt-pagelist-prev").on('click',function(e) {
            e.stopPropagation();
            var page = parseInt($ul.find(".on").text())-1;//偏移量
            gotoPage(page);
        });

        //首页
        $this.find(".mt-pagelist-first").on('click',function(e) {
            e.stopPropagation();
            gotoPage(1);
        });

        //尾页
        $this.find(".mt-pagelist-end").on('click',function(e) {
            e.stopPropagation();
            gotoPage(pagecount);
        });

        //跳转到
        $this.on('click', '.mt-pagelist-btn', function(e) {
            e.stopPropagation();
            var val = $(this).siblings('.mt-pagelist-input').find(".mt-input").val();
            gotoPage(val);
        });

        //控制输入框的数字
        $this.on('keyup focus', '.mt-input', function(e) {
            var val = $(this).val();
            if(!RegExp('^[1-9]\\d*$').test(val) || val > pagecount || val < 1){
                $(this).val("");
            }
        });

        //选择下拉列表
        $this.on('click', '.option', function(e) {
            console.log($(this).attr("data-val"));
            setting.maxcount = $(this).attr("data-val");
            init();
            setPageHtml();
            runTo(1);
            gotoPage(1);
        });

        //页码刷新
        this.refresh = function(opt){
            console.log(opt);
            setting.maxcount = opt.maxcount;
            setting.nowpage = opt.nowpage;
            $this.find(".mt-select input").mtSelectVal(opt.maxcount);
            if(opt.count != setting.count){
                setting.count = opt.count;
            }
            init();
            setPageHtml();
            runTo(setting.nowpage);
            //$this.find("input[type='hidden']").mtSelectVal(opt.maxcount);
        }

        this.data = {
            maxcount : setting.maxcount,
            nowpage : setting.nowpage
        }

        return this;

    }
})(jQuery);

/**
 * 提示的弹窗 ,
 * str:提示的字符串
 * color:字体的颜色，有4个值：green，yellow，red，default, loading
 * t:显示的时间，如果不传值，不自动关闭 t可以是always 表示不关闭
 *  返回一个对象， obj.close() 关闭弹窗 
 */
;(function($) {
    $.popup = function(setting) {
        var defaults = {
                title:'系统提示',
                titlebg:'blue',
                str: '', //弹窗文字
                icon : '', //默认标记 有4个值：success，warning，danger，loading
                time : null, //自动关闭,  如果有值，一定时间会自动关闭
                clickback : false ,//点击按钮的回调函数 return :mark,$da
                closeback : false, //关闭时的回调函数  return :$da
                bgshow : true, //是否要显示半透明的黑色背景？
                fadetime : 0, //渐变动画时间
                showbtn : 1, //是否显示按钮 false,1,2
                width: 300, //弹窗宽度
                drag : false, //是否可拖动
                close: true //是否要点击背景关闭？
        }
        //如果setting为空，就取default的值
        var setting = $.extend(defaults, setting);
        var timestamp = new Date().getTime();
        var speed = 300;

        var da = "popup-"+timestamp;
        var c = "#666";
        var $da = null;

        switch(setting.titlebg) {
            case 'blue':setting.titlebg="#0e90d2";break;
            case 'red':setting.titlebg="#FB4E47";break;
            case 'green':setting.titlebg="#5EB95E";break;
            case 'yellow':setting.titlebg="#ff9f22";break;
        }

        //有背景弹窗
        if(setting.bgshow && !$("#mt-modal-bg")[0]){
            $("body").append('<div id="mt-modal-bg"></div>');
        }
        $("#mt-modal-bg").fadeIn(speed);

        //关闭弹窗
        var closeDa = function(){
            if(!$(".mt-popup")[0]) return;
            if(setting.closeback){
                setting.closeback($da);
            }
            $da.fadeOut(setting.fadetime,function(){
                $da.remove();
            });
            if($("#mt-modal-bg")[0]){
                $("#mt-modal-bg").fadeOut(setting.fadetime);
            }
        };

        if(setting.close){
            $("#mt-modal-bg").off('click.popup').on('click.popup', function(event) {
                closeDa();
            });
        }
        //弹窗图标
        if(setting.icon != ""){
            setting.height = setting.height+20;
            setting.icon = '<i class="mt-popup-ico '+setting.icon+'"></i>';
        }
        //弹窗默认文本设置
        if(setting.str != ""){
            setting.str=setting.icon+'<p class="mt-popup-str">'+setting.str+'</p>';
        }

        //显示的弹窗
        var tpls = ' <div id="'+da+'" class="mt-popup" style="'+(setting.drag?'cursor: move;':'')+'z-index:'+timestamp+'; width:'+setting.width+'px;">\
                     <h1 style="background-color:'+setting.titlebg+';" class="mt-popup-h1">'+setting.title+'</h1>\
                     <a href="javascript:;" class="mt-popup-btn-close '+da+'_del"><i class="icon-shanchu iconfont"></i></a>\
                     <div class="mt-popup-content">'+setting.str+'</div>';
        if( setting.showbtn == false){
            var tpl = tpls+'<div></div>';
            
        }else if(setting.showbtn == 1){
            var tpl = tpls + '<a href="javascript:void(0)" class="mt-popup-btn-yes mt-btn-blue '+da+'_del">确定</a></div></div>';
        }else{
            var tpl = tpls + '<a style="" href="javascript:void(0)" class="mt-close mt-btn-grey '+da+'_del">取消</a>\
                              <a href="javascript:void(0)" class="mt-btn-blue mt-popup-btn-yes '+da+'_del">确定</a></div>\
                              </div>';
        };
        $("body").append(tpl);
        $(".mt-popup").center();
        $da = $("#"+da);
        $("."+da+"_del").off("click").on("click",function(e){
            closeDa();
            if(e.currentTarget.className.indexOf("mt-popup-btn-yes") != -1){
                if(setting.clickback){
                    setting.clickback(true,$da);
                }
                //return true;
            }else{
                //return false;
                if(setting.clickback){
                    setting.clickback(false,$da);
                }
            }
        });
        //自动关闭弹窗
        var autoClose = function(){
            if(setting.time != null && setting.time != "always"){
                setTimeout(function(){
                    closeDa();
                },setting.time);
            }
        };

        autoClose();

        //支持拖动
        if(setting.drag){
            $da.dragMt();
        }

        //返回一个对象
        var data = {};
        //关闭弹窗
        data.close = function(){
            closeDa();
        };
        //关闭所有弹窗
        data.closeAll = function(){
            var $p = $(".autowindow_always");
            $p.fadeOut(setting.fadetime,function(){
                $p.remove();
            });
            if(setting.closeback){
                setting.closeback($da);
            }
        };
        return data;
    }
})(jQuery);


var mtui = {};

//设置全局变量
mtui.$doc = $(document);
mtui.$win = $(window);
mtui.$bd = null; 

// mtui.event = {};
// mtui.event.mtSelect

/**
*   获取url的值
*/
mtui.getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};

/**
*   checkbox
*/
mtui.checkbox = function(){
    if(!$(":checkbox")[0]) return;
    //checkbox 选框
    mtui.$doc.off("click.mtCheckbox").on('click.mtCheckbox',":checkbox", function(e) {
        e.stopPropagation();
        var $this = $(this);
        //选中了
        if($this.is(':checked')){
            $this.closest('.mt-checkbox').addClass('mt-checkbox-active');
        }else{
            $this.closest('.mt-checkbox').removeClass('mt-checkbox-active');
        }
    }).off('click.mtCbox').on('click.mtCbox', '.mt-checkbox', function(e) {
        e.stopPropagation();
    });
};
$.prototype.mtChecked = function(){
    var $this = $(this);
    $this.attr("checked",true);;
    $this.parent().addClass("mt-checkbox-active");
}
$.prototype.mtUnChecked = function(){
    var $this = $(this);
    $this.attr("checked",false);;
    $this.parent().removeClass("mt-checkbox-active");
}


/**
*   radio
*/
mtui.radio = function(){
    if(!$(":radio")[0]) return;
    //checkbox 选框
    mtui.$doc.off("change.mtRadio").on('change.mtRadio',":radio", function(event) {
        var $this = $(this);
        var name = $this.attr("name");
        if(name.length <= 0){
            console.log("error: radio没有填写name！");
            return;
        }
        //console.log(name);
        $("input:radio[name='"+name+"']").closest('.mt-radio').removeClass('mt-radio-active');
        $this.closest('.mt-radio').addClass('mt-radio-active').find(":radio").trigger('click');
    });
};

/**
*   select
*/
mtui.select = function(){
    if(!$(".mt-select")[0]) return;
    var speed = 200;
    var maxHeight = 260;

    //DOM渲染
    $(".mt-select").each(function(index, el) {
        var $this = $(this);
        if(!$this.find("input:hidden")[0]){
            var id = $this.attr("data-id");
            var name = $this.attr("data-name");
            $this.append('<input type="hidden" class="mt-select-input" name="'+name+'" id="'+(id?id:"")+'">');
        }
        if($this.find(".option[selected='selected']")[0]){
            var $select = $this.find(".option[selected='selected']");
            var str = $select.text();
            var val = $select.attr("data-val");
            $this.find(".mt-select-input").val(val);
            //$("#"+id).val(val);
            console.log(str);
            $this.find(".mt-select-title").html(str);
        }else{
             var $title = $this.find('[data-placeholder]');
             var title = $title.attr("data-placeholder");
             $title.html(title);
        }
    });

    //事件驱动
    mtui.$doc.off("click.mtSelect").on('click.mtSelect', '.mt-select', function(e) {
        e.stopPropagation();
        var $this = $(this);
        var id = $this.attr("data-id");
        //$this.find(".mt-select-input").trigger("select");

        //如果是mt-select-disabled
        if($this[0].className.indexOf("mt-select-disabled") != -1){
            return
        }

        var $thisUl = $(this).find(".mt-select-box");

        //设置value
        if(e.target.className.indexOf("option") != -1){
            var $option = $(e.target);
            var val = $option.attr("data-val");
            $option.attr("selected","selected").siblings('.option[selected=selected]').removeAttr('selected');
            //设置显示值
            $this.find(".mt-select-title").html(e.target.innerText);
            //触发change事件
            $this.find(".mt-select-input").val(val).trigger('change');
        }else{
            if(e.target.className.indexOf("mt-select-title") == -1 && e.target.className.indexOf("icon-xia") == -1 && e.target.className.indexOf("mt-select")){
                return
            }
        }

        //如果有其他下拉框，先关闭其他下拉框
        if($this[0].className.indexOf("mt-selected") == -1){
            if($(".mt-selected").length != 0){
                $(".mt-selected").trigger('click');
            }
        }

        //设置参数
        if($thisUl.data("height") == undefined){
            var hei = $thisUl.height()+12;
            $thisUl.data("height",hei);
            // $thisUl.height(0);
            //解决谷歌因为滚动条留个空白的BUG
            if(maxHeight > hei){
                $thisUl.css("overflow","hidden");
            }
            //初始化mt-select的宽度
            $this.width($this.width());
        }

        //执行动画
        if($thisUl.is(":hidden")){

            //清空列表中的input
            if($this.find(".mt-select-add")[0]){
                $this.find(".mt-select-add .mt-add-select-val").val("");
            }
            $this.addClass('mt-selected');
            $thisUl.css({
                'z-index':9999
            }).slideDown(speed);
        }else{
            $this.removeClass('mt-selected');
            $thisUl.slideUp(speed,function(){
                $thisUl.css({
                    'z-index':'inherit'
                });
            });
        }

    }).off("click.mtAddSelectBtn").on('click.mtAddSelectBtn', '.mt-add-select-btn', function(e) {//绑定select中的 add方法
        var $this = $(this);
        var $input = $this.siblings(".mt-add-select-val");
        var $selectBox = $(this).closest('.mt-select-box');
        var $addDiv = $this.parent();
        var $li = $addDiv.prev(".option");
        var val = $input.val();
        var hei = $selectBox.data("height")+$li.height();

        //设置高度
        if(hei <= maxHeight){
            $selectBox.css('height',hei);
            $selectBox.data("height",hei);
        }else{
            $selectBox.css({
                height:maxHeight,
                overflow:'auto'
            });
        }

        //设置新的li标签
        $input.val("");
        $addDiv.before('<li class="option" data-val="'+val+'">'+val+'</li>');
    });
};
$.prototype.mtSelectVal = function(val){
    var $this = $(this).closest('.mt-select');
    var $opt = $this.find('.option[data-val="'+val+'"]');
    var str = $opt.html();
    if(val != null){
        $("#"+$this.data("id")).val(val);
        $opt.attr("selected","selected").siblings('.option').removeAttr('selected');
        $this.find(".mt-select-title").html(str);
    }else{
        var $title = $this.find(".mt-select-title");
        $title.html($title.attr("data-placeholder"));
    }
}

/**
* 限制字数
*/
mtui.limit = function(){
    $("[data-limit]").each(function(index, el) {
        var $this = $(this);
        var limit = $this.attr("data-limit");
        var text = $this.text();
        if(text.length > limit){
            $this.attr("title",text);
            text = text.substr(0,limit)+"...";
        }else{
            return;
        }
        $this.html(text);
    });
};

/**
* 限制字数
*/
mtui.more = function(){
    $("[data-more]").each(function(index, el) {
        var $this = $(this);
        var more = $this.attr("data-more");
        var text = $this.text();
        var wid = text.length*14+20;
        if(text.length > more){
            text = text.substr(0,more)+'<div class="mt-more"><i class="iconfont icon-gengduo"></i><div style="width:'+wid+'px;" class="animated fadeInUp mt-more-content">'+text+'</div></div>';
        }else{
            return;
        }
        $this.html(text);
    });
};

/**
*   滑块插件
*/
mtui.slider = function(){

    $(".mt-slider").each(function(index, element) {
        var $this = $(this);
        var _obj = {
            //$tips : $this.find(".mt-slider-tips"),
            $input : $this.find(".mt-slider-val"),
            $bar : $this.find(".mt-slider-bar"),
            $btn : $this.find(".mt-slider-btn"),
            //$thisData : $this.find(".thisData")[0]?$this.find(".thisData"):null,
            data : null,//返回是 maxData:xx,minData:xx,iniData:xx
            width : null,//slider的宽
            value : null, //区间的值
            padding : 10 //滑块偏移
        };
        
        _obj.width = parseFloat($this.width());
        _obj.data = eval( "({" + $this.attr("data-set") + "})" );
        //数值转换
        _obj.data.minData = parseFloat(_obj.data.minData);
        _obj.data.maxData = parseFloat(_obj.data.maxData);
        _obj.data.iniData = parseFloat(_obj.data.iniData);
        _obj.value = _obj.data.maxData - _obj.data.minData;

        if(_obj.data.iniData > _obj.data.maxData){
            console.log("您slider里面的初始值太大了！");
            return
        }

        //倍率
        if(_obj.data.ratio != null){
            _obj.data.ratio = parseFloat(_obj.data.ratio);
        }else{
            _obj.data.ratio = 1;
        }
        _obj.value = _obj.data.maxData - _obj.data.minData;

        //初始化参数
        var iniSliderEmPosition = function(){
            var width = (_obj.data.iniData - _obj.data.minData)/_obj.value*_obj.width;
            _obj.$bar.width(width);
            _obj.$input.val(_obj.data.iniData);
        };iniSliderEmPosition();

        //绑定input的变化
        $this.find(".mt-slider-val").on('change', function(event) {
            var val = $(this).val();
            if(val <= _obj.value){
                _obj.$bar.width(val/_obj.value*_obj.width);
            }
        });
        
        //点击事件
        _obj.$btn.on("mousedown",function(e){
            var ev = {
                x_start : null,
                x_move : null,
                x_end : null,
                left_start : null,
                moveWidth : null
            };
            ev.x_start = e.pageX;
            ev.left_start = _obj.$btn.position().left;
            
            var pData = null;
            var mData = null;
            mtui.$doc.on("mousemove.mtSlider",function(e){
                e.preventDefault();
                ev.x_move = e.pageX - ev.x_start;
                ev.moveWidth = ev.x_move + ev.left_start;
                if( ev.moveWidth >= - _obj.padding && ev.moveWidth <= _obj.width - _obj.padding){
                    _obj.$bar.width( ev.moveWidth + _obj.padding);
                }
                
                //设置值
                pData = ((_obj.$btn.position().left + _obj.padding)/_obj.width).toFixed(2);
                mData = null ;
                if(pData <= 0.02){
                    pData = 0;
                }
                if(pData >=0.98){
                    pData = 1.0 
                }
                mData = parseFloat(((_obj.data.maxData - _obj.data.minData)*pData).toFixed(0)) + _obj.data.minData;
                mData = mData*_obj.data.ratio;
                _obj.$input.val(mData);
                
            }).on("mouseup.mtSlider",function(e){
                mtui.$doc.off("mousemove.mtSlider mouseup.mtSlider");
            });
        });
        
    }); 
}; //slider();  

/**
* switch 开关
*/
mtui.switchbtn = function(){
    mtui.$doc.off("click.mtSwidth").on('click.mtSwidth', '.mt-switch', function(event) {
        if($(this).attr("disabled") == undefined){
            $(this).toggleClass('mt-switch-off');
        }
    });
};

/**
* 按钮特效
*/
mtui.buttonAnimate = function(){
    mtui.$doc.off("click.mtInkReaction").on('click.mtInkReaction', '.ink-reaction', function(e) {
        var $this = $(this);
        //获取当前的点击点
        var x = e.pageX - $this.offset().left;
        var y = e.pageY - $this.offset().top;
        var timestamp=new Date().getTime();
        $(this).append('<div style="left:'+x+'px; top:'+y+'px;" class="ink ink_'+timestamp+'"></div>');
        var $thisInk = $(".ink_"+timestamp);

        if(window.applicationCache){
            $thisInk[0].addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
                $thisInk.remove();
            }, false); 
        }

    });
};

/**
* 折叠面板
*/
mtui.panelFun = function(){
    var setPanelClass = function($panel){
        $panel.toggleClass('mt-panel-active');
    }
    mtui.$doc.off("click.mtPanelHeader").on('click.mtPanelHeader', '.mt-panel-header', function(e) {
        var $panel = $(this).closest('.mt-panel');
        $(this).next().slideToggle();
        setPanelClass($(this).closest('.mt-panel'));
    }).off("click.mtPanelHeaderOne").on('click.mtPanelHeaderOne', '.mt-panel-header-one', function(e) {
        var $panel = $(this).closest('.mt-panel');
        if($panel[0].className.indexOf("mt-panel-active") == -1){
            $(this).next().slideDown(function(){
                $panel.addClass('mt-panel-active');
                $panel.siblings('.mt-panel').removeClass('mt-panel-active');
            });
            $panel.siblings('.mt-panel').find(".mt-panel-content").slideUp();
        }else{
            $panel.find(".mt-panel-content").slideUp(function(){
                $panel.removeClass('mt-panel-active');
                $panel.siblings('.mt-panel').removeClass('mt-panel-active');
            })
        }
    });
};

/**
* 下拉框
*/
mtui.dropDown = function(){
    mtui.$doc.off("click.mtDropdown").on('click.mtDropdown', '.mt-dropdown-toggle', function(e) {
        var $dropDown = $(this).closest('.mt-dropdown');
        var $content = $(this).next(".mt-dropdown-content");
        if($content.is(':hidden')){
            $dropDown.addClass('mt-dropdown-active');
            $content.removeClass("fadeOutDown").addClass('animated fadeInUp');
        }else{
            $content.removeClass("fadeInUp").addClass('animated fadeOutDown');
            setTimeout(function(){
                if($content[0].className.indexOf("fadeInUp") == -1){
                    $dropDown.removeClass('mt-dropdown-active');
                }
            },500);
        }
        
    });
    //hover情况
    mtui.$doc.off("mouseenter.mtDropdownHover").on('mouseenter.mtDropdownHover', '.mt-dropdown-toggle-hover', function(e) {
        var $dropDown = $(this).closest('.mt-dropdown');
        var $content = $(this).next(".mt-dropdown-content");
        $dropDown.addClass('mt-dropdown-active');
        $content.removeClass("fadeOutDown").addClass('animated fadeInUp');
    }).off("mouseleave.mtDropdownHover").on('mouseleave.mtDropdownHover', '.mt-dropdown', function(e) {
        if($(this).find(".mt-dropdown-toggle-hover")[0]){
            var $dropDown = $(this);
            var $content = $(this).find(".mt-dropdown-content");
            $content.removeClass("fadeInUp").addClass('animated fadeOutDown');
            setTimeout(function(){
                if($content[0].className.indexOf("fadeInUp") == -1){
                    $dropDown.removeClass('mt-dropdown-active');
                }
            },500);
        }
    });
};

/**
* 模态弹窗
*/
mtui.modalShow = function(){
    var speed = 0;
    mtui.$doc.off("click.mtModal").on('click.mtModal', '.mt-modal-btn', function(e) {
        var obj = eval("("+$(this).attr("data-modal")+")");
        //console.log(obj);
        var timestamp = new Date().getTime();
        var $modal = $(obj.target);
        $modal.css({
            'width' : obj.width,
            'height' : obj.height,
            'display' : 'block',
            'z-index' : timestamp
        }).centerMt({parent:'window'});

        $('body').addClass('hiddenScroll');

        //数据赋值
        if(obj.data != undefined){
            var shtml = $modal.html();

            if($modal.data("shtml") == undefined){
                $modal.data("shtml",shtml);
            }else{
                shtml = $modal.data("shtml");
            }
            for(i in obj.data){
                var exp = "{{"+i+"}}";
                shtml = shtml.replaceAll(exp,obj.data[i]);
            }
            $modal.html(shtml);
        }

        //设置背景
        if(!$("#mt-modal-bg")[0]){
            $("body").append('<div id="mt-modal-bg"></div>');
        }
        $("#mt-modal-bg").fadeIn(speed);

        //点击背景关闭
        if(obj.clickbgclose){
            $("#mt-modal-bg").off("click.modalBg").on('click.modalBg', function(e) {
                e.stopPropagation();
                $(obj.target).find(".mt-modal-close").trigger('click');
            });
        }else{
            $("#mt-modal-bg").off("click.modalBg");
        }

    }).on('click', '.mt-modal-close,.mt-close', function(e) {
        e.stopPropagation();
        var $dialog = $(this).closest('.mt-modal-dialog');
        $dialog.fadeOut(speed);
        $("#mt-modal-bg").fadeOut(speed);
        $('body').removeClass('hiddenScroll');
    });
};

/**
* tabs 切换
*/
mtui.tabs = function(){
    //初始化tabs
    $(".mt-tabs").each(function(index, el) {
        var speed = 300;
        var trig = 100; //拖动灵敏度，越小越灵敏
        var $this = $(this);
        var $content = $this.find(".mt-tabs-content");
        var $header = $this.find(".mt-tabs-header");
        var $li = $header.find("li");
        var $wrap = $this.find(".mt-tabs-wrap");
        var $item = $this.find(".mt-tabs-item");
        var cWid = $content.width();
        var data = eval("("+$(this).attr("data-tabs")+")");

        $wrap.css({
            'width' : cWid*$item.length,
            'left' : -$header.find(".mt-tabs-active").index()*cWid
        });
        $item.css({
            'width': cWid
        });

        //动画完成后的回调函数
        var animateCall = function(){
            //console.log("动画执行完成~");
            //自动适应高度
            if(data.autoh){
                $wrap.find(".mt-tabs-active").css('height', 'auto').siblings('.mt-tabs-item').css('height', '1px');
            }
        }
        animateCall();

        //获取translateX 的值
        var getTranslateX = function($dom){
            var transZRegex = /\.*translateX\((.*)px\)/i;
            //console.log("--->",$dom[0].style.transform);
            if($dom[0].style.transform == ""){
                return false;
            }else{
                return transZRegex.exec($dom[0].style.transform)[1];
            }
        }

        //滚动到指定位置的函数
        var runToDo = function(index){
            if($wrap.is(':animated'))return;
            //console.log(index);
            if(index < 0){
                index = 0;
            }else if(index >= $item.length){
                index = $item.length - 1;
            }
            $li.eq(index).addClass('mt-tabs-active').siblings('li').removeClass('mt-tabs-active');
            $item.eq(index).addClass('mt-tabs-active').siblings('.mt-tabs-item').removeClass('mt-tabs-active');
            //HTML5不支持
            if(!window.applicationCache){
                $wrap.animate({
                    left : -index*cWid
                }, speed,function(){
                    animateCall();
                });
            }else{
               var left = -index*cWid+"px";
               $wrap.css({
                    'transform':'translateX('+left+')',
                    '-ms-transform':'translateX('+left+')',     /* IE 9 */
                    '-moz-transform':'translateX('+left+')',    /* Firefox */
                    '-webkit-transform':'translateX('+left+')', // Safari 和 Chrome 
                    '-o-transform':'translateX('+left+')',
                    '-ms-transition':speed/1000+'s',
                    '-moz-transition':speed/1000+'s',
                    '-webkit-transition':speed/1000+'s',
                    '-o-transition':speed/1000+'s',
                    'transition':speed/1000+'s'
                }); 
                setTimeout(function(){
                    animateCall();
                },speed/1000);
            }
        };

        //点击绑定
        $header.off("click").on('click', 'li', function(event) {
            runToDo($(this).index());
        });

        if(!data.drag || !window.applicationCache) return;

        //如果支持CSS3
        if(window.applicationCache){
            //拖动绑定
            $wrap.off('mousedown').on('mousedown', function(e) {
                if($wrap.is(':animated'))return;
                var x1 = e.pageX;
                var staticL = 0;
                var nowIndex = Math.round(-$(this).position().left/cWid);
                if(getTranslateX($wrap)){
                    var left = getTranslateX($wrap)+"px";
                }else{
                    var left =  0;
                }
                $wrap.css({
                    'transform':'translateX('+left+')',
                    '-ms-transform':'translateX('+left+')',     /* IE 9 */
                    '-moz-transform':'translateX('+left+')',    /* Firefox */
                    '-webkit-transform':'translateX('+left+')', // Safari 和 Chrome 
                    '-o-transform':'translateX('+left+')',
                    '-ms-transition':'0s',
                    '-moz-transition':'0s',
                    '-webkit-transition':'0s',
                    '-o-transition':'0s',
                    'transition':'0s'
                }); 
                left = parseInt(left);
                mtui.$doc.on('mousemove.tabs', function(e) {
                    e.preventDefault();
                    staticL = e.pageX-x1;
                    var lef = e.pageX-x1+left+"px";
                    $wrap.css({
                        'transform':'translateX('+lef+')',
                        '-ms-transform':'translateX('+lef+')',     /* IE 9 */
                        '-moz-transform':'translateX('+lef+')',    /* Firefox */
                        '-webkit-transform':'translateX('+lef+')', // Safari 和 Chrome 
                        '-o-transform':'translateX('+lef+')'
                    });
                }).on('mouseup.tabs', function(e) {
                    $(this).off("mousemove.tabs mouseup.tabs");
                    console.log(staticL);
                    if(staticL >= trig){
                        nowIndex--;
                    }else if(staticL <= -trig){
                        nowIndex++;
                    }
                    runToDo(nowIndex);
                });
            });
        }else{
            //拖动绑定 - 如果不支持CSS3
            $wrap.off('mousedown').on('mousedown', function(e) {
                if($wrap.is(':animated'))return;
                var x1 = e.pageX;
                var staticL = 0;
                var nowIndex = Math.round(-$(this).position().left/cWid);
                var left = $wrap.position().left;
                $wrap.css({
                    left: left
                });
                left = parseInt(left);
                mtui.$doc.on('mousemove.tabs', function(e) {
                    e.preventDefault();
                    staticL = e.pageX-x1;
                    $wrap.css({
                        'left':e.pageX-x1+left+"px"
                    });
                }).on('mouseup.tabs', function(e) {
                    $(this).off("mousemove.tabs mouseup.tabs");
                    console.log(staticL);
                    if(staticL >= trig){
                        nowIndex--;
                    }else if(staticL <= -trig){
                        nowIndex++;
                    }
                    runToDo(nowIndex);
                });
            });
        }

    });
};


/**
*   data-mt-tips 气泡提示
*/
mtui.tips = function(){
    mtui.$bd = $("body");

    var showTips = function($this,data){
        var timestamp = new Date().getTime();
        var p = {
            left : $this.offset().left,
            top : $this.offset().top
        };
        switch(data.pst) {
            case 'top':p.top = $this.offset().top-$this.height()-15;break;
            case 'bottom':p.top = $this.offset().top+parseInt($this.height())+15;break;
            case 'left':p.left = $this.offset().left-$this.width()-50;break;
            case 'right':p.left = $this.offset().left+parseInt($this.width())+40;break;
        }
        //设置时间戳。用于销毁使用
        if($this.data("timestamp") == undefined){
            $this.data("timestamp",timestamp);
            mtui.$bd.append('<div class="mt-tips mt-tips-'+timestamp+' animated '+data.animate+'" style="top:'+p.top+'px; left:'+p.left+'px;">'+data.str+'</div>');
        }else{
            mtui.$bd.append('<div class="mt-tips mt-tips-'+$this.data("timestamp")+' animated '+data.animate+'" style="top:'+p.top+'px; left:'+p.left+'px;" >'+data.str+'</div>');
        }
    };

    var reomveTips = function($this){
        var $tips = $('.mt-tips-'+$this.data("timestamp"));
        $tips.remove();
    };

    mtui.$doc.off("mouseenter.taps").on("mouseenter.taps","[data-mt-tips]",function(e){

        var $this = $(this);
        var data = eval("("+$this.attr("data-mt-tips")+")");

        //判断条件
        switch(data.trigger) {
            case 'hover':{
                showTips($this,data);
                $this.off("mouseleave.tips").on('mouseleave.tips', function(e) {
                    reomveTips($(this));
                });
            };break;
            case 'click':{
                $this.off("click.tips").on('click.tips', function(e) {
                    if($this.data("timestamp") == undefined || !$('.mt-tips-'+$this.data("timestamp"))[0]){
                        showTips($this,data);
                    }else{
                        reomveTips($(this));
                    }
                });
            };break;
        }
    });
};

/**
* 触发器
*/
mtui.toggleCls = function(){
    //console.log(mtui);
    mtui.$doc.off("click.mtToggle").on("click.mtToggle","[data-mt-toggle]",function(){
        var $this = $(this);
        var data = eval("("+$this.attr("data-mt-toggle")+")");
        //console.log(data); 
        $(data.target).toggleClass(data.cls);
    });
};

/**
*   表单验证方法
*/
mtui.validate_fun = function(type,value){
    //对值进行空格剔除
    var val=value.replace(/(^\s*)|(\s*$)/g, "");
    //表单验证
    var validateRegExp = {
        decmal: "^([+-]?)\\d*\\.\\d+$",// 浮点数
        decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",// 正浮点数
        decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",// 负浮点数
        decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",// 浮点数
        decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",// 非负浮点数（正浮点数 + 0）
        decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",// 非正浮点数（负浮点数 +0
        intege: "^-?[1-9]\\d*$",// 整数
        intege1: "^[1-9]\\d*$", // 正整数
        intege2: "^-[1-9]\\d*$",// 负整数
        num: "^([+-]?)\\d*\\.?\\d+$",// 数字
        num1: "^[1-9]\\d*|0$",// 正数（正整数 + 0）
        num2: "^-[1-9]\\d*|0$",// 负数（负整数 + 0）
        ascii: "^[\\x00-\\xFF]+$",// 仅ACSII字符
        chinese: "^[\\u4e00-\\u9fa5]+$",// 仅中文
        color: "^[a-fA-F0-9]{6}$",// 颜色
        date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",// 日期
        email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",// 邮件
        idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",// 身份证
        ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",// ip地址
        letter: "^[A-Za-z]+$",// 字母
        letter_l: "^[a-z]+$",// 小写字母
        letter_u: "^[A-Z]+$",// 大写字母
        mobile: "^0?(13|15|18|14|17)[0-9]{9}$",// 手机
        notempty: "^\\S",// 非空
        password: "^.*[A-Za-z0-9\\w_-]+.*$",// 密码
        fullNumber: "^[0-9]+$",// 数字
        picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",// 图片
        qq: "^[1-9]*[1-9][0-9]*$",// QQ号码
        rar: "(.*)\\.(rar|zip|7zip|tgz)$",// 压缩文件
        tel: "^[0-9\-()（）]{7,18}$",// 电话号码的函数(包括验证国内区号,国际区号,分机号)
        url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",// url
        username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",// 户名
        deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",// 单位名
        zipcode: "^\\d{6}$",// 邮编
        realname: "^[A-Za-z\\u4e00-\\u9fa5]+$",// 真实姓名
        companyname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
        companyaddr: "^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$",
        companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$"
    };
    switch(type){
        case "decmal": return RegExp(validateRegExp.decmal).test(val); break;// 浮点数
        case "decmal1": return RegExp(validateRegExp.decmal1).test(val); break;// 正浮点数
        case "decmal2": return RegExp(validateRegExp.decmal2).test(val); break;// 负浮点数
        case "decmal3": return RegExp(validateRegExp.decmal3).test(val); break;// 浮点数
        case "decmal4": return RegExp(validateRegExp.decmal4).test(val); break;// 非负浮点数（正浮点数 + 0）
        case "decmal5": return RegExp(validateRegExp.decmal5).test(val); break;// 非正浮点数（负浮点数 +0
        case "intege": return RegExp(validateRegExp.intege).test(val); break;// 整数
        case "intege1": return RegExp(validateRegExp.intege1).test(val); break; // 正整数
        case "intege2": return RegExp(validateRegExp.intege2).test(val); break;// 负整数
        case "num": return RegExp(validateRegExp.num).test(val); break;// 数字
        case "num1": return RegExp(validateRegExp.num1).test(val); break;// 正数（正整数 + 0）
        case "num2": return RegExp(validateRegExp.num2).test(val); break;// 负数（负整数 + 0）
        case "ascii": return RegExp(validateRegExp.ascii).test(val); break;// 仅ACSII字符
        case "chinese": return RegExp(validateRegExp.chinese).test(val); break;// 仅中文
        case "color": return RegExp(validateRegExp.color).test(val); break;// 颜色
        case "date": return RegExp(validateRegExp.date).test(val); break;// 日期
        case "email": return RegExp(validateRegExp.email).test(val); break;// 邮件
        case "idcard": return RegExp(validateRegExp.idcard).test(val); break;// 身份证
        case "ip4": return RegExp(validateRegExp.ip4).test(val); break;// ip地址
        case "letter": return RegExp(validateRegExp.letter).test(val); break;// 字母
        case "letter_l": return RegExp(validateRegExp.letter_l).test(val); break;// 小写字母
        case "letter_u": return RegExp(validateRegExp.letter_u).test(val); break;// 大写字母
        case "mobile": return RegExp(validateRegExp.mobile).test(val); break;// 手机
        case "notempty": return RegExp(validateRegExp.notempty).test(val); break;// 非空
        case "password": return RegExp(validateRegExp.password).test(val); break;// 密码
        case "fullNumber": return RegExp(validateRegExp.fullNumber).test(val); break;// 数字
        case "picture": return RegExp(validateRegExp.picture).test(val); break;// 图片
        case "qq": return RegExp(validateRegExp.qq).test(val); break;// QQ号码
        case "rar": return RegExp(validateRegExp.rar).test(val); break;// 压缩文件
        case "tel": return RegExp(validateRegExp.tel).test(val); break;// 电话号码的函数(包括验证国内区号,国际区号,分机号)
        case "url": return RegExp(validateRegExp.url).test(val); break;// url
        case "username": return RegExp(validateRegExp.username).test(val); break;// 户名
        case "deptname": return RegExp(validateRegExp.deptname).test(val); break;// 单位名
        case "zipcode": return RegExp(validateRegExp.zipcode).test(val); break;// 邮编
        case "realname": return RegExp(validateRegExp.realname).test(val); break;// 真实姓名
        case "companyname": return RegExp(validateRegExp.companyname).test(val); break;
        case "companyaddr": return RegExp(validateRegExp.companyaddr).test(val); break;
        case "companysite": return RegExp(validateRegExp.companysite).test(val); break;
        case "equal" : {
            //console.log(val);
            var other = $(val.split(";")[0]);
            if(other.val() == val){
                return true;
            }else{
                return false;
            }
        };break;
    }
};

/**
*   表单验证
*/
mtui.validate = function(){
    //表单验证
    mtui.$doc.off("focusout.mtValidate").on("focusout.mtValidate","[data-validate]",function(e) {
        var $this = $(this);
        //console.log("====>",$this.attr("data-validate"));
        var tdata = eval( "(" + $this.attr("data-validate") + ")" );
        var data = {
            validate : tdata.validate,
            style : tdata.style==undefined?'default':tdata.style,
            errorinfo : "", //错误提示
            left : $this.position().left + $this.width() + 40,
            top : $this.position().top + $this.height() - 13,
            zIndex : 20000,
            $field : $this.parent()
        };

        
        //错误提示
        for(i in data.validate){
            if(!mtui.validate_fun(i,$this.val())){
                //判断相同
                data.validate[i] = data.validate[i].replace(/(\.|#)\S*;/,"");
                data.errorinfo+= ("#%"+data.validate[i]);
            }
        };//END for

        //如果不能为空，就只显示一个不为空的字
        if(data.errorinfo.indexOf("不能为空") != -1){
            var arr = data.errorinfo.split("#%");
            data.errorinfo = "";
            for(var i=0; i<arr.length; i++){
                if(arr[i].indexOf("不能为空") != -1){
                    data.errorinfo += arr[i];
                }
            }
        }

        //如果可以为空
        if(data.validate['notempty'] == undefined && $(this).val() == ""){
            data.errorinfo = "";
        }
        data.errorinfo = data.errorinfo.replace("#%","");
        data.errorinfo = data.errorinfo.replaceAll("#%","，");

        //默认样式
        var toDefault = function(){
            data.str = '<div class="mt-validate-error">'+data.errorinfo+'</div>';
        }
        //右侧弹出
        var toFadeRight = function(){
            data.str = '<div class="mt-validate-error mt-validate-faderight animated fadeInRight" style="left:'+data.left+'px; top:'+data.top+'px;">'+data.errorinfo+'</div>';
        }
        switch(data.style) {
            case 'default': toDefault();break;
            case 'fadeRight': toFadeRight();break;
        }
        if(data.errorinfo != "" && !data.$field.find(".mt-validate-error")[0]){ // 第一次显示
            data.$field.append(data.str);
            $this.attr("data-validate-error","true");
        }else if(data.errorinfo != "" && data.$field.find(".mt-validate-error")[0]){ //第二次显示
            data.$field.find(".mt-validate-error").html(data.errorinfo);
        }else if( data.errorinfo == "" && !data.$field.find(".mt-validate-correct")[0] ){ //删除
            data.$field.find(".mt-validate-error").remove();
            $this.removeAttr("data-validate-error");
        }

    }).off("focusin.mtValidate").on("focusin.mtValidate","[data-validate]",function(){
        $(this).next(".mt-validate-error").remove();
    }).off("click.mtValidate").on("click.mtValidate",".mt-submit,submit",function(){
        //提交表单的时候，验证数据
        var $form = $(this).closest('.mt-form');
        $form.find("[data-validate]").trigger("focusout");
        if($form.find("[data-validate-error]")[0]){
            return false;
        }else{
            if($(this).closest('form')[0]){
                $(this).closest('form').submit();
            }
        }
    });
};
//获取当前错误的个数
$.prototype.mtValidate = function(){
    $(this).find("[data-validate]").trigger("focusout");
    return $(this).find('.mt-validate-error').length;
};
//清空验证数据
$.prototype.mtClearValidate = function(){
    $(this).find('.mt-validate-error').each(function(index, el) {
        $(this).remove();
    });
    $(this).find('[data-validate-error="true"]').removeAttr('data-validate-error');
};
//清空表单数据
$.prototype.mtClearForm = function(){
    var $this = $(this);
    $this.mtClearValidate(); //清空验证数据
    $this.find('input[type=text]').each(function(index, el) {
        $(this).val("");
    });
    $this.find('textarea').each(function(index, el) {
        $(this).val("");
    });
    $this.find('.mt-checkbox-active').each(function(index, el) {
        $(this).find('[type="checkbox"]').mtUnChecked();
    });
    $this.find('.mt-select').each(function(index, el) {
        $(this).find("input[type=text]").mtSelectVal(null);
    });
}

/**
* 点击空白区域
*/
mtui.clickblank = function(){
    //点击空白区域
    mtui.$doc.off("click.mtClickblank").on('click.mtClickblank', function(e) {
        //收缩下拉
        if(!$(e.target).closest('.mt-selected')[0]){
            $('.mt-selected').trigger('click'); 
        }
        // //收缩下拉
        // if(!$(e.target).closest('.mt-dropdown')[0]){
        //     $('.mt-dropdown').trigger('click'); 
        // }
    });
};

/**
* 初始化后 mtui插件
*/
function ini_mtui(){
    //初始化表单的方法
    mtui.checkbox();
    mtui.radio();
    mtui.select();
    mtui.slider();
    mtui.switchbtn();
    mtui.buttonAnimate();

    //插件
    mtui.panelFun();
    mtui.dropDown();
    mtui.modalShow();
    mtui.tabs();
    mtui.toggleCls();
    mtui.tips();
    mtui.validate();
    mtui.limit();
    mtui.more();
    mtui.clickblank();
}

/**
*   重写ajax方法
*/
;(function($){  
    //备份jquery的ajax方法  
    var _ajax=$.ajax;  
      
    //重写jquery的ajax方法  
    $.ajax=function(opt){  
        //备份opt中error和success方法  
        var fn = {    
            error:function(XMLHttpRequest, textStatus, errorThrown){},  
            success:function(data, textStatus){}  
        }  
        if(opt.error){  
            fn.error=opt.error;  
        }  
        if(opt.success){  
            fn.success=opt.success;  
        }  
          
        //扩展增强处理  
        var _opt = $.extend(opt,{  
            error:function(XMLHttpRequest, textStatus, errorThrown){  
                //错误方法增强处理  
                fn.error(XMLHttpRequest, textStatus, errorThrown);
                // console.log(XMLHttpRequest);
                // console.log(textStatus);
                // console.log(errorThrown);
                var str = XMLHttpRequest.responseText;
                str = eval("("+str+")");
                if(str.error != ""){
                    $.popup({
                        title:'系统提示',
                        titlebg:'blue',
                        str: str.error, //弹窗文字
                        icon : '', //默认标记 有4个值：success，warning，danger，loading
                        time : null, //自动关闭,  如果有值，一定时间会自动关闭
                        clickback : false ,//点击按钮的回调函数 return :mark,$da
                        closeback : false, //关闭时的回调函数  return :$da
                        bgshow : true, //是否要显示半透明的黑色背景？
                        fadetime : 500, //渐变动画时间
                        showbtn : false, //是否显示按钮 false,1,2
                        width: 200, //弹窗宽度
                        drag : false, //是否可拖动
                        close: true //是否要点击背景关闭？
                    });
                }
            },  
            success:function(data, textStatus){  
                //成功回调方法增强处理  
                fn.success(data, textStatus);  

                //取消loading
                if($(".mt-loading")[0]){
                    $(".mt-loading").hide();
                }

                mtui.limit();
                mtui.more();

                //初始化表单的方法
                mtui.checkbox();
                mtui.radio();
                mtui.select();
                mtui.slider();
                mtui.switchbtn();
                mtui.buttonAnimate();

            }  
        });  
        _ajax(_opt);  
    };  
})(jQuery);

$.prototype.loading = function(){
    var $this = $(this);
    $this.append('<div class="mt-loading"><img src="../assets/images/loading.gif" alt="" />loading</div>');
}

/*HTML5 动画*/
$(function(){

    //初始化后 mtui插件
    ini_mtui();

    //如果不支持HTML5，下面都不执行了
    //导航的动画效果
    if(!window.applicationCache)return;
    mtui.$doc.on('mouseover', '.mt-header-menu', function(e) {
        $(this).find("li").each(function(index, el) {
            index=index*0.1;
            $(this).css({
                "-webkit-animation-delay":index+"s",
                "-moz-animation-delay":index+"s",
                "-ms-animation-delay":index+"s",
                "animation-delay":index+"s"
            }).addClass('animated bounceIn');
        });
    }).on("mouseleave",function(e){
        $(this).find("li").removeAttr('style').removeClass('animated bounceIn');
    });

});


//滚动监听采用UI-KIT的滚动监听方法。在UIkit的基础上扩展了对图片预加载的方法
/**
* uikit - core 核心方法
*/
(function(core) {

    if (typeof define == "function" && define.amd) { // AMD

        define("uikit", function(){

            var uikit = window.UIkit || core(window, window.jQuery, window.document);

            uikit.load = function(res, req, onload, config) {

                var resources = res.split(','), load = [], i, base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : "").replace(/\/+$/g, "");

                if (!base) {
                    throw new Error( "Please define base path to UIkit in the requirejs config." );
                }

                for (i = 0; i < resources.length; i += 1) {
                    var resource = resources[i].replace(/\./g, '/');
                    load.push(base+'/components/'+resource);
                }

                req(load, function() {
                    onload(uikit);
                });
            };

            return uikit;
        });
    }

    if (!window.jQuery) {
        throw new Error( "UIkit requires jQuery" );
    }

    if (window && window.jQuery) {
        core(window, window.jQuery, window.document);
    }


})(function(global, $, doc) {

    "use strict";

    var UI = {}, _UI = global.UIkit ? Object.create(global.UIkit) : undefined;

    UI.version = '2.24.3';

    UI.noConflict = function() {
        // restore UIkit version
        if (_UI) {
            global.UIkit = _UI;
            $.UIkit      = _UI;
            $.fn.uk      = _UI.fn;
        }

        return UI;
    };

    UI.prefix = function(str) {
        return str;
    };

    // cache jQuery
    UI.$ = $;

    UI.$doc  = UI.$(document);
    UI.$win  = UI.$(window);
    UI.$html = UI.$('html');

    UI.support = {};
    UI.support.transition = (function() {

        var transitionEnd = (function() {

            var element = doc.body || doc.documentElement,
                transEndEventNames = {
                    WebkitTransition : 'webkitTransitionEnd',
                    MozTransition    : 'transitionend',
                    OTransition      : 'oTransitionEnd otransitionend',
                    transition       : 'transitionend'
                }, name;

            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }());

        return transitionEnd && { end: transitionEnd };
    })();

    UI.support.animation = (function() {

        var animationEnd = (function() {

            var element = doc.body || doc.documentElement,
                animEndEventNames = {
                    WebkitAnimation : 'webkitAnimationEnd',
                    MozAnimation    : 'animationend',
                    OAnimation      : 'oAnimationEnd oanimationend',
                    animation       : 'animationend'
                }, name;

            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }());

        return animationEnd && { end: animationEnd };
    })();

    // requestAnimationFrame polyfill
    //https://github.com/darius/requestAnimationFrame
    (function() {

        Date.now = Date.now || function() { return new Date().getTime(); };

        var vendors = ['webkit', 'moz'];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                       || window[vp+'CancelRequestAnimationFrame']);
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
            || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function(callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() { callback(lastTime = nextTime); },
                                  nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
    }());

    UI.support.touch = (
        ('ontouchstart' in document) ||
        (global.DocumentTouch && document instanceof global.DocumentTouch)  ||
        (global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0) || //IE 10
        (global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0) || //IE >=11
        false
    );

    UI.support.mutationobserver = (global.MutationObserver || global.WebKitMutationObserver || null);

    UI.Utils = {};

    UI.Utils.isFullscreen = function() {
        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
    };

    UI.Utils.str2json = function(str, notevil) {
        try {
            if (notevil) {
                return JSON.parse(str
                    // wrap keys without quote with valid double quote
                    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":';})
                    // replacing single quote wrapped ones to double quote
                    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"';})
                );
            } else {
                return (new Function("", "var json = " + str + "; return JSON.parse(JSON.stringify(json));"))();
            }
        } catch(e) { return false; }
    };

    UI.Utils.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    UI.Utils.removeCssRules = function(selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

        if(!selectorRegEx) return;

        setTimeout(function(){
            try {
              _ref = document.styleSheets;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                stylesheet = _ref[_i];
                idxs = [];
                stylesheet.cssRules = stylesheet.cssRules;
                for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                  if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                    idxs.unshift(idx);
                  }
                }
                for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                  stylesheet.deleteRule(idxs[_k]);
                }
              }
            } catch (_error) {}
        }, 0);
    };

    UI.Utils.isInView = function(element, options) {

        var $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = UI.$win.scrollLeft(), window_top = UI.$win.scrollTop(), offset = $element.offset(), left = offset.left, top = offset.top;

        options = $.extend({topoffset:0, leftoffset:0}, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() &&
            left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
          return true;
        } else {
          return false;
        }
    };

    UI.Utils.checkDisplay = function(context, initanimation) {

        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document), animated;

        if (context && !elements.length) {
            elements = $(context);
        }

        elements.trigger('display.uk.check');

        // fix firefox / IE animations
        if (initanimation) {

            if (typeof(initanimation)!='string') {
                initanimation = '[class*="uk-animation-"]';
            }

            elements.find(initanimation).each(function(){

                var ele  = UI.$(this),
                    cls  = ele.attr('class'),
                    anim = cls.match(/uk\-animation\-(.+)/);

                ele.removeClass(anim[0]).width();

                ele.addClass(anim[0]);
            });
        }

        return elements;
    };

    UI.Utils.options = function(string) {

        if ($.type(string)!='string') return string;

        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
            string = '{'+string+'}';
        }

        var start = (string ? string.indexOf("{") : -1), options = {};

        if (start != -1) {
            try {
                options = UI.Utils.str2json(string.substr(start));
            } catch (e) {}
        }

        return options;
    };

    UI.Utils.animate = function(element, cls) {

        var d = $.Deferred();

        element = UI.$(element);
        cls     = cls;

        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function() {
            element.removeClass(cls);
            d.resolve();
        }).width();

        element.css('display', '');

        return d.promise();
    };

    UI.Utils.uid = function(prefix) {
        return (prefix || 'id') + (new Date().getTime())+"RAND"+(Math.ceil(Math.random() * 100000));
    };

    UI.Utils.template = function(str, data) {

        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
            i=0, toc, cmd, prop, val, fn, output = [], openblocks = 0;

        while(i < tokens.length) {

            toc = tokens[i];

            if(toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
                i = i + 1;
                toc  = tokens[i];
                cmd  = toc[0];
                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1:0);

                switch(cmd) {
                    case '~':
                        output.push("for(var $i=0;$i<"+prop+".length;$i++) { var $item = "+prop+"[$i];");
                        openblocks++;
                        break;
                    case ':':
                        output.push("for(var $key in "+prop+") { var $val = "+prop+"[$key];");
                        openblocks++;
                        break;
                    case '#':
                        output.push("if("+prop+") {");
                        openblocks++;
                        break;
                    case '^':
                        output.push("if(!"+prop+") {");
                        openblocks++;
                        break;
                    case '/':
                        output.push("}");
                        openblocks--;
                        break;
                    case '!':
                        output.push("__ret.push("+prop+");");
                        break;
                    default:
                        output.push("__ret.push(escape("+prop+"));");
                        break;
                }
            } else {
                output.push("__ret.push('"+toc.replace(/\'/g, "\\'")+"');");
            }
            i = i + 1;
        }

        fn  = new Function('$data', [
            'var __ret = [];',
            'try {',
            'with($data){', (!openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]'), '};',
            '}catch(e){__ret = [e.message];}',
            'return __ret.join("").replace(/\\n\\n/g, "\\n");',
            "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"
        ].join("\n"));

        return data ? fn(data) : fn;
    };

    UI.Utils.events       = {};
    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';

    global.UIkit = UI;

    // deprecated

    UI.fn = function(command, options) {

        var args = arguments, cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), component = cmd[1], method = cmd[2];

        if (!UI[component]) {
            $.error("UIkit component [" + component + "] does not exist.");
            return this;
        }

        return this.each(function() {
            var $this = $(this), data = $this.data(component);
            if (!data) $this.data(component, (data = UI[component](this, method ? undefined : options)));
            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
        });
    };

    $.UIkit          = UI;
    $.fn.uk          = UI.fn;

    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";

    UI.components    = {};

    UI.component = function(name, def) {

        var fn = function(element, options) {

            var $this = this;

            this.UIkit   = UI;
            this.element = element ? UI.$(element) : null;
            this.options = $.extend(true, {}, this.defaults, options);
            this.plugins = {};

            if (this.element) {
                this.element.data(name, this);
            }

            this.init();

            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function(plugin) {

                if (fn.plugins[plugin].init) {
                    fn.plugins[plugin].init($this);
                    $this.plugins[plugin] = true;
                }

            });

            this.trigger('init.uk.component', [name, this]);

            return this;
        };

        fn.plugins = {};

        $.extend(true, fn.prototype, {

            defaults : {plugins: []},

            boot: function(){},
            init: function(){},

            on: function(a1,a2,a3){
                return UI.$(this.element || this).on(a1,a2,a3);
            },

            one: function(a1,a2,a3){
                return UI.$(this.element || this).one(a1,a2,a3);
            },

            off: function(evt){
                return UI.$(this.element || this).off(evt);
            },

            trigger: function(evt, params) {
                return UI.$(this.element || this).trigger(evt, params);
            },

            find: function(selector) {
                return UI.$(this.element ? this.element: []).find(selector);
            },

            proxy: function(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function(method) {
                    if (!$this[method]) $this[method] = function() { return obj[method].apply(obj, arguments); };
                });
            },

            mixin: function(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function(method) {
                    if (!$this[method]) $this[method] = obj[method].bind($this);
                });
            },

            option: function() {

                if (arguments.length == 1) {
                    return this.options[arguments[0]] || undefined;
                } else if (arguments.length == 2) {
                    this.options[arguments[0]] = arguments[1];
                }
            }

        }, def);

        this.components[name] = fn;

        this[name] = function() {

            var element, options;

            if (arguments.length) {

                switch(arguments.length) {
                    case 1:

                        if (typeof arguments[0] === "string" || arguments[0].nodeType || arguments[0] instanceof jQuery) {
                            element = $(arguments[0]);
                        } else {
                            options = arguments[0];
                        }

                        break;
                    case 2:

                        element = $(arguments[0]);
                        options = arguments[1];
                        break;
                }
            }

            if (element && element.data(name)) {
                return element.data(name);
            }

            return (new UI.components[name](element, options));
        };

        if (UI.domready) {
            UI.component.boot(name);
        }

        return fn;
    };

    UI.plugin = function(component, name, def) {
        this.components[component].plugins[name] = def;
    };

    UI.component.boot = function(name) {

        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
            UI.components[name].prototype.boot.apply(UI, []);
            UI.components[name].booted = true;
        }
    };

    UI.component.bootComponents = function() {

        for (var component in UI.components) {
            UI.component.boot(component);
        }
    };


    // DOM mutation save ready helper function

    UI.domObservers = [];
    UI.domready     = false;

    UI.ready = function(fn) {

        UI.domObservers.push(fn);

        if (UI.domready) {
            fn(document);
        }
    };

    UI.on = function(a1,a2,a3){

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
        }

        return UI.$doc.on(a1,a2,a3);
    };

    UI.one = function(a1,a2,a3){

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
            return UI.$doc;
        }

        return UI.$doc.one(a1,a2,a3);
    };

    UI.trigger = function(evt, params) {
        return UI.$doc.trigger(evt, params);
    };

    UI.domObserve = function(selector, fn) {

        if(!UI.support.mutationobserver) return;

        fn = fn || function() {};

        UI.$(selector).each(function() {

            var element  = this,
                $element = UI.$(element);

            if ($element.data('observer')) {
                return;
            }

            try {

                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function(mutations) {
                    fn.apply(element, []);
                    $element.trigger('changed.uk.dom');
                }, 50));

                // pass in the target node, as well as the observer options
                observer.observe(element, { childList: true, subtree: true });

                $element.data('observer', observer);

            } catch(e) {}
        });
    };

    UI.init = function(root) {

        root = root || document;

        UI.domObservers.forEach(function(fn){
            fn(root);
        });
    };

    UI.on('domready.uk.dom', function(){

        UI.init();

        if (UI.domready) UI.Utils.checkDisplay();
    });

    if(window.applicationCache){
      document.addEventListener('DOMContentLoaded', function(){

          var domReady = function() {

              UI.$body = UI.$('body');

              UI.ready(function(context){
                  UI.domObserve('[data-uk-observe]');
              });

              UI.on('changed.uk.dom', function(e) {
                  UI.init(e.target);
                  UI.Utils.checkDisplay(e.target);
              });

              UI.trigger('beforeready.uk.dom');

              UI.component.bootComponents();

              // custom scroll observer
              requestAnimationFrame((function(){

                  var memory = {x: window.pageXOffset, y:window.pageYOffset}, dir;

                  var fn = function(){

                      if (memory.x != window.pageXOffset || memory.y != window.pageYOffset) {

                          dir = {x: 0 , y: 0};

                          if (window.pageXOffset != memory.x) dir.x = window.pageXOffset > memory.x ? 1:-1;
                          if (window.pageYOffset != memory.y) dir.y = window.pageYOffset > memory.y ? 1:-1;

                          memory = {
                              "dir": dir, "x": window.pageXOffset, "y": window.pageYOffset
                          };

                          UI.$doc.trigger('scrolling.uk.document', [memory]);
                      }

                      requestAnimationFrame(fn);
                  };

                  if (UI.support.touch) {
                      UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
                  }

                  if (memory.x || memory.y) fn();

                  return fn;

              })());

              // run component init functions on dom
              UI.trigger('domready.uk.dom');

              UI.trigger('afterready.uk.dom');

              // mark that domready is left behind
              UI.domready = true;
          };

          if (document.readyState == 'complete' || document.readyState == 'interactive') {
              setTimeout(domReady);
          }

          return domReady;

      }());
  }

    return UI;
});

/**
* 采用UIkit 的滚动监听 scrollspy 方法
*/
;(function(UI) {

    "use strict";

    var $win           = UI.$win,
        $doc           = UI.$doc,
        scrollspies    = [],
        checkScrollSpy = function() {
            for(var i=0; i < scrollspies.length; i++) {
                window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
            }
        };

    UI.component('scrollspy', {

        defaults: {
            "target"     : false,
            "cls"        : "mt-scrollspy-inview",
            "initcls"    : "mt-scrollspy-init-inview",
            "topoffset"  : 0,
            "leftoffset" : 0,
            "repeat"     : false,
            "delay"      : 0
        },

        boot: function() {

            // listen to scroll and resize
            $doc.on("scrolling.uk.document", checkScrollSpy);
            $win.on("load resize orientationchange", UI.Utils.debounce(checkScrollSpy, 50));

            // init code
            UI.ready(function(context) {

                UI.$("[data-mt-scrollspy]", context).each(function() {

                    var element = UI.$(this);

                    if (!element.data("scrollspy")) {
                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr("data-mt-scrollspy")));
                    }
                });
            });
        },

        init: function() {
            var $this = this, inviewstate, initinview, togglecls = this.options.cls.split(/,/), fn = function(){

                var elements     = $this.options.target ? $this.element.find($this.options.target) : $this.element,
                    delayIdx     = elements.length === 1 ? 1 : 0,
                    toggleclsIdx = 0;

                elements.each(function(idx){

                    var element     = UI.$(this),
                        inviewstate = element.data('inviewstate'),
                        inview      = UI.Utils.isInView(element, $this.options),
                        toggle      = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();

                    if (inview && !inviewstate && !element.data('scrollspy-idle')) {

                        if (!initinview) {
                            element.addClass($this.options.initcls);
                            $this.offset = element.offset();
                            initinview = true;

                            element.trigger("init.uk.scrollspy");
                        }

                        element.data('scrollspy-idle', setTimeout(function(){

                          //console.log("进入了~",element.index());

                            element.addClass("mt-scrollspy-inview").toggleClass(toggle).width();
                            element.trigger("inview.uk.scrollspy");

                            element.data('scrollspy-idle', false);
                            element.data('inviewstate', true);

                        }, $this.options.delay * delayIdx));

                        delayIdx++;
                    }

                    if (!inview && inviewstate && $this.options.repeat) {

                        if (element.data('scrollspy-idle')) {
                            clearTimeout(element.data('scrollspy-idle'));
                        }
                        //console.log("离开了~",element.index());
                        element.removeClass("mt-scrollspy-inview").toggleClass(toggle);
                        element.data('inviewstate', false);

                        element.trigger("outview.uk.scrollspy");
                    }

                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? (toggleclsIdx + 1) : 0;

                });
            };

            fn();

            this.check = fn;

            scrollspies.push(this);
        }
    });


    var scrollspynavs = [],
        checkScrollSpyNavs = function() {
            for(var i=0; i < scrollspynavs.length; i++) {
                window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
            }
        };

    UI.component('scrollspynav', {

        defaults: {
            "cls"          : 'mt-active',
            "closest"      : false,
            "topoffset"    : 0,
            "leftoffset"   : 0,
            "smoothscroll" : false
        },

        boot: function() {

            // listen to scroll and resize
            $doc.on("scrolling.uk.document", checkScrollSpyNavs);
            $win.on("resize orientationchange", UI.Utils.debounce(checkScrollSpyNavs, 50));

            // init code
            UI.ready(function(context) {

                UI.$("[data-scrollspy-nav]", context).each(function() {

                    var element = UI.$(this);

                    if (!element.data("scrollspynav")) {
                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr("data-scrollspy-nav")));
                    }
                });
            });
        },

        init: function() {

            var ids     = [],
                links   = this.find("a[href^='#']").each(function(){ if(this.getAttribute("href").trim()!=='#') ids.push(this.getAttribute("href")); }),
                targets = UI.$(ids.join(",")),

                clsActive  = this.options.cls,
                clsClosest = this.options.closest || this.options.closest;

            var $this = this, inviews, fn = function(){

                inviews = [];

                for (var i=0 ; i < targets.length ; i++) {
                    if (UI.Utils.isInView(targets.eq(i), $this.options)) {
                        inviews.push(targets.eq(i));
                    }
                }

                if (inviews.length) {

                    var navitems,
                        scrollTop = $win.scrollTop(),
                        target = (function(){
                            for(var i=0; i< inviews.length;i++){
                                if(inviews[i].offset().top >= scrollTop){
                                    return inviews[i];
                                }
                            }
                        })();

                    if (!target) return;

                    if ($this.options.closest) {
                        links.blur().closest(clsClosest).removeClass(clsActive);
                        navitems = links.filter("a[href='#"+target.attr("id")+"']").closest(clsClosest).addClass(clsActive);
                    } else {
                        navitems = links.removeClass(clsActive).filter("a[href='#"+target.attr("id")+"']").addClass(clsActive);
                    }

                    $this.element.trigger("inview.uk.scrollspynav", [target, navitems]);
                }
            };

            if (this.options.smoothscroll && UI.smoothScroll) {
                links.each(function(){
                    UI.smoothScroll(this, $this.options.smoothscroll);
                });
            }

            fn();

            this.element.data("scrollspynav", this);

            this.check = fn;
            scrollspynavs.push(this);

        }
    });

})(UIkit);

/**
* 在UIkit的基础上添加图片预加载的方法
*/
;(function(UI) {

    "use strict";

    var $win           = UI.$win,
        $doc           = UI.$doc,
        scrollspies    = [],
        checkScrollSpy = function() {
            for(var i=0; i < scrollspies.length; i++) {
                window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
            }
        };

    UI.component('imgload', {

        defaults: {
            "target"     : false,
            "cls"        : "mt-imgload-inview",
            "delay"      : 0,
            "repeat"     : false,
            "src"      : ""
        },

        boot: function() {

            // listen to scroll and resize
            $doc.on("scrolling.uk.document", checkScrollSpy);
            $win.on("load resize orientationchange", UI.Utils.debounce(checkScrollSpy, 50));

            // init code
            UI.ready(function(context) {

                UI.$("[data-mt-imgload]", context).each(function() {

                    var element = UI.$(this);

                    if (!element.data("imgload")) {
                        var obj = UI.imgload(element, UI.Utils.options(element.attr("data-mt-imgload")));
                    }
                });
            });
        },

        init: function() {
          //获取图片的真实尺寸 _src
          var getRealImg = function($img,src){
              var img = new Image();
              img.src = src;
              if (img.complete) {
                $img.attr("src",src);
                  //console.log("图片加载完成走这里...");
              } else {
                  $("<img/>").attr("src",src).load(function() {
                    $img.attr("src",src);
                  });
              };
          };
            var $this = this, inviewstate, initinview, togglecls = this.options.cls.split(/,/), fn = function(){

                var elements     = $this.options.target ? $this.element.find($this.options.target) : $this.element,
                    delayIdx     = elements.length === 1 ? 1 : 0,
                    toggleclsIdx = 0;

                elements.each(function(idx){

                    var element     = UI.$(this),
                        inviewstate = element.data('inviewstate'),
                        inview      = UI.Utils.isInView(element, $this.options),
                        toggle      = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();

                    if (inview && !inviewstate && !element.data('imgload-idle')) {

                        if (!initinview) {
                            element.addClass($this.options.initcls);
                            $this.offset = element.offset();
                            initinview = true;
                            element.trigger("init.uk.imgload");
                        }

                        element.data('imgload-idle', setTimeout(function(){

                          console.log("--->加载图片：",$this.options.src);

                          getRealImg(element,$this.options.src);

                            element.addClass("mt-imgload-inview").toggleClass(toggle).width();
                            element.trigger("inview.uk.imgload");

                            element.data('imgload-idle', false);
                            element.data('inviewstate', true);

                        }, $this.options.delay * delayIdx));

                        delayIdx++;
                    }
                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? (toggleclsIdx + 1) : 0;

                });
            };

            fn();

            this.check = fn;

            scrollspies.push(this);
        }
    });

})(UIkit);

/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(B){throw B.temp="function anonymous($data,$filename) {"+z+"}",B}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(j){return j.filename=h||"anonymous",j.name="Syntax Error",p(j)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;e.openTag="{{",e.closeTag="}}";var z=function(a,b){var c=b.split(":"),d=c.shift(),e=c.join(":")||"";return e&&(e=", "+e),"$helpers."+d+"("+a+e+")"};e.parser=function(a){a=a.replace(/^\s/,"");var b=a.split(" "),c=b.shift(),e=b.join(" ");switch(c){case"if":a="if("+e+"){";break;case"else":b="if"===b.shift()?" if("+b.join(" ")+")":"",a="}else"+b+"{";break;case"/if":a="}";break;case"each":var f=b[0]||"$data",g=b[1]||"as",h=b[2]||"$value",i=b[3]||"$index",j=h+","+i;"as"!==g&&(f="[]"),a="$each("+f+",function("+j+"){";break;case"/each":a="});";break;case"echo":a="print("+e+");";break;case"print":case"include":a=c+"("+b.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(e)){var k=!0;0===a.indexOf("#")&&(a=a.substr(1),k=!1);for(var l=0,m=a.split("|"),n=m.length,o=m[l++];n>l;l++)o=z(o,m[l]);a=(k?"=":"=#")+o}else a=d.helpers[c]?"=#"+c+"("+b.join(",")+");":"="+a}return a},"function"==typeof define?define(function(){return d}):"undefined"!=typeof exports?module.exports=d:this.template=d}();