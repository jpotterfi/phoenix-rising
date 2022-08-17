let currentShip = "carrier";
let orientation = 0;
let carrierOrientation = 0;
let battleshipOrientation = 0;
let destroyerOrientation = 0;
let submarineOrientation = 0;
let patrolboatOrientation = 0;

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

function setCarrierOrientation(num) {
  carrierOrientation = num;
}

function getCarrierOrientation() {
  return carrierOrientation;
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
  setCurrentlyPlacingOrientation,
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
};
