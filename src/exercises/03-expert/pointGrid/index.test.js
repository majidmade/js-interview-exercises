import PointGrid from "./";

// 10x10 PointGrid, with 100 cells
const HEIGHT = 500;
const WIDTH = 500;
const CELL_SIZE = 50;
const LAST_CELL_INDEX = 99;

// test data
const points_index1 = [
  { "x": 57, "y": 47, "name": "Mario Barton" },
  { "x": 64, "y": 20, "name": "Lucy Romero" }
];
const points_index71 = [
  { "x": 92, "y": 397, "name": "Estelle Ingram" }
];
const points_index98 = [
  { "x": 435, "y": 466, "name": "Ian Mills" },
  { "x": 435, "y": 480, "name": "Duane Becker" }
];
const columnPoints_index6 = [
  { "x": 312, "y": 121, "name": "Lydia Fitzgerald" },
  { "x": 328, "y": 375, "name": "Thomas King" },
  { "x": 349, "y": 459, "name": "Noah Walters" }
];
const data = [
  ...points_index1,
  ...points_index71,
  ...points_index98,
  ...columnPoints_index6,
  { "x": 480, "y": 277, "name": "Lucinda Clayton" },
  { "x": 106, "y": 249, "name": "Jay Maldonado" }
];

describe("PointGrid", () => {

  const pointGrid = new PointGrid({ height: HEIGHT, width: WIDTH, cellSize: CELL_SIZE });
  pointGrid.addPoints(data);

  describe("getCellIndex", () => {
    it("should return an integer", () => {
      const cellIndex = pointGrid.getCellIndex(0, 0);
      expect(Number.isInteger(cellIndex)).toBe(true);
    });

    it("should return cell index 1", () => {
      const cellIndex = pointGrid.getCellIndex(CELL_SIZE, 0);
      expect(cellIndex).toBe(1);
    });

    it("should return the last cell index", () => {
      const cellIndex = pointGrid.getCellIndex(WIDTH - 1, HEIGHT - 1);
      expect(cellIndex).toBe(LAST_CELL_INDEX);
    });
  });

  describe("getPoints", () => {
    it("should return the correct points for index 1", () => {
      const { x, y } = points_index1[0]; // get a random point's coords
      const points = pointGrid.getPoints(x, y);
      expect(points).toEqual(points_index1);
    });

    it("should return the correct points for index 71", () => {
      const { x, y } = points_index71[0];
      const points = pointGrid.getPoints(x, y);
      expect(points).toEqual(points_index71);
    });

    it("should return the correct points for index 98", () => {
      const { x, y } = points_index98[0];
      const points = pointGrid.getPoints(x, y);
      expect(points).toEqual(points_index98);
    });
  });

  describe("getColumnPoints", () => {
    it("should return the correct points for column 6", () => {
      const { x, y } = columnPoints_index6[0];
      const points = pointGrid.getPoints(x, y);
      expect(points).toEqual(columnPoints_index6);
    });
  });

});