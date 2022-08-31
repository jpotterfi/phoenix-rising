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
import { getDifficulty, setDifficulty } from "./gameDifficulty";
import { isLegalPlacement } from "./isLegalPlacement";
import { buildHarbor } from "./buildHarbor";
import { gameLoop } from "./gameLoop";
import { shipHunt } from "./computerFns/shipHunt";
import { buildButtonBox } from "./buildButtonBox";
import { solveMisses } from "./solveMisses";
import { isLegalMove } from "./isLegalMove";

import Icon from "./icons/target.svg";

const target = new Image();
target.src = Icon;

function displayBoard(player, computer) {
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
              buildButtonBox();

              console.log("all placed");

              let harbor = document.getElementById("harbor");
              harbor.remove();

              const commander = document.createElement("button");
              commander.innerHTML =
                "Commander <br /><br /> (A.I will fire randomly)";
              commander.id = "commander";
              commander.addEventListener("click", function () {
                let buttonBox = document.getElementById("buttonBox");
                harbor.remove();
                buttonBox.remove();
                createComputerBoard();
              });
              const admiral = document.createElement("button");
              admiral.innerHTML =
                "Fleet Admiral <br /><br /> (A.I will hunt ships on hit)";
              admiral.id = "admiral";
              admiral.addEventListener("click", function () {
                let buttonBox = document.getElementById("buttonBox");
                let instructions = document.getElementById("instructions");
                let header = document.getElementById("header");
                harbor.remove();
                buttonBox.remove();
                instructions.innerText = "";
                header.innerText = "";
                // while (buttonBox.firstChild) {
                //   buttonBox.removeChild(buttonBox.firstChild);
                // }
                setDifficulty("hard");
                createComputerBoard();
              });
              const replaceShips = document.createElement("button");
              replaceShips.innerText = "I wish to reassign my ships!";
              replaceShips.id = "replaceShips";
              replaceShips.addEventListener("click", function () {
                let buttonBox = document.getElementById("buttonBox");
                harbor.remove();
                buttonBox.remove();
                let boardOne = document.getElementById("boardOne");
                while (boardOne.firstChild) {
                  boardOne.removeChild(boardOne.firstChild);
                }
                buildHarbor();
                resetAll();
                gameLoop();
              });
              let buttonBoxTop = document.getElementById("buttonBoxTop");
              while (buttonBoxTop.firstChild) {
                buttonBoxTop.removeChild(buttonBoxTop.firstChild);
              }
              let buttonBoxBottom = document.getElementById("buttonBoxBottom");
              while (buttonBoxBottom.firstChild) {
                buttonBoxBottom.removeChild(buttonBoxBottom.firstChild);
              }
              buttonBoxTop.appendChild(commander);
              buttonBoxTop.appendChild(admiral);
              buttonBoxBottom.appendChild(replaceShips);
            }
            updatePlayerBoard(player);
          } else {
            box.style.backgroundColor = "white";
          }
        });

        row.appendChild(box);
      }
      board.appendChild(row);
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
            destroyer.style.backgroundColor = "#1d3557";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              destroyer.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "submarine") {
            let submarine = document.getElementById("playerbox" + i + "" + j);
            submarine.style.backgroundColor = "#8338ec";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              submarine.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "carrier") {
            let carrier = document.getElementById("playerbox" + i + "" + j);
            carrier.style.backgroundColor = "#ffbe0b";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              carrier.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "battleship") {
            let battleship = document.getElementById("playerbox" + i + "" + j);
            battleship.style.backgroundColor = "#bc6c25";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              battleship.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "patrolboat") {
            let patrolboat = document.getElementById("playerbox" + i + "" + j);
            patrolboat.style.backgroundColor = "#8ac926";

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
          miss.style.backgroundColor = "#ADD8E6";
        }
      }
    }
  }

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
          if (
            computer.isOver() != true &&
            isLegalMove(computer, arrRow, arrColumn)
          ) {
            computer.receiveAttack(arrRow, arrColumn);
            if (typeof computer.coordinates[arrRow][arrColumn] === "object") {
              if (computer.coordinates[arrRow][arrColumn].isSunk()) {
                console.log("is sunk!");
                solveMisses(computer, arrRow, arrColumn);
                if (computer.isOver()) {
                  let left = document.getElementById("left");
                  let header = document.getElementById("header");
                  header.innerText = "Captain, you've won!";
                  let playAgain = document.createElement("button");
                  playAgain.id = "playAgain";
                  playAgain.innerText = "Play Again?";
                  playAgain.addEventListener("click", function () {
                    let boardOne = document.getElementById("boardOne");
                    while (boardOne.firstChild) {
                      boardOne.removeChild(boardOne.firstChild);
                    }
                    let boardTwo = document.getElementById("boardTwo");
                    while (boardTwo.firstChild) {
                      boardTwo.removeChild(boardTwo.firstChild);
                    }
                    playAgain.remove();
                    header.innerHTML =
                      "You know the drill, Captain. Good luck!";
                    buildHarbor();
                    resetAll();
                    gameLoop();
                  });
                  left.appendChild(playAgain);
                }
              }
            }
            updateComputerBoard(computer);
            if (getDifficulty() == "easy") {
              if (player.isOver() != true && computer.isOver() != true) {
                randomAttack(player);
                updatePlayerBoard(player);
                if (player.isOver()) {
                  let left = document.getElementById("left");
                  let header = document.getElementById("header");
                  header.innerText =
                    "Captain, we've lost the battle, but not the war!";
                  let playAgain = document.createElement("button");
                  playAgain.id = "playAgain";
                  playAgain.innerText = "Play Again?";
                  playAgain.addEventListener("click", function () {
                    let boardOne = document.getElementById("boardOne");
                    while (boardOne.firstChild) {
                      boardOne.removeChild(boardOne.firstChild);
                    }
                    let boardTwo = document.getElementById("boardTwo");
                    while (boardTwo.firstChild) {
                      boardTwo.removeChild(boardTwo.firstChild);
                    }
                    playAgain.remove();
                    header.innerHTML =
                      "You know the drill, Captain. Good luck!";
                    buildHarbor();
                    resetAll();
                    gameLoop();
                  });
                  left.appendChild(playAgain);
                }
              }
            } else if (getDifficulty() == "hard") {
              if (player.isOver() != true && computer.isOver() != true) {
                shipHunt(player);
                updatePlayerBoard(player);
                if (player.isOver()) {
                  let left = document.getElementById("left");
                  let header = document.getElementById("header");
                  header.innerText =
                    "Captain, we've lost the battle, but not the war!";
                  let playAgain = document.createElement("button");
                  playAgain.id = "playAgain";
                  playAgain.innerText = "Play Again?";
                  playAgain.addEventListener("click", function () {
                    let boardOne = document.getElementById("boardOne");
                    while (boardOne.firstChild) {
                      boardOne.removeChild(boardOne.firstChild);
                    }
                    let boardTwo = document.getElementById("boardTwo");
                    while (boardTwo.firstChild) {
                      boardTwo.removeChild(boardTwo.firstChild);
                    }
                    playAgain.remove();
                    header.innerHTML =
                      "You know the drill, Captain. Good luck!";
                    buildHarbor();
                    resetAll();
                    gameLoop();
                  });
                  left.appendChild(playAgain);
                }
              }
            }
          }
        });
        box.addEventListener("mouseover", function () {
          let arr = JSON.parse(box.id);
          let arrRow = arr[0];
          let arrColumn = arr[1];
          if (
            computer.isOver() != true &&
            isLegalMove(computer, arrRow, arrColumn)
          ) {
            box.style.backgroundImage = "url(" + target.src + ")";
            console.log("mousing over");
          }
        });
        box.addEventListener("mouseout", function () {
          box.style.backgroundImage = "none";
        });
        box.addEventListener("click", function () {
          box.style.backgroundImage = "none";
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
export { displayBoard };
