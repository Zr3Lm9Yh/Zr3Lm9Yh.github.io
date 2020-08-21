let man=document.getElementById('car');
man.style.position="absolute";
man.style.left="0px";
man.style.top="0px";
let hua=document.getElementById('hua');

document.onkeydown=function (e) {
    switch (e.which) {
        case 40:man.style.top=parseInt(man.style.top)+10+"px";
        break;
        case 38:man.style.top=parseInt(man.style.top)-10+"px";
        break;
        case 37:man.style.left=parseInt(man.style.left)-10+"px";
            break;
        case 39:man.style.left=parseInt(man.style.left)+10+"px";
            break;

    }
    if (parseInt(man.style.left)>=770){
        hua.style.display="block";
    }
};
