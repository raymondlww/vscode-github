var mu=1; //记录音频index
var time1;
var finishOne=true;
// 加载完成后的事件 Start
$(function(){
    $.extend({
        endLoadFuc:function(){
            clearTimeout(audiotime);
            $("#wrap").css({"display":"block"});
            $("#loadpage").css({"display":"none"})
            $("#bottom").removeClass('none')
            $("#leftbtn").removeClass("none")
            $.autoplayFuc();
            loadend();
        }
    });
})
// 微信End 
function loadend(){
var wrap=new Swiper(".wrap",{
    direction: "vertical",
    autoplay : autoplayBool,
    autoplayDisableOnInteraction : false,
    autoplayStopOnLast : true,
    pagination : '.swiper-pagination',
    paginationType : 'custom',
    paginationCustomRender: function (swiper, current, total) {
        return current + '/' + total;
    },
    onSlideChangeStart: function(a) {
       aa();
        $("#nav li").css({"color":"#fff"})
        $("#nav").animate({"left":"-100%"},500)
        $("#menulogo img").attr("src","../../common/img/menu.png");
        $("#tiao").css({"width":""+(wrap.progress*100)+"%"})
        $("#rightbtn").css({"display":"block"});
        navfoolean=false;
        switch (a.activeIndex){
            case 0 :
                $("#rightbtn").css({"display":"none"});
                break;
            case 1 :
                playSound(a.activeIndex);
                break;
            case 2 :
                playSound(a.activeIndex);
                break;
            case 3 :
                playSound(a.activeIndex);
                break;
            case 4 :
                playSound(a.activeIndex);
                break;
            case 5 :
                playSound(a.activeIndex);
                break;
            case 6 :
                playSound(a.activeIndex);
                break;
            case 7 :
                playSound(a.activeIndex);
                break;
            case 8 :
                playSound(a.activeIndex);
                break;
            case 9 :
                playSound(a.activeIndex);
                break;
            // case 10 :
            //     $("#rightbtn").css({"display":"none"});
            //     $(".ps_zhi").css({"-webkit-animation":""});
            //     $("#yeshu li").on("click",function(){
            //         var count=$(this).data("index");
            //         wrap.slideTo(count,0,true);
            //     })
            //     break;
        }
    },
    onSlideChangeEnd:function(a){
        if(finishOne){
            a.startAutoplay();
        }
    }
})
function playSound(page){
    mu=page;
    $("#li"+page+"").css({"color":"#dd650d"});
    if(btn==true){
        $("#sound"+page+"")[0].play();
    }
    $("audio").on("ended",function(){
        $(this).attr('data-end', 'true');
        $("#nav li").eq(mu).addClass('color-green');
        // console.log($("audio[data-end=true]").length)
        if($("audio[data-end=true]").length>=$("audio").length){
            if(finishOne){
                console.log("已全部听完");
                wrap.stopAutoplay();
                finishOne=false;  
            }else{
                return;
            }
        }
    });
}
// 统计得分和未看页数 Start
function aa(){
    for (var a = document.getElementById("sound").getElementsByTagName("audio"), b = 0; b < a.length; b++){
        a[b].pause(), a[b].currentTime = 0;
    } 
}
// 按钮 Start
// 菜单按钮 Start
$("#nav ul li").on("click",function(){
    var count=$(this).index();
    $(this).css("color","#dd650d")
    wrap.slideTo(count,0,true);
    wrap.stopAutoplay();
})
// 菜单按钮 End
// 动画按钮 Start
$("#donghua").click(function(){dhfuc();})
// 动画按钮 End
// 动画滑动按钮 Start
$("#circle1").click(function(){dhfuc();})
//动画滑动按钮 End
//动画按钮function Start
function dhfuc(){
    var activeindex=wrap.activeIndex;
     if(animatebtn==true){
        $(".p_bg1").addClass("none");
        $(".p_bg2").removeClass("none");
        $("#circle1").css('left','1.55rem'),
        $("#circle1").css('background-color','#fff'),
        $('#ellipse1').css('background-color','#ccc');
        $(".up").addClass('upnow')
        $("#animatep").text("动画:关");
        animatebtn=false;
        $("#donghua img").attr("src","../../common/img/dh2.png");
     }else{
        $(".p_bg1").removeClass("none");
        $(".p_bg2").addClass("none");
        $(".up").removeClass('upnow');
        $("#circle1").css('left','0'),
        $("#circle1").css('background-color','#dd650d'),
        $('#ellipse1').css('background-color','#dcb395');
        $("#animatep").text("动画:开");
        wrap.slideTo(activeindex, 0, true);
        animatebtn=true;
        $("#donghua img").attr("src","../../common/img/dh1.png");
     }
}
// 动画按钮function End
// 按钮End
}
