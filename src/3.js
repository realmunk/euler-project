const primeMemo = {};

function isPrime(n) {
  if (n % 2 === 0) {
    primeMemo[n] = false;
    return false;
  }

  if (primeMemo[n] === true) {
    return true;
  } else if (primeMemo[n] === false) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      primeMemo[n] = false;
      return false;
    }
  }

  primeMemo[n] = true;
  return true;
}

function getPrimeFactors(n) {
  const primeFactors = [];

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
}

module.exports = {
  isPrime: isPrime,
  getPrimeFactors: getPrimeFactors
};
