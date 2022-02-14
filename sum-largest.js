//Conditions
/*
 - Given an array of 2 or more numbers. 
 - Find the two largest numbers in that array
 - Sum them together
*/

const sumLargestNumbers = function(data) {
  let largeOne = 0;
  let largeTwo = 0;
  
  for (let a = 0; a < data.length; a++){
    if (data[a] > largeOne){
      largeOne = data[a];
  }}
  for (let b = 0; b < data.length; b++){
    if (data[b] > largeTwo && data[b] !== largeOne){
      largeTwo = data[b];
    }
  }
  return largeOne + largeTwo;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));