
var form1=document.getElementById('form1')
var names=document.getElementById('username');
var grades=document.getElementById('grade');
var number=document.getElementById('numbers');
var mail=document.getElementById('email');
var text=document.getElementById('self' );
var err=document.getElementById('span');
var no=document.getElementById("span2");

function grade1(){var ch = false;
    if(grades.value>2014||grades.value<2010){
        no.innerHTML="仅允许2010--2014";
        grades.value="";
        grades.innerHTML="";

        return false;}
    else { no.innerHTML="";

        ch=true
    }
    return ch;
}

function check() {var ch = false;
    if(names.value.length == 0){
        err.innerHTML="用户名不能为空";
        names.value="";

        return false;
    }
    else if(names.value.length>7){
        err.innerHTML="姓名不能超过7个字";

        names.value="";

        return false;}
    else  {err.innerHTML="";

        ch=true
    }
    return ch;
}

function num() {var ch = false;
    var pattern = /^1[34578]\d{9}$/;
    var phone = document.getElementById("span3");
    if (!pattern.test(number.value)) {
        phone.innerHTML = "手机号码不合规范";
        number.value="";
        return false;


    }
    else {phone.innerHTML = "";

        ch=true
    }
    return ch;
}
function test(){var tex=document.getElementById("span4");
    var ch = false;
    var data=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if(!data.test(mail.value))
    {tex.innerHTML="输入邮箱不符合格式";
        mail.value="";
        return false;
    }
    else {tex.innerHTML="";

        ch=true
    }
    return ch;
}
function len() {var not=document.getElementById("span5");
    var ch = false;
    if(text.value.length>100)
    {not.innerHTML="超过字数上限";
        text.value=""
        return false;
    }
    else {
        not.innerHTML="";
        ch=true
    }
    return ch;
}
function ch() {
    var ch=grade1()&&check()&&num()&&len()&&test();
    return ch ;

}
function confirm()
{
    var r=confirm("Press a button")
    if (r==true)
    {
        document.write(" OK")
    }
    else
    {
        document.write(" Cancel")
    }
}
function yes() {if(ch())
{
    confirm();
}

}
