const isPrime = require('./is-prime');

describe('isPrime Number Validator', () => {
  it('should validate low primes as prime', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(35)).toBe(false);
  });

  it('should be able to validate high numbers quickly', () => {
    expect(isPrime(17377)).toBe(true);
    expect(isPrime(1017437)).toBe(true);
    expect(isPrime(10101527)).toBe(true);
    expect(isPrime(10101528)).toBe(false);
  });
});
