const $menu = document.querySelector('.menu');

const $btnOpen = document.querySelector('.btnMenu-open');

const $btnClose = document.querySelector('.btnMenu-close');

$btnOpen.addEventListener('click', function() {
    $menu.classList.add('menu-open');
    $btnOpen.classList.add('btnMenu-open-x');
    $btnClose.classList.add('btnMenu-close-x');
    $btnClose.classList.remove('btnMenu-close');
});



$btnClose.addEventListener('click', function() {
    const $btnCloseX = document.querySelector('.btnMenu-close-x');
    $btnCloseX.classList.add('btnMenu-close');
    $menu.classList.remove('menu-open');
    $btnCloseX.classList.remove('btnMenu-close-x');
    $btnOpen.classList.remove('btnMenu-open-x');
});
