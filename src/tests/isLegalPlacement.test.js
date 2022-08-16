import { gameboardFactory } from "../gameboardFactory";
import { isLegalPlacement } from "../isLegalPlacement";

test("isLegalPlacement returns false when illegal placement is tested", () => {
  let testBoard = gameboardFactory();
  testBoard.placeShip(0, 0, 5, "carrier", 0);
  console.table(testBoard.coordinates);
  expect(isLegalPlacement(1, 0, "carrier", 0, testBoard)).toBe(false);
});
