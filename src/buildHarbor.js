import {
  getCarrierOrientation,
  getCurrentlyPlacingShip,
  setBattleshipOrientation,
  getBattleshipOrientation,
  setCarrierOrientation,
  setCurrentlyPlacingShip,
  setDestroyerOrientation,
  setPatrolboatOrientation,
  setSubmarineOrientation,
} from "./currentlyPlacingShip";

function buildHarbor() {
  //element instantiation
  let content = document.getElementById("content");
  let harbor = document.createElement("div");
  harbor.id = "harbor";
  let boatRow1 = document.createElement("div");
  boatRow1.className = "boatRow";
  let boatRow2 = document.createElement("div");
  boatRow2.className = "boatRow";
  let boatBox__carrier = document.createElement("div");
  boatBox__carrier.id = "boatBox__carrier";
  let segmented__carrier = document.createElement("div");
  segmented__carrier.id = "segmented__carrier";
  segmented__carrier.draggable = "true";
  segmented__carrier.title = "Carrier";
  let boatBox__battleship = document.createElement("div");
  boatBox__battleship.id = "boatBox__battleship";
  let segmented__battleship = document.createElement("div");
  segmented__battleship.id = "segmented__battleship";
  segmented__battleship.draggable = "true";
  segmented__battleship.title = "Battleship";
  let boatBox__destroyer = document.createElement("div");
  boatBox__destroyer.id = "boatBox__destroyer";
  let segmented__destroyer = document.createElement("div");
  segmented__destroyer.id = "segmented__destroyer";
  segmented__destroyer.draggable = "true";
  segmented__destroyer.title = "Destroyer";
  let boatBox__submarine = document.createElement("div");
  boatBox__submarine.id = "boatBox__submarine";
  let segmented__submarine = document.createElement("div");
  segmented__submarine.id = "segmented__submarine";
  segmented__submarine.draggable = "true";
  segmented__submarine.title = "Submarine";
  let boatBox__patrolboat = document.createElement("div");
  boatBox__patrolboat.id = "boatBox__patrolboat";
  let segmented__patrolboat = document.createElement("div");
  segmented__patrolboat.id = "segmented__patrolboat";
  segmented__patrolboat.draggable = "true";
  segmented__patrolboat.title = "Patrol Boat";
  //element instantiation
  //draggables
  const draggables = document.querySelectorAll(".draggable");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });
  //draggables
  //event listeners
  segmented__carrier.style.flexDirection = "row";
  segmented__carrier.addEventListener("dblclick", function () {
    if (segmented__carrier.style.flexDirection == "row") {
      segmented__carrier.style.flexDirection = "column";
      setCarrierOrientation(1);
    } else if (segmented__carrier.style.flexDirection == "column") {
      segmented__carrier.style.flexDirection = "row";
      setCarrierOrientation(0);
    }
  });
  segmented__carrier.addEventListener("dragstart", function () {
    setCurrentlyPlacingShip("carrier");
  });
  segmented__battleship.style.flexDirection = "row";
  segmented__battleship.addEventListener("dblclick", function () {
    if (segmented__battleship.style.flexDirection == "row") {
      segmented__battleship.style.flexDirection = "column";
      setBattleshipOrientation(1);
    } else if (segmented__battleship.style.flexDirection == "column") {
      segmented__battleship.style.flexDirection = "row";
      setBattleshipOrientation(0);
    }
  });
  segmented__battleship.addEventListener("dragstart", function () {
    setCurrentlyPlacingShip("battleship");
  });

  segmented__destroyer.style.flexDirection = "row";
  segmented__destroyer.addEventListener("dblclick", function () {
    if (segmented__destroyer.style.flexDirection == "row") {
      segmented__destroyer.style.flexDirection = "column";
      setDestroyerOrientation(1);
    } else if (segmented__destroyer.style.flexDirection == "column") {
      segmented__destroyer.style.flexDirection = "row";
      setDestroyerOrientation(0);
    }
  });
  segmented__destroyer.addEventListener("dragstart", function () {
    setCurrentlyPlacingShip("destroyer");
  });

  segmented__submarine.style.flexDirection = "row";
  segmented__submarine.addEventListener("dblclick", function () {
    if (segmented__submarine.style.flexDirection == "row") {
      segmented__submarine.style.flexDirection = "column";
      setSubmarineOrientation(1);
    } else if (segmented__submarine.style.flexDirection == "column") {
      segmented__submarine.style.flexDirection = "row";
      setSubmarineOrientation(0);
    }
  });
  segmented__submarine.addEventListener("dragstart", function () {
    setCurrentlyPlacingShip("submarine");
  });

  segmented__patrolboat.style.flexDirection = "row";
  segmented__patrolboat.addEventListener("dblclick", function () {
    if (segmented__patrolboat.style.flexDirection == "row") {
      segmented__patrolboat.style.flexDirection = "column";
      setPatrolboatOrientation(1);
    } else if (segmented__patrolboat.style.flexDirection == "column") {
      segmented__patrolboat.style.flexDirection = "row";
      setPatrolboatOrientation(0);
    }
  });
  segmented__patrolboat.addEventListener("dragstart", function () {
    setCurrentlyPlacingShip("patrolboat");
  });
  //event listeners

  for (let i = 0; i < 5; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__carrier.appendChild(segment);
  }
  boatBox__carrier.appendChild(segmented__carrier);
  //
  for (let i = 0; i < 4; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__battleship.appendChild(segment);
  }
  boatBox__battleship.appendChild(segmented__battleship);
  //
  boatRow1.appendChild(boatBox__carrier);
  boatRow1.appendChild(boatBox__battleship);
  //
  harbor.appendChild(boatRow1);
  //
  for (let i = 0; i < 3; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__destroyer.appendChild(segment);
  }
  boatBox__destroyer.appendChild(segmented__destroyer);
  //
  for (let i = 0; i < 3; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__submarine.appendChild(segment);
  }
  boatBox__submarine.appendChild(segmented__submarine);
  //
  for (let i = 0; i < 2; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__patrolboat.appendChild(segment);
  }
  boatBox__patrolboat.appendChild(segmented__patrolboat);
  //
  boatRow2.appendChild(boatBox__destroyer);
  boatRow2.appendChild(boatBox__submarine);
  boatRow2.appendChild(boatBox__patrolboat);
  //
  harbor.appendChild(boatRow2);
  content.appendChild(harbor);
}
export { buildHarbor };
