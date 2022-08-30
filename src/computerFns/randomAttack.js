import { gameboardFactory } from "../gameboardFactory";
import { solveMisses } from "../solveMisses";

//(board, row, column)
function randomAttack(board) {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);

  if (isLegal(row, column)) {
    board.receiveAttack(row, column);
    if (typeof board.coordinates[row][column] === "object") {
      if (board.coordinates[row][column].isSunk() == true) {
        solveMisses(board, row, column);

        // console.table(board.coordinates);
        // let shipLocationArr = board.coordinates[row][column].shipLocation;
        // console.table(shipLocationArr);
        // let locationArray = [];
        // for (const property in shipLocationArr) {
        //   locationArray.push(JSON.parse(property));
        // }
        // console.table(locationArray);

        // let locationOrientation = board.coordinates[row][column].orientation;
        // let locationLength = board.coordinates[row][column].length;

        // findMisses();

        // function findMisses() {
        //   for (let i = 0; i < locationArray.length; i++) {
        //     let arr = locationArray[i];
        //     let r = arr[0];
        //     let c = arr[1];
        //     console.log(arr, r, c, locationOrientation);

        //     if (locationOrientation == 0) {
        //       if (r == 0) {
        //         board.coordinates[r + 1][c] = "miss";
        //       } else if (r > 0 && r < 9) {
        //         board.coordinates[r + 1][c] = "miss";
        //         board.coordinates[r - 1][c] = "miss";
        //       } else if (r == 9) {
        //         board.coordinates[r - 1][c] = "miss";
        //       }
        //       if (c == 0) {
        //         if (typeof board.coordinates[r][c + 1] !== "object") {
        //           board.coordinates[r][c + 1] = "miss";
        //         }
        //       } else if (c > 0 && c < 9) {
        //         if (typeof board.coordinates[r][c + 1] !== "object") {
        //           board.coordinates[r][c + 1] = "miss";
        //         }
        //         if (typeof board.coordinates[r][c - 1] !== "object") {
        //           board.coordinates[r][c - 1] = "miss";
        //         }
        //       } else if (c == 9) {
        //         if (typeof board.coordinates[r][c - 1] !== "object") {
        //           board.coordinates[r][c - 1] = "miss";
        //         }
        //       }
        //     }
        //     if (locationOrientation == 1) {
        //       if (c == 0) {
        //         board.coordinates[r][c + 1] = "miss";
        //       } else if (c > 1 && c < 9) {
        //         board.coordinates[r][c + 1] = "miss";
        //         board.coordinates[r][c - 1] = "miss";
        //       } else if (c == 9) {
        //         board.coordinates[r][c - 1] = "miss";
        //       }
        //       if (r == 0) {
        //         if (typeof board.coordinates[r + 1][c] !== "object") {
        //           board.coordinates[r + 1][c] = "miss";
        //         } else if (r > 0 && r < 9) {
        //           if (typeof board.coordinates[r + 1][c] !== "object") {
        //             board.coordinates[r + 1][c] = "miss";
        //           }
        //           if (typeof board.coordinates[r - 1][c] !== "object") {
        //             board.coordinates[r - 1][c] = "miss";
        //           }
        //         } else if (r == 9) {
        //           if (typeof board.coordinates[r - 1][c] !== "object") {
        //             board.coordinates[r - 1][c] = "miss";
        //           }
        //         }
        //       }
        //     }
        //     console.log(i + "times");
        //     console.table(board.coordinates);
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
