let currentShip = "carrier";
let orientation = 0;
let carrierOrientation = 0;
let battleshipOrientation = 0;
let destroyerOrientation = 0;
let submarineOrientation = 0;
let patrolboatOrientation = 0;
let placeCount = 0;
let isAllPlaced = false;

function resetAll() {
  carrierOrientation = 0;
  battleshipOrientation = 0;
  destroyerOrientation = 0;
  submarineOrientation = 0;
  patrolboatOrientation = 0;
  placeCount = 0;
  isAllPlaced = false;
}

function increasePlaceCount() {
  placeCount++;
}

function getIsAllPlaced() {
  if (placeCount == 5) {
    isAllPlaced = true;
    return isAllPlaced;
  }
}

function resetPlacement() {
  placeCount = 0;
  isAllPlaced = false;
}

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

function getCurrentlyPlacingOrientation(ship) {
  if (ship == "carrier") {
    return carrierOrientation;
  }
  if (ship == "battleship") {
    return battleshipOrientation;
  }
  if (ship == "destroyer") {
    return destroyerOrientation;
  }
  if (ship == "submarine") {
    return submarineOrientation;
  }
  if (ship == "patrolboat") {
    return patrolboatOrientation;
  }
}

function getCarrierOrientation() {
  return carrierOrientation;
}

function setCarrierOrientation(num) {
  carrierOrientation = num;
}

function setBattleshipOrientation(num) {
  battleshipOrientation = num;
}

function getBattleshipOrientation() {
  return battleshipOrientation;
}

function setDestroyerOrientation(num) {
  destroyerOrientation = num;
}

function getDestroyerOrientation() {
  return destroyerOrientation;
}

function setSubmarineOrientation(num) {
  submarineOrientation = num;
}

function getSubmarineOrientation() {
  return submarineOrientation;
}

function setPatrolboatOrientation(num) {
  patrolboatOrientation = num;
}

function getPatrolboatOrientation() {
  return patrolboatOrientation;
}

export {
  setCurrentlyPlacingShip,
  getCurrentlyPlacingShip,
  getCurrentlyPlacingOrientation,
  getCurrentlyPlacingLength,
  setCarrierOrientation,
  getCarrierOrientation,
  setBattleshipOrientation,
  getBattleshipOrientation,
  setDestroyerOrientation,
  getDestroyerOrientation,
  setSubmarineOrientation,
  getSubmarineOrientation,
  setPatrolboatOrientation,
  getPatrolboatOrientation,
  increasePlaceCount,
  getIsAllPlaced,
  resetPlacement,
  resetAll,
};
