var MT = {

    checkDate : function(ev){

        var start = $("#startDate").val().replace(/-/g,"");
        var end = $("#endDate").val().replace(/-/g,"");

        var s = $("#startDate").val().split("-");
        var y = parseInt(s[0], 10);
        var m = parseInt(s[1], 10);
        if( m+5 > 12 ){
            var year = y+1;
            var month = '0'+(m - 5);
        }else{
            var year = y
            var month = m+5<10?('0'+(m+5)):m+5;
        }
        var addFive = year+""+month;

        if(start != "" && end != "" && start > end){
            $.popup({
                title:'系统提示',
                str: '开始时间不能大于截至日期', //弹窗文字
                titlebg:'#28A6E9',
                closeback : false, //关闭时的回调函数  return :$da
                bgshow : true, //是否要显示半透明的黑色背景？
                color: '#000',// 背景黑色 和白色
                showbtn : 1, //是否显示按钮 false,1,2
                width: 200, //弹窗宽度
                height: 'auto', //弹窗高度
                drag : false, //是否可拖动
                close: true //是否要点击背景关闭？
            });
            $(ev.target).val("");
        }else if(start != "" && end != "" && addFive > end){
            $.popup({
                title:'系统提示',
                str: '裁判日期至少间隔半年', //弹窗文字
                titlebg:'#28A6E9',
                closeback : false, //关闭时的回调函数  return :$da
                bgshow : true, //是否要显示半透明的黑色背景？
                color: '#000',// 背景黑色 和白色
                showbtn : 1, //是否显示按钮 false,1,2
                width: 200, //弹窗宽度
                height: 'auto', //弹窗高度
                drag : false, //是否可拖动
                close: true //是否要点击背景关闭？
            });
            $(ev.target).val("");
        }
    },

    submitDate: function(yesDo){
        //搜索
        $("#searchSubmit").on('click', function(e) {
            e.preventDefault();
            var start = $("#startDate").val();
            var end = $("#endDate").val();
            if(start != "" && end != ""){
                yesDo();
            }else{
                $.popup({
                    title:'系统提示',
                    str: '裁判日期不能为空', //弹窗文字
                    titlebg:'#28A6E9',
                    closeback : false, //关闭时的回调函数  return :$da
                    bgshow : true, //是否要显示半透明的黑色背景？
                    color: '#000',// 背景黑色 和白色
                    showbtn : 1, //是否显示按钮 false,1,2
                    width: 200, //弹窗宽度
                    height: 'auto', //弹窗高度
                    drag : false, //是否可拖动
                    close: true //是否要点击背景关闭？
                });
            }
        });
    },

    //session
    sessionDo:function(){
        //add Mantou
        var sessionDo = new Object();
        sessionDo = {
            get : null,
            set : null,
            del : null
        }
        var session = window.sessionStorage;
        sessionDo.get = function(key){ //通过key 获取数组
            var str = session.getItem(key);
            console.log(str);
            if(str == '' || str == null){
                return null;
            }else{
                return str.split(',');
            }
        }
        sessionDo.set = function(key,value){
            var arr = sessionDo.get(key)==null?[]:sessionDo.get(key);

            if(arr.indexOf(value) == -1){
                arr.push(value);
                session.setItem(key,arr.join(','));
            }
        }
        sessionDo.del = function(key,value){
            console.log(value);
            var arr = sessionDo.get(key);
            arr.remove(value);
            session.setItem(key,arr.join(','));
        }

        return sessionDo;
    },

    //设置隐藏显示,选项
    ddMax:function(){

        $('.ddMax').each(function(index, el) {
            if($(this).height() > 40){
                $(this).height(34);
                $(this).next(".ddMax-btn").show();
            }
        });

        $(document).off('click.ddMax').on('click.ddMax', ".ddMax-btn", function(event) {
            var text = $(this).html();
            if(text == '更多'){
                $(this).prev('.ddMax').removeAttr('style');
                $(this).html('收起');
            }else{
                $(this).prev('.ddMax').height(34);
                $(this).html('更多');
            }
        });
    },

    PageList:function(ajaxDo){
        $(document).on('click','.homePage', function(e) {
            ajaxDo(1);
        });
        $(document).on('click', ".endPage",function(e) {
            ajaxDo($("#totalPage").html());
        });
        $(document).on('click', ".nextPage",function(e) {
            var max = $("#totalPage").html();
            var now = parseInt($("#currentPage").html(),10);
            if(now < max){
                now++;
                console.log(now);
                ajaxDo(now);
            }
        });
        $(document).on('click', ".prevPage",function(e) {
            var now = $("#currentPage").html();
            if(now > 1){
                now--;
                ajaxDo(now);
            }
        });
    }
}