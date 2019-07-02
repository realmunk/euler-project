const findDivisors = require("./lib/find-divisors");
const generateTriangleNumbers = require("./lib/generate-triangle-numbers");

module.exports = function eulerTwelve(nrOfDivisors) {
  let searching = true;
  let numbers = [];

  let position = nrOfDivisors; // start index for finding divisor
  const iterateOn = 10000;
  let currentRange = iterateOn;

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
  return null;
};
