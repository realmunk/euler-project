const {
  sumSquaresOfNaturalNumbers,
  sumOfNaturalNumbersSquare
} = require("./6.js");

describe("Euler Project Assignment 6", () => {
  it("The sum of all squares of the first natural numbers to be ...", () => {
    expect(sumSquaresOfNaturalNumbers(10)).toBe(385);
  });

  it("The square of the sum of the first ten natural numbers is ...", () => {
    expect(sumOfNaturalNumbersSquare(10)).toBe(3025);
  });

  it("Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is ...", () => {
    expect(sumOfNaturalNumbersSquare(10) - sumSquaresOfNaturalNumbers(10)).toBe(
      2640
    );
  });

  it("Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.", () => {
    expect(
      sumOfNaturalNumbersSquare(100) - sumSquaresOfNaturalNumbers(100)
    ).toBe(25164150);
  });
});
