import gsap from "../libs/gsap/src/all.js";
import { ScrollTrigger } from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const footer = document.querySelector('.page-footer');

    if(!footer) return;

    let sT = ScrollTrigger.create({
        trigger: '#js-footer-trigger',
        start: "top bottom",
        onEnter: () => {
            footer.classList.add('page-footer--animate')
        },
        // onLeaveBack: () => {
        //     footer.classList.remove('page-footer--animate')
        // },
    });
}