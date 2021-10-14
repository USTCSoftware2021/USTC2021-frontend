document.getElementById("btn1").onclick=function(){
    document.getElementById("page1").style.display= "none";
    document.getElementById("logo1").style.display= "none";
    document.getElementById("page2").style.display= "inline";
    document.getElementById("Range").style.display= "inline";
    document.getElementById("game").style.display= "inline";
};


var n=0;
var v1,v2,v3;
function change() {
    var v=0;
    var a = [  
        [4,7,0],
        [3,4,0],
        [5,8,0],
        [9,3,1],
        [6,7,1],
        [7,5,1]
    ];
    var w1 = document.getElementById('range1').value ;
    var w2 = document.getElementById('range2').value ;
    var w3= document.getElementById('range3').value ;
    v1=w1;
    v2=w2;
    v3=w3;
    for(var i=0;i<6;i++){
        var j=0;
        if((w1*a[i][j]+w2*a[i][j+1]>w3)==a[i][j+2]){
            v++;
        }
    }
    if(v==6){
        document.getElementById("btn22").disabled=false;
        document.getElementById("btn22").classList.remove('inactive');
        n=v;
    }
    else{
        document.getElementById("btn22").disabled=true;
        document.getElementById("btn22").classList.add('inactive');
    }
    document.getElementById('value1').innerHTML = w1;
    document.getElementById('value2').innerHTML = w2;
    document.getElementById('value3').innerHTML = w3;
}

document.getElementById("btn2").onclick=function(){
    document.getElementById("pic2").style.display= "none";
    document.getElementById("pic3").style.display= "none";
    document.getElementById("pic4").style.display= "none";
    document.getElementById("logo1").style.display= "inline";
    document.getElementById("btn2").style.display= "none";
    document.getElementById("page3").style.display= "inline";
    document.getElementById("pic7").style.display= "none";
    if(v1*8+v2*2>v3){
        document.getElementById("img20").style.display= "none";
    }
};