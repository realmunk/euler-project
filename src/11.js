const { readFile } = require("./lib/filereader");

function parseHorizontal(grid) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j + 3]) {
        sum = grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
        if (sum > max) {
          max = sum;
        }
      }
    }
  }
  return max;
}

function parseVertical(grid) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i + 3]) {
        sum = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
        if (sum > max) {
          max = sum;
        }
      }
    }
  }
  return max;
}

function parseDiagonal(grid) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i + 3] && grid[i + 3][j + 3]) {
        sum =
          grid[i][j] *
          grid[i + 1][j + 1] *
          grid[i + 2][j + 2] *
          grid[i + 3][j + 3];
        if (sum > max) {
          max = sum;
        }
      }
    }
  }
  for (let i = grid.length - 1; i > 0; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i - 3] && grid[i - 3][j + 3]) {
        sum =
          grid[i][j] *
          grid[i - 1][j + 1] *
          grid[i - 2][j + 2] *
          grid[i - 3][j + 3];
        if (sum > max) {
          max = sum;
        }
      }
    }
  }
  return max;
}

module.exports = function eulerEleven() {
  return new Promise(resolve => {
    readFile("assets/11.txt", data => {
      let grid = data.split("\n");
      grid = grid.filter(a => a.length);
      grid = grid.map(row => row.split(" ").map(n => parseInt(n, 10)));

      const highestH = parseHorizontal(grid);
      const highestV = parseVertical(grid);
      const highestD = parseDiagonal(grid);
      const max = [highestH, highestV, highestD].reduce(
        (a, b) => (a > b ? a : b),
        0
      );
      resolve(max);
    });
  });
};
