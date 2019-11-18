const menu = document.getElementById('menu-container');
const slider = document.getElementById('slider');
var a = document.getElementsByClassName('item-a');
const titulo = document.getElementById('titulo');
const menu2 = document.getElementById('menu');
const ex = document.getElementById('x');
ex.addEventListener('click',clickx);

const burguer = document.getElementById('burguer-menu');
burguer.addEventListener('click',click);

var n=1;

function click () {
    n=0;
    menu2.style.right="0";
    for (let i=0; i<a.length;i++) {
        a[i].style.color="black";
    }
}
function clickx() {
    n=1;
    menu2.style.right="-100%";
    for (let i=0; i<a.length;i++) {
        a[i].style.color="white";
    }
}
const span = document.querySelectorAll('.menu-item span');

setInterval(() => slider.classList.toggle('nuevo'), 3000);

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        menu.classList.add('fuera');
        titulo.classList.add('titulo-on');
        if(n!=0) {
            for (let i=0; i<a.length;i++) {
                a[i].style.color="black";
                span[i].style.backgroundColor="black";
            }
        }
    }
    else {
        menu.classList.remove('fuera');
        titulo.classList.remove('titulo-on');
        if(n!=0) {
            for (let i=0; i<a.length;i++) {
                a[i].style.color="white";
                span[i].style.backgroundColor="white";
            }
        }
    }
}

$(document).foundation()

const galeria = document.querySelector('#galeria');
const galeriaOn = document.querySelector('#galeria-on');
galeriaOn.addEventListener('click',()=> {
    galeria.style.transform="translateX(0)";
});

const galeriaOff = document.querySelector('#galeria-off');
galeriaOff.addEventListener('click',()=> {
    galeria.style.transform="translateX(100%)";
});




var gestos = new Hammer(galeria);
gestos.on('swiperight', function(ev) {
    galeria.style.transform = "translateX(100%)";
});

const gale = document.querySelector('#gale');
var gestos2 = new Hammer(gale);
gestos2.on('swipeleft', ev => galeria.style.transform="translateX(0)");