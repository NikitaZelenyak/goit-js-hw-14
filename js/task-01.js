const listEl = document.querySelector('#categories');

const itemsEl = listEl.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);




const arrTitels = [...itemsEl].map(element => element.querySelector('h2'));
const arrItem = [...itemsEl].map(element => element.querySelectorAll('li'));

console.log(arrTitels[0].textContent)
console.log(`Elements: ${arrItem[0].length}`)


console.log(arrTitels[1].textContent)
console.log(`Elements: ${arrItem[1].length}`)


console.log(arrTitels[2].textContent)
console.log(`Elements: ${arrItem[2].length}`)


// ////////////////////////////////////////////////////////

// const firstTitel = itemsEl[0].querySelector('h2');
// console.log(firstTitel.textContent);
// const listLiEl = itemsEl[0].querySelectorAll('li');
// console.log(`Elements: ${listLiEl.length}`)

// const secondTitel = itemsEl[1].querySelector('h2');
// console.log(secondTitel.textContent);
// const secondlistLiEl = itemsEl[1].querySelectorAll('li');
// console.log(`Elements: ${secondlistLiEl.length}`)

// const thirdTitel = itemsEl[2].querySelector('h2');
// console.log(thirdTitel.textContent);
// const thirdlistLiEl = itemsEl[2].querySelectorAll('li');
// console.log(`Elements: ${thirdlistLiEl.length}`)





// itemsEl.forEach(element => {
//     const titelEl = element.querySelector('h2');
//     console.log(`Category: ${titelEl.textContent}`)
    
// });
// itemsEl.forEach(element => {
//     const allListItemEls = element.querySelectorAll('li');
//     console.log(`Elements: ${allListItemEls.length}`);
    
// });
