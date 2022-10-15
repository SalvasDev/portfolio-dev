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




