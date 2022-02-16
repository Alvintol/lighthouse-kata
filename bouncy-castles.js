//Conditions
/*
 - Implement 4 functions to find total volume:
  - sphereVolume()will calculate the volume of a sphere 
  given a radius
  - coneVolume() will calculate the volume of a cone given
   a radius and a height
  - prismVolume() will calculate the volume of a prism 
  given a height, a width, and a depth
*/
const PI = 3.14159;

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

const sphereVolume = function (radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * (Math.pow(radius, 2) * (height / 3));
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  for (let a = 0; a < solids.length; a++) {
    // console.log(solids[a])
    if (solids[a].type == "sphere") {
      total += sphereVolume(solids[a].radius);
    }
    if (solids[a].type == "cone") {
      total += coneVolume(solids[a].radius, solids[a].height);
    }
  }
  return total;
};

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
