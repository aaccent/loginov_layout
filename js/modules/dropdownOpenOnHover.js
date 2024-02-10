export default () => {
    const dropDownLink = document.querySelector('.js-header-dropdown');
    const header = document.querySelector('.page-header') 

    if(!dropDownLink || !header) return;

    dropDownLink.addEventListener('mouseover', (e) => {
        e.preventDefault();

        document.body.classList.add('dropdown-is-open');

        window.addEventListener('click', (e) => {
            if(!e.target.closest('.page-header__dropdown')) {
                document.body.classList.remove('dropdown-is-open');
            }
        })

        window.addEventListener('scroll', (e) => {
            document.body.classList.remove('dropdown-is-open');
        })

        header.addEventListener('mouseleave', (e) => {
            document.body.classList.remove('dropdown-is-open');
        })
    })
}