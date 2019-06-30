let count = 1;
const triangleNumbers = [count];

function generateTriangleNumbers(LIMIT) {
  while (triangleNumbers.length < LIMIT) {
    count++;
    triangleNumbers.push(count + triangleNumbers[triangleNumbers.length - 1]);
  }
  return triangleNumbers;
}

module.exports = generateTriangleNumbers;
