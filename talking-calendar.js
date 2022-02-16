//Conditions
/*
 - Create a function that converts a string of numerical
 dates to a readable string state
*/

const talkingCalendar = function (date) {
  let split = date.split("/");
  date = "";
  for (let a = 0; a < split.length; a++) {
    if (split[a][0] == 0) {
      split[a] = split[a][1];
    }
  }

  switch (split[1]) {
    case "1":
      date += "January";
      break;
    case "2":
      date += "February";
      break;
    case "3":
      date += "March";
      break;
    case "4":
      date += "April";
      break;
    case "5":
      date += "May";
      break;
    case "6":
      date += "June";
      break;
    case "7":
      date += "July";
      break;
    case "8":
      date += "August";
      break;
    case "9":
      date += "September";
      break;
    case "10":
      date += "October";
      break;
    case "11":
      date += "November";
      break;
    case "12":
      date += "December";
      break;
  }
  switch (split[2]) {
    case "1":
    case "21":
    case "31":
      date += ` ${split[2]}st,`;
      break;
    case "2":
    case "22":
      date += ` ${split[2]}nd,`;
      break;
    case "3":
    case "23":
      date += ` ${split[2]}rd,`;
      break;
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    case "20":
    case "24":
    case "25":
    case "26":
    case "27":
    case "28":
    case "29":
    case "30":
      date += ` ${split[2]}th,`;
      break;
  }
  return (date += ` ${split[0]}`);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
