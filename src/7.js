const isPrime = require("./lib/is-prime");

module.exports = function eulerSeven() {
  const primes = [2];
  let i = 3;

  while (primes.length < 10001) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i += 2;
  }

  return primes[10000];
};
