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




