let currentShip = "carrier";
let orientation = 0;

function setCurrentlyPlacingShip(ship) {
  currentShip = ship;
}

function getCurrentlyPlacingShip() {
  return currentShip;
}

function getCurrentlyPlacingLength() {
  if (currentShip == "carrier") {
    return 5;
  } else if (currentShip == "battleship") {
    return 4;
  } else if (currentShip == "destroyer") {
    return 3;
  } else if (currentShip == "submarine") {
    return 3;
  } else if (currentShip == "patrolboat") {
    return 2;
  }
}

function setCurrentlyPlacingOrientation(num) {
  let orientation = num;
}

function getCurrentlyPlacingOrientation() {
  return orientation;
}
export {
  setCurrentlyPlacingShip,
  getCurrentlyPlacingShip,
  setCurrentlyPlacingOrientation,
  getCurrentlyPlacingOrientation,
  getCurrentlyPlacingLength,
};
