const { readFile } = require("./lib/filereader");
var bigInt = require("big-integer");

let grid = [];

readFile("../assets/13.txt", data => {
  grid = data.split("\n");

  grid = grid.map(x => bigInt(x));

  let result = grid.reduce((x, y) => x.add(y));
  console.log(result);
});
