const findDivisors = require("./lib/find-divisors");
const generateTriangleNumbers = require("./lib/generate-triangle-numbers");

function main(nrOfDivisors) {
  let searching = true;
  let numbers = [];

  let position = nrOfDivisors; // start index for finding divisor
  let iterateOn = 10000;
  let currentRange = iterateOn;

  console.log("position", position);
  console.log("iterateOn", iterateOn);
  console.log("currentRange", currentRange);

  while (searching) {
    numbers = generateTriangleNumbers(currentRange);

    for (let i = position; i < numbers.length; i++) {
      if (findDivisors(numbers[i]) > nrOfDivisors) {
        searching = false;
        return numbers[i];
      }
    }

    position = currentRange;
    currentRange += iterateOn;
  }
}

module.exports = main;

console.time("main");
console.log(main(500));
console.timeEnd("main");
