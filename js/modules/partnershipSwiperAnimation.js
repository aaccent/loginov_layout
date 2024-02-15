import Swiper from "../libs/swiper/swiper-bundle.min.mjs";
import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const mainBox = document.querySelector('.partnership__sliders-wrapper');

    if(!mainBox) return;
    let trigger = document.getElementById('js-partnership-trigger');
    let firstSliderBox = mainBox.querySelector('.js-partnership-swiper-one');
    const secondSliderBox = mainBox.querySelector('.js-partnership-swiper-two');
    const mediaQuery = window.matchMedia('(min-width: 992px)');

    initBehavior();

    function setAnimationForSlider(
        listSelector = '.partnership__swiper-wrapper--one', 
        transform = '60%', 
        triggerSelector = '#js-partnership-trigger'
    ) {
        gsap.from(listSelector, { transform: 'translate3d(0, 0, 0)' })

        gsap.timeline({
            scrollTrigger:{
                    trigger: triggerSelector,
                    end: "bottom top",
                    scrub: 3.5
                }
            })
            .to(listSelector, {
                transform: `translate3d(0, ${transform}, 0)`, 
                duration: 1.5, 
                ease: "power1.out",
                stagger: 1,
            })
    }

    function initBehavior() {
        if (!mediaQuery.matches && firstSliderBox) {
            let firstSwiper = new Swiper('.js-partnership-swiper-one', {
                spaceBetween: 10,
                slidesPerView: 'auto',
                speed: 1000,
                loop: true,
                observer: true,
                observeParents:true,
                init: false,
    
                autoplay: {
                    delay: 2000,
                },
            });
        
            firstSwiper.init();
        }
    
        if( trigger && firstSliderBox && mediaQuery.matches ) {
            setAnimationForSlider();
        }
    
        if( trigger && secondSliderBox && mediaQuery.matches ) {
            setAnimationForSlider('.partnership__swiper-wrapper--two', '-60%');
        }
    }
};
