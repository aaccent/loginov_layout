import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const header = document.querySelector('.page-header:not(._article)');

    if(!header) return;

    let strHeader = ScrollTrigger.create({
        trigger : document.querySelector('.wrapper'),
        start: "0", 
        onUpdate: (self) => {
            if(self.direction < 0) {
                header.classList.add('page-header--fixed');
            } else {
                header.classList.remove('page-header--fixed');
            }
        },
        onLeaveBack: () => {
            header.classList.remove('page-header--fixed');
        }
    });
}