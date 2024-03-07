import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const animationWrappers = document.querySelectorAll('.js-h-animation-wrapper');

    if(animationWrappers.length < 1) return;

    Array.from(animationWrappers).forEach( wrapper => {
        gsap.fromTo(
            wrapper.querySelector('.js-h-animation-target'),
            { 
                css: {
                    transform: 'translate(0,50%)',
                    opacity: '0',
                },
            },
            {
                css: {
                    opacity: '1', 
                    transform: 'translate(0,0)',
                },
                ease: "power1.in",
                duration: 5.2,
                stagger: 1,
                scrollTrigger:{
                    trigger: wrapper,
                    start: "top center+=15%",
                    end: "top center+=15%", 
                    once: true,
                    scrub: 1.5,
                }
            }
        );
    })
}