export default () => {
    const modal = document.querySelector('.modal__container[data-target="modal-number"]');
    const inputs = document.querySelectorAll('.modal__checkboxes > .radio > input[type="radio"]');
    const button = document.querySelector('.contact.contact--button');

    if(!button && !modal) return;

    Array.from(inputs).forEach( input => {
        input.addEventListener('input', (e) => {
            button.querySelector('.contact__phone').textContent = 
                e.target.closest('.radio').querySelector('.radio__number').textContent;
            button.querySelector('.contact__city').textContent =     
                e.target.closest('.radio').querySelector('.radio__title').textContent;
            
            button.classList.toggle('contact--one');
            button.classList.toggle('contact--two');


            setTimeout(() => {
                modal.querySelector('.modal-close').click();
            }, 600);
        })  
    })
}