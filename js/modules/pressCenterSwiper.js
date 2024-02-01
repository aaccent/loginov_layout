import Swiper from "../libs/swiper/swiper-bundle.min.mjs";

export default () => {
    const pressSwiperBoxes = document.querySelectorAll('.js-press-swiper');

    if(pressSwiperBoxes.length < 1) return;

    Array.from(pressSwiperBoxes).forEach( pressSwiperBox => {
        let pressSwiper = new Swiper(pressSwiperBox, {
            slidesPerView: 1.08,
            spaceBetween: 20,

            navigation: {
                prevEl: pressSwiperBox.querySelector('.press-center__control-prev'),
                nextEl: pressSwiperBox.querySelector('.press-center__control-next'),
            },

            breakpoints: {
                768: {
                    slidesPerView: 1.4,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 45,
                },
            }
        }) 
    });
}