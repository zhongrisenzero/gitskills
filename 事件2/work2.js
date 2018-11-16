$(document).ready(function () {$("#btn").on("click",put)
    $("ul").delegate(".delete","click",function () {$(this).parent("li").remove()
        return false;
    })


    $("ul").delegate("li span" ,"click",function () {
        $(this).css("text-decoration","line-through")
    $(this).dblclick(function () {$(this).css("text-decoration","none")

    })

    })


})
function put() {
    var text1 = $("#text").val()
    if (text1 != "") {
        $("ul").prepend("<li><span>" + text1 + "</span><button class='delete'>delete</button></li>")
        document.getElementById("text").value = "";

    }

}