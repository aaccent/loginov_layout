import Swiper from "../libs/swiper/swiper-bundle.min.mjs";
import Controller from "../libs/swiper/modules/controller.min.mjs";
import Pagination from "../libs/swiper/modules/pagination.min.mjs"
import EffectFade from "../libs/swiper/modules/effect-fade.min.mjs";

export default () => {
    const textsSwiperBox = document.getElementById("hero-text-swiper");
    const imagesSwiperBox = document.getElementById("hero-image-swiper");

    if (!textsSwiperBox && !imagesSwiperBox) return;

    const imagesSwiper = new Swiper(imagesSwiperBox, {
            modules: [Controller, Pagination, EffectFade],

            effect: 'fade',
            fadeEffect: { 
                crossFade: true 
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
                },
            },

            breakpoints: {
                768: {
                    allowTouchMove: false,
                }
            }
        });

    const textsSwiper = new Swiper(textsSwiperBox, {
        modules: [Controller, Pagination, EffectFade],
        effect: 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        on: {
            init: function () {
            let preBtns = textsSwiperBox.querySelectorAll('.hero-slide__control-prev')
            let nextBtns = textsSwiperBox.querySelectorAll('.hero-slide__control-next')

            Array.from(preBtns).forEach( btn => {
                btn.addEventListener('click', () => {
                    textsSwiper.slidePrev(600);
                })
            })          

            Array.from(nextBtns).forEach( btn => {
                btn.addEventListener('click', () => {
                    textsSwiper.slideNext(600);
                })
            })
            
            },
        },

        breakpoints: {
            768: {
                allowTouchMove: false,
            }
        }
    });

    textsSwiper.controller.control = imagesSwiper;
    imagesSwiper.controller.control = textsSwiper;
};
