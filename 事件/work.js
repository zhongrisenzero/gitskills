
 $(document).ready(function () {
      $("#btn").on("click",put)

     $("ul").on("click",".delete",function () {
         $(this).closest('li').remove();
         return false;
     })
     $("ul").on("click","li span" ,function () {$(this).css("text-decoration","line-through");
     $(this).dblclick(function () {$(this).css("text-decoration","none")
     })

     })
         

 })
 function put() {var text1= $("#text").val()

         if (text1 != "") {
             $("ul").prepend("<li ><span>"+text1+"</span><button class='delete'>delete</button></li>")
             document.getElementById("text").value = "";

         }


 }


     
