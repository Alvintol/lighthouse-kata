// Conditions
/*
 - Create a function called checkAir(), which will check a 
 collection of air samples. 
 - The function will take in two arguments: 
    - An array of strings: 'clean' / 'dirty'
    - A number representing the highest acceptable amount 
    of dirty samples
 - Function must return either Clean or Pulluted based on 
 pollution threshold
*/

const checkAir = function (samples, threshold) {
  let countCln = 0;
  let countPol = 0;

  for (let a = 0; a < samples.length; a++) {
    if (samples[a] == "clean") {
      countCln++;
    } else {
      countPol++;
    }
  }
  console.log(countCln, countPol);
  if (countPol / samples.length <= threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
