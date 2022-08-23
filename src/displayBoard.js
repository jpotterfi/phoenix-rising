import { randomAttack } from "./computerFns/randomAttack";
import {
  getCurrentlyPlacingLength,
  getCurrentlyPlacingOrientation,
  getCurrentlyPlacingShip,
  getIsAllPlaced,
  increasePlaceCount,
  resetAll,
} from "./currentlyPlacingShip";
import { gameboardFactory } from "./gameboardFactory";
import { getDifficulty } from "./gameDifficulty";
import { isLegalPlacement } from "./isLegalPlacement";
import { buildHarbor } from "./buildHarbor";
import { gameLoop } from "./gameLoop";

function displayBoard(player, computer) {
  displayPlayerBoard(player);
  function displayPlayerBoard(player) {
    let isSettingUp = true;
    createPlayerBoard();
    updatePlayerBoard(player);

    function createPlayerBoard() {
      let board = document.getElementById("boardOne");
      for (let i = 0; i < 10; i++) {
        let row = document.createElement("div");
        row.id = "row" + i;
        row.className = "row";
        for (let j = 0; j < 10; j++) {
          let box = document.createElement("div");
          box.id = "playerbox" + i + "" + j;
          box.className = "box";
          box.style.backgroundColor = "white";
          //dragging into boxes display
          box.addEventListener("dragover", function (event) {
            event.preventDefault();
            let boxArr = [i, j];
            let boxRow = boxArr[0];
            let boxColumn = boxArr[1];

            if (typeof player.coordinates[i][j] !== "object") {
              if (
                isLegalPlacement(
                  boxRow,
                  boxColumn,
                  getCurrentlyPlacingShip(),
                  getCurrentlyPlacingOrientation(getCurrentlyPlacingShip()),
                  player
                )
              ) {
                box.style.backgroundColor = "#90EE90"; //make green if legal
              } else if (
                !isLegalPlacement(
                  boxRow,
                  boxColumn,
                  getCurrentlyPlacingShip(),
                  getCurrentlyPlacingOrientation(getCurrentlyPlacingShip()),
                  player
                )
              ) {
                box.style.backgroundColor = "#ffcccb"; //make red is illegal
              }
            }
          });
          //dragging away from boxes display
          box.addEventListener("dragleave", function () {
            if (typeof player.coordinates[i][j] !== "object") {
              box.style.backgroundColor = "white";
            }
          });
          //dropping into boxes display
          box.addEventListener("drop", function () {
            let boxArr = [i, j];
            let boxRow = boxArr[0];
            let boxColumn = boxArr[1];
            if (
              isLegalPlacement(
                boxRow,
                boxColumn,
                getCurrentlyPlacingShip(),
                getCurrentlyPlacingOrientation(getCurrentlyPlacingShip()),
                player
              )
            ) {
              player.placeShip(
                boxRow,
                boxColumn,
                getCurrentlyPlacingLength(),
                getCurrentlyPlacingShip(),
                getCurrentlyPlacingOrientation(getCurrentlyPlacingShip())
              );
              let deleteShip = document.getElementById(
                "segmented__" + getCurrentlyPlacingShip()
              );
              deleteShip.remove();
              increasePlaceCount();
              if (getIsAllPlaced()) {
                //if everything is placed
                console.log("delete harbor");
                let harbor = document.getElementById("harbor");
                while (harbor.firstChild) {
                  harbor.removeChild(harbor.firstChild);
                }
                const allSet = document.createElement("button");
                allSet.innerText = "All Set?";
                allSet.id = "allSet";
                allSet.addEventListener("click", function () {
                  harbor.remove();
                  displayComputerBoard(computer);
                });
                const replaceShips = document.createElement("button");
                replaceShips.innerText = "Replace Ships";
                replaceShips.id = "replaceShips";
                replaceShips.addEventListener("click", function () {
                  harbor.remove();
                  while (board.firstChild) {
                    board.removeChild(board.firstChild);
                  }
                  buildHarbor();
                  resetAll();
                  gameLoop();
                });
                harbor.appendChild(allSet);
                harbor.appendChild(replaceShips);
              }
              updatePlayerBoard(player);
            }
          });

          row.appendChild(box);
        }
        board.appendChild(row);
      }
    }
    function clearPlayerDisplay() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let clear = document.getElementById("playerbox" + i + "" + j);
          clear.style.backgroundColor = "white";
          clear.innerText = "";
        }
      }
    }

    function updatePlayerBoard(player) {
      let playerBoard = player;
      console.table(playerBoard.coordinates);
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (typeof playerBoard.coordinates[i][j] === "object") {
            if (playerBoard.coordinates[i][j].name == "destroyer") {
              let destroyer = document.getElementById("playerbox" + i + "" + j);
              destroyer.style.backgroundColor = "blue";
              destroyer.innerText = "d";
              if (
                playerBoard.coordinates[i][j].shipLocation[
                  JSON.stringify([i, j])
                ] == true
              ) {
                destroyer.style.backgroundColor = "red";
              }
            } else if (playerBoard.coordinates[i][j].name == "submarine") {
              let submarine = document.getElementById("playerbox" + i + "" + j);
              submarine.style.backgroundColor = "green";
              submarine.innerText = "s";
              if (
                playerBoard.coordinates[i][j].shipLocation[
                  JSON.stringify([i, j])
                ] == true
              ) {
                submarine.style.backgroundColor = "red";
              }
            } else if (playerBoard.coordinates[i][j].name == "carrier") {
              let carrier = document.getElementById("playerbox" + i + "" + j);
              carrier.style.backgroundColor = "grey";
              carrier.innerText = "c";
              if (
                playerBoard.coordinates[i][j].shipLocation[
                  JSON.stringify([i, j])
                ] == true
              ) {
                carrier.style.backgroundColor = "red";
              }
            } else if (playerBoard.coordinates[i][j].name == "battleship") {
              let battleship = document.getElementById(
                "playerbox" + i + "" + j
              );
              battleship.style.backgroundColor = "orange";
              battleship.innerText = "b";
              if (
                playerBoard.coordinates[i][j].shipLocation[
                  JSON.stringify([i, j])
                ] == true
              ) {
                battleship.style.backgroundColor = "red";
              }
            } else if (playerBoard.coordinates[i][j].name == "patrolboat") {
              let patrolboat = document.getElementById(
                "playerbox" + i + "" + j
              );
              patrolboat.style.backgroundColor = "purple";
              patrolboat.innerText = "p";
              if (
                playerBoard.coordinates[i][j].shipLocation[
                  JSON.stringify([i, j])
                ] == true
              ) {
                patrolboat.style.backgroundColor = "red";
              }
            }
          } else if (playerBoard.coordinates[i][j] == "miss") {
            let miss = document.getElementById("playerbox" + i + "" + j);
            miss.innerText = "x";
          }
        }
      }
    }
  }
  function displayComputerBoard(computer) {
    createComputerBoard();
    function createComputerBoard() {
      let board = document.getElementById("boardTwo");
      for (let i = 0; i < 10; i++) {
        let row = document.createElement("div");
        row.id = "row" + i;
        row.className = "row";
        for (let j = 0; j < 10; j++) {
          let box = document.createElement("div");
          box.id = JSON.stringify([i, j]);
          box.className = "box";
          box.style.backgroundColor = "white";
          box.addEventListener("click", function () {
            let arr = JSON.parse(box.id);
            let arrRow = arr[0];
            let arrColumn = arr[1];
            //turn id into coordinates
            let computerBoard = computer;
            if (computerBoard.isOver() != true) {
              computerBoard.receiveAttack(arrRow, arrColumn);
              updateComputerBoard(computer);
              if (getDifficulty() == "easy") {
                if (playerBoard.isOver() != true) {
                  let playerBoard = player;
                  randomAttack(playerBoard);
                  updatePlayerBoard(player);
                }
              }
            }
          });
          row.appendChild(box);
        }
        board.appendChild(row);
      }
    }
    function updateComputerBoard(computer) {
      let computerBoard = computer;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (typeof computerBoard.coordinates[i][j] === "object") {
            if (
              computerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              let hitBox = document.getElementById(JSON.stringify([i, j]));
              hitBox.style.backgroundColor = "red";
            }
          } else if (computerBoard.coordinates[i][j] == "miss") {
            let missBox = document.getElementById(JSON.stringify([i, j]));
            missBox.style.backgroundColor = "#ADD8E6";
          }
        }
      }
    }
  }
}
export { displayBoard };
