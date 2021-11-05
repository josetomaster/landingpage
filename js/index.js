let menuIcon = document.getElementById('menu-icon');
let navElement = document.getElementById('nav');

menuIcon.addEventListener('click',() => {
    navElement.classList.toggle('show-nav');
});