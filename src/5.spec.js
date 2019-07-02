// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const { smallDivisibleNumber } = require("./5");

describe("Euler project - assignment 5", () => {
  it("2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.", () => {
    expect(smallDivisibleNumber(10)).toBe(2520);
  });

  it("What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?", () => {
    expect(smallDivisibleNumber(20)).toBe(232792560);
  });
});
