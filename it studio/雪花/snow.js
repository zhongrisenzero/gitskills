$(document).ready(function () {
    var can = document.getElementById("can");
    var ctx = can.getContext("2d");
    var wid = window.innerWidth;
    var hei = window.innerHeight;
    can.width=wid;
    can.height=hei;
    function random(min,max){
        return parseInt(Math.random()*(max-min)+min);
    }

    function AnimationClass(){

        this.x = random(0,can.width);
        this.y = 0;
        this.radius = random(1,5);
        this.color = "white";
        this.speed = random(1,6);
        this.startAngle = 0;
        this.endAngle = Math.PI*2;
    }

    AnimationClass.prototype.draw = function(){

        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle);
        ctx.fill();
        ctx.restore();
        this.sport();
    };

    AnimationClass.prototype.sport = function(){
        this.y += this.speed;
    };

    var dataArr =[];
    function show(){
        can.height = can.height;
        var A = new AnimationClass();
        dataArr.push(A);
        for (var i in dataArr){
            dataArr[i].draw();
        }
        requestAnimationFrame(show);
    }
    show();










})

