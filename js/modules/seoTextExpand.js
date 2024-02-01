export default () => {
    const seoBtn = document.querySelector('.js-seo-expand');

    if(!seoBtn) return;

    seoBtn.addEventListener('click', () => {
        seoBtn.closest('.seo-section__body').classList.remove('seo-section__body--collapsed')
    })
}