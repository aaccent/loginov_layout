import anime from '../libs/animatejs/anime.es.js';
import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const roundLogEl = document.querySelector('.round-log');

    if(!roundLogEl || !document.getElementById('number-container')) return;
    
    var animation = anime({
        targets: roundLogEl,
        innerHTML: [0, 20],
        easing: 'linear',
        delay: 500,
        duration: 1000,
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