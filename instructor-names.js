//Conditions
/*
 - Determine which instructor has the longest name
*/

const instructorWithLongestName = function(instructors) {
  let lName = instructors[0].name;
  for (let a = 0; a < instructors.length; a++){
    if (instructors[a].name.length > lName.length){
      lName = instructors[a];
    }
  }return lName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

