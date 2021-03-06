const eulerTwelve = require("./12");

describe("Highly divisible triangular number", () => {
  it("We can see that 28 is the first triangle number to have over five divisors.", () => {
    expect(eulerTwelve(5)).toBe(28);
  });

  it("What is the value of the first triangle number to have over five hundred divisors?", () => {
    expect(eulerTwelve(500)).toBe(76576500);
  });
});
