;(function($){
    var defaults = {
        position:"bottom",//显示位置
        time:2000,//消失时间 s
        text:"默认提示"
    };
    $.extend({
        "tips" : function(option){
            var options = $.extend({},defaults,option);
            var centerVal = ($(window).height() - $("#tips").height()) / 2;
            var position = 'bottom';
            var lineVal = "20px";
            if(options.position == 'top'){
                position = 'top';
            }else if(options.position == 'center'){
                position = 'bottom';
                lineVal = centerVal + 'px';
            }
            var html = '<div id="tips" style="position:fixed;'+position+':'+lineVal+';color:#fff;font-size:14px;text-align:center;width:100%;"><p style="background-color:rgba(0,0,0,0.2);display:inline-block;border-radius:30px;padding:10px 15px;margin:10px;filter:alpha(opacity=50);">'+ options.text +'</p></div>';
            $('body').append(html);
            setTimeout(function(){
                $("#tips").remove();
            }, options.time);
        }
    });
})(jQuery);