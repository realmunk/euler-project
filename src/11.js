const { readFile } = require("./lib/filereader");

let grid;

readFile("../assets/11.txt", data => {
  grid = data.split("\n");

  grid = grid.filter(a => a.length);
  grid = grid.map(row => row.split(" ").map(n => parseInt(n)));
  parseHorizontal(grid);
  parseVertical(grid);
  parseDiagonal(grid);
});

function parseHorizontal(grid) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j + 3]) {
        sum = grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
  console.log("H:", max);
}

function parseVertical(grid) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i + 3]) {
        sum = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
  console.log("V:", max);
}

function parseVertical(grid) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i + 3]) {
        sum = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
  console.log("V:", max);
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
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
  console.log("D-R:", max);
  for (let i = grid.length - 1; i > 0; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i - 3] && grid[i - 3][j + 3]) {
        sum =
          grid[i][j] *
          grid[i - 1][j + 1] *
          grid[i - 2][j + 2] *
          grid[i - 3][j + 3];
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
  console.log("D-L:", max);
}
