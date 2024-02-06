import anime from '../libs/animatejs/anime.es.js';
import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const roundLogEl = document.querySelector('.round-log');

    if(!roundLogEl || !document.getElementById('number-container')) return;

    // get current year value and calculation difference:
    const diff = (+new Date().getFullYear()) - 2004;

    var animation = anime({
        targets: roundLogEl,
        innerHTML: [0, diff],
        easing: 'linear',
        delay: 200,
        duration: 1100,
        round: 1 // Will round the animated value to 1 decimal
    });

    var s = ScrollTrigger.create({
        trigger: "#number-container",
        once: true,
        onEnter: function(self) {
            animation.play();
        },
    });
}