// Conditions
/*
 - Convert a given url encoded string of key-value pairs into an object
 - %20 represents a space character.
 - Key-value pairs are represented using an = character: key=value
 - Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
 */

const urlDecode = function (text) {
  let object = {};
  let pairs = text.split("&");
  // console.log(pairs); //serperate the key pairs
  for (let a = 0; a < pairs.length; a++) {
    let splitKeys = pairs[a].replace("%20", " ").split("=");
    let keys = splitKeys[0];
    object[keys] = splitKeys[1].replace("%20", " ");
  }
  return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
