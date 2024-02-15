export default () => {
    const modalsInputs = document.querySelectorAll('.js-modal-selects .radio--button, .js-modal-selects .radio--button');

    if( modalsInputs < 1 ) return;

    Array.from(modalsInputs).forEach( input => {
        input.addEventListener('input', (e) => {
            let container = e.target.closest('.modal__container');
            let text = input.querySelector('.radio__title').textContent;
            let path = container.dataset.target;
            let button = document.querySelector(`[data-path=${path}]`);
            
            button.querySelector('.select-button__value').textContent = text;
            container.querySelector('.modal-close').click();
        })
    })
}