/**
 *
 * Number spiral diagonals
 *
 */

const SPIRAL_LENGTH = 1001;

const spiral = [...Array(SPIRAL_LENGTH * SPIRAL_LENGTH + 1).keys()];

let sum = 1;
let position = 1;
let interval = 2;

while (position + interval < spiral.length) {
  sum += spiral[(position += interval)];
  sum += spiral[(position += interval)];
  sum += spiral[(position += interval)];
  sum += spiral[(position += interval)];
  interval += 2;
}

// D REAL ANSWER:
console.log(sum);
