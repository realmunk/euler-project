const isPrime = require('./is-prime');

function nrOfExponents(prime, _n) {
  let exponents = 0;
  let n = _n;
  while (n % prime === 0) {
    exponents++;
    n /= prime;
  }

  return exponents;
}

function primeFactorsWithExponents(_n) {
  console.time('main');
  const results = [];
  const N = _n;
  let n = _n;

  for (let p = 2; n >= p; p++) {
    if (isPrime(p) && n % p === 0) {
      const exponents = nrOfExponents(p, N);
      results.push([p, exponents]);
      n /= p;
    }
  }
  console.timeEnd('main');

  return results;
}

module.exports = {
  primeFactorsWithExponents,
};
