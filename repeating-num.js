//Conditions
/*
 - The input data will be a two dimensional array, where each 
sub-array will have two numeric values
 - The first will be the value to repeat, the second will be 
 the amount of times to repeat that value
*/

const repeatNumbers = function (data) {
  let answer = "";
  for (let a = 0; a < data.length; a++) {
    for (let b = 0; b < data[a][1]; b++) {
      if (data[a][b] == data[a][0] && data[a][b] !== data[0][0]) {
        answer += ",";
      }
      answer += data[a][0];
    }
  }
  return answer;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
