const menu = document.getElementById('menu-container');
const slider = document.getElementById('slider');
var a = document.getElementsByClassName('item-a');
const span = document.querySelectorAll('.menu-item span');
setInterval(() => slider.classList.toggle('nuevo'), 3000);

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        menu.classList.add('fuera');
        for (let i=0; i<a.length;i++) {
            a[i].style.color="black";
            span[i].style.backgroundColor="black";
        }
    }
    else {
        menu.classList.remove('fuera');
        for (let i=0; i<a.length;i++) {
            a[i].style.color="white";
            span[i].style.backgroundColor="white";
        }
    }
}


