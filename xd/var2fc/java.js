

let cartQuantity = 0;
const updatefield = document.querySelector('.js-outputfield');
updatefield.innerHTML = `Cart Quantity: ${cartQuantity}`;
function updateCartQuantity(change) {
 if (cartQuantity + change > 10) {
    updatefield.innerHTML = 'The cart is full!'
    return;
  }
  if (cartQuantity + change < 0) {
    updatefield.innerHTML = 'Not enough items in cart'
    return;
  } 
  cartQuantity += change;
  updatefield.innerHTML = `Cart Quantity: ${change} `;
  showQuantity()
}

function showQuantity(){
  updatefield.innerHTML = `Cart Quantity: ${cartQuantity}`;
}

function resetCart(){
  cartQuantity = 0;
  showQuantity()
}