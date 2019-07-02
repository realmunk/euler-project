const CONSTRAINT = 1000;
const primes = {};

function generateAndCheckPrime(n, a, b) {
  const x = Math.pow(n, 2) + n * a + b;
  if (x <= 1) {
    return true;
  } else if (primes[x]) {
    return primes[x];
  } else {
    for (let i = 2; i <= Math.round(Math.sqrt(x)); i++) {
      if (x % i === 0) {
        primes[x] = false;
        return false;
      }
    }
    primes[x] = true;
    return true;
  }
}

function isPrime(x) {}

function generatePrimes() {
  let max = 0;
  let result = 0;
  let n = 0;
  for (let a = -999; a < CONSTRAINT; a++) {
    n = 0;
    for (let b = -1000; b <= CONSTRAINT; b++) {
      n = 0;
      while (generateAndCheckPrime(n, a, b)) {
        console.log(n);
        n++;
      }
      break;

      if (n > max) {
        console.log(n);
        max = n;
        result = a * b;
        console.log(result);
      }
    }
  }
  return result;
}

function findMaximumNrOfPrimes() {
  const result = generatePrimes();
  console.log(result);
}

findMaximumNrOfPrimes();
