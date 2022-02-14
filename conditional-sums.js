//Conditions
/*
 - Adding only the numbers in the array which match the given
  condition: "odd" / "even"
*/

const conditionalSum = function(values, condition) {
  let sum = 0;

  for (let a = 0; a < values.length; a++){
    if (condition == "even" && values[a] % 2 === 0){
    sum += values[a];  
    }else if (condition == 'odd' && values[a] % 2 !== 0){
    sum += values[a];  
    }
  }return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));