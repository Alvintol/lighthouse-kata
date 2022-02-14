//Conditions
/*
Count the number of vowels that appear in a given string: A, E, I, O, U.
*/
const numberOfVowels = function (data) {
  let vowels = /[aeiou]/ig;

  return data.match(vowels).length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));