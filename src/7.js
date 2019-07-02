const { isPrime } = require("./3.js");

let primes = [2];
let i = 3;

while (primes.length < 10001) {
  if (isPrime(i)) {
    primes.push(i);
  }
  i += 2;
}

console.log(primes[10000]);
