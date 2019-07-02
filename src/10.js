const isPrime = require("./lib/is-prime");

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

module.exports = function eulerTen() {
  const primes = [2];
  console.time("primes");

  for (let i = 3; i < 2000000; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  console.timeEnd("primes");

  console.log(
    primes.reduce((a, n) => {
      return a + n;
    })
  );
};
