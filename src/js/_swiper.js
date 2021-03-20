import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper(`.js-swiper`, {

    slidesPerView: 1,
    spaceBetween: 10,
    // slidesPerGroup: 2,


    loopFillGroupWithBlank: true,
    grabCursor: true,
    preventClicks: true,
    speed: 600,



    // pagination: {
    //     el: `.js-pagination`,
    //     type: `bullets`,
    //     clickable: true,
    // },


    navigation: {
        nextEl: `.js-btnNext`,
        prevEl: `.js-btnPrev`,
    },

    // mousewheel: true,
    keyboard: true,

    breakpoints: {
        // 320: {
        //     slidesPerView: 1,
        //     // slidesPerGroup: 1,
        //     // spaceBetween: 90,
        // },

        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },


    }

})


const swiper2 = new Swiper(`.js-slide`, {

    slidesPerView: 1,

    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    // slidesPerGroup: 2,


    // loopFillGroupWithBlank: true,
    grabCursor: true,
    preventClicks: true,

    speed: 500,


    navigation: {
        nextEl: `.js-arrowNext`,
        prevEl: `.js-arrowPrev`,
    },

    keyboard: true,

    pagination: {
        el: `.js-pagination`,
        type: `bullets`,
        clickable: true,
    },


    breakpoints: {

        769: {
            slidesPerView: 3,

        }

    }

})



