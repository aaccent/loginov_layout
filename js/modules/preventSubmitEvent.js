export default () => {
    const submitedForms = document.querySelectorAll('form[data-need-validation]');
    if(submitedForms.length < 1) return;

    submitedForms.forEach( form => {
        form.onsubmit = function(e) {
            e.preventDefault();

            let button = document.createElement("button");
            button.classList.add('visually-hidden');
            button.dataset.path = "modal-success";
            document.body.appendChild(button);
            
            button.click();
            button.remove();
        }
    });
}