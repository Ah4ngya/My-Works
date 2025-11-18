// // function greeting(){
// //   console.log(`hello`)
// // }

// // greeting();

// // //függvények értékek!

// // const num = 2;

// // const func1 = function(){
// //   console.log('cheese');
// // };//anoním függvény. névtelen

// // //a függvények értékként is eltárolhatóak

// // console.log(func1);
// // console.log(typeof func1)

// // func1() 

// // //hoisting -> előbb is meghívható a függvény mint ahogy létrehoznánk
// // sajt()
// // function sajt(){
// //   console.log('sajt')
// // }

// // const object1 = {
// //   num: 2,
// //   fun: function(){
// //     console.log('hello3')
// //   }
// // };

// // object1.fun();

// // function display(param){
// //   console.log(param)
// // };

// // display('tonyas'); //elmenti az értéket a function a param-ba és értékként használható

// // function run(param){
// //   param();
// // };
// // run(function(){
// //   console.log('hello4')
// // });

// // //a paramba függvény is menthető, passolható bele, ez egy callback


// setTimeout(function(){
//   console.log('timeout')
//   console.log('timeout2')
// },3000); //jövőbeli függvénymeghívásra jó


// //aszinkron kód a settimeout miatt előbb kerül kiírásra a későbbi kód

// console.log('next line');

// setInterval(function(){
//   console.log('asd')
// },5000);

// //ez folytonosan intervalokon at lefut

// console.log('next line2');


[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach((value,index) => {
  if (value === 'wash dishes'){
    return; //ugyanúgy működik mint a continue egy sima for loopban
  }
  console.log(value,index)
});


//minden értéket elment a valueba az indexeket pedig az indexbe
//majd kiírja őket for each element save in value for each index save in index kb. szavakkal


const add = function(){
  console.log(2+3)
}
add()
add()

function runTwice(fun){
  fun();
  fun();
}

runTwice(add)

const prankButton = document.querySelector('.js-prank')
const addBtn = document.querySelector('.js-add')
const div = document.querySelector('.js-div')
const output = document.querySelector('.js-output')
prankButton.addEventListener('click',function(){
  prankButton.innerHTML = 'Loading...'
  setTimeout(function(){
    prankButton.innerHTML = 'Finished!'
  },2000)
})

let intervalId;

addBtn.addEventListener('click',function(){
  const html = `Added to Cart!`
  clearInterval(intervalId)
  output.innerHTML += html;
  intervalId = setTimeout(function(){
    output.innerHTML = '';
    
  },2000)
  
})


let messages = 2;



const addm = document.querySelector('.js-ad')
const rm = document.querySelector('.js-rm')

setInterval(function(){
  if (document.title === 'App' && messages > 0)
  {
    document.title = `${messages} new messages!`
  } else {
    document.title = 'App'
  }
  
},1000)


addm.addEventListener('click',function(){
  messages ++;
})//tobb event listenere is lehet ugyanannak az elementnek ugyanazon eventen

rm.addEventListener('click',function(){
  if (messages - 1 >= 0){
    messages -= 1;
  }
})

const regFunc = function(){
  console.log('yoyoyo')
  return 5;
};

const arrowFunction = (param = 'yoyoyo') => {
  console.log(param)
  return 5;
};
arrowFunction();

const oneParam = param => {
  console.log(param + 1);
};

oneParam(0)

const oneLine = ()=> 2+3;
console.log(oneLine())


const obj2 = {
  // method: () => {

  // },
  method(){ //ugyanazt csinalja ez a ketto, az also olvashatobb szoval inkabb ezt hasznaljuk cigany

  }
}

//az eventlistenereket eltudjuk tavolitani a .removeEventListener()-el
//ahhoz, hogy levegyünk egy bizonyos függvényt a függvényt
//változóban névvel kell eltároljuk így letudjuk venni azt
//pl.: const eventListener1 = const function1 => (){
//    console.log('sajt')
//  } 
// button.removeEventListener('click',eventListener1)
console.log([1, -3, 5, 6, -2].filter((value,index)=>{
  // if (value >= 0){
  //   return true;
  // }else {
  //   return false;
  // }; ugyanaz
  return value >= 0
  
}));
//valamilyen követelményre szűr, kb mint a keresés vagy kiválasztás csak egyszerűbb

console.log([1,1,1,3,5,7].map((value,index) =>{
  return value*2 
}));

//mindkét függvény teljesen új halmazt csinál és ezt változtatja, pusholja bele


console.log([1,1,1,3,5,7].map(value =>value*2))

const multiply = (num1,num2) => num1*num2;

console.log(multiply(2,7))

let result = 0;

function Countpos(nums){
  nums.forEach((value) => {
    if (value > 0){
      result++;
      
    }
  })
  return result
}
console.log(Countpos([-1,-1,-2,3,2,3]))

function addNum(array,num){
  let result = [];
  array.map((value) => {
    result.push(value += num);
  })
  return result
  
}

console.log(addNum([1,2,3,4,5],3))

function rmEgg(foods){

  return foods.filter((food)=> food !== 'egg') 
}
console.log(rmEgg(['egg','bacon']));

function rmFirstTwoEggs(foods){
  let eggCount = 0;
  return foods.filter((food)=> {
    if (food === 'egg' && eggCount < 2){
      eggCount++
      return false;
    }
    return true;
  }) 
}
console.log(rmFirstTwoEggs(['egg','egg','bacon','egg','egg']));