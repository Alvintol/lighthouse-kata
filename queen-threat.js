// Conditions
/*
Create an alogrithm to detect if two queens on a chess board can attack each other. 
*/

function generateBoard(whiteQueen, blackQueen) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  for (let a = 0; a < board.length; a++) {// a = rows
    for (let b = 0; b < board[a].length; b++) {// b = columns
      board[whiteQueen[0]][whiteQueen[1]] = 1;
      board[blackQueen[0]][blackQueen[1]] = 1;
    }
  }
  return board;
}

function queenThreat() {
  for (let c = 0; c < whiteQueen.length; c++) {
    for (let d = 0; d < blackQueen.length; d++) {
      if (whiteQueen[c] === blackQueen[d] || whiteQueen[0] - blackQueen[0] === whiteQueen[1] - blackQueen[1]) {
        return true;
      }
    }
  }
  return false;
}

let whiteQueen = [0, 7];
let blackQueen = [5, 7];
// let whiteQueen = [0, 5]; other positions to check
// let blackQueen = [5, 0]; other positions to check
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
