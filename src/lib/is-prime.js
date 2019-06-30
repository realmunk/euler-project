const primes = { 1: false, 2: true, 3: true };

function isPrime(n) {
  if (primes[n] === true || primes[n] === false) {
    return primes[n];
  }

  if (n % 2 === 0) {
    primes[n] = false;
    return false;
  }

  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      primes[n] = false;
      return false;
    }
  }

  return true;
}

module.exports = isPrime;
