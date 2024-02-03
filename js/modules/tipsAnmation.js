import anime from '../libs/animatejs/anime.es.js';

export default () => {
    anime({
        targets: '.stages__tip',
        keyframes: [
            {backgroundColor: "#FFFF20"},
            {backgroundColor: "#E8F7F8"},
        ],
        delay: anime.stagger(800),
        easing: 'easeInOutQuad',
        duration: 1300,
        loop: true
    });
}