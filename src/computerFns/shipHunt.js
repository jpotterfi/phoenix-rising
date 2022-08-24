import { randomAttack } from "./randomAttack";

let isOrienting = false;

// let foundCoordinate = {
//   row: 0,
//   column: 0,
//   isLeft: true,
//   isUp: true,
//   isRight: true,
//   isDown: true,
//   leftCoordinates: [],
//   rightCoordinates: [],
//   upCoordinates: [],
//   downCoordinates: [],
// };

function foundCoordinateFactory(r, c) {
  let row = r;
  let column = c;
  let isLeft = true;
  let isUp = true;
  let isRight = true;
  let isDown = true;
  let nextRow = r;
  let nextColumn = c;
  let leftCoordinates = [];
  let rightCoordinates = [];
  let upCoordinates = [];
  let downCoordinates = [];
  return {
    row,
    column,
    isLeft,
    isUp,
    isRight,
    isDown,
    leftCoordinates,
    rightCoordinates,
    upCoordinates,
    downCoordinates,
    nextRow,
    nextColumn,
  };
}
let foundCoordinate;

function shipHunt(board) {
  if (!isOrienting) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    // console.table(board.coordinates);
    // console.log(row, column);
    // console.log(typeof board.coordinates[row][column]);
    if (typeof board.coordinates[row][column] === "object") {
      foundTarget = true;
      foundCoordinate = foundCoordinateFactory(row, column);

      isOrienting = true;
      console.log("shipHunt found an object");
      console.log("shipHunt recorded object coordinate at ");
      console.table(foundCoordinate);
      board.receiveAttack(row, column);
    } else {
      randomAttack(board);
    }
  } else if (isOrienting) {
    //off the bat check to see what directions we can eliminate (added benefit of checking subsequent misses)
    //row checks
    if (foundCoordinate.row == 0) {
      foundCoordinate.isUp = false;
      if (
        board.coordinates[foundCoordinate.row + 1][foundCoordinate.column] ==
        "miss"
      ) {
        foundCoordinate.isDown = false;
      }
    }
    if (foundCoordinate.row == 9) {
      foundCoordinate.isDown = false;
      if (
        board.coordinates[foundCoordinate.row - 1][foundCoordinate.column] ==
        "miss"
      ) {
        foundCoordinate.isUp = false;
      }
    }
    if (foundCoordinate.row > 0 && foundCoordinate.row < 9) {
      if (
        board.coordinates[foundCoordinate.row + 1][foundCoordinate.column] ==
        "miss"
      ) {
        foundCoordinate.isUp = false;
      }
      if (
        board.coordinates[foundCoordinate.row - 1][foundCoordinate.column] ==
        "miss"
      ) {
        foundCoordinate.isDown = false;
      }
    }
    //column checks
    if (foundCoordinate.column == 0) {
      foundCoordinate.isLeft = false;
      if (
        board.coordinates[foundCoordinate.row][foundCoordinate.column + 1] ==
        "miss"
      ) {
        foundCoordinate.isRight = false;
      }
    }
    if (foundCoordinate.column == 9) {
      foundCoordinate.isRight = false;
      if (
        board.coordinates[foundCoordinate.row][foundCoordinate.column - 1] ==
        "miss"
      ) {
        foundCoordinate.isLeft = false;
      }
    }
    if (foundCoordinate.column > 0 && foundCoordinate.column < 9) {
      if (
        board.coordinates[foundCoordinate.row][foundCoordinate.column - 1] ==
        "miss"
      ) {
        foundCoordinate.isLeft = false;
      }
      if (
        board.coordinates[foundCoordinate.row][foundCoordinate.column + 1] ==
        "miss"
      ) {
        foundCoordinate.isRight = false;
      }
    }
    //finished initial checks
    if (foundCoordinate.isUp == true) {
      foundCoordinate.nextRow--;
      board.receiveAttack(foundCoordinate.nextRow, foundCoordinate.column);
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.nextRow][
            foundCoordinate.column
          ].isSunk()
        ) {
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] !== "object"
      ) {
        foundCoordinate.isUp = false;
        foundCoordinate.nextRow = foundCoordinate.row;
      }
    } else if (foundCoordinate.isDown == true) {
      foundCoordinate.nextRow++;
      board.receiveAttack(foundCoordinate.nextRow, foundCoordinate.column);
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.nextRow][
            foundCoordinate.column
          ].isSunk()
        ) {
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] !== "object"
      ) {
        foundCoordinate.isDown = false;
        foundCoordinate.nextRow = foundCoordinate.row;
      }
    } else if (foundCoordinate.isRight == true) {
      foundCoordinate.nextColumn++;
      board.receiveAttack(foundCoordinate.row, foundCoordinate.nextColumn);
      if (
        typeof board.coordinates[foundCoordinate.row][
          foundCoordinate.nextColumn
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.row][
            foundCoordinate.nextColumn
          ].isSunk()
        ) {
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.row][nextColumn] !== "object"
      ) {
        foundCoordinate.isRight = false;
        foundCoordinate.nextColumn = foundCoordinate.column;
      }
    } else if (foundCoordinate.isLeft == true) {
      foundCoordinate.nextColumn--;
      board.receiveAttack(foundCoordinate.row, foundCoordinate.nextColumn);
      if (
        typeof board.coordinates[foundCoordinate.row][
          foundCoordinate.nextColumn
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.row][
            foundCoordinate.nextColumn
          ].isSunk()
        ) {
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.row][
          foundCoordinate.nextColumn--
        ] !== "object"
      ) {
        foundCoordinate.isLeft = false;
        foundCoordinate.nextColumn = foundCoordinate.column;
      }
    }
  }
}

function resetHunt() {
  isOrienting = false;
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
