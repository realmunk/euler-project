const { isPrime, getPrimeFactors } = require("./3");

describe("prime checker", () => {
  it("should be able to check if a number is prime", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);

    expect(isPrime(11)).toBe(true);
  });

  it("should be able to calculate the factors of a prime", () => {
    expect(getPrimeFactors(13195)).toEqual([5, 7, 13, 29]);
    expect(getPrimeFactors(600851475143)).toEqual([71, 839, 1471, 6857]);
  });
});
