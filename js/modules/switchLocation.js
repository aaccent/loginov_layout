export default () => {
    const modal = document.querySelector('.modal__container[data-target="modal-number"]');
    const inputs = document.querySelectorAll('.modal__container[data-target="modal-number"] .modal__checkboxes > .radio > input[type="radio"]');
    const button = document.querySelector('.contact.contact--button');

    if(!button && !modal) return;

    Array.from(inputs).forEach( input => {
        input.addEventListener('input', (e) => {
            let phone = e.target.closest('.radio').querySelector('.radio__number').textContent;
            let claearPhone = Array.from(phone.trim(' ').replace(/\s/g, '')).filter(letter => {
                return (Number.isNaN(+letter) == false); 
            });
            claearPhone = claearPhone.slice(1);
            claearPhone.unshift('+7');

            button.querySelector('.contact__phone').textContent = 
                e.target.closest('.radio').querySelector('.radio__number').textContent;
            button.querySelector('.contact__phone').href = 
                `tel:${claearPhone.join('')}`;
            button.querySelector('.contact__city').textContent =     
                e.target.closest('.radio').querySelector('.radio__title').textContent;
            
            button.classList.toggle('contact--one');
            button.classList.toggle('contact--two');

            modal.querySelector('.modal-close').click();
        })  
    })
}