import anime from '../libs/animatejs/anime.es.js';

export default () => {
    anime({
        targets: '.stages__tip',
        keyframes: [
            {backgroundColor: "#FFFF20"},
            {backgroundColor: "#E8F7F8"},
        ],
        delay: anime.stagger(1200),
        easing: 'easeInOutQuad',
        duration: 1600,
        loop: true
    });
}