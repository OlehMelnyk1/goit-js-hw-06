const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', onOutFocusSymbol);

function onOutFocusSymbol(event) {
    let symbolLength = event.currentTarget.value.length;
    event.currentTarget.dataset.length = 6;
    const numberN = event.currentTarget.dataset.length;
    if (symbolLength == numberN) {
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    } else {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
}     
}