export default () => {
    const navButtons = document.querySelectorAll('.js-dropdown-button[data-link]');
    const navLists = document.querySelectorAll('.header-dropdown__list[data-list]');

    if(navButtons.length < 1) return;

    Array.from(navButtons).forEach( btn => {
        btn.addEventListener('mouseenter', () => {
            let dataLink = btn.dataset.link;

            Array.from(navButtons).forEach( b => {
                b.classList.remove('header-dropdown__button--active');
            })

            btn.classList.add('header-dropdown__button--active');

            Array.from(navLists).forEach(list => {
                list.classList.add('header-dropdown__list--hidden');
            })

            Array.from(navLists).forEach(list => {
                if(list.dataset.list === dataLink) {
                    list.classList.remove('header-dropdown__list--hidden');
                }
            })
        })
    })
}