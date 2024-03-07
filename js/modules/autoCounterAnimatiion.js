import anime from '../libs/animatejs/anime.es.js';
import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const roundLogY = document.querySelector('.round-log-year');
    const roundLogC = document.querySelector('.round-log-clients');

    if(!roundLogY || !roundLogC || !document.getElementById('number-container')) return;

    // get current year value and calculation difference:
    const diff = (+new Date().getFullYear()) - 2004;
    // get quantity of clients from HTML:
    const quantity = roundLogC.dataset.clients;


    let yaerAnimation = anime({
        targets: roundLogY,
        innerHTML: [0, diff],
        easing: 'linear',
        delay: 200,
        duration: 1000,
        round: 1 // Will round the animated value to 1 decimal
    });

    let clientsAnimation = anime({
        targets: roundLogC,
        innerHTML: [0, quantity],
        easing: 'linear',
        delay: 200,
        duration: 1000,
        round: 1 // Will round the animated value to 1 decimal
    });

    let s = ScrollTrigger.create({
        trigger: "#number-container",
        once: true,
        onEnter: function(self) {
            yaerAnimation.play();
            clientsAnimation.play();
        },
    });
}