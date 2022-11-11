'use strict';

const btnNavbar = document.getElementById('btnNavbar');
const responsiveMenu = document.getElementById('responsiveMenu');

btnNavbar.addEventListener('click', () => {
    let icon = btnNavbar.firstElementChild;
    responsiveMenu.classList.toggle('show');
    if (responsiveMenu.classList.contains('show')) {
        icon.setAttribute('src', 'imagenes/close.png');
    } else {
        icon.setAttribute('src', 'imagenes/menu.png');
    }
});