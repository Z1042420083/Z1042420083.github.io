(function($){
    //首先备份下jquery的ajax方法
    var _ajax=$.ajax;

    //重写jquery的ajax方法
    $.ajax=function(opt){
        //备份opt中error和success方法
        /*var fn = {
            error:function(XMLHttpRequest, textStatus, errorThrown){},
            success:function(data, textStatus){}
        }
        if(opt.error){
            fn.error=opt.error;
        }
        if(opt.success){
            fn.success=opt.success;
        }*/

        //扩展增强处理
        var _opt = $.extend(opt,{
            /*error:function(XMLHttpRequest, textStatus, errorThrown){
                //错误方法增强处理
                fn.error(XMLHttpRequest, textStatus, errorThrown);
            },
            success:function(data, textStatus){
                //成功回调方法增强处理
                fn.success(data, textStatus);
            },
            beforeSend:function(XHR){
                //提交前回调方法

            },*/
            //只重写complete方法
            complete:function(XHR, TS){
                var status = XHR.status;
                console.log(XHR)
                if(status == 200){//请求成功
                    var res = JSON.parse(XHR.responseText);
                    var result = res.result;
                    console.log(result)
                    if(result == "888"){
                        tishi(res.msg,reloadCurrPage);
                    }else if(result == "000"){

                    }else if(result == "33333"){
                        //未选择城市
                        reload();
                    }else {
                        tishi(res.msg);
                    }
                }
            }
        });
        return _ajax(_opt);
    };
})(jQuery);
function reloadCurrPage() {
    reload();
}