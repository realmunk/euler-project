const bigInt = require("big-integer");
const { readFile } = require("./lib/filereader");

module.exports = function eulerThirteen() {
  return new Promise(resolve => {
    readFile("assets/13.txt", data => {
      let grid = [];
      grid = data.split("\n");

      grid = grid.map(x => bigInt(x));

      const result = grid.reduce((x, y) => x.add(y));
      return resolve(parseInt(result.toString().substr(0, 10), 10));
    });
  });
};
