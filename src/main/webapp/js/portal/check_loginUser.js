/**
 * Created by hs on 2018.4.15.
 */
$(document).ready(function(){
    $.ajax({
        url : "/user/",
        type:"GET",
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',//防止乱码
        success:function(data){
            if(data.msg == "200"){
                console.log(data.loginRole);
                if(data.loginRole == "1"){
                    $(".logined").text(data.loginName);
                }else{
                    $(".logined").text(data.loginName);
                    $(".header .greendia").text("查看VIP");
                }
                $(".logined").removeAttr("style");
                $(".signin").attr("style","display:none");
            }else{
                $(".signin").removeClass("hide");
                $(".logined").attr("style","display:none");
            }
        },
        error :function(){
            window.location.href = "404";//跳转到404页面
        }
    });

    $(".logined").mouseover(function(){
        $(".login_user").removeClass("hide");
    });
    $(".login_user").mouseout(function(){
        $(".login_user").addClass("hide");
    });

})

