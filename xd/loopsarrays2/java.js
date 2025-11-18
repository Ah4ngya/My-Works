const array1 = [1,2,3]; //a halmazok referenciaértékek, ha másolatot csinálsz nem 2 halmazod hanem 2 referenciád lesz ami ugyanoda mutat
const array2 = array1.slice(); //a slice metódussal megakadályozzuk, hogy a bekerülő értékek mindkét halmazba menjenek. a slice elmenti a halmaz állapotát

array2.push(4);

console.log(array1);
console.log(array2);

//const array3 = [1,2,3]; 

const [firstValue, secondValue, thirdValue] = [1,2,3];//dekonstruktalas

console.log(firstValue,thirdValue)

for (let i = 0; i <= 10; i++){
  console.log(i)
  if (i == 8){
    break;
  }
}
//a break megallit egy loopot koran
console.log('')

for (let i = 0; i <= 10; i++){
  
  if (i % 2 === 0){
    continue
  }

  console.log(i)
}
console.log('')
let i = 0;

while (i <= 10){
  if (i % 3 === 0){
    i++;
    continue;
  }
  console.log(i);
  i++;
}
//while loopban a léptetést manuálisan belekell tenni az ifbe másképp infinite loop lesz


function doubleArray(nums){
  const numsDoubled = [];
  for (let i = 0; i < nums.length; i++){
  const num = nums[i];
  if (num === 0){
    return numsDoubled;
  }
  numsDoubled.push(num*2)
}
console.log(numsDoubled)
}

doubleArray([5.5,5,5])
doubleArray([2,2,5])

