$(document).ready(function () {
    var can = document.getElementById("can");
    var ctx = can.getContext("2d");
    var wid = window.innerWidth;
    var hei = window.innerHeight;
    can.width = wid;
    can.height = hei;
    function Sn() {}
    Sn.prototype= {

        x: Math.random() * wid,
        y: Math.random() * hei,
        r: 10
    }
    var arr=[]
    for(var i=0;i<100;i++)
        arr[i]=new Sn();

    function Draw () {
        ctx.clearRect(0, 0, wid, hei);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (var i = 0; i < 100; i++) {
            var p = arr[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r*Math.random()+1, 0, 2 * Math.PI, false);
            ctx.fill();
            Fall();
            ctx.closePath();

        }
    }
    function Fall()  {
        for (var i = 0; i <100; i++) {
            var s = arr[i];
            s.y += Math.random() * 5+ 1;
            s.x += Math.random() * 5+ 1;
            if (s.y > hei) {
                s.y = 0;
            }

            if (s.x > wid) {
                s.x = 0;
            }
        }
    }



    setInterval(Draw,100)





})

