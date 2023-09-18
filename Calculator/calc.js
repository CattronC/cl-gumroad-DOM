// find DOMs

const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');



// make funcs
function calculateProductCost(){
    const price = priceInput.value ;
    const quantity = quantityInput.value;
    const cost = price * quantity;
    console.log(cost);
    total.innerText = cost;
}


// add event listeners
priceInput.addEventListener('input', calculateProductCost);