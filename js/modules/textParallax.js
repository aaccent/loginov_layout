import simpleParallax from '../libs/simplePARALLAX/simpleParallax.js';

export default () => {
    var text = document.querySelector('.hero__name-slogan');
    new simpleParallax(text, {
        // orientation: 'down',
        overflow: true,
        maxTransition: 99,
        scale: 1.5,
    });
}