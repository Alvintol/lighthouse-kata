// Conditions
/* 
Write an algorithm to determine how far away a destination is 
based on directions given
*/

const blocksAway = function (directions) {
  let distance = {};
  let position = [0, 0];
  let facing = "north";

  for (let a = 0; a < directions.length; a++) {
    if (facing == "north" && directions[a] == "right") {
      position[1] += directions[a + 1];
      facing = "east";
    } else if (
      facing == "north" &&
      directions[a] == "left" &&
      position[0] == 0
    ) {
      position[0] += directions[a + 1];
      facing = "north";
    } else if (facing == "north" && directions[a] == "left") {
      position[1] -= directions[a + 1];
      facing = "west";
    } else if (facing == "south" && directions[a] == "right") {
      position[1] -= directions[a + 1];
      facing = "west";
    } else if (facing == "south" && directions[a] == "left") {
      position[1] += directions[a + 1];
      facing = "east";
    } else if (facing == "east" && directions[a] == "right") {
      position[0] -= directions[a + 1];
      facing = "south";
    } else if (facing == "east" && directions[a] == "left") {
      position[0] += directions[a + 1];
      facing = "north";
    } else if (facing == "west" && directions[a] == "right") {
      position[0] += directions[a + 1];
      facing = "north";
    } else if (facing == "west" && directions[a] == "left") {
      position[0] -= directions[a + 1];
      facing = "south";
    }
  }
  distance.east = position[1];
  distance.north = position[0];
  return distance;
};





console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));