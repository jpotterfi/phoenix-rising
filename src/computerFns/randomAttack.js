import { gameboardFactory } from "../gameboardFactory";

//(board, row, column)
function randomAttack(board) {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);

  if (isLegal(row, column)) {
    board.receiveAttack(row, column);
    if (typeof board.coordinates[row][column] === "object") {
      if (board.coordinates[row][column].isSunk() == true) {
        console.table(board.coordinates);
        let locationArray = JSON.parse(
          JSON.stringify(board.coordinates[row][column].shipLocation)
        );
        console.table(locationArray);
        // for (const property in shipLocation) {
        //   if (JSON.stringify(coordArray) == property) {
        //     shipLocation[property] = true;
        //   }
        // }
      }
    }
  } else {
    randomAttack(board);
  }

  //else, repeat function

  function isLegal(row, column) {
    let isLegal = true;
    if (board.coordinates[row][column] == "miss") {
      isLegal = false;
    } else if (typeof board.coordinates[row][column] === "object") {
      if (
        board.coordinates[row][column].shipLocation[
          JSON.stringify([row, column])
        ] == true
      ) {
        isLegal = false;
      }
    }
    return isLegal;
  }
}
export { randomAttack };
