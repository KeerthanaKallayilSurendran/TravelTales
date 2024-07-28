const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        },
    },
});
