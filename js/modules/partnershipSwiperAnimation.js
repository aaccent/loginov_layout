import Swiper from "../libs/swiper/swiper-bundle.min.mjs";
import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const firstSwiperBox = document.getElementById("js-partnership-swiper-one");
    const secondSwiperBox = document.getElementById("js-partnership-swiper-two");

    if (firstSwiperBox) {
        var firstSwiper = new Swiper('.js-partnership-swiper-one', {
            direction: 'vertical',
            spaceBetween: 20,
            slidesPerView: 'auto',
            speed: 800,
            loop: true,
            init: false,
            preventInteractionOnTransition: true,
            freeMode: true,
        });
    
    
        firstSwiper.init();
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
        });

        secondSwiper.init();
    }

    let s = ScrollTrigger.create({
        trigger: "#js-partnership-trigger",
        end: "max",
        onUpdate: function(self) {
            if((self.direction > 0)) {
                firstSwiper.slideNext(800);
                secondSwiper.slidePrev(800);
            } else if ((self.direction < 0)) {
                firstSwiper.slidePrev(800);
                secondSwiper.slideNext(800);
            }
        },
    });


    if (ScrollTrigger.isScrolling()) {
        console.log('scrolling');
    }

};
