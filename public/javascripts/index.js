
$(function(){
    $(".baseUI li ul li").css("display","none");
    $(".baseUI em").parent().bind("click",function(){
        var li=$(this).siblings().children();
        li.slideDown();
        var lis=$(this).parent().siblings().children("ul").children();
        lis.slideUp();
    });
    $(".baseUI li ul li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    });
   
    $(".baseUI li ul li").on('click',function(){
        $(".right").load($(this).attr("p"));
    })
    $(".baseUI li ul li").trigger('click'); 
})