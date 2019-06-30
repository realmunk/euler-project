const { primeFactorsWithExponents } = require("./prime-factor");

function findDivisors(n) {
  let result = primeFactorsWithExponents(n);

  console.time("findDivisors");
  result
    .map(n => {
      return n[1] + 1;
    })
    .reduce((x, y) => x * y, 1);
  console.timeEnd("findDivisors");

  return result;
}

module.exports = findDivisors;

findDivisors(76576500);
