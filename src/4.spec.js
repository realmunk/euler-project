const eulerFour = require("./4");

describe("Largest palindrome product", () => {
  it("Find the largest palindrome made from the product of two 3-digit numbers.", () => {
    expect(eulerFour()).toBe(906609);
  });
});
