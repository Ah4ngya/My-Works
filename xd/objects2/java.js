// const product = {
//   name: 'Socks',
//   price: '1090'
// };

// console.log(typeof product);
// console.log(product.name);
// console.log(product.price);

// product.name = 'cotton socks';

// console.log(product);
// console.log(product.name);
// console.log(product.price);

// product.instock = true;

// console.log(product);

// delete product.instock;
// console.log(product);

// const product = {
//   name: 'shirt',
//   ['delivery-time']: '1 day', //hasznos mert lehet benne variansokat, valtozokat hasznalni ha kell akkor ezt hasznaljuk inkabb
//   rating : {
//     stars: 4.5,
//     count: 87
//   },
//   fun: function function1(){
//     console.log('function inside an object')
//   }
// } // NESTED OBJECT, objektumban objektum az objektumban levo function egy metodus

// console.log(product.name) //ez a kettő
// console.log(product['name'])      //pont ugyanazt csinalja
// console.log(product['delivery-time'])     //ez hasznos mert igy a - jelet nem kivonasnak fogja fel a fordito
// console.log(product.rating.stars)
// console.log(product.fun())

// console.log(JSON.stringify(product))

// const JSONstring = JSON.stringify(product)

// console.log(JSON.parse(JSONstring))

// //variables are temporary, local storage is eternal

console.log('hello'.length);
console.log('hello'.toUpperCase());

//autoboxing -> a stringek alapbol specialis objektumok lesznek ezert van length es toupper stb propertiuk
//AZ OBJEKTUMOK REFERENCIAK!

const object1 = { //az objektum neve egy mutato, pointer a propertyk fele
  message: 'yo yo yo'

};

const object2 = object1 //ez esetben az object2 mutat az object1 referenciajara, neve: COPY BY REFERENCE

console.log(object1);
console.log(object2);


object1.message = 'hood job?'; //ha ez megvaltozik akkor az obj 2 is
console.log(object1);
console.log(object2);

const object3 = {
  message: 'hood job?'
};

console.log(object3 === object1)
console.log(object2 === object1)

const object4 = {
  message: 'hood job?',
  price: '7.99'
};

//const message = object4.message
const  {message,price} = object4 //dekonstruktalo shortcut, kiveszi az objektumbol az erteket
console.log(message)
console.log(price)

const object5 = {
  message: message,
  //message -> shorthand property, 1/1 ugyanaz mint ami efole van irva
  // method: function function1(){
  //   console.log('method')
  method(){
    console.log('method') //shorthand method, ugyanaz ami efole van irva
  }
};

object5.method()
console.log(object5)

//a két objektum ugyanarra a memoria értékre mutat