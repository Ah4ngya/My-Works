const basketball =  {
  name: 'basketball',
  price: 2095,
  ['delivery-time']:'3 days'
};

const football = {
  name: 'football',
  price: 2799,
  ['delivery-time']: '2 days'
};

const basketball2 = basketball;

//basketball.price + 500

function compareProducts(prod1,prod2){
  let cheaperProduct = '';
  if (prod1.price < prod2.price){
    cheaperProduct = prod1.name
  }else {
    cheaperProduct = prod2.name
  }
  return cheaperProduct
}


console.log(compareProducts(basketball,football))

function isSameProduct(prod1,prod2){
  if (prod1 === prod2)
  {
    return true
  } else{
    return false
  }
  
};

console.log(isSameProduct(basketball,basketball2))

console.log('Good Morning USA!'.toLowerCase())

let text = '52bomboclat pussywagon chicken nuggets'

let result = text.repeat(52)

console.log(result)

