//Conditions
/*
 - Write a function called whereCanIPark() that returns the 
coordinates of an available parking spot for the vehicle.
 - Or returns false if there is no available spot. 
 - Function receives an array of arrays representing parking 
 spots, and a string with type of the vehicle that is looking 
 for a parking spot.

 - Regular cars can only park in R spots.
 - Small cars can park in R or S spots.
 - Motorcycles can park in R, S, or M spots

In the array of parking spots, spots are written in both 
lower-case and upper-case. An upper-case letter means that 
the particular spot is AVAILABLE, while lower-case letters 
mean that the spot is UNAVAILABLE

Function must return an array with the coordinates of the 
spot as an [X, Y] pair. */

const whereCanIPark = function (spots, vehicle) {
  let spot = [];

  for (let a = 0; a < spots.length; a++) {
    for (let b = 0; b < spots[a].length; b++) {
      if (vehicle == "regular") {
        if (spots[a][b] == "R") {
          spot.push(b);
          spot.push(a);
          return spot;
        }
      } else if (vehicle == "small") {
        if (spots[a][b] == "R" || spots[a][b] == "S") {
          spot.push(b);
          spot.push(a);
          return spot;
        }
      } else if (vehicle == "motorcycle") {
        if (spots[a][b] == "R" || spots[a][b] == "S" || spots[a][b] == "M") {
          spot.push(b);
          spot.push(a);
          return spot;
        }
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
