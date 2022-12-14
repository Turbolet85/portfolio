
//menu activation
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
                menu.classList.remove('active');
    }
});

//tools auto percentage count

const counters = document.querySelectorAll('.tools__amountitem-perc');
const lines = document.querySelectorAll('.tools__amountitem-maincolor');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});