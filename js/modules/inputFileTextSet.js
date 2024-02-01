export default () => {
    const fileInputs = document.querySelectorAll('.file');

    if(fileInputs.length < 0) return;

    Array.from(fileInputs).forEach( fileInput => {
        fileInput.querySelector('input').onchange = function() {
            const fileName = this.files[0]?.name;
            const span = fileInput.querySelector("i");
            fileName ? (span.innerText = fileName) : (span.innerText = "Прикрепить файл");
            console.log(fileName);

            fileInput.classList.add('file--added');
        };
    })
}