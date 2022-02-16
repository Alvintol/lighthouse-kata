//Conditions
/*
Create an object that organizes a given array of names based 
on the course they teach
*/

const organizeInstructors = function (instructors) {
  let teachers = {};

  for (let a = 0; a < instructors.length; a++) {
    if (instructors[a].course == "Blockchain") {
      if (!teachers.Blockchain) {
        teachers.Blockchain = [instructors[a].name];
      } else teachers.Blockchain.push(instructors[a].name);
    }
    if (instructors[a].course == "iOS") {
      if (!teachers.iOS) {
        teachers.iOS = [instructors[a].name];
      } else teachers.iOS.push(instructors[a].name);
    }
    if (instructors[a].course == "Web") {
      if (!teachers.Web) {
        teachers.Web = [instructors[a].name];
      } else teachers.Web.push(instructors[a].name);
    }
  }

  return teachers;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
