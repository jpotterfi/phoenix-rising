import { randomAttack } from "./randomAttack";

let foundTarget = false;
let isOrienting = false;
let isHunting = false;
let foundCoordinate = {
  row: 0,
  column: 0,
  length: 0,
  isLeft: true,
  isUp: true,
  isRight: true,
  isDown: true,
  leftCoordinates: [],
  rightCoordinates: [],
  upCoordinates: [],
  downCoordinates: [],
};

function shipHunt(board) {
  if (foundTarget == false && isOrienting == false && isHunting == false) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    // console.table(board.coordinates);
    // console.log(row, column);
    // console.log(typeof board.coordinates[row][column]);
    if (typeof board.coordinates[row][column] === "object") {
      foundTarget = true;
      foundCoordinate.row = row;
      foundCoordinate.column = column;
      foundCoordinate.length = board.coordinates[row][column].length;
      //create possible coordinates

      isOrienting = true;
      console.log("shipHunt found an object");
      console.log("shipHunt recorded object coordinate at ");
      console.table(foundCoordinate);
      board.receiveAttack(row, column);
    } else {
      randomAttack(board);
    }
    if (isOrienting) {
      //off the bat check to see what directions we can eliminate
      if (foundCoordinate.row == 0) {
        foundCoordinate.isUp = false;
        if (board[foundCoordinate.row + 1][foundCoordinate.column] == "miss") {
          foundCoordinate.isDown = false;
        }
        if (board[foundCoordinate.row][foundCoordinate.column + 1] == "miss") {
          foundCoordinate.isRight = false;
        }
        if (board[foundCoordinate.row][foundCoordinate.column - 1] == "miss") {
          foundCoordinate.isLeft = false;
        }
      }
      if (foundCoordinate.row == 9) {
        foundCoordinate.isDown = false;
        if (board[foundCoordinate.row][foundCoordinate.column + 1] == "miss") {
          foundCoordinate.isRight = false;
        }
        if (board[foundCoordinate.row][foundCoordinate.column - 1] == "miss") {
          foundCoordinate.isLeft = false;
        }
      }
    }
  }
}

// function populateCoordinates(row, column) {
//   if (row == 0) {
//     if (column == 0) {
//       for (let i = 0; i < foundCoordinate.length; i++)
//         foundCoordinate.rightCoordinates.push([row, column + i]);
//     }
//   }
// }

export { shipHunt };
