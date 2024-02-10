import Swiper from "../libs/swiper/swiper-bundle.min.mjs";
import Navigation from "../libs/swiper/modules/navigation.min.mjs";

export default () => {
    const revSwipers = document.querySelectorAll('.js-review-swiper');

    revSwipers.forEach(revSwiperBox => {
        const revSwiper = new Swiper(revSwiperBox, {
            slidesPerView: 1.06,
            spaceBetween: 10,
            speed: 900,
            loop: true,

            navigation: {
                prevEl: revSwiperBox.querySelector('.reviews__control-prev'),
                nextEl: revSwiperBox.querySelector('.reviews__control-next'),
            },

            breakpoints: {
                992: {
                    slidesPerView: 1,
                }
            }
        })
    })
}