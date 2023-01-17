// Hamburger Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('-translate-y-full');
    mobileMenu.classList.toggle('opacity-50');
})

// Owl carousel
$('.owl-carousel').owlCarousel({
    autoWidth: false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    margin: 20,
    nav: false,
    dots: false,
    slideBy: 1,
    center: false,
    responsive: {
        0:{
            items: 3
        },
        400: {
            items: 3
        },
        600:{
            items: 4
        },
        1000:{
            items: 6
        }
    }
})