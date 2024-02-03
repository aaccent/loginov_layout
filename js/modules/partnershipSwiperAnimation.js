import Swiper from "../libs/swiper/swiper-bundle.min.mjs";
import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const firstSwiperBox = document.getElementById("js-partnership-swiper-one");
    const secondSwiperBox = document.getElementById("js-partnership-swiper-two");
    const mediaQuery = window.matchMedia('(min-width: 1199px)');


    if (firstSwiperBox) {
        var firstSwiper = new Swiper('.js-partnership-swiper-one', {
            spaceBetween: 10,
            slidesPerView: 'auto',
            allowTouchMove: false,
            speed: 800,
            loop: true,
            init: false,
            observer: true,
            observeParents:true,

            breakpoints: {
                992: {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    freeMode: true,
                    preventInteractionOnTransition: true,
                }
            }
        });
    
        firstSwiper.init();
        firstSwiper.slideNext();
    }

    if (secondSwiperBox) {
        var secondSwiper = new Swiper(".js-partnership-swiper-two", {
            direction: "vertical",
            spaceBetween: 20,
            slidesPerView: "auto",
            loop: true,
            speed: 800,
            init: false,
            preventInteractionOnTransition: true,
            freeMode: true,
            observer: true,
            observeParents:true,
        });

        secondSwiper.init();
    }

    if(document.getElementById('js-partnership-trigger')) {
        var s = ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: function(self) {
                if((self.direction > 0)) {
                    firstSwiper.slideNext(600);
                    secondSwiper.slidePrev(600);
                } else if ((self.direction < 0)) {
                    firstSwiper.slidePrev(600);
                    secondSwiper.slideNext(600);
                }
            },
        });
    }
};
