const isPrime = require("./is-prime");

module.exports = function getPrimeFactors(_n) {
  const primeFactors = [];
  let n = _n;

  console.time("primeFactors");
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      if (n % i === 0) {
        primeFactors.push(i);
        n = Math.floor(n / i);
        console.log(i, n);
        if (n <= 1) {
          break;
        }
      }
    }
    i += 2;
  }

  console.timeEnd("primeFactors");
  return primeFactors;
};
