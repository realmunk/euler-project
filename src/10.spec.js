const eulerTen = require("./10");

describe("Summation of primes", () => {
  it("Find the sum of all the primes below two million.", () => {
    expect(eulerTen()).toEqual(142913828922);
  });
});
