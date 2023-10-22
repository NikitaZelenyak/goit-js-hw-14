const inputEl = document.querySelector('#name-input');
const changingNameEl = document.querySelector('#name-output');



inputEl.addEventListener('input',onInputChange);

function onInputChange(event) {

    changingNameEl.textContent=event.currentTarget.value

    }
