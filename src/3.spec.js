const eulerThree = require("./3");

describe("Largest prime factor", () => {
  it("What is the largest prime factor of the number 600851475143 ?", () => {
    expect(eulerThree(600851475143)).toEqual(6857);
  });
});
