/**
 * Created by huan on 25/7/15.
 */
pageWidth=$(window).width();
pageHeight=$(window).height();
//pageHeight=$(window).width()*1.575;

var  p10status1 = false;
var p10status2=false;
var isdrag=false;
var tx,ty, x,y;
bl_top= pageHeight*(-0.12);
//console.log('bl_top'+bl_top);
bl_bottom=pageHeight*0.6446;
$(".dragme").css("top",bl_bottom);
$(function(){
    document.getElementById("p02move").addEventListener('touchend',function(){
        sdrag = false;
    });
    document.getElementById("p02move").addEventListener('touchstart',selectmouse);
    document.getElementById("p02move").addEventListener('touchmove',movemouse);
//p0401
    document.getElementById("p0401").addEventListener('touchend',function(){
        p4sdrag = false;
    });
    document.getElementById("p0401").addEventListener('touchstart',p4selectmouse);
    document.getElementById("p0401").addEventListener('touchmove',p4movemouse);

//p1001
    document.getElementById("p1001").addEventListener('touchend',function(){


        p1001sdrag = false;
    });
    document.getElementById("p1001").addEventListener('touchstart',p1001selectmouse);
    document.getElementById("p1001").addEventListener('touchmove',p1001movemouse);
//p1002
    document.getElementById("p1002").addEventListener('touchend',function(){
        p1002sdrag = false;

    });
    document.getElementById("p1002").addEventListener('touchstart',p1002selectmouse);
    document.getElementById("p1002").addEventListener('touchmove',p1002movemouse);
//p08guo
    document.getElementById("p08guo").addEventListener('touchend',function(){
        p1002sdrag = false;

    });
    document.getElementById("p08guo").addEventListener('touchstart',p08guoselectmouse);
    document.getElementById("p08guo").addEventListener('touchmove',p08guomovemouse);


});

function rmClass(a){
    $(a).addClass("displaypage");
    $(a).removeClass("ondisplaypage");

}

function addClass(a){

    $(a).addClass("ondisplaypage");
    $(a).removeClass("displaypage");

}



function movemouse(e){
    if (isdrag){
        //var n = tx + e.touches[0].pageX - x;
        var n = ty + e.touches[0].pageY - y;
        //console.log();
        console.log(n);

        if (n<bl_top  ){
            //alert('ok');
            //$("#p02moveimg").attr("src","");
            $("#p02moveimg").css("display","none");
            $("#p02jgzimg").attr("src","images/p2_4.png");
            //$("#p02jgz").css("display","none");
            //$("#p02jgz2").css("display","block");
            addClass('#p02guanghuan');
            setTimeout("addClass('#p03bg'),addClass('#p0301'),rmClass('#p02bg'),coverPage3()",600);

        }else if(n>bl_bottom){

        }
        else{
            $("#p02move").css("top",n);
            return false;
        }


    }
}


function selectmouse(e){
    isdrag = true;
    tx = parseInt(document.getElementById("p02move").style.left+0);
    x = e.touches[0].pageX;
    ty = parseInt(document.getElementById("p02move").style.top+200);
    y = e.touches[0].pageY;
    return false;
}

//p04

function p4selectmouse(e){
    p4sdrag = true;
    p4tx = parseInt(document.getElementById("p0401").offsetLeft);
    p4x = e.touches[0].pageX;
    p4ty = parseInt(document.getElementById("p0401").offsetTop);
    p4y = e.touches[0].pageY;
    return false;
}



function p4movemouse(e){
    if (p4sdrag){
        //var n = tx + e.touches[0].pageX - x;
        var n4y = p4ty + e.touches[0].pageY - p4y;
        var n4x = p4tx + e.touches[0].pageX - p4x;

        //$("#p0401").css("margin-top",n4y);
        //$("#p0401").css("margin-left",n4x);
        var zbtop;
        var zbbottom;
        var zbleft;
        var zbright;

        zbtop = parseInt(pageHeight)*0.21;
        zbbottom  = pageHeight*0.45;
        zbleft= pageWidth*0.29;
        zbright= pageWidth*0.43;
        //console.log('zbtop:'+zbtop+' zbbottom:'+zbbottom+' zbleft:'+zbleft+' zbright'+zbright);
        //console.log('n4y:'+n4y+' n4x:'+n4x );
         if (n4y<zbbottom & n4y> zbtop & n4x<zbright & n4x>zbleft){

            $("#p401img").attr("src","images/p4_1.png")

            setTimeout("addClass('#p05bg'),addClass('#p0501'),rmClass('#p04bg'),rmClass('#p0401'),coverPage5()",600);
            p4sdrag = false;
            return false;
        }
        else{
            $("#p0401").css("margin-top",n4y);
            $("#p0401").css("margin-left",n4x);

            return false;
        }


    }
}









//p1001

function p1001movemouse(e){
    if (isdrag){
        var n = p1001tx - p1001x + e.targetTouches[0].pageX ;
        console.log('e.targetTouches[0].pageX'+e.targetTouches[0].pageX);
        var x = pageWidth*0.26;
        if(n<=x){
            $("#p1001").css("margin-left",n);
            p10status1=false;
        }else if(n>x){

            p10status1=true;
        }
        if (p10status2 & p10status1){
           setTimeout("addClass('#p11bg'),addClass('#p1101'),rmClass('#p10bg'),coverPage11()",800)
           // console.log('p10status2 & p10status1 is OK ');

        }


    }



}


function p1001selectmouse(e){
    isdrag = true;
    //p1001tx = $('#p1001').position().left;
    //parseInt(document.getElementById("p1001").style.left);
    p1001tx=parseInt(document.getElementById("p1001").offsetLeft,10)
    console.log('p1001tx'+p1001tx);
    p1001x = e.targetTouches[0].pageX;
    //ty = parseInt(document.getElementById("p1001").style.top+0);
    //y = e.touches[0].pageY;

    return false;

}


//p1002

function p1002movemouse(e){
    if (isdrag){

        var n =$(window).width()-  p1002tx + p1002x - e.targetTouches[0].pageX -$("#p1002").width() ;
        //var n = ty + e.touches[0].pageY - y;
        //console.log();
        var y = pageWidth*0.15;

        if(n<=y){
            $("#p1002").css("margin-right",n);
            p10status2=false;
        }else if(n>y){
            p10status2=true;
        }

        if (p10status2 & p10status1){
            setTimeout("addClass('#p11bg'),addClass('#p1101'),rmClass('#p10bg'),coverPage11()",800)
          //  console.log('p10status2 & p10status1 is OK ');

        }

    }



}


function p1002selectmouse(e){
    isdrag = true;
    //p1001tx = $('#p1001').position().left;
    //parseInt(document.getElementById("p1001").style.left);
    p1002tx=parseInt(document.getElementById("p1002").offsetLeft,10)
    console.log('p1002tx'+p1002tx);
    p1002x = e.targetTouches[0].pageX;
    //ty = parseInt(document.getElementById("p1001").style.top+0);
    //y = e.touches[0].pageY;

    return false;
}


//p1002

function p08guomovemouse(e){
    if (isdrag){

        var n =   p08guotx -   p08guox + e.touches[0].pageX   ;

        var l = p08guoty -   p08guoy + e.touches[0].pageY  ;

        console.log(n);
        console.log(l);

        $("#p08guo").css("margin-left",n);
        $("#p08guo").css("margin-top",l);

        //if(n<=20){
        //    $("#p08guo").css("margin-left",n);
        //
        //}else if(n>20){
        //
        //}
        if(n>50 & l<285){
            rmClass('#p08big');
            addClass('#p08small');
            addClass('#p08tx');
            setTimeout("addClass('#p09bg'),addClass('#p0901'),rmClass('#p08bg'),coverPage91()",2000);
        }


    }



}


function p08guoselectmouse(e){
    isdrag = true;

    p08guotx=parseInt(document.getElementById("p08guo").offsetLeft,10);
    p08guoty=parseInt(document.getElementById("p08guo").offsetTop,10);
    p08guox = e.touches[0].pageX;
    p08guoy = e.touches[0].pageY;

    console.log('p08guotx'+p08guotx);
    console.log('p08guoty'+p08guoty);
    return false;


}



