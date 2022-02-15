//Conditions
/* 
 - replace all white space in a given string with %20
 Use some sort of looping. Do Not use String.prototype.replace
*/

const urlEncode = function(text) {

  let textStr = text.split(' ');
  // console.log(textStr);
  for (let a = 0; a < textStr.length; a++){
    if (textStr[0] == ''){
      textStr.shift();
    }else if (textStr[textStr.length - 1] == ''){
      textStr.pop();
    }
  }return textStr.join('%20');

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));