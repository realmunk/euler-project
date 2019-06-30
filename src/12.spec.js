const main = require("./12");

describe("Highly divisible triangular number", () => {
  it("We can see that 28 is the first triangle number to have over five divisors.", () => {
    expect(main(5)).toBe(28);
  });

  it("What is the value of the first triangle number to have over five hundred divisors?", () => {
    expect(main(500)).toBe(76576500);
  });

  it("Should calculate this number quickly to have over five hundred divisors?", () => {
    let startTime = Date.now();
    main(500);

    expect(Date.now() - startTime).toBeLessThanOrEqual(5000);
  });
});
