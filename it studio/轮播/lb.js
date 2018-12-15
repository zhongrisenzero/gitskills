$(document).ready(function () {

    var sl=$(".slide");
    var size= $("ul img").eq(0).width();
    var ul = sl.find("ul");
    var liwidth=ul.find("li").eq(0).width();
    var num=$(".box").find("span");
    var timer=0;
    var move=0;
    sl.width(size);
    var b=true;
    num.on("click",function () {$(this).addClass("active").siblings("span").removeClass("active")
        move=$(this).index();
        ul.animate({
            "right":liwidth*move
        });
    });
    timer = setInterval(function (){
        move++;
        if(move==num.length)
        {move=0;
        };
        num.eq(move).trigger("click");
    },4000)
    $(".right").stop(true,true).click(function (){
        move++;
        if(b){b=false;if(move==num.length){move=0};
            num.eq(move).trigger("click");}


    });

    $(".left").stop(true,true).click(function (){
        if(b){b=false;    move--;
            if(move==num.length){move=0};
            num.eq(move).trigger("click");
        }



    });

        })
