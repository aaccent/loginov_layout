export default () => {
    const hamburger = document.querySelector('.js-open-mobile-menu');
    if(!hamburger) return;
    hamburger.addEventListener('click', () => {
        document.body.classList.toggle('menu-is-open');
    })
}