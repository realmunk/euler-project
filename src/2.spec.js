let { generateFibonacciSequence, sumOfEvenNumbers } = require("./2");

describe("fibonacci numbers", () => {
  it("should generate fibonacci numbers", () => {
    const fibonacci = generateFibonacciSequence(100);

    expect(fibonacci).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });

  it("should sum even fibonacci numbers", () => {
    const fibonacci = generateFibonacciSequence(100);
    let sum = sumOfEvenNumbers(fibonacci);

    expect(sum).toEqual(2 + 8 + 34);
  });

  it("should sum even fibonacci numbers up to 4000000", () => {
    const fibonacci = generateFibonacciSequence(4000000);
    let sum = sumOfEvenNumbers(fibonacci);

    expect(sum).toEqual(4613732);
  });
});
