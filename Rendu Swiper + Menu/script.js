document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    function toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('show');
    }
});