//Conditions
/*
 - Build an advanced case maker that can convert strings into
  all different kinds of case styles: camel, pascal, snake & kebab
 - Given a string and a parameter determining the case style
  */

const makeCase = function (input, style) {
  let inputStr = input.split(" ");
  let answer = "";
  for (let a = 0; a < input.length; a++) {
    for (let b = 0; b < style.length; b++) {
      if (style == "camel" || style[b] == "camel") {
        for (let c = 0; c < inputStr.length; c++) {
          if (inputStr[c] !== inputStr[0]) {
            let camel = inputStr[c].replace(
              inputStr[c][0],
              inputStr[c][0].toUpperCase()
            );
            inputStr[0] += camel;
          }
        }
        return inputStr[0];
      }
      if (style == "upper" || style[b] == "upper") {
        let upCut = input.toUpperCase().split("");
        answer = upCut.join("");
      }
      if (style == "pascal" || style[b] == "pascal") {
        let pascal = [];
        for (let d = 0; d < inputStr.length; d++) {
          inputStr[d] = inputStr[d].replace(
            inputStr[d][0],
            inputStr[d][0].toUpperCase()
          );
          pascal.push(inputStr[d]);
        }
        pascal = pascal.join("");
        answer = pascal;
      }
      if (style == "snake" || style[b] == "snake") {
        if (answer) {
          let sCut = answer.split(" ");
          answer = sCut.join("_");
        } else {
          let sCut = input.split(" ");
          answer = sCut.join("_");
        }
      }
      if (style == "kebab" || style[b] == "kebab") {
        answer = inputStr.join("-");
      }
      if (style == "title" || style[b] == "title") {
        let title = [];
        for (let e = 0; e < inputStr.length; e++) {
          inputStr[e] = inputStr[e].replace(
            inputStr[e][0],
            inputStr[e][0].toUpperCase()
          );
          title.push(inputStr[e]);
        }
        title = title.join(" ");
        answer = title;
      }
      if (style == "vowel" || style[b] == "vowel") {
        let vowCut = input.split("");
        for (let f = 0; f < vowCut.length; f++) {
          if (
            vowCut[f] == "a" ||
            vowCut[f] == "e" ||
            vowCut[f] == "i" ||
            vowCut[f] == "o" ||
            vowCut[f] == "u"
          ) {
            vowCut[f] = vowCut[f].replace(vowCut[f], vowCut[f].toUpperCase());
          }
        }
        vowCut = vowCut.join("");
        answer = vowCut;
      }
      if (style == "consonant" || style[b] == "consonant") {
        let conCut = input.toUpperCase().split("");
        for (let g = 0; g < conCut.length; g++) {
          if (
            conCut[g] == "A" ||
            conCut[g] == "E" ||
            conCut[g] == "I" ||
            conCut[g] == "O" ||
            conCut[g] == "U"
          ) {
            conCut[g] = conCut[g].replace(conCut[g], conCut[g].toLowerCase());
          }
        }
        conCut = conCut.join("");
        answer = conCut;
      }
    }
    return answer;
  }
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
