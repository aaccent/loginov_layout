import Swiper from "../libs/swiper/swiper-bundle.min.mjs";

export default () => {
    const gallerySwiperBoxes = document.querySelectorAll('.js-gallery-swiper');

    if(gallerySwiperBoxes.length < 1) return;

    Array.from(gallerySwiperBoxes).forEach( gallerySwiperBox => {
        const gallerySwiper = new Swiper(gallerySwiperBox, {
            slidesPerView: 1.08,
            spaceBetween: 10,

            navigation: {
                prevEl: gallerySwiperBox.querySelector('.gallery__control-prev'),
                nextEl: gallerySwiperBox.querySelector('.gallery__control-next'),
            },

            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },

            breakpoints: {
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    loop: true,
                },
            }
        })
    })
}