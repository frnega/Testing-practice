
function findSum(obj){
  let sum = 0;
 for(property in obj){
  sum += obj[property];
}
 return sum;
}

 function findSub(obj){
 let sub = 0;
for(property in obj){
 sub = obj[property]-[sub];
}
 return sub;
 }


 function findmul(obj){
  let mul ;
 for(property in obj){
   mul = obj[property]* obj[property];
console.log(mul)
 }
  return mul;
  }

var sample = { a: 11 , b: 2 };
console.log(findSum(sample));
console.log(findSub(sample));
console.log(findmul(sample));