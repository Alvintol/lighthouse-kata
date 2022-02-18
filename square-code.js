//Conditions
/*
 - Create a function that encodes a string message using the 
 following rules:
  - Removing all white space from original string
  - Characters are written into a square/retangle, rows/columns
  - Square root total characters for total columns
  - return the string following the characters from top to bottom
  of the columns
*/

const squareCode = function (message) {
  let square = "";
  let code = "";
  let noWS = message.split(" ").join("");
  let sRoot = Math.ceil(Math.sqrt(noWS.length));
  noWS = noWS.split("");

  count = 0;
  while (count <= noWS.length) {
    for (let a = 0; a < noWS.length; a++) {
      if (a % sRoot === count) {
        code += noWS[a];
      }
    }
    code += " ";
    count++;
  }
  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
