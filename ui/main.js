console.log('Loaded!');

//to change the text
var element=document.getElementById('main-text');
element.innerHTML='new value';

//to move image

var img = document.getElementById('potter');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    potter.style.marginLeft=marginLeft +'px';
}
potter.onclick=function(){
    var Interval=setInterval(moveRight,100);
};
