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





// import './app.js';


//  get id burger menu
document.querySelector('.btn-burg').addEventListener('click', animateBars);


const contMenu = document.getElementById('container-menu');
const closeIcon = document.getElementById('close');
const showMenu = document.getElementById('showMenuMobile');
const btnBurger = document.getElementById('btn-burg');

contMenu.onclick = showingMenu;
closeIcon.onclick = hide;

function showingMenu(e) {
    e.preventDefault();
    contMenu.style.padding = '26px 52px 100vw 25vw';
    showMenu.style.display = 'flex';
    btnBurger.style.display = 'none';
    // closeIcon.style.display = 'block';
}

function hide(e) {
    e.preventDefault();
    contMenu.style.padding = '0';
    closeIcon.style.display = 'none';
    showMenu.style.display = 'none';
    // btnBurger.style.display = 'flex'
    // fixNavigation();

}




