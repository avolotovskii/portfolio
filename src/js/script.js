const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__exit')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__scale-percent'),
    lines = document.querySelectorAll('.skills__scale-progress');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});