const nums = [5,10,15]

for (let i = 0; i < nums.length; i++){
  const lastindex = nums.length-1;
  nums[lastindex] = 99;
}

function getLastValue(array){
  for (let i = 0; i < array.length; i++){
    const lastindex = array.length-1;
    return array[lastindex];
}
}


console.log(getLastValue([1,2,3,4,5,6]));
console.log(getLastValue(['bols','toys','mega knight']));
console.log(nums);

function swapValue(array){
  for (let i = 0; i < array.length; i++){
    const lastindex = array.length - 1;
    const lastValue = array[lastindex];
    const firstvalue = array[0];
    array[0] = lastValue;
    array[lastindex] = firstvalue;
    return array;
}
}
console.log(swapValue([1,2,3,5,6,7,8,9]));

for (let i = 0; i <= 10;i++){
  if (i % 2 == 0){
    console.log(i)
  }
}

for (let i = 5; i >= 0; i--){
  console.log(i)
}

let i = 5;

while (i >= 0){
  console.log(i)
  i--
}

let index = 0;

while (index < 10){
  index++
  console.log(index)
}

const array1 = [1,2,3,4,5,6]
const array2 = [];


// for (let i = 0; i < array1.length;i++){
//   const num = array1[i]+1
//   array2.push(num)
// }
// console.log(array2)

function increaseArray(array){
  
  for (let i = 0; i < array.length; i++){
    const num = array[i]+1;
    array2.push(num) 
    
  }
 }
increaseArray([100,1000,-1,0,2,3])
console.log(array2) 

function addNum(array,num){
  const result = [];
  for (let i = 0; i < array.length; i++){
    result.push(array[i] + num);
    
  }
  return result
}

console.log(addNum([1,2,3,4,5,6],10))

function addArrays(array1,array2){

  let result = [];
  for (let i = 0;i<array1.length; i++){
    result.push(array1[i]+array2[i])
  }
  return result
}

console.log(addArrays([1,2,3,4],[2,3,4,5]))

function countPositives(nums){
  let count = 0;

  for (let i = 0 ;i < nums.length;i++){
    if (nums[i] > 0){
      count += 1
    }
  }
  return count
}

console.log(countPositives([1,2,3,-2,-4,-1,0]))


function minMax(nums){
  let min = nums[0];
  let max = nums[0];

  for (let i = 0; i < nums.length;i++){
    if (nums[i] < min){
      min = nums[i];
      
    } 
    
    if (nums[i]> max){
      max = nums[i];
      
    }
    
  }
  return `min: ${min} max: ${max}`


}
console.log(minMax([1,2,4,56,7,1,2,412341,2,0,-12313124]))


function countWords(array){
  const result = {};

  for (let i = 0; i < array.length; i++){
    const word = array[i]
     if (!result[word]) {
         result[word] = 1;
        } else {
          result[word]++;
        }
  }
  return result;
}

console.log(countWords(['fej','fej','fej','lab','lab']))



function searchWords(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'search'){
      return i+1
    } 
  }
  return -1
    
}
console.log(searchWords(['fej','lab','asd','search']))
console.log('')



function findIndex(array,word){
  let result = -1
  for (let i = 0; i < array.length; i++){
    if (array[i] === word){
      result = i+1;
      break
    } 
  }
  return result
  
}
console.log(findIndex(['fej','lab','asd','search'],'aa'))

function removeEggs(foods){
  let resultArray = [];
  for (let i = 0; i < foods.length;i++){
    if ( foods[i] === 'egg' ){
      continue;
    } else{
      resultArray.push(foods[i]);
    }
  }
  console.log(resultArray);
}

console.log(removeEggs(['egg','egg','milk','cookies','egg']))
console.log('')

function removeFirstTwoEggs(foods){
  let resultArray = []; 
  let eggCount = 0;

  for (let i = 0; i < foods.length;i++){
    if ( foods[i] === 'egg' && eggCount < 2){
      eggCount++;
      continue;
    }
    resultArray.push(foods[i])
  
}
  return resultArray;
}

console.log(removeFirstTwoEggs(['egg','egg','milk','cookies','egg','egg']));

console.log('')
function removeLastTwoEggs(foods){
  
  let resultArray = []; 
  let eggCount = 0;
  foodsrev = foods.reverse();

  for (let i = 0; i < foodsrev.length;i++){
    if ( foodsrev[i] === 'egg' && eggCount < 2){
      eggCount++;
      continue;
    }
    resultArray.push(foods[i])
  
}
  return resultArray.reverse();
}

console.log(removeLastTwoEggs(['egg','egg','milk','cookies','egg','egg']));

console.log('')

const array= ['egg','egg','milk','cookies','egg','egg']
function removeLastTwoEggsS(){
  const copy = array.slice();
  let resultArray = []; 
  let eggCount = 0;
  foodsrev = array.reverse();

  for (let i = 0; i < foodsrev.length;i++){
    if ( foodsrev[i] === 'egg' && eggCount < 2){
      eggCount++;
      continue;
    }
    resultArray.push(foodsrev[i])
  
}
  return resultArray.reverse();
}

console.log(removeLastTwoEggsS());
console.log(array);

console.log('')
console.log('')
console.log('')

for (let i = 0; i <= 20;i++){
  if ( i % 5 == 0 && i % 3 == 0){
    console.log('fizzbuzz')
  
    
  }else if (i % 3 == 0){
    console.log('Fizz')
  }else if (i %5 == 0 ){
    console.log('buzz')
  }else {
    console.log(i)
  }
}

console.log('')



function unique(array){
  const result = [];

  for (let i = 0; i < array.length; i++){
    
  const word = array[i]

  if (findIndex(result,word) === -1){
    result.push(word);
  } 
  
}
  return result;
}
console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));