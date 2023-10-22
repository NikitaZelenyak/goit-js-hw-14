
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;



const increment = () => valueEl.textContent = counterValue += 1;
const decrement = () => valueEl.textContent = counterValue -= 1;


decrementBtnEl.addEventListener('click',decrement );
incrementBtnEl.addEventListener('click', increment);   


