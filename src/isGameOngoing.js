let gameStatus = false;

function isGameOngoing() {
  return gameStatus;
}

function beginGame() {
  gameStatus = true;
}

function endGame() {
  gameStatus = false;
}
export { beginGame, endGame, isGameOngoing };
