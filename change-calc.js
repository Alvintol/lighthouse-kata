//Conditions
/*
 - Create a function that calculates what coins to give
 when returning change
 - Given two numbers, total of ransaction and amount
 given the cashier
 - Numbers will be presented as whole numbers in cents:
 $10 = 1000.
 - Function should return an object which describes 
 total amount of change
*/
const calculateChange = function (total, cash) {
  let change = {};
  let changeCount = cash - total;

  while (changeCount > 0) {
    if (changeCount >= 2000) {
      changeCount -= 2000;
      change.twentyDollar = change.twentyDollar + 1 || 1;
    } else if (changeCount >= 1000) {
      changeCount -= 1000;
      change.tenDollar = change.tenDollar + 1 || 1;
    } else if (changeCount >= 500) {
      changeCount -= 500;
      change.fiveDollar = change.fiveDollar + 1 || 1;
    } else if (changeCount >= 200) {
      changeCount -= 200;
      change.twoDollar = change.twoDollar + 1 || 1;
    } else if (changeCount >= 100) {
      changeCount -= 100;
      change.oneDollar = change.oneDollar + 1 || 1;
    } else if (changeCount >= 25) {
      changeCount -= 25;
      change.quarter = change.quarter + 1 || 1;
    } else if (changeCount >= 10) {
      changeCount -= 10;
      change.dime = change.dime + 1 || 1;
    } else if (changeCount >= 5) {
      changeCount -= 5;
      change.nickel = change.nickel + 1 || 1;
    } else if (changeCount >= 1) {
      changeCount -= 1;
      change.penny = change.penny + 1 || 1;
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
