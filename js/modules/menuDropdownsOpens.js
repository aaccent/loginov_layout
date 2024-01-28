export default () => {
    const dropDownBtns = document.querySelectorAll('.js-menu-dropdown-button')

    if(dropDownBtns.length < 1) return;

    Array.from(dropDownBtns).forEach(btn => {
        btn.addEventListener('click', () => {
            Array.from(dropDownBtns).forEach( b => {
                b.classList.remove('menu-dropdown__button--active');
            })

            btn.classList.toggle('menu-dropdown__button--active');
        })
    })
}