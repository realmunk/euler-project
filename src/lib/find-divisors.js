const { primeFactorsWithExponents } = require('./prime-factor');

function findDivisors(_n) {
  const n = _n;
  const result = primeFactorsWithExponents(n);

  console.time('findDivisors');
  result.map(x => x[1] + 1).reduce((x, y) => x * y, 1);
  console.timeEnd('findDivisors');

  return result;
}

module.exports = findDivisors;

findDivisors(76576500);
