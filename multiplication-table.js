// Conditions
/*
 - Print multiplication tables to the console from 1 to given number.
 - Number provided will be the highest value of our table.
*/
const multiplicationTable = function (maxValue) {
  let table = "";
  for (let a = 1; a <= maxValue; a++) {
    for (let b = 1; b <= maxValue; b++) {
      // console.log(b);
      table += a * b + " ";
    }
    table += "\n";
  }
  return table;
};

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
