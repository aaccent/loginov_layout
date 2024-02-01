export default () => {
    const selectBox = document.querySelectorAll('.select');
  
    if (selectBox.length < 1) {
      return;
    }
  
    selectBox.forEach( select => {

        select.querySelector('.select__current').addEventListener('click', () => {
    
            select.querySelector('.select__current').classList.toggle('active');

            if (window.matchMedia("(any-hover: hover)").matches) {
                selectBox.forEach(select => {
                    select.querySelectorAll('input[type="radio"]').forEach(radioInput => {
                        findLableForControl(radioInput).classList.remove('active');
                        if(radioInput.checked) {
                            findLableForControl(radioInput).classList.add('active');
                        }
                    })
                })
            }

            if(select.querySelector('.select__current').classList.contains('active')) {
                window.addEventListener('click', (e) => {
                    if(!e.target.closest('.select')) {
                        select.querySelector('.select__current').classList.remove('active');
                    }
                })
            }
        })

    })
}
  
function findLableForControl(el) {
    let idVal = el.id;
    let labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
    if (labels[i].htmlFor == idVal)
            return labels[i];
    }
}