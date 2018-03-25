console.log('Loaded!');

//to change the text
var element=document.getElementById('main-text');
element.innerHTML='new value';

//to move image

var img = document.getElementById('potter');
img.onclick=function(){
    img.style.marginLeft='100px';
};
