const inputEl = document.querySelector('#name-input')
const labelEl = document.querySelector('#name-output')

console.log( labelEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    labelEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        labelEl.textContent = 'Anonymous';
    };
}
