//Conditions
/*
 - Create a function that recieves 3 parameters:
  - An array of ingedients in stock at Bakery A
  - An array of ingedients in stock at Bakery B
  - An Array of recipe objects:
   - strings: names
   - array: ingredients
 - Find a recipe that utilizes one ingredient from both Bakeries
*/

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let choice = "";
  for (let a = 0; a < bakeryA.length; a++) {
    // console.log(bakeryA[a]);
    for (let b = 0; b < bakeryB.length; b++) {
      // console.log(bakeryB[b]);
      for (let c = 0; c < recipes.length; c++) {
        // console.log(recipes[c].ingredients[0], recipes[c].ingredients[1])
        if (
          bakeryA[a] === recipes[c].ingredients[0] ||
          bakeryA[a] === recipes[c].ingredients[1]
        ) {
          if (
            bakeryB[b] === recipes[c].ingredients[0] ||
            bakeryB[b] === recipes[c].ingredients[1]
          ) {
            choice = recipes[c].name;
          }
        }
      }
    }
  }
  return choice;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
