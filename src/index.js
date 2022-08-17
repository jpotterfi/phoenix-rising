import { placeBattleship } from "./computerFns/placeBattleship";
import { placeCarrier } from "./computerFns/placeCarrier";
import { placeDestroyer } from "./computerFns/placeDestroyer";
import { placePatrolboat } from "./computerFns/placePatrolboat";
import { placeSubmarine } from "./computerFns/placeSubmarine";
import { gameboardFactory } from "./gameboardFactory";
import { gameLoop } from "./gameLoop";
import { shipFactory } from "./shipFactory";
import "./style.css";
import { randomAttack } from "./computerFns/randomAttack";
import {
  getCarrierOrientation,
  getCurrentlyPlacingShip,
  setCarrierOrientation,
  setCurrentlyPlacingShip,
  setDestroyerOrientation,
  setPatrolboatOrientation,
  setSubmarineOrientation,
} from "./currentlyPlacingShip";
import { buildHarbor } from "./buildHarbor";

let isSettingUp = true;

// const draggables = document.querySelectorAll(".draggable");

// draggables.forEach((draggable) => {
//   draggable.addEventListener("dragstart", () => {
//     console.log("drag start");
//     draggable.classList.add("dragging");
//   });
//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("dragging");
//   });
// });

// const segmented__carrier = document.getElementById("segmented__carrier");
// segmented__carrier.style.flexDirection = "row";
// segmented__carrier.addEventListener("dblclick", function () {
//   if (segmented__carrier.style.flexDirection == "row") {
//     segmented__carrier.style.flexDirection = "column";
//     setCarrierOrientation(1);
//     console.log(getCarrierOrientation());
//   } else if (segmented__carrier.style.flexDirection == "column") {
//     segmented__carrier.style.flexDirection = "row";
//     setCarrierOrientation(0);
//     console.log(getCarrierOrientation());
//   }
// });
// segmented__carrier.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("carrier");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__battleship = document.getElementById("segmented__battleship");
// segmented__battleship.style.flexDirection = "row";
// segmented__battleship.addEventListener("dblclick", function () {
//   if (segmented__battleship.style.flexDirection == "row") {
//     segmented__battleship.style.flexDirection = "column";
//     setCarrierOrientation(1);
//     console.log(getCarrierOrientation());
//   } else if (segmented__battleship.style.flexDirection == "column") {
//     segmented__battleship.style.flexDirection = "row";
//     setCarrierOrientation(0);
//     console.log(getCarrierOrientation());
//   }
// });
// segmented__battleship.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("battleship");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__destroyer = document.getElementById("segmented__destroyer");
// segmented__destroyer.style.flexDirection = "row";
// segmented__destroyer.addEventListener("dblclick", function () {
//   if (segmented__destroyer.style.flexDirection == "row") {
//     segmented__destroyer.style.flexDirection = "column";
//     setDestroyerOrientation(1);
//   } else if (segmented__destroyer.style.flexDirection == "column") {
//     segmented__destroyer.style.flexDirection = "row";
//     setDestroyerOrientation(0);
//   }
// });
// segmented__destroyer.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("destroyer");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__submarine = document.getElementById("segmented__submarine");
// segmented__submarine.style.flexDirection = "row";
// segmented__submarine.addEventListener("dblclick", function () {
//   if (segmented__submarine.style.flexDirection == "row") {
//     segmented__submarine.style.flexDirection = "column";
//     setSubmarineOrientation(1);
//   } else if (segmented__submarine.style.flexDirection == "column") {
//     segmented__submarine.style.flexDirection = "row";
//     setSubmarineOrientation(0);
//   }
// });
// segmented__submarine.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("submarine");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__patrolboat = document.getElementById("segmented__patrolboat");
// segmented__patrolboat.style.flexDirection = "row";
// segmented__patrolboat.addEventListener("dblclick", function () {
//   if (segmented__patrolboat.style.flexDirection == "row") {
//     segmented__patrolboat.style.flexDirection = "column";
//     setPatrolboatOrientation(1);
//   } else if (segmented__patrolboat.style.flexDirection == "column") {
//     segmented__patrolboat.style.flexDirection = "row";
//     setPatrolboatOrientation(0);
//   }
// });
// segmented__patrolboat.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("patrolboat");
//   console.log(getCurrentlyPlacingShip());
// });
// carrier.addEventListener("dblclick", function () {
//   // carrier.style.transform = "rotate(90deg)";
// });

//first value is the row, second value is the column

// let gameboard = gameboardFactory();
// console.table(gameboard);
// gameboard.placeShip(0, 0, 5, "destroyer");
// gameboard.receiveAttack(0, 0);
// gameboard.receiveAttack(0, 1);
// gameboard.receiveAttack(0, 2);
// gameboard.receiveAttack(0, 3);
// gameboard.receiveAttack(0, 4);

//first parameter is the index (of the array) within coordinate array
//second parameter is the index (of the value) within the index (of the array)
buildHarbor();
gameLoop();

// let board = gameboardFactory();

// for (let i = 0; i < 10; i++) {
//   randomAttack(board);
// }
// console.table(board.coordinates);

// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);

// gameLoop();
// let board = gameboardFactory();
// board.placeShip(0, 0, 5, "destroyer");
// board.receiveAttack(0, 0);
// board.receiveAttack(0, 1);
// board.receiveAttack(0, 2);
// board.receiveAttack(0, 3);
// board.receiveAttack(0, 4);
// console.log(board.isOver());
