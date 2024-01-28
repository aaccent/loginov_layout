export default () => {
    const dropDownLink = document.querySelector('.js-header-dropdown');

    if(!dropDownLink) return;

    dropDownLink.addEventListener('mouseenter', (e) => {
        document.body.classList.add('dropdown-is-open');

        

        window.addEventListener('click', (e) => {
            if(!e.target.closest('.page-header__dropdown')) {
                document.body.classList.remove('dropdown-is-open');
            }
        })
    })
}