const altura = document.body.scrollHeight - window.innerHeight;
const menu = document.getElementById('menu-container');
const slider = document.getElementById('slider')

if (window.pageYOffset > 10) {
    //menu.style.backgroundColor = '#fff';
}

setInterval(()=>slider.classList.toggle('nuevo'),2000);


