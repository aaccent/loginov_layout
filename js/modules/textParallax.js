import simpleParallax from '../libs/simplePARALLAX/simpleParallax.js';

export default () => {
    var text = document.querySelector('.hero__name-slogan');
    new simpleParallax(text, {
        // orientation: 'up',
        overflow: true,
        maxTransition: 99,
        scale: 2,
    });
}