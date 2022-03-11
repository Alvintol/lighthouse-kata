//revisted code. Refractored
const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let recipeChoice = [];

  bakeryA.forEach(itemA => {
    bakeryB.forEach(itemB => {
      for (let recipe in recipes) {
        if (itemA === recipes[recipe].ingredients[0] && itemB === recipes[recipe].ingredients[1] ||
          itemA === recipes[recipe].ingredients[1] && itemB === recipes[recipe].ingredients[0]) {
          recipeChoice.push(recipes[recipe].name);
        }
      }
    })
  })
  return recipeChoice;
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

// ********* original code ***

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let choice = "";
  for (let a = 0; a < bakeryA.length; a++) {
    for (let b = 0; b < bakeryB.length; b++) {
      for (let c = 0; c < recipes.length; c++) {
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