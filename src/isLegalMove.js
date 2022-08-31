function isLegalMove(board, row, column) {
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
export { isLegalMove };
