function solveMisses(board, foundRow, foundColumn) {
  let shipLocationArr = board.coordinates[foundRow][foundColumn].shipLocation;
  let locationArray = [];
  for (const property in shipLocationArr) {
    locationArray.push(JSON.parse(property));
  }
  let locationOrientation =
    board.coordinates[foundRow][foundColumn].orientation;

  for (let i = 0; i < locationArray.length; i++) {
    let arr = locationArray[i];
    let r = arr[0];
    let c = arr[1];
    console.log(arr, r, c, locationOrientation);

    if (locationOrientation == 0) {
      if (r == 0) {
        board.coordinates[r + 1][c] = "miss";
      } else if (r > 0 && r < 9) {
        board.coordinates[r + 1][c] = "miss";
        board.coordinates[r - 1][c] = "miss";
      } else if (r == 9) {
        board.coordinates[r - 1][c] = "miss";
      }
      if (c == 0) {
        if (typeof board.coordinates[r][c + 1] !== "object") {
          board.coordinates[r][c + 1] = "miss";
        }
      } else if (c > 0 && c < 9) {
        if (typeof board.coordinates[r][c + 1] !== "object") {
          board.coordinates[r][c + 1] = "miss";
        }
        if (typeof board.coordinates[r][c - 1] !== "object") {
          board.coordinates[r][c - 1] = "miss";
        }
      } else if (c == 9) {
        if (typeof board.coordinates[r][c - 1] !== "object") {
          board.coordinates[r][c - 1] = "miss";
        }
      }
    }
    if (locationOrientation == 1) {
      if (c == 0) {
        board.coordinates[r][c + 1] = "miss";
      } else if (c > 0 && c < 9) {
        board.coordinates[r][c + 1] = "miss";
        board.coordinates[r][c - 1] = "miss";
      } else if (c == 9) {
        board.coordinates[r][c - 1] = "miss";
      }
      if (r == 0) {
        if (typeof board.coordinates[r + 1][c] !== "object") {
          board.coordinates[r + 1][c] = "miss";
        }
      } else if (r > 0 && r < 9) {
        if (typeof board.coordinates[r + 1][c] !== "object") {
          board.coordinates[r + 1][c] = "miss";
        }
        if (typeof board.coordinates[r - 1][c] !== "object") {
          board.coordinates[r - 1][c] = "miss";
        }
      } else if (r == 9) {
        if (typeof board.coordinates[r - 1][c] !== "object") {
          board.coordinates[r - 1][c] = "miss";
        }
      }
    }
  }
}

export { solveMisses };
