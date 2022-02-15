//Conditions
/*
 - Convert a normal string into camelCase.
*/

const camelCase = function (input) {
  let cut = input.split(" ");
  // console.log(cut[0]);
  for (let a = 0; a < cut.length; a++) {
    if (cut[a] !== cut[0]) {
      let rest = cut[a].replace(cut[a][0], cut[a][0].toUpperCase());
      cut[0] += rest;
    }
  }
  return cut[0];
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
