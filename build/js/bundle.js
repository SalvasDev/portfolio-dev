document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
    fixNavigation();
});

function fixNavigation() {

    const burger = document.querySelector('.btn-burg')

    // Registre the Intersection Observer
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            burger.classList.add('visible');
        } else {
            burger.classList.remove('visible')
        }
    });

    // Item to observe
    observer.observe(document.querySelector('.main'));

}


function scrollNav() {
    const links = document.querySelectorAll('.menu a');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value)

            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}






//  Get id burger menu
document.querySelector('.btn-burg').addEventListener('click', animateBars);

var line1__bars = document.querySelector('.line1__btn-burg');
var line2__bars = document.querySelector('.line2__btn-burg');
var line3__bars = document.querySelector('.line3__btn-burg');


function animateBars() {
    line1__bars.classList.toggle('activeline1__btn-burg');
    line2__bars.classList.toggle('activeline2__btn-burg');
    line3__bars.classList.toggle('activeline3__btn-burg');
}



const contMenu = document.getElementById('container-menu');
const showMenu = document.getElementById('showMenuMobile');

var bodyControl = document.querySelector('body');


contMenu.onclick = showingMenu;

function showingMenu(e) {
    e.preventDefault();
    contMenu.classList.toggle('active__container');
    showMenu.classList.toggle('active__menu');
    bodyControl.classList.toggle('block__scroll');
}





