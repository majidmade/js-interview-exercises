class PointGrid {
  constructor({ height = 500, width = 500, cellSize = 50 }) {
    this.height = height;
    this.width = width;
    this.cellSize = cellSize;
    this.cells = []; // each cell is an array of Points
    /**
     * Given the default height (500px), width (500px), and cellSize (50px),
     * the PointGrid will become a 10x10 grid, and each *SQUARE* cell in the
     * grid has a size of (50px * 50px).
     *
     * The grid will be stored in this.cells, which is an array.
     * Each cell is an array of points.
     *
     *    this.cells grid representation:
     *      [ 0,  1, ..., 10,   // row 0
     *       11, 12, ..., 20,   // row 1
     *       ...                // ...
     *       90, 91, ..., 99 ]  // row 9
     *
     *    this.cells[index] structure:
     *      [{ x: 0, y: 0, name: "Sarah" }, { x: 5, y: 20, name: "John" }]
     */

    // TODO:
    this.numColumns = undefined;  // # of columns in the grid
    this.numRows = undefined;     // # of rows in the grid
    this.numCells = undefined;    // # of cells in the grid (numColumns * numRows)
  }

  /**
   * Add a list of points to the PointGrid. Calls addPoint on each element.
   * @param {Object[]} points
   */
  addPoints(points = []) {
    points.forEach(point => this.addPoint(point));
    console.log("Added points; this.cells: ", this.cells);
  }

  /**
   * Add a point to the PointGrid (this.cells).
   * @param {Object} point
   * @param {number} point.x x-coordinate of the point in the grid
   * @param {number} point.y y-coordinate of the point in the grid
   */
  addPoint(point = {}) {
    const cellIndex = this.getCellIndex(point.x, point.y);

    if (!this.cells[cellIndex]) {
      this.cells[cellIndex] = [];
    }
    this.cells[cellIndex].push(point); // Add point to the PointGrid
  }

  /**
   * Return the index in the grid associated with input (x,y) coordinate.
   * @param {number} x x-coordinate of the point in the grid
   * @param {number} y y-coordinate of the point in the grid
   * @returns {number}
   */
  getCellIndex(x, y) {
    return 0; // TODO:
  }

  /**
   * Return the points from the correct cell given an (x,y) coordinate.
   * @param {number} x x-coordinate of the point in the grid
   * @param {number} y y-coordinate of the point in the grid
   * @returns {Object[]}
   */
  getPoints(x, y) {
    return []; // TODO:
  }

  /**
   * Return all the points from an entire column of cells given an x-coordinate.
   * @param {number} x x-coordinate of the point in the grid
   * @returns {Object[]}
   */
  getColumnOfPoints(x) {
    return []; // TODO:
  }
}

export default PointGrid;