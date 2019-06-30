const isPrime = require("./is-prime");

function nrOfExponents(prime, n) {
  let exponents = 0;
  while (n % prime === 0) {
    exponents++;
    n = n / prime;
  }

  return exponents;
}

function primeFactorsWithExponents(n) {
  console.time("main");
  let results = [];
  const N = n;

  for (let p = 2; n >= p; p++) {
    if (isPrime(p) && n % p === 0) {
      let exponents = nrOfExponents(p, N);
      results.push([p, exponents]);
      n = n / p;
    }
  }
  console.timeEnd("main");

  return results;
}

module.exports = {
  primeFactorsWithExponents
};
